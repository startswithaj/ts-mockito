import { Matcher } from "./Matcher";
export declare class BetweenMatcher extends Matcher {
    private min;
    private max;
    constructor(min: number, max: number);
    match(value: any): boolean;
    toString(): string;
}
