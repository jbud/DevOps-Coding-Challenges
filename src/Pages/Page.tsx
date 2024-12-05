import { IconButton } from "@mui/material";
import { Challenge } from "../lib/types";
import GitHubIcon from "@mui/icons-material/GitHub";
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
                <p className="notice">* User Support coming soon!</p>
            </div>
            <div className="bottom">
                <a
                    href="https://github.com/jbud/DevOps-Coding-Challenges"
                    target="_blank"
                >
                    <IconButton
                        sx={{
                            color: "aliceblue",
                            fontFamily: "JetBrainsMono",
                            textDecoration: "none",
                            textAlign: "center",
                            fontSize: "1em",
                        }}
                    >
                        <GitHubIcon />
                        Add a new challenge!
                    </IconButton>
                </a>
            </div>
        </>
    );
};

export default Page;
