import { MARKS } from '@contentful/rich-text-types';
import * as Slate from 'slate-react';
import { RichTextPlugin } from '../../types';
export declare const ToolbarUnderlineButton: {
    ({ isDisabled }: {
        isDisabled?: boolean | undefined;
    }): JSX.Element | null;
    displayName: MARKS;
};
export declare function Underline(props: Slate.RenderLeafProps): JSX.Element;
export declare const createUnderlinePlugin: () => RichTextPlugin;
