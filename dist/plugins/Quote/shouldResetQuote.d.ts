import { PlateEditor } from '@udecode/plate-core';
/**
 * Returns true if we are:
 * 1) Inside a blockquote
 * 2) With no only one child paragraph/heading and
 * 3) that child is empty
 */
export declare const shouldResetQuoteOnBackspace: (editor: PlateEditor) => boolean;
