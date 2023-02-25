import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-solidjs';
import { JSX, ParentComponent, splitProps } from 'solid-js';

type Format = keyof HTMLElementTagNameMap;

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
  const focus = selection.focusNode;

  if (anchor === focus) {
    applyFormatToRangeInElement(anchor, format, selection);
  }
}

function applyFormat(root: HTMLElement, format: Format, selection: Selection) {
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

export interface WysiwygToolbarButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  root: HTMLElement;
  format: Format;
}

export const WysiwygToolbarButton: ParentComponent<
  WysiwygToolbarButtonProps
> = (props) => {
  const [local, others] = splitProps(props, ['children']);

  return (
    <button
      onClick={() => {
        const selection = window.getSelection();
        applyFormat(props.root, props.format, selection);
      }}
      class="rounded border border-solid border-sky-900 p-2"
      {...others}
    >
      {local.children}
    </button>
  );
};

export const WysiwygEditor: ParentComponent = (props) => {
  let root: HTMLDivElement;

  return (
    <div class="max-h-full w-full overflow-y-auto border border-solid border-slate-900">
      <header class="sticky top-0 border-b-2 border-solid border-b-slate-500 bg-white p-2">
        <div role="toolbar" class="flex flex-wrap justify-between">
          <div class="flex gap-1">
            <WysiwygToolbarButton
              root={root}
              format="strong"
              // onClick={() => {
              //   const selection = window.getSelection();
              //   applyFormat(root, 'strong', selection);
              // }}
            >
              <IconBold />
            </WysiwygToolbarButton>
            <WysiwygToolbarButton root={root} format="em">
              <IconItalic />
            </WysiwygToolbarButton>
            {/* <WysiwygToolbarButton>
              <IconUnderline />
            </WysiwygToolbarButton> */}
          </div>
        </div>
      </header>
      <div class="bg-slate-100 p-2">
        <div
          ref={root}
          contentEditable
          onBeforeInput={(event) => {
            const selection = window.getSelection();
            console.log({
              data: event.data,
              dataTransfer: event.dataTransfer,
              inputType: event.inputType,
              isComposing: event.isComposing,
              selection,
            });
          }}
          class="border border-solid border-slate-200 bg-white p-2"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
