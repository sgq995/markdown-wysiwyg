export interface Format {
  tagName: keyof HTMLElementTagNameMap;
  onCreated: (element: HTMLElement) => void;
  onCaretApply: (
    root: HTMLElement,
    other: HTMLElement,
    self: HTMLElement
  ) => void;
}
