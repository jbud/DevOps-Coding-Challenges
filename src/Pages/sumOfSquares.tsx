import { Challenge } from "./types";

const challenge: Challenge = {
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

// TODO: fix issue that causes some tests to not properly be processed by QuickJS
const generateTestString = () => {
    let output = ``;
    challenge.expectedOutputs.map((x, i) => {
        // for now supports only 1 or 2 params, will adapt in the future.
        output += `(${challenge.functionName}(${
            challenge.params === 1 ? x.in[0] : x.in[0] + "," + x.in[1]
        }) === ${x.out}) ? "PASS!" : "FAIL!" ${
            i === challenge.expectedOutputs.length - 1 ? "\n" : "+"
        } \n`;
    });
    return output;
};

export const TestCode = generateTestString();
//export const TestCode = "(squaresSum(3) === 14 && squaresSum(12) === 650 && squaresSum(13) === 819) ? 'Pass!' : 'Fail!'";

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
