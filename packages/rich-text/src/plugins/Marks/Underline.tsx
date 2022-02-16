import * as React from 'react';

import { FormatUnderlinedIcon } from '@contentful/f36-icons';
import { MARKS } from '@contentful/rich-text-types';
import { createUnderlinePlugin as createDefaultUnderlinePlugin } from '@udecode/plate-basic-marks';
import { toggleMark, isMarkActive, someHtmlElement } from '@udecode/plate-core';
import * as Slate from 'slate-react';

import { useContentfulEditor } from '../../ContentfulEditorProvider';
import { focus } from '../../helpers/editor';
import { TrackingProvider, useTrackingContext } from '../../TrackingProvider';
import { RichTextPlugin } from '../../types';
import { ToolbarButton } from '../shared/ToolbarButton';
import { buildMarkEventHandler } from './helpers';

interface ToolbarUnderlineButtonProps {
  isDisabled?: boolean;
}

export function ToolbarUnderlineButton(props: ToolbarUnderlineButtonProps) {
  const editor = useContentfulEditor();
  const tracking = useTrackingContext();

  function handleClick() {
    if (!editor?.selection) return;

    const isActive = isMarkActive(editor, MARKS.UNDERLINE);
    tracking.onToolbarAction(isActive ? 'unmark' : 'mark', { markType: MARKS.UNDERLINE });

    toggleMark(editor, { key: MARKS.UNDERLINE });
    focus(editor);
  }

  if (!editor) return null;

  return (
    <ToolbarButton
      title="Underline"
      testId="underline-toolbar-button"
      onClick={handleClick}
      isActive={isMarkActive(editor, MARKS.UNDERLINE)}
      isDisabled={props.isDisabled}>
      <FormatUnderlinedIcon />
    </ToolbarButton>
  );
}

export function Underline(props: Slate.RenderLeafProps) {
  return <u {...props.attributes}>{props.children}</u>;
}

export const createUnderlinePlugin = (tracking: TrackingProvider): RichTextPlugin =>
  createDefaultUnderlinePlugin({
    type: MARKS.UNDERLINE,
    component: Underline,
    options: {
      hotkey: ['mod+u'],
    },
    handlers: {
      onKeyDown: buildMarkEventHandler(tracking, MARKS.UNDERLINE),
    },
    deserializeHtml: {
      rules: [
        {
          validNodeName: ['U'],
        },
        {
          validStyle: {
            textDecoration: ['underline'],
          },
        },
      ],
      query: (el) => {
        return !someHtmlElement(el, (node) => node.style.textDecoration === 'none');
      },
    },
  });
