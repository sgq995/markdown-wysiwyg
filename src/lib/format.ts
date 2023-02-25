export type Format = keyof HTMLElementTagNameMap;

export enum SelectionType {
  None = 'None',
  Caret = 'Caret',
  Range = 'Range',
}

function getStartEnd(anchorOffset: number, focusOffset: number) {
  const start = Math.min(anchorOffset, focusOffset);
  const end = Math.max(anchorOffset, focusOffset);

  return { start, end };
}

function getStartEndFromSelection(selection: Selection) {
  const anchorOffset = selection.anchorOffset;
  const focusOffset = selection.focusOffset;

  return getStartEnd(anchorOffset, focusOffset);
}

function splitTextByOffsets(text: string, start: number, end: number) {
  const leftText = text.substring(0, start);
  const middleText = text.substring(start, end);
  const rightText = text.substring(end);

  return {
    leftText,
    middleText,
    rightText,
  };
}

function createFormat(format: Format, content: string) {
  const element = document.createElement(format);
  const textNode = document.createTextNode(content);
  element.appendChild(textNode);
  return element;
}

function selectElement(element: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(element.firstChild);

  const windowSelection = window.getSelection();
  windowSelection.removeAllRanges();
  windowSelection.addRange(range);
}

function applyFormatToCaret(
  root: HTMLElement,
  format: Format,
  selection: Selection
) {
  const node = selection.focusNode;
  if (!root.contains(node)) {
    return;
  }

  const parent = node.parentElement;

  const element = createFormat(format, '');
  parent.appendChild(element);

  selectElement(element);
}

function applyFormatToRangeInElement(
  node: Node,
  format: Format,
  selection: Selection
) {
  const parent = node.parentElement;
  if (parent.tagName.toUpperCase() === format.toUpperCase()) {
    return;
  }

  const { start, end } = getStartEndFromSelection(selection);
  const { leftText, middleText, rightText } = splitTextByOffsets(
    node.textContent,
    start,
    end
  );

  if (leftText.length > 0) {
    // target = node, action = replaceText, payload = null
    node.textContent = leftText;
  }

  // target = parent, action = insertFormatAfter, payload = { child: node.nextSibling, format, content: middleText }
  // target = null, action = createFormat, payload = { format, content: middleText }
  const element = createFormat(format, middleText);
  // target = parent, action = insertAfter, payload = { child: node.nextSibling, node: element }
  parent.insertBefore(element, node.nextSibling);

  if (rightText.length > 0) {
    // target = null, action = createText, payload = { content: rightText }
    const rightTextNode = document.createTextNode(rightText);
    // target = parent, action = insertAfter, payload = { child: element, node: rightTextNode }
    parent.insertBefore(rightTextNode, element.nextSibling);
  }

  if (leftText.length === 0) {
    parent.removeChild(node);
  }

  selectElement(element);
}

function applyFormatToRange(
  root: HTMLElement,
  format: Format,
  selection: Selection
) {
  const anchor = selection.anchorNode;
  if (!root.contains(anchor)) {
    return;
  }

  const focus = selection.focusNode;
  if (!root.contains(focus)) {
    return;
  }

  if (anchor === focus) {
    applyFormatToRangeInElement(anchor, format, selection);
  }
}

export function applyFormat(
  root: HTMLElement,
  format: Format,
  selection: Selection
) {
  switch (selection.type) {
    case SelectionType.None:
      break;

    case SelectionType.Caret:
      applyFormatToCaret(root, format, selection);
      break;

    case SelectionType.Range:
      applyFormatToRange(root, format, selection);
      break;

    default:
      break;
  }
}
