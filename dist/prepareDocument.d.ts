import { Document } from '@contentful/rich-text-types';
import { CreatePlateEditorOptions } from '@udecode/plate-core';
import { Descendant, Editor, Node } from 'slate';
import { RichTextEditor } from 'types';
/**
 * For legacy reasons, a document may not have any content at all
 * e.g:
 *
 * {nodeType: document, data: {}, content: []}
 *
 * Rendering such document will break the Slate editor
 */
export declare const hasContent: (doc?: Document | undefined) => boolean;
export declare const setEditorContent: (editor: Editor, nodes?: Node[] | undefined) => void;
/**
 * Converts a Contentful rich text document to the corresponding slate editor
 * value
 */
export declare const documentToEditorValue: (doc: any) => Descendant[];
export declare const normalizeEditorValue: (value: Descendant[], options?: Pick<CreatePlateEditorOptions<RichTextEditor>, "plugins" | "disableCorePlugins" | "components" | "overrideByKey" | "normalizeInitialValue"> | undefined) => Descendant[] & any[];
