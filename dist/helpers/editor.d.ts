import { Link } from '@contentful/field-editor-reference/dist/types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { EditorNodesOptions, PlateEditor, ToggleNodeTypeOptions } from '@udecode/plate-core';
import { Path, Node } from 'slate';
import { CustomElement, RichTextEditor } from '../types';
export declare const LINK_TYPES: INLINES[];
export declare function isBlockSelected(editor: PlateEditor, type: string): boolean;
export declare function isRootLevel(path: Path): boolean;
declare type NodeEntry = [CustomElement, Path];
declare type NodeType = BLOCKS | INLINES;
export declare function getNodeEntryFromSelection(editor: RichTextEditor, nodeTypeOrTypes: NodeType | NodeType[], path?: Path): NodeEntry | [];
export declare function isNodeTypeSelected(editor: RichTextEditor, nodeType: BLOCKS | INLINES): boolean;
export declare function moveToTheNextLine(editor: RichTextEditor): void;
export declare function moveToTheNextChar(editor: RichTextEditor): void;
export declare function insertEmptyParagraph(editor: RichTextEditor, options?: any): void;
export declare function getElementFromCurrentSelection(editor: RichTextEditor): (import("slate").BaseEditor | CustomElement<unknown> | import("../types").CustomText | Path)[];
export declare function isList(editor?: RichTextEditor): boolean;
export declare function getTableSize(table: CustomElement): Record<'numRows' | 'numColumns', number> | null;
interface InsertLinkOptions {
    text: string;
    type: INLINES.HYPERLINK | INLINES.ENTRY_HYPERLINK | INLINES.ASSET_HYPERLINK;
    url?: string;
    target?: Link;
    path?: Path;
}
export declare function insertLink(editor: any, options: InsertLinkOptions): void;
export declare function isLinkActive(editor?: RichTextEditor): boolean;
export declare function unwrapLink(editor: any): void;
export declare function wrapLink(editor: any, { text, url, target, type, path }: InsertLinkOptions): void;
export declare function getAncestorPathFromSelection(editor: RichTextEditor): Path | undefined;
export declare const isAtEndOfTextSelection: (editor: RichTextEditor) => boolean;
/**
 * This traversal strategy is unfortunately necessary because Slate doesn't
 * expose something like Node.next(editor).
 */
export declare function getNextNode(editor: RichTextEditor): CustomElement | null;
export declare const INLINE_TYPES: string[];
export declare const isInlineOrText: (node: Node) => boolean;
export declare const focus: (editor: RichTextEditor) => void;
export declare function toggleElement(editor: RichTextEditor, options: ToggleNodeTypeOptions, editorOptions?: Omit<EditorNodesOptions, 'match'>): void;
export {};
