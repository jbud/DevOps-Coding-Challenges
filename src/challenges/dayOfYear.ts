import { Challenge } from "../lib/types";

export const DayOfYear: Challenge = {
    title: "Day of Year",
    description:
        "Every year has 365 (366 if it's a leap year) days, given a string representing the date in MM/DD/YYYY return the day number of that year",
    outputText: [
        `dayOfYear("12/13/2020") ==> 348`,
        `dayOfYear("12/31/2000") ==> 366`,
        `dayOfYear("7/25/2015") ==> 206`,
    ],
    functionName: "dayOfYear",
    defaultEditor: `function dayOfYear(str) {
  return 1; // are you up for the challenge??
}`,
    params: 1,
    inType: "string",
    outType: "number",
    expectedOutputs: [
        {
            in: ["12/17/2020"],
            out: 352,
        },
        {
            in: ["12/31/2004"],
            out: 366,
        },
        {
            in: ["3/1/2004"],
            out: 61,
        },
        {
            in: ["5/3/1996"],
            out: 123,
        },
        {
            in: ["1/1/1111"],
            out: 1,
        },
    ],
};
