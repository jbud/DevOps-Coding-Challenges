import { Challenge } from "./types";

export const Addition: Challenge = {
    title: "Addition",
    description:
        "Create a function that takes two numbers A, B and returns the sum.",
    outputText: [`add(3,7) ==> 10`, `add(1,2) ==> 3`, `add(4,12) ==> 16`],
    functionName: "add",
    defaultEditor: `function add(a,b) {
  return b; // are you up for the challenge??
}`,
    params: 2,
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
