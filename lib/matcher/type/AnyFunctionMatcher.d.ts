import { Matcher } from "./Matcher";
export declare class AnyFunctionMatcher extends Matcher {
    constructor();
    match(value: any): boolean;
    toString(): string;
}
