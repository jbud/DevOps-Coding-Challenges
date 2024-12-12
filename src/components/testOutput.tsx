import { useEffect, useState } from "react";
import { Challenge } from "../lib/types";
import { useTest } from "../hooks/useTest";

interface Props {
    code: string;
    currentChallenge: Challenge;
}

const TestOutput = (props: Props) => {
    const [result, setResult] = useState([""]);
    const [testResult, getTestResult] = useTest();
    const [loopSafety, setLoopSafety] = useState(0);

    const runTest = (code: string) => {
        getTestResult(code, props.currentChallenge);
    };

    useEffect(() => {
        if (testResult[0] !== undefined) {
            if (
                testResult[0].includes(
                    "ERROR: '" +
                        props.currentChallenge.functionName +
                        "' is not defined"
                )
            ) {
                // State didn't update between challenges, we will trigger the refresh effect here:
                setLoopSafety((e) => e + 1);
            }
        }
        setResult(testResult);
    }, [testResult]);

    useEffect(() => {
        if (loopSafety < 3) {
            runTest(props.code); // attempt to refresh state.
        } else {
            setResult([
                "ERROR: '" +
                    props.currentChallenge.functionName +
                    "' is not defined",
            ]); // We will fall through to the original error, likely caused by misspelling the function.
        }
    }, [loopSafety]);

    useEffect(() => {
        runTest(props.code);
        setLoopSafety(0);
    }, [props]);

    return (
        <div className="output">
            <div>Results:</div>
            {result.map((item, index) =>
                index === 0 ? (
                    result[0].includes("ERROR") ? (
                        <p style={{ color: "orange" }} key={index}>
                            {result[0]}
                        </p>
                    ) : (
                        <p
                            style={{
                                color: result[index].includes("Failed!")
                                    ? "Red"
                                    : result[index].includes("Passed!")
                                    ? "greenyellow"
                                    : "inherit",
                            }}
                            key={index}
                        >
                            {item}
                        </p>
                    )
                ) : index >=
                  props.currentChallenge.expectedOutputs.length + 1 ? (
                    <p key={index}></p>
                ) : (
                    <p
                        style={{
                            color: result[index].includes("Failed!")
                                ? "Red"
                                : result[index].includes("Passed!")
                                ? "greenyellow"
                                : "inherit",
                        }}
                        key={index}
                    >
                        {item}
                    </p>
                )
            )}
        </div>
    );
};

export default TestOutput;
