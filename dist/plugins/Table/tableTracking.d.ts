import { RichTextEditor } from '../../types';
import type { NodeTransformer } from '../Normalizer';
export declare function addTableTrackingEvents(editor: RichTextEditor): void;
export declare const withInvalidCellChildrenTracking: (transformer: NodeTransformer) => NodeTransformer;
