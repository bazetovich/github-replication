import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../containers/Header";
import Home from "../containers/pages/Home";
import Repo from "../containers/pages/Repo";

const App = () => {
    return (
        <Router>
            <Header />
            <div className='main-container'>
                <Route exact path="/" component={Home} />
                <Route path="/repo/:id" component={Repo} />
            </div>
        </Router>
    )
}

export default App;
