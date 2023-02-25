import type { Component } from 'solid-js';
import { WysiwygEditor } from './components/wysiwyg-editor';

export const Standalone: Component = () => {
  return (
    <div class="h-screen max-h-screen p-2">
      <WysiwygEditor>
        <h1>Heading level 1</h1>
        <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>
        <h4>Heading level 4</h4>
        <h5>Heading level 5</h5>
        <h6>Heading level 6</h6>

        <p>Paragraph</p>

        <p>
          <strong>Bold</strong>
        </p>

        <p>
          <em>Italic</em>
        </p>

        <blockquote>Blockquote</blockquote>

        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>

        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>

        <p>
          <code>Inline code</code>
        </p>

        <pre>
          <code>
            Multiline <br />
            Code
          </code>
        </pre>

        <hr />

        <p>
          <a href="//google.com">Link to Google</a>
        </p>

        <p>
          <a href="//google.com" title="Google">
            Link with title
          </a>
        </p>

        <p>
          <img
            src="https://www.solidjs.com/assets/logo-123b04bc.svg"
            alt="SolidJS"
          />
        </p>
      </WysiwygEditor>
    </div>
  );
};
