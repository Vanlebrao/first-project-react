import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";

function Routes() {
  return (
    <Router>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios" component={Users} />
      
    </Router>
  );
}

export default Routes;
