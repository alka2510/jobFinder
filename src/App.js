import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./Home";
import Profile from "./components/Profile";
import JobBriefList from "./components/JobBriefList";
import CompanyList from "./components/CompanyList";
import GoogleAuth from "./components/GoogleAuth";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/find-jobs" exact component={JobBriefList} />
        <Route path="/companies" exact component={CompanyList} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/login" exact component={GoogleAuth} />
      </BrowserRouter>
    </div>
  );
};
export default App;
