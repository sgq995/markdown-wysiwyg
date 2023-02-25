import { IconCode, IconCodeDots } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { WysiwygToolbarButton } from './wysiwyg-toolbar-button';
import { WysiwygToolbarGroup } from './wysiwyg-toolbar-group';

export interface WysiwygToolbarCodePresetProps {
  root: HTMLElement;
}

export const WysiwygToolbarCodePreset: Component<
  WysiwygToolbarCodePresetProps
> = (props) => {
  return (
    <WysiwygToolbarGroup>
      <WysiwygToolbarButton root={props.root} format="code">
        <IconCode />
      </WysiwygToolbarButton>

      <WysiwygToolbarButton root={props.root} format="pre">
        <IconCodeDots />
      </WysiwygToolbarButton>
    </WysiwygToolbarGroup>
  );
};
