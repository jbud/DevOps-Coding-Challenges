import { useCallback, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { andromedaInit, andromeda } from "@uiw/codemirror-theme-andromeda";
import TestOutput from "./testOutput";
import { Challenge } from "../Pages/types";

interface Props {
    code: string;
    challengeSelect: Challenge;
}

const Ide = (props: Props) => {
    const [value, setValue] = useState(props.code);
    const onChange = useCallback((val: string, viewUpdate: any) => {
        setValue(val);
    }, []);

    useEffect(() => {
        setValue(props.challengeSelect.defaultEditor);
    }, [props]);

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
            <TestOutput code={value} currentChallenge={props.challengeSelect} />
        </div>
    );
};

export default Ide;
