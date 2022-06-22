import { HotkeyPlugin, KeyboardHandler, PlateEditor } from '@udecode/plate-core';
import { TrackingPluginActions } from '../../plugins/Tracking';
import { RichTextEditor } from '../../types';
export declare function toggleQuote(editor: PlateEditor, logAction?: TrackingPluginActions['onShortcutAction'] | TrackingPluginActions['onToolbarAction']): void;
export declare const onKeyDownToggleQuote: KeyboardHandler<RichTextEditor, HotkeyPlugin>;
