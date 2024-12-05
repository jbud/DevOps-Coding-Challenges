import { Challenge } from "../types";

export const SortArrays: Challenge = {
    // Name your challenge
    title: "Combination Sort",
    // Describe your challenge
    description:
        "Combine the two arrays, REMOVE any duplicates, and sort the array.",
    outputText: [
        `combineAndSort([3, 7, 1, 2], [9,7,-1,14]) ==> [-1, 1, 2, 3, 7, 9, 14]`,
        `combineAndSort([99,7,48,-7]) ==> [-7,7,48,99]`,
        `combineAndSort([0,-1]) ==> [-1,0]`,
    ],
    // The name of your function to be executed and evaluated:
    functionName: "combineAndSort",
    // The default text for the editor (!Important you should include the correct name from functionName):
    defaultEditor: `function combineAndSort(arr1, arr2) {
  return arr1; // are you up for the challenge??
}`,
    // the number of parameters for your function's input (currently limited to 1 or 2):
    params: 2,
    inType: "array",
    outType: "array",
    // Expected outputs for given inputs during evaluation:
    // NOTE: Challenges are evaluated real-time for each object in this array, keep it small (recommend max 3 tests)
    expectedOutputs: [
        {
            in: [
                [3, 7, 1, 2],
                [9, 7, -1, 14],
            ],
            out: [-1, 1, 2, 3, 7, 9, 14],
        },
        {
            in: [
                [88, 2, 154, 0],
                [-22, 9, -22, -22],
            ],
            out: [-22, 0, 2, 9, 88, 154],
        },
        {
            in: [[0], [-1]],
            out: [-1, 0],
        },
    ],
};
