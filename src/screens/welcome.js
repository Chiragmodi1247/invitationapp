import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import signin from "../components/signin";
import SignUp from "../components/signup";
import forget from "../components/forget";

function welcome() {
  return (
    <Router>
      <div>
        <Route exact path="/log" component={signin} />
        <Route path="/reg" component={SignUp} />
        <Route path="/forpas" component={forget} />
      </div>
    </Router>
  );
}

export default welcome;
