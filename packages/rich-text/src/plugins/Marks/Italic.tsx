import * as React from 'react';

import { FormatItalicIcon } from '@contentful/f36-icons';
import { MARKS } from '@contentful/rich-text-types';
import { createItalicPlugin as createDefaultItalicPlugin } from '@udecode/plate-basic-marks';
import { toggleMark, isMarkActive, someHtmlElement } from '@udecode/plate-core';
import { css } from 'emotion';
import * as Slate from 'slate-react';

import { useContentfulEditor } from '../../ContentfulEditorProvider';
import { focus } from '../../helpers/editor';
import { TrackingProvider, useTrackingContext } from '../../TrackingProvider';
import { RichTextPlugin } from '../../types';
import { ToolbarButton } from '../shared/ToolbarButton';
import { buildMarkEventHandler } from './helpers';

interface ToolbarItalicButtonProps {
  isDisabled?: boolean;
}

export function ToolbarItalicButton(props: ToolbarItalicButtonProps) {
  const editor = useContentfulEditor();
  const tracking = useTrackingContext();

  function handleClick() {
    if (!editor?.selection) return;

    const isActive = isMarkActive(editor, MARKS.ITALIC);
    tracking.onToolbarAction(isActive ? 'unmark' : 'mark', { markType: MARKS.ITALIC });

    toggleMark(editor, { key: MARKS.ITALIC });
    focus(editor);
  }

  if (!editor) return null;

  return (
    <ToolbarButton
      title="Italic"
      testId="italic-toolbar-button"
      onClick={handleClick}
      isActive={isMarkActive(editor, MARKS.ITALIC)}
      isDisabled={props.isDisabled}>
      <FormatItalicIcon />
    </ToolbarButton>
  );
}

const styles = {
  italic: css({
    fontStyle: 'italic',
  }),
};

export function Italic(props: Slate.RenderLeafProps) {
  return (
    <em {...props.attributes} className={styles.italic}>
      {props.children}
    </em>
  );
}

export const createItalicPlugin = (tracking: TrackingProvider): RichTextPlugin =>
  createDefaultItalicPlugin({
    type: MARKS.ITALIC,
    component: Italic,
    options: {
      hotkey: ['mod+i'],
    },
    handlers: {
      onKeyDown: buildMarkEventHandler(tracking, MARKS.ITALIC),
    },
    deserializeHtml: {
      rules: [
        { validNodeName: ['I', 'EM'] },
        {
          validStyle: {
            fontStyle: 'italic',
          },
        },
      ],
      query: (el) => {
        return !someHtmlElement(el, (node) => node.style.fontStyle === 'normal');
      },
    },
  });
