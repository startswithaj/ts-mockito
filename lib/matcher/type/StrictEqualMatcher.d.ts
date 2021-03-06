import { Matcher } from "./Matcher";
export declare class StrictEqualMatcher extends Matcher {
    private expectedValue;
    constructor(expectedValue: any);
    match(value: any): boolean;
    toString(): string;
}
