import { NodeEntry, Node } from 'slate';
import { RichTextEditor } from 'types';
import { NodeValidator, NodeTransformer } from './types';
export declare class NormalizerError extends Error {
}
export declare const createValidatorFromTypes: (types: string[]) => NodeValidator;
export declare const getChildren: (editor: RichTextEditor, [node, path]: NodeEntry<Node>) => NodeEntry[];
export declare const createTransformerFromObject: (transforms: Record<string, NodeTransformer>) => NodeTransformer;
