import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
