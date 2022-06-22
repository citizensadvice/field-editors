import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { NodeEntry } from 'slate';
import { RichTextEditor } from '../types';
export declare const transformRemove: (editor: RichTextEditor, [, path]: NodeEntry<import("slate").Node>) => void;
export declare const transformParagraphs: (editor: RichTextEditor, entry: NodeEntry<import("slate").Node>) => void;
export declare const transformUnwrap: (editor: RichTextEditor, [, path]: NodeEntry<import("slate").Node>) => void;
export declare const transformWrapIn: (type: BLOCKS | INLINES) => (editor: RichTextEditor, [, path]: NodeEntry<import("slate").Node>) => void;
export declare const transformLift: (editor: RichTextEditor, [, path]: NodeEntry<import("slate").Node>) => void;
