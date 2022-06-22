import { FieldExtensionSDK } from '@contentful/app-sdk';
import { PlateProps } from '@udecode/plate-core';
import { RichTextPlugin } from '../types';
import { RichTextTrackingActionHandler } from './Tracking';
export declare const getPlugins: (sdk: FieldExtensionSDK, onAction: RichTextTrackingActionHandler) => RichTextPlugin[];
export declare const disableCorePlugins: PlateProps['disableCorePlugins'];
