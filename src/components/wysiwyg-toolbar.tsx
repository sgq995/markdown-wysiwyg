import { ParentComponent } from 'solid-js';

export const WysiwygToolbar: ParentComponent = (props) => {
  return (
    <div role="toolbar" class="flex flex-wrap justify-between">
      {props.children}
    </div>
  );
};
