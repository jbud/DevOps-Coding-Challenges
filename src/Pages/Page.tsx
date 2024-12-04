import { Challenge } from "./types";
import { SumOfSquares } from "./sumOfSquares";
import { Addition } from "./addition";

export const CurrentChallenge = Addition;

const Page = () => {
    return (
        <>
            <div className="test">
                <h3>{CurrentChallenge.title}</h3>
                <p>{CurrentChallenge.description}</p>
                <h4>Expected Output:</h4>
                {CurrentChallenge.outputText.map((x) => (
                    <p key={x}>{x}</p>
                ))}
            </div>
        </>
    );
};

export default Page;
