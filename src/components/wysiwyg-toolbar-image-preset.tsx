import { IconPhoto } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarImagePresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarImagePreset: Component<
  WysiwygToolbarImagePresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="img">
        <IconPhoto />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
