import type { Component } from "solid-js";
import { WysiwygEditor } from "./components/wysiwyg-editor";

const App: Component = () => {
  return (
    <div class="p-2">
      <WysiwygEditor>Hello world</WysiwygEditor>
    </div>
  );
};

export default App;
