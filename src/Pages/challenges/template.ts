import { Challenge } from "../types";

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
    // the number of parameters for your function's input (currently limited to 1 or 2):
    // NOTE: Arrays are currently limited to 1 param
    // ex: arrayFunction([1,2,3]); is acceptable
    // but arrayFunction([1,2,3],[4,5,6]) is not supported currently
    params: 2,
    // Expected outputs for given inputs during evaluation:
    // NOTE: Challenges are evaluated real-time for each object in this array, keep it small (recommend max 3 tests)
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
