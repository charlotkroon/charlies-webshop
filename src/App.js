import React from "react";
import {Route} from "react-router-dom";
import "./App.css";

import Directory from "./components/directory/directory";
import HomePage from "./pages/homepage/homepage";

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      <Directory />
    </div>
  );
}

export default App;
