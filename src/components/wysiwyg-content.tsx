import { ParentComponent } from 'solid-js';

export interface WysiwygContentProps {
  ref: HTMLDivElement | ((e: HTMLDivElement) => void);
}

export const WysiwygContent: ParentComponent<WysiwygContentProps> = (props) => {
  return (
    <div
      ref={props.ref}
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
  );
};
