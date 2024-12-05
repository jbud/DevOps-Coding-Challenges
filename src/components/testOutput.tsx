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
        if (Array.isArray(x.in[0])) {
            return "[" + x.in[0].toString() + "]";
        }
        return x.in.length === 1 ? x.in[0] : x.in[0] + "," + x.in[1];
    };

    const arraysEqual = (arr1: any[], arr2: any[]) => {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
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
                result.length > props.currentChallenge.expectedOutputs.length ||
                false ? (
                    <div key={index}></div>
                ) : (
                    <div key={index}>{item}</div>
                )
            )}
        </div>
    );
};

export default TestOutput;
