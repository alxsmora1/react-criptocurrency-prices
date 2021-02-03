import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";

import { Switch, Route, HashRouter } from "react-router-dom";

import Layout from "./layout/Layout";

function App() {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Layout />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
