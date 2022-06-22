import { NodeEntry, Node } from 'slate';
import { RichTextEditor } from '../../types';
import { FetchedEntityData } from './useEntityInfo';
export declare const hasText: (editor: RichTextEditor, entry: NodeEntry<Node>) => boolean;
export declare function getEntityInfo(data?: FetchedEntityData): string;
