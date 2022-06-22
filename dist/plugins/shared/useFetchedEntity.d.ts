import { Entry, Asset } from '@contentful/app-sdk';
interface FetchedEntityProps {
    type: 'Entry' | 'Asset';
    id: string;
    onEntityFetchComplete?: VoidFunction;
}
export declare function useFetchedEntity({ type, id, onEntityFetchComplete }: FetchedEntityProps): Entry<Record<string, any>> | Asset | "failed" | undefined;
export {};
