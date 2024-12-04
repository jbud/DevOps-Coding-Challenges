import { useEffect, useState } from "react";
import { getQuickJS, shouldInterruptAfterDeadline } from "quickjs-emscripten";

interface Props {
    code: string;
    test: string;
}

const TestOutput = (props: Props) => {
    const [result, setResult] = useState("");
    const tests = (code: string, testing: string) => {
        const r = code + `\n` + testing;
        console.log(r);
        return r;
    };
    const evaluate = (code: string) => {
        getQuickJS()
            .then((QuickJS) => {
                const r = QuickJS.evalCode(code, {
                    shouldInterrupt: shouldInterruptAfterDeadline(
                        Date.now() + 1000
                    ),
                    memoryLimitBytes: 1024 * 1024,
                });
                setResult(JSON.stringify(r));
            })
            .catch((e) => {
                console.log(e);
                const message = (e as Error).message;
                setResult(message);
            });
    };

    useEffect(() => {
        evaluate(tests(props.code, props.test));
    }, [props]);

    return <div className="output">{result}</div>;
};

export default TestOutput;
