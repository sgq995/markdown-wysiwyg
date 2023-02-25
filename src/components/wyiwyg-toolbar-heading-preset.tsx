import {
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
} from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarHeadingPresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarHeadingPreset: Component<
  WysiwygToolbarHeadingPresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="h1">
        <IconH1 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format="h2">
        <IconH2 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format="h3">
        <IconH3 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format="h4">
        <IconH4 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format="h5">
        <IconH5 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format="h6">
        <IconH6 />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
