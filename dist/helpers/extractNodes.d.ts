import { Path } from 'slate';
import { CustomElement, RichTextEditor } from '../types';
/**
 * It filters out all paragraphs and headings from a path and convert them into paragraphs.
 */
export declare function extractParagraphs(editor: RichTextEditor, path: Path): CustomElement[];
