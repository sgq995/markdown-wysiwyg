import { ParentComponent } from "solid-js";

export const WysiwygToolbarButton: ParentComponent = (props) => {
  return (
    <button class="rounded border border-solid border-sky-900 p-2">
      {props.children}
    </button>
  );
};

export const WysiwygEditor: ParentComponent = (props) => {
  return (
    <div class="w-full border border-solid border-slate-900">
      <header class="bg-white p-2">
        <div role="toolbar" class="flex flex-wrap justify-between">
          <div class="flex gap-1">
            <WysiwygToolbarButton>Bold</WysiwygToolbarButton>
            <WysiwygToolbarButton>Italic</WysiwygToolbarButton>
            <WysiwygToolbarButton>Underline</WysiwygToolbarButton>
          </div>
        </div>
      </header>
      <hr class="border border-solid border-slate-500" />
      <div class="bg-slate-100 p-2">
        <div
          contentEditable
          class="border border-solid border-slate-200 bg-white p-2"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
