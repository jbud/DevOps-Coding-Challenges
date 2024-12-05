import { Challenge } from "../lib/types";

export const SortArray: Challenge = {
    // Name your challenge
    title: "Sort the Array",
    // Describe your challenge
    description: "How to complete your challenge",
    outputText: [
        `sortArray([3,7,1,2]) ==> [1,2,3,7]`,
        `sortArray([99,7,48,-7]) ==> [-7,7,48,99]`,
        `sortArray([0,-1]) ==> [-1,0]`,
    ],
    // The name of your function to be executed and evaluated:
    functionName: "sortArray",
    // The default text for the editor (!Important you should include the correct name from functionName):
    defaultEditor: `function sortArray(arr) {
  return arr; // are you up for the challenge??
}`,
    // the number of parameters for your function's input (currently limited to 1 or 2):
    params: 1,
    inType: "array",
    outType: "array",
    // Expected outputs for given inputs during evaluation:
    // NOTE: Challenges are evaluated real-time for each object in this array, keep it small (recommend max 3 tests)
    expectedOutputs: [
        {
            in: [[3, 7, 1, 2]],
            out: [1, 2, 3, 7],
        },
        {
            in: [Array([99, 7, 48, -7])],
            out: [-7, 7, 48, 99],
        },
        {
            in: [Array([0, -1])],
            out: [-1, 0],
        },
    ],
};
