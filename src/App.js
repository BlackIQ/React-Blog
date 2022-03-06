import React from "react";

import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <Home />
            </div>
        </React.Fragment>
    );
}

export default App;
