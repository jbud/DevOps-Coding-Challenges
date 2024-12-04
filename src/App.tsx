import "./App.css";
import Ide from "./components/ide";
import Page, { DefaultCode, TestCode } from "./Pages/sumOfSquares";

function App() {
    return (
        <>
            <h1>DevOps Challenges</h1>
            <div className="container">
                <Ide code={DefaultCode} tests={TestCode} />
                <Page />
            </div>
        </>
    );
}

export default App;
