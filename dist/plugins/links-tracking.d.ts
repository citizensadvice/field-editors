import React, { ComponentProps } from 'react';
declare type WithEntityFetchProps = {
    onEntityFetchComplete: VoidFunction;
} & JSX.IntrinsicAttributes;
export declare function withLinkTracking(Component: React.ComponentType<WithEntityFetchProps>): (props: ComponentProps<typeof Component>) => JSX.Element;
export {};
