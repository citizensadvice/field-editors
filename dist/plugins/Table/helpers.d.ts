import { Node, NodeEntry } from 'slate';
import { RichTextEditor, TextOrCustomElement } from '../../types';
export declare function insertTableAndFocusFirstCell(editor: RichTextEditor): void;
export declare function isTableActive(editor: RichTextEditor): boolean;
export declare function isTableHeaderEnabled(editor: RichTextEditor): boolean;
export declare function replaceEmptyParagraphWithTable(editor: RichTextEditor): void;
/**
 * Returns the number of cells in a given row vs the table width
 *
 * Note: We should only get different table rows cell counts in between
 * normalization cycles.
 */
export declare const getNoOfMissingTableCellsInRow: (editor: RichTextEditor, [, rowPath]: NodeEntry<Node>) => number;
export declare const createEmptyTableCells: (count: number) => Node[];
export declare const isNotEmpty: (editor: RichTextEditor, [, path]: NodeEntry<Node>) => boolean;
export declare const isTable: (node: TextOrCustomElement) => boolean;
