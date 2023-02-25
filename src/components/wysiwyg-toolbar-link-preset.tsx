import { IconLink } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarLinkPresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarLinkPreset: Component<
  WysiwygToolbarLinkPresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="a">
        <IconLink />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
