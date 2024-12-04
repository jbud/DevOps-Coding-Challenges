import { Challenge } from "./types";

interface Pages {
    challengeSelect: Challenge;
}

const Page = (props: Pages) => {
    return (
        <>
            <div className="test">
                <h3>{props.challengeSelect.title}</h3>
                <p>{props.challengeSelect.description}</p>
                <h4>Expected Output:</h4>
                {props.challengeSelect.outputText.map((x) => (
                    <p key={x}>{x}</p>
                ))}
            </div>
        </>
    );
};

export default Page;
