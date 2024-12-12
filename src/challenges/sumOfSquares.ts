import { Challenge } from "../lib/types";

export const SumOfSquares: Challenge = {
    title: "Sum of Squares",
    description:
        "Create a function that takes an integer N and returns the sum of all square integers up to and including N.",
    outputText: [
        `squaresSum(3) ==> 14`,
        `1² + 2² + 3² = 14`,
        `squaresSum(12) ==> 650`,
        `squaresSum(13) ==> 819`,
    ],
    functionName: "squaresSum",
    defaultEditor: `function squaresSum(num) {
  return num; // are you up for the challenge??
}`,
    params: 1,
    inType: "number",
    outType: "number",
    expectedOutputs: [
        {
            in: [3],
            out: 14,
        },
        {
            in: [12],
            out: 650,
        },
        {
            in: [13],
            out: 819,
        },
    ],
};
