import "./App.css";
import Ide from "./components/ide";
import Page from "./Pages/Page";
import { CurrentChallenge } from "./Pages/Page";

function App() {
    return (
        <>
            <h1>DevOps Challenges</h1>
            <div className="container">
                <Ide code={CurrentChallenge.defaultEditor} />
                <Page />
            </div>
        </>
    );
}

export default App;
