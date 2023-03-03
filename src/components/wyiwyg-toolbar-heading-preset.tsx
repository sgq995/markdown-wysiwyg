import {
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
} from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { H1Format, H2Format, H3Format, H4Format, H5Format, H6Format } from '../lib';
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
      <WysiwygToolbarButton root={props.root} format={H1Format}>
        <IconH1 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format={H2Format}>
        <IconH2 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format={H3Format}>
        <IconH3 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format={H4Format}>
        <IconH4 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format={H5Format}>
        <IconH5 />
      </WysiwygToolbarButton>
      <WysiwygToolbarButton root={props.root} format={H6Format}>
        <IconH6 />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
