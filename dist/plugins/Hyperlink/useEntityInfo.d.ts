import { FieldExtensionSDK, Link, Entry, Asset, ScheduledAction } from '@contentful/app-sdk';
import { entityHelpers } from '@contentful/field-editor-shared';
export declare type FetchedEntityData = {
    jobs: ScheduledAction[];
    entity: Entry | Asset;
    entityTitle: string;
    entityDescription: string;
    entityStatus: ReturnType<typeof entityHelpers.getEntryStatus>;
    contentTypeName: string;
};
export declare type EntityInfoProps = {
    target: Link;
    sdk: FieldExtensionSDK;
    onEntityFetchComplete?: VoidFunction;
};
export declare function useEntityInfo(props: EntityInfoProps): string;
