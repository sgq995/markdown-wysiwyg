import { createSignal, ParentComponent } from 'solid-js';
import { WysiwygToolbarHeadingPreset } from './wyiwyg-toolbar-heading-preset';
import { WysiwygContent } from './wysiwyg-content';
import { WysiwygToolbar } from './wysiwyg-toolbar';
import { WysiwygToolbarBlockquotePreset } from './wysiwyg-toolbar-blockquote-preset';
import { WysiwygToolbarCodePreset } from './wysiwyg-toolbar-code-preset';
import { WysiwygToolbarImagePreset } from './wysiwyg-toolbar-image-preset';
import { WysiwygToolbarInlinePreset } from './wysiwyg-toolbar-inline-preset';
import { WysiwygToolbarLinkPreset } from './wysiwyg-toolbar-link-preset';
import { WysiwygToolbarListPreset } from './wysiwyg-toolbar-list-preset';

export const WysiwygEditor: ParentComponent = (props) => {
  const [root, setRoot] = createSignal<HTMLDivElement>();

  return (
    <div class="max-h-full w-full overflow-y-auto border border-solid border-slate-900">
      <header class="sticky top-0 border-b-2 border-solid border-b-slate-500 bg-white p-2">
        <WysiwygToolbar>
          <WysiwygToolbarHeadingPreset root={root()} />
          <WysiwygToolbarInlinePreset root={root()} />
          <WysiwygToolbarBlockquotePreset root={root()} />
          <WysiwygToolbarListPreset root={root()} />
          <WysiwygToolbarCodePreset root={root()} />
          <WysiwygToolbarLinkPreset root={root()} />
          <WysiwygToolbarImagePreset root={root()} />
        </WysiwygToolbar>
      </header>
      <div class="bg-slate-100 p-2">
        <WysiwygContent ref={setRoot}>{props.children}</WysiwygContent>
      </div>
    </div>
  );
};
