import { BLOCKS } from '@contentful/rich-text-types';
import { NodeEntry, Node } from 'slate';
import { CustomElement, RichTextEditor } from '../../types';
export declare const hasListAsDirectParent: (editor: RichTextEditor, [, path]: NodeEntry<Node>) => boolean;
/**
 * Places orphaned list items in a list. If there's a list somewhere
 * in the node's ancestors, defaults to that list type, else places
 * the list item in an unordered list.
 */
export declare const normalizeOrphanedListItem: (editor: RichTextEditor, [, path]: NodeEntry<Node>) => void;
export declare const isNonEmptyListItem: (editor: RichTextEditor, [, path]: NodeEntry<Node>) => boolean;
export declare const firstNodeIsNotList: (_editor: RichTextEditor, [node]: NodeEntry<CustomElement<unknown>>) => boolean;
export declare const insertParagraphAsChild: (editor: RichTextEditor, [, path]: NodeEntry<Node>) => void;
export declare const replaceNodeWithListItems: (editor: any, entry: any) => void;
export declare const isListTypeActive: (editor: RichTextEditor, type: BLOCKS) => boolean;
