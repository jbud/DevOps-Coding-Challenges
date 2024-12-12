import { useState } from "react";
import { getQuickJS, shouldInterruptAfterDeadline } from "quickjs-emscripten";
import { Challenge } from "../lib/types";

export const useTest = (): [
    string[],
    (code: string, currentChallenge: Challenge) => void
] => {
    const [result, setResult] = useState<string[]>([]);
    const arraysEqual = (arr1: any[], arr2: any[]) => {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    };

    /* const objectsEqual = (obj1: any, obj2: any) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }; */

    interface ParamGen {
        in: any;
        out: any;
    }
    const generateParams = (x: ParamGen, currentChallenge: Challenge) => {
        switch (currentChallenge.inType) {
            case "void":
                return "";
            case "array":
                if (currentChallenge.params === 1)
                    return "[" + x.in[0].toString() + "]";
                else {
                    let text = "";
                    x.in.forEach((y: any, i: number) => {
                        text += "[" + y.toString() + "]";
                        if (i < currentChallenge.params - 1) {
                            text += ",";
                        }
                    });
                    return text;
                }
            case "string":
                if (currentChallenge.params === 1) {
                    return '"' + x.in[0] + '"';
                } else {
                    let text = "";
                    x.in.forEach((y: string, i: number) => {
                        text += '"' + y + '"';
                        if (i < currentChallenge.params - 1) text += ",";
                    });
                    return text;
                }
            case "number":
                if (currentChallenge.params === 1) {
                    return x.in[0];
                } else {
                    let text = "";
                    x.in.forEach((y: number, i: number) => {
                        text += y;
                        if (i < currentChallenge.params - 1) text += ",";
                    });
                    return text;
                }
            default:
                return x.in.length === 1 ? x.in[0] : x.in[0] + "," + x.in[1];
        }
    };

    const evaluate = async (code: string) => {
        return getQuickJS()
            .then((QuickJS) => {
                const r = QuickJS.evalCode(code.trim(), {
                    shouldInterrupt: shouldInterruptAfterDeadline(
                        Date.now() + 1000
                    ),
                    memoryLimitBytes: 1024 * 1024,
                    maxStackSizeBytes: 1024 * 320,
                });
                const res = JSON.stringify(r);
                return [true, res];
            })
            .catch((e) => {
                console.log(e);
                let message = (e as Error).message;
                if (message.includes("interrupted"))
                    message = "Interrupted due to possible infinite loop!";
                return [false, message];
            });
    };

    const runTest = (code: string, currentChallenge: Challenge) => {
        setResult([]);
        currentChallenge.expectedOutputs.forEach((x) => {
            const testStr =
                currentChallenge.functionName +
                "(" +
                generateParams(x, currentChallenge) +
                ")";
            evaluate(code + " " + testStr).then((s) => {
                let passed = true;
                let message = "";
                if (s[0]) {
                    if (Array.isArray(x.out)) {
                        try {
                            if (!arraysEqual(JSON.parse(s[1] as string), x.out))
                                passed = false;
                        } catch (e) {
                            passed = false;
                            message =
                                testStr +
                                " => Expected [" +
                                x.out +
                                "] got " +
                                s[1];
                            setResult([message]);
                        }
                    } else if (s[1] != x.out) passed = false;
                    if (Array.isArray(x.out))
                        message =
                            testStr +
                            " => Expected [" +
                            x.out +
                            "] got " +
                            s[1];
                    else
                        message =
                            testStr + " => Expected " + x.out + " got " + s[1];
                    if (passed) message += " Passed!\n";
                    else message += " Failed!\n";
                    setResult((e) => [...e, message]);
                } else setResult([("ERROR: " + s[1]) as string]);
            });
        });
    };

    return [result, runTest];
};
