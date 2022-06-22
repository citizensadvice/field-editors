import * as React from 'react';
import * as Slate from 'slate-react';
import { RichTextEditor, RichTextPlugin } from '../../types';
interface ToolbarHrButtonProps {
    isDisabled?: boolean;
}
export declare function withHrEvents(editor: RichTextEditor): (event: React.KeyboardEvent) => void;
export declare function ToolbarHrButton(props: ToolbarHrButtonProps): JSX.Element | null;
export declare function Hr(props: Slate.RenderLeafProps): JSX.Element;
export declare const createHrPlugin: () => RichTextPlugin;
export {};
