import { ParentComponent } from 'solid-js';
import { WysiwygContent } from './wysiwyg-content';
import { WysiwygToolbar } from './wysiwyg-toolbar';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';
import { WysiwygToolbarInlinePreset } from './wysiwyg-toolbar-inline-preset';

export const WysiwygEditor: ParentComponent = (props) => {
  let root: HTMLDivElement;

  return (
    <div class="max-h-full w-full overflow-y-auto border border-solid border-slate-900">
      <header class="sticky top-0 border-b-2 border-solid border-b-slate-500 bg-white p-2">
        <WysiwygToolbar>
          <WysiwygToolbarInlinePreset root={root} />
        </WysiwygToolbar>
      </header>
      <div class="bg-slate-100 p-2">
        <WysiwygContent ref={root}>{props.children}</WysiwygContent>
      </div>
    </div>
  );
};
