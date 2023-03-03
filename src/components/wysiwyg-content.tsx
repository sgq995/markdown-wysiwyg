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
      classList={{
        'border border-solid border-slate-200 bg-white p-2': true,
        [classes.content]: true,
      }}
    >
      {props.children}
    </div>
  );
};
