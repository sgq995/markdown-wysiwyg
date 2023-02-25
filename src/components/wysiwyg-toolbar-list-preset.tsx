import { IconList, IconListNumbers } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarListPresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarListPreset: Component<
  WysiwygToolbarListPresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="ul">
        <IconList />
      </WysiwygToolbarButton>

      <WysiwygToolbarButton root={props.root} format="ol">
        <IconListNumbers />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
