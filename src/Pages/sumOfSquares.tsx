import { Challenge } from "./types";

export const challenge: Challenge = {
    title: "Sum of Squares",
    description:
        "Create a function that takes a number N and returns the sum of all square numbers up to and including N.",
    outputText: [
        `squaresSum(3) ==> 14`,
        `squaresSum(12) ==> 650`,
        `squaresSum(13) ==> 819`,
    ],
    functionName: "squaresSum",
    defaultEditor: `function squaresSum(num) {
  return num; // are you up for the challenge??
}`,
    params: 1,
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

export const DefaultCode = challenge.defaultEditor;

const Page = () => {
    return (
        <>
            <div className="test">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <h4>Expected Output:</h4>
                {challenge.outputText.map((x) => (
                    <p key={x}>{x}</p>
                ))}
            </div>
        </>
    );
};

export default Page;
