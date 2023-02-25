import { ParentComponent } from 'solid-js';

export const WysiwygToolbarGroup: ParentComponent = (props) => {
  return <div class="flex gap-1">{props.children}</div>;
};
