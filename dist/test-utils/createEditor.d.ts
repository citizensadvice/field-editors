import { FieldExtensionSDK } from '@contentful/app-sdk';
import { RichTextTrackingActionHandler } from '../plugins/Tracking';
import { RichTextEditor, RichTextPlugin } from '../types';
export declare const normalize: (editor: RichTextEditor) => void;
export declare const createTestEditor: (options: {
    input?: any;
    sdk?: FieldExtensionSDK;
    trackingHandler?: RichTextTrackingActionHandler;
    plugins?: RichTextPlugin[];
}) => {
    editor: import("@udecode/plate-core").PlateEditor<RichTextEditor>;
    normalize: () => void;
};
