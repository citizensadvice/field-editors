import { NodeEntry } from 'slate';
import { RichTextEditor } from '../../types';
/**
 * Re-creates a void node with valid children.
 */
export declare const transformVoid: (editor: RichTextEditor, [node, path]: NodeEntry<import("slate").Node>) => void;
