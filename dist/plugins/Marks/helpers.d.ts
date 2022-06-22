import { MARKS } from '@contentful/rich-text-types';
import { HotkeyPlugin, KeyboardHandler } from '@udecode/plate-core';
import { RichTextEditor } from '../../types';
export declare const buildMarkEventHandler: (type: MARKS) => KeyboardHandler<RichTextEditor, HotkeyPlugin>;
