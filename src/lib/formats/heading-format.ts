import { Format } from './format';

class HeadingFormat implements Format {
  constructor(public tagName: keyof HTMLElementTagNameMap) {}

  onCreated = (element: HTMLElement) => {
    //
  };

  onCaretApply = (root: HTMLElement, other: HTMLElement, self: HTMLElement) => {
    self.textContent = other.textContent;
    other.parentElement.replaceChild(self, other);
    // other.remove();
  };
}

export const H1Format = new HeadingFormat('h1');

export const H2Format = new HeadingFormat('h2');

export const H3Format = new HeadingFormat('h3');

export const H4Format = new HeadingFormat('h4');

export const H5Format = new HeadingFormat('h5');

export const H6Format = new HeadingFormat('h6');
