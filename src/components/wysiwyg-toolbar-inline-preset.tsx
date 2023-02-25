import { IconBold, IconItalic } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarInlinePresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarInlinePreset: Component<
  WysiwygToolbarInlinePresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="strong">
        <IconBold />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format="em">
        <IconItalic />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
