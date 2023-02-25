import { IconQuote } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarBlockquotePresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarBlockquotePreset: Component<
  WysiwygToolbarBlockquotePresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="blockquote">
        <IconQuote />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
