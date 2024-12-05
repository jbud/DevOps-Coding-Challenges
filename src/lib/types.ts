interface ExpectedOutputs {
    in: any[];
    out: any;
}
/*
TODO: Represent types for params/outputs
String
Number
Boolean
Array
Object
void -> in only
*/
export type Challenge = {
    title: string;
    description: string;
    outputText: string[];
    functionName: string;
    defaultEditor: string;
    params: number;
    inType: string;
    outType: string;
    expectedOutputs: ExpectedOutputs[];
};
