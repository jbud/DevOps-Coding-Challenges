import { useEffect, useState } from "react";
import { getQuickJS } from "quickjs-emscripten";
import { Challenge } from "../Pages/types";

interface Props {
    code: string;
    currentChallenge: Challenge;
}

const TestOutput = (props: Props) => {
    const [result, setResult] = useState([""]);
    const evaluate = async (code: string) => {
        return getQuickJS()
            .then((QuickJS) => {
                const r = QuickJS.evalCode(code.trim());
                const res = JSON.stringify(r);
                return res;
            })
            .catch((e) => {
                console.log(e);
                const message = (e as Error).message;
                setResult([message]);
                return "failed";
            });
    };
    interface ParamGen {
        in: any;
        out: any;
    }
    const generateParams = (x: ParamGen) => {
        switch (props.currentChallenge.inType) {
            case "array":
                return "[" + x.in[0].toString() + "]";
            case "string":
                return x.in.length === 1
                    ? '"' + x.in[0] + '"'
                    : '"' + x.in[0] + '"' + "," + '"' + x.in[1] + '"';
            case "number":
            default:
                return x.in.length === 1 ? x.in[0] : x.in[0] + "," + x.in[1];
        }
    };

    const arraysEqual = (arr1: any[], arr2: any[]) => {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    };

    const objectsEqual = (obj1: any, obj2: any) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };

    const runTest = (code: string) => {
        setResult([]);
        let t = props.currentChallenge.expectedOutputs.map((x) => {
            const d = generateParams(x);
            const testStr = props.currentChallenge.functionName + "(" + d + ")";
            const str = code + " " + testStr;

            evaluate(str).then((s) => {
                let passed = true;
                let message = "";
                if (Array.isArray(x.out)) {
                    try {
                        if (!arraysEqual(JSON.parse(s), x.out)) passed = false;
                    } catch (e) {
                        passed = false;
                        message =
                            testStr + " => Expected [" + x.out + "] got " + s;
                    }
                } else if (s != x.out) passed = false;
                if (Array.isArray(x.out))
                    message = testStr + " => Expected [" + x.out + "] got " + s;
                else message = testStr + " => Expected " + x.out + " got " + s;
                if (passed) message += " Passed!\n";
                else message += " Failed!\n";
                setResult((e) => [...e, message]);
            });
        });
        return true;
    };

    useEffect(() => {
        runTest(props.code);
    }, [props]);

    return (
        <div className="output">
            <div>Results:</div>
            {result.map((item, index) =>
                result.length >
                props.currentChallenge.expectedOutputs.length ? (
                    index === 0 ? (
                        result[0] !==
                        "'" +
                            props.currentChallenge.functionName +
                            "' is not defined" ? (
                            <div style={{ color: "orange" }} key={index}>
                                {result[0]}
                            </div>
                        ) : (
                            <div key={index}>Start Typing to Evaluate</div>
                        )
                    ) : index >=
                      props.currentChallenge.expectedOutputs.length + 1 ? (
                        <div key={index}></div>
                    ) : (
                        <div key={index}></div>
                    )
                ) : (
                    <div
                        style={{
                            color: result[0].includes("Failed!")
                                ? "Red"
                                : result[0].includes("Passed!")
                                ? "greenyellow"
                                : "inherit",
                        }}
                        key={index}
                    >
                        {item}
                    </div>
                )
            )}
        </div>
    );
};

export default TestOutput;
