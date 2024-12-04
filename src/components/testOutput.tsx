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
                //console.log(e);
                const message = (e as Error).message;
                setResult([message]);
                return "failed";
            });
    };

    const runTest = (code: string) => {
        setResult([]);
        let t = props.currentChallenge.expectedOutputs.map((x) => {
            const d = x.in.length === 1 ? x.in[0] : x.in[0] + "," + x.in[1];
            const str =
                code +
                " " +
                props.currentChallenge.functionName +
                "(" +
                d +
                ")";
            evaluate(str).then((s) => {
                let passed = true;
                if (s != x.out) passed = false;
                let message = "Expected " + x.out + " got " + s;
                if (passed) message += " Passed!\n";
                else message += " Failed!\n";
                setResult((e) => [...e, message]);
            });
        });
    };

    useEffect(() => {
        runTest(props.code);
    }, [props]);

    return (
        <div className="output">
            {result.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

export default TestOutput;
