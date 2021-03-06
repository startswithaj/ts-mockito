import { Matcher } from "./Matcher";
export declare class DeepEqualMatcher<T> extends Matcher {
    private expectedValue;
    constructor(expectedValue: T);
    match(value: any): boolean;
    toString(): string;
}
