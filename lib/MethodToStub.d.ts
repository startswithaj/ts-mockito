import { Matcher } from "./matcher/type/Matcher";
import { MethodStubCollection } from "./MethodStubCollection";
import { Mocker } from "./Mock";
export declare class MethodToStub {
    methodStubCollection: MethodStubCollection;
    matchers: Matcher[];
    mocker: Mocker;
    name: string;
    constructor(methodStubCollection: MethodStubCollection, matchers: Matcher[], mocker: Mocker, name: string);
}
