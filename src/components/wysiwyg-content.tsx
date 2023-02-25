import { ParentComponent } from 'solid-js';

export const WysiwygContent: ParentComponent = (props) => {
  return (
    <div
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
