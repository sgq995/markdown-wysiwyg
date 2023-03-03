import { Format } from './formats/format';

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
  const element = document.createElement(format.tagName);
  const textNode = document.createTextNode(content);
  element.appendChild(textNode);
  format.onCreated(element);
  return element;
}

function selectElement(root: HTMLElement, element: HTMLElement) {
  if (!root.contains(element)) {
    return;
  }

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
  const textNode = selection.focusNode;
  const other = textNode.parentElement;
  if (root !== other && !root.contains(other)) {
    return;
  }

  const self = createFormat(format, '');
  format.onCaretApply(root, other, self);

  selectElement(root, self);
}

function applyFormatToRangeInElement(
  root: HTMLElement,
  node: Node,
  format: Format,
  selection: Selection
) {
  const other = node.parentElement;
  if (other.tagName.toUpperCase() === format.tagName.toUpperCase()) {
    // TODO: remove format
    return;
  }

  const { start, end } = getStartEnd(
    selection.anchorOffset,
    selection.focusOffset
  );
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
  const self = createFormat(format, middleText);
  // target = parent, action = insertAfter, payload = { child: node.nextSibling, node: element }
  root.insertBefore(self, other.nextSibling);

  // TODO: keep the format
  if (rightText.length > 0) {
    // target = null, action = createText, payload = { content: rightText }
    const rightTextNode = document.createTextNode(rightText);
    // target = parent, action = insertAfter, payload = { child: element, node: rightTextNode }
    other.insertBefore(rightTextNode, self.nextSibling);
  }

  if (leftText.length === 0 && rightText.length === 0) {
    other.remove();
  }

  selectElement(root, self);
}

function applyFormatToRangeInMultipleElements(
  root: HTMLElement,
  anchor: Node,
  focus: Node,
  format: Format,
  selection: Selection
) {
  const self = createFormat(format, '');

  selectElement(root, self);
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
    applyFormatToRangeInElement(root, anchor, format, selection);
  } else {
    applyFormatToRangeInMultipleElements(
      root,
      anchor,
      focus,
      format,
      selection
    );
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
