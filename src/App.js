import React from "react";
import logo from "./logo.svg";
import Header from "./common/Header";
import Page from "./Page";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/getstarted" component={Page} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
