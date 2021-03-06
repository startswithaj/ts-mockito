export declare class MockableFunctionsFinder {
    private functionNameRegex;
    private cleanFunctionNameRegex;
    private excludedFunctionNames;
    find(code: string): string[];
    private isMockable;
}
