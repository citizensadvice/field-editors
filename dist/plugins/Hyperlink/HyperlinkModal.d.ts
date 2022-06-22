import { Link } from '@contentful/field-editor-reference/dist/types';
import { FieldExtensionSDK } from '@contentful/field-editor-shared';
import { Path } from 'slate';
import { TrackingPluginActions } from '../../plugins/Tracking';
import { RichTextEditor } from '../../types';
interface HyperlinkModalProps {
    linkText?: string;
    linkType?: string;
    linkTarget?: string;
    linkEntity?: Link;
    onClose: (value: unknown) => void;
    sdk: FieldExtensionSDK;
    readonly: boolean;
}
export declare function HyperlinkModal(props: HyperlinkModalProps): JSX.Element;
export declare function addOrEditLink(editor: RichTextEditor, sdk: FieldExtensionSDK, logAction: TrackingPluginActions['onToolbarAction'] | TrackingPluginActions['onShortcutAction'] | TrackingPluginActions['onViewportAction'], targetPath?: Path): Promise<void>;
export {};
