import { ParentComponent } from 'solid-js';
import classes from './wysiwyg-content.module.css';

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
      classList={{
        'border border-solid border-slate-200 bg-white p-2': true,
        [classes.content]: true,
      }}
    >
      {props.children}
    </div>
  );
};
