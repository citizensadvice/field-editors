import { FieldExtensionSDK } from '@contentful/app-sdk';
import { RichTextPlugin } from '../../types';
export { EmbeddedEntityBlockToolbarIcon as ToolbarIcon } from './ToolbarIcon';
export declare const createEmbeddedEntryBlockPlugin: (sdk: FieldExtensionSDK) => RichTextPlugin;
export declare const createEmbeddedAssetBlockPlugin: (sdk: FieldExtensionSDK) => RichTextPlugin;
