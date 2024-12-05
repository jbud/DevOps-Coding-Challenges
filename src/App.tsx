import { useEffect, useState } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import "./App.css";
import Ide from "./components/ide";
import Page from "./Pages/Page";
import { Challenges } from "./challenges/challenges";
import Navigation from "./components/Navigation";

function App() {
    const [current, setCurrent] = useState(Challenges[0]);
    const chal = useMatch("/chal/:id");

    useEffect(() => {
        let n = 0;
        if (chal) {
            n = parseInt(chal.params.id!);
        }
        setCurrent(Challenges[n]);
    }, [chal, setCurrent]);

    return (
        <>
            <Navigation page={chal?.params.id} />
            <h1>DevOps Challenges</h1>
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Ide
                                code={current.defaultEditor}
                                challengeSelect={current}
                            />
                        }
                    />
                    <Route
                        path="/chal/:id"
                        element={
                            <Ide
                                code={current.defaultEditor}
                                challengeSelect={current}
                            />
                        }
                    />
                </Routes>
                <Page challengeSelect={current} />
            </div>
        </>
    );
}

export default App;
