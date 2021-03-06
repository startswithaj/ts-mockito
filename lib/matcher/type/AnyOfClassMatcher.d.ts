import { Matcher } from "./Matcher";
export declare class AnyOfClassMatcher<T> extends Matcher {
    private expectedClass;
    constructor(expectedClass: new (...args: any[]) => T);
    match(value: any): boolean;
    toString(): string;
}
