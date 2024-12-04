import { Challenge } from "../types";

export const NumLeapYears: Challenge = {
    // Name your challenge
    title: "Number of Leap Years",
    // Describe your challenge
    description:
        "Given a range of years as a string, return the number of leap years there are within the range (inclusive).",
    outputText: [
        `numLeapYears("1980-1984") ==> 2`,
        `numLeapYears("2000-2024") ==> 7`,
        `numLeapYears("1600-2008") ==> 100`,
    ],
    // The name of your function to be executed and evaluated:
    functionName: "numLeapYears",
    // The default text for the editor (!Important you should include the correct name from functionName):
    defaultEditor: `function numLeapYears(str) {
  return 1; // are you up for the challenge??
}`,
    // the number of parameters for your function's input (currently limited to 1 or 2):
    params: 1,
    // Expected outputs for given inputs during evaluation:
    // NOTE: Challenges are evaluated real-time for each object in this array, keep it small (recommend max 3 tests)
    expectedOutputs: [
        {
            in: ["1980-1984"],
            out: 2,
        },
        {
            in: ["2000-2024"],
            out: 7,
        },
        {
            in: ["1600-2008"],
            out: 100,
        },
    ],
};
