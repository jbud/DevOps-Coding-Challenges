import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { andromedaInit, andromeda } from "@uiw/codemirror-theme-andromeda";
import TestOutput from "./testOutput";

interface Props {
    code: string;
    tests: string;
}

const Ide = (props: Props) => {
    const [value, setValue] = useState(props.code);
    const [test] = useState(props.tests);
    const onChange = useCallback((val: string, viewUpdate: any) => {
        setValue(val);
    }, []);
    return (
        <div className="ide">
            <CodeMirror
                className="full"
                value={value}
                theme={andromedaInit({
                    settings: {
                        fontFamily: "JetBrainsMono",
                    },
                })}
                height="1000px"
                extensions={[andromeda, javascript({ jsx: true })]}
                onChange={onChange}
            />
            <TestOutput code={value} test={test} />
        </div>
    );
};

export default Ide;
