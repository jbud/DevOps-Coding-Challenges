import { Challenge } from "../lib/types";

export const Template: Challenge = {
    // Name your challenge
    title: "Your Challenge",
    // Describe your challenge
    description: "How to complete your challenge",
    outputText: [
        `yourFunction(3,7) ==> 10`,
        `yourFunction(1,2) ==> 3`,
        `yourFunction(4,12) ==> 16`,
    ],
    // The name of your function to be executed and evaluated:
    functionName: "yourFunction",
    // The default text for the editor (!Important you should include the correct name from functionName):
    defaultEditor: `function yourFunction(a,b) {
  return b; // are you up for the challenge??
}`,
    // the number of parameters for your function's input
    /*
        Supported inTypes/outTypes and their input params
        void: 0 params (NOTE: inType only, seems silly to run an output test on a void output)
        number: 1-255 (may be limited based on memory on target machine recommend between 1-10 at most)
        string: 1-255 (may be limited based on memory on target machine recommend between 1-10 at most)
        array: 1-255 (may be limited based on memory on target machine recommend between 1-10 at most)
        object: -1 (not currently supported)
        boolean: -1 (support coming soon)
        mixed: -1000 (not supported: This is quite an undertaking with current implementation feel free to tackle a PR)
    */
    // NOTE: params amount should be fixed for all tests, for anything that requires variable params
    // recommend the "array" type passing an array of the variable number of params (see sortArray.ts for example)
    params: 2,
    inType: "number",
    outType: "number",
    // Expected outputs for given inputs during evaluation:
    // for input (in) each value in the base array is expected to be a parameter:
    // example, for an add(a,b) challenge in is an values for a and b,
    // out is the result (for this example, the sum)
    /*
        expectedOutputs: [
        {
            in: [1, 2],
            out: 3,
        },
        ];
    */
    // NOTE: Challenges are evaluated real-time for each object in this array, keep it small (recommend max 5 tests)
    // NOTE: Array challenges must have input array wrapped in another array
    // in: [[1,2,3]] is acceptable
    // but in: [1,2,3] will assume each of 1,2,3 is a param.
    expectedOutputs: [
        {
            in: [3, 7],
            out: 10,
        },
        {
            in: [1, 2],
            out: 3,
        },
        {
            in: [-5, 5],
            out: 0,
        },
    ],
};
