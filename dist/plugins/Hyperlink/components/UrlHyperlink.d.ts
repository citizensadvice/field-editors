import { Link } from '@contentful/app-sdk';
import { CustomRenderElementProps } from '../../../types';
declare type HyperlinkElementProps = CustomRenderElementProps<{
    uri?: string;
    target?: Link;
    onEntityFetchComplete?: VoidFunction;
}>;
export declare function UrlHyperlink(props: HyperlinkElementProps): JSX.Element;
export {};
