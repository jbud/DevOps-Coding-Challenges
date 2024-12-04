import { Challenge } from "./types";

export const Template: Challenge = {
    // Name your challenge
    title: "Your Challenge",
    // Describe your challenge
    description: "How to complete your challenge",
    outputText: [
        `yourFunction(3,7) ==> 10`,
        `add(1,2) ==> 3`,
        `add(4,12) ==> 16`,
    ],
    // The name of your function to be executed and evaluated:
    functionName: "yourFunction",
    // The default text for the editor (!Important you should include the correct name from functionName):
    defaultEditor: `function yourFunction(a,b) {
  return b; // are you up for the challenge??
}`,
    // the number of parameters for your function's input (currently limited to 1 or 2):
    params: 2,
    // Expected outputs for given inputs during evaluation:
    // NOTE: Challenges are evaluated real-time for each object in this array, keep it small (recommend max 3 tests)
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
