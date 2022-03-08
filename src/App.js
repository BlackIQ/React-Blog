import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./components/navbar";
import Create from "./pages/create";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Notfound from "./pages/notfound";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/create">
                            <Create />
                        </Route>
                        <Route path="/blog/:id">
                            <Blog />
                        </Route>
                        <Route path='*'>
                            <Notfound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
