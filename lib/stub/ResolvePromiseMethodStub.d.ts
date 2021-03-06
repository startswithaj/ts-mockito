import { Matcher } from "../matcher/type/Matcher";
import { AbstractMethodStub } from "./AbstractMethodStub";
import { MethodStub } from "./MethodStub";
export declare class ResolvePromiseMethodStub extends AbstractMethodStub implements MethodStub {
    protected groupIndex: number;
    private matchers;
    private value;
    private validator;
    constructor(groupIndex: number, matchers: Array<Matcher>, value: any);
    isApplicable(args: any[]): boolean;
    execute(args: any[]): void;
    getValue(): any;
}
