import { JSX, ParentComponent, splitProps } from 'solid-js';
import { applyFormat } from '../lib/apply';
import { Format } from '../lib/formats/format';

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
