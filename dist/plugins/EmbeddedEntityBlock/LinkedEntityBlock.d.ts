import { CustomRenderElementProps } from '../../types';
declare type LinkedEntityBlockProps = CustomRenderElementProps<{
    target: {
        sys: {
            id: string;
            linkType: 'Entry' | 'Asset';
            type: 'Link';
        };
    };
}> & {
    onEntityFetchComplete: VoidFunction;
};
export declare function LinkedEntityBlock(props: LinkedEntityBlockProps): JSX.Element;
export {};
