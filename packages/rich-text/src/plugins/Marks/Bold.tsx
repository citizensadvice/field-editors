import * as React from 'react';

import { FormatBoldIcon } from '@contentful/f36-icons';
import { MARKS } from '@contentful/rich-text-types';
import { createBoldPlugin as createDefaultBoldPlugin } from '@udecode/plate-basic-marks';
import { isMarkActive, toggleMark, someHtmlElement } from '@udecode/plate-core';
import { css } from 'emotion';
import * as Slate from 'slate-react';

import { useContentfulEditor } from '../../ContentfulEditorProvider';
import { focus } from '../../helpers/editor';
import { TrackingProvider, useTrackingContext } from '../../TrackingProvider';
import { RichTextPlugin } from '../../types';
import { ToolbarButton } from '../shared/ToolbarButton';
import { buildMarkEventHandler } from './helpers';

interface ToolbarBoldButtonProps {
  isDisabled?: boolean;
}

export function ToolbarBoldButton(props: ToolbarBoldButtonProps) {
  const editor = useContentfulEditor();
  const tracking = useTrackingContext();

  function handleClick() {
    if (!editor?.selection) return;

    const isActive = isMarkActive(editor, MARKS.BOLD);
    tracking.onToolbarAction(isActive ? 'unmark' : 'mark', { markType: MARKS.BOLD });

    toggleMark(editor, { key: MARKS.BOLD });
    focus(editor);
  }

  if (!editor) return null;

  return (
    <ToolbarButton
      title="Bold"
      testId="bold-toolbar-button"
      onClick={handleClick}
      isActive={isMarkActive(editor, MARKS.BOLD)}
      isDisabled={props.isDisabled}>
      <FormatBoldIcon />
    </ToolbarButton>
  );
}

const styles = {
  bold: css({
    fontWeight: 600,
  }),
};

export function Bold(props: Slate.RenderLeafProps) {
  return (
    <strong {...props.attributes} className={styles.bold}>
      {props.children}
    </strong>
  );
}

const isGoogleBoldWrapper = (el: HTMLElement) =>
  el.id.startsWith('docs-internal-guid') && el.nodeName === 'B';

export const createBoldPlugin = (tracking: TrackingProvider): RichTextPlugin =>
  createDefaultBoldPlugin({
    type: MARKS.BOLD,
    component: Bold,
    options: {
      hotkey: ['mod+b'],
    },
    handlers: {
      onKeyDown: buildMarkEventHandler(tracking, MARKS.BOLD),
    },
    deserializeHtml: {
      rules: [
        { validNodeName: ['STRONG', 'B'] },
        {
          validStyle: {
            fontWeight: ['600', '700', 'bold'],
          },
        },
      ],
      query: (el) => {
        return (
          !isGoogleBoldWrapper(el) &&
          !someHtmlElement(el, (node) => node.style.fontWeight === 'normal')
        );
      },
    },
  });
