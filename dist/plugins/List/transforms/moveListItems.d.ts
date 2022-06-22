/**
 * Credit: Modified version of Plate's list plugin
 * See: https://github.com/udecode/plate/blob/main/packages/nodes/list
 */
import { EditorNodesOptions, PlateEditor } from '@udecode/plate-core';
export declare type MoveListItemsOptions = {
    increase?: boolean;
    at?: EditorNodesOptions['at'];
};
export declare const moveListItems: (editor: PlateEditor, { increase, at }?: MoveListItemsOptions) => void;
