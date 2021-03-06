import { MethodStub } from "./stub/MethodStub";
export declare class MethodStubCollection {
    private items;
    add(item: MethodStub): void;
    getLastMatchingGroupIndex(args: any): number;
    getFirstMatchingFromGroupAndRemoveIfNotLast(groupIndex: number, args: any[]): MethodStub;
    hasMatchingInAnyGroup(args: any[]): boolean;
    private removeIfNotLast;
    private getFirstMatchingFromGroup;
    private getFirstMatchingIndexFromGroup;
    private getItemsCountInGroup;
}
