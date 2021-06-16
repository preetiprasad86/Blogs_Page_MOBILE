import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/Title";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|our-projects)">
          <Title>Our Projects</Title>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
