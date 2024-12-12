import { Challenge } from "../lib/types";

const dobToDays = (str: string): number =>
    Math.floor(
        (Number(new Date()) - Number(new Date(str))) / (1000 * 60 * 60 * 24)
    );

export const DaysOld: Challenge = {
    title: "Days Old",
    description:
        "How many days old is somebody? Given a date of birth represented as a string, calculate how many days old that person is",
    outputText: [
        `daysOld("12/13/2020") ==> ${dobToDays("12/13/2020")}`,
        `daysOld("12/31/2000") ==> ${dobToDays("12/31/2000")}`,
        `daysOld("07/25/2015") ==> ${dobToDays("07/25/2015")}`,
    ],
    functionName: "daysOld",
    defaultEditor: `function daysOld(str) {
  return 1; // are you up for the challenge??
}`,
    params: 1,
    inType: "string",
    outType: "number",
    expectedOutputs: [
        {
            in: ["11/01/1988"],
            out: dobToDays("11/01/1988"),
        },
        {
            in: ["11/17/2000"],
            out: dobToDays("11/17/2000"),
        },
        {
            in: ["04/13/2021"],
            out: dobToDays("04/13/2021"),
        },
        {
            in: ["08/23/2024"],
            out: dobToDays("08/23/2024"),
        },
    ],
};
