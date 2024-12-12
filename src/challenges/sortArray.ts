import { Challenge } from "../lib/types";

export const SortArray: Challenge = {
    title: "Sort the Array",
    description:
        "You are given an unsorted array of numbers, return the array sorted in ascending order",
    outputText: [
        `sortArray([3,7,1,2]) ==> [1,2,3,7]`,
        `sortArray([99,7,48,-7]) ==> [-7,7,48,99]`,
        `sortArray([0,-1]) ==> [-1,0]`,
    ],
    functionName: "sortArray",
    defaultEditor: `function sortArray(arr) {
  return arr; // are you up for the challenge??
}`,
    params: 1,
    inType: "array",
    outType: "array",
    expectedOutputs: [
        {
            in: [[3, 7, 1, 2]],
            out: [1, 2, 3, 7],
        },
        {
            in: [[99, 7, 48, -7]],
            out: [-7, 7, 48, 99],
        },
        {
            in: [[0, -1]],
            out: [-1, 0],
        },
    ],
};
