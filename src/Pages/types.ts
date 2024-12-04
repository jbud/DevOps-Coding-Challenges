interface ExpectedOutputs {
    in: any[];
    out: any;
}

export type Challenge = {
    title: string;
    description: string;
    outputText: string[];
    functionName: string;
    defaultEditor: string;
    params: number;
    expectedOutputs: ExpectedOutputs[];
};
