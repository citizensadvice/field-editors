/**
 * Credit: Modified version of Plate's list plugin
 * See: https://github.com/udecode/plate/blob/main/packages/nodes/list
 */
import { PlateEditor, TElement } from '@udecode/plate-core';
import { NodeEntry } from 'slate';
export interface MoveListItemDownOptions {
    list: NodeEntry<TElement>;
    listItem: NodeEntry<TElement>;
}
export declare const moveListItemDown: (editor: PlateEditor, { list, listItem }: MoveListItemDownOptions) => void;
