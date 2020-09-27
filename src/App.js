/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:46:56
 * @Last Modified by:   hiyan
 * @Last Modified time: 2020-09-27 16:46:56
 */

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import bootstrap from "bootstrap";
import "./App.css";

import TutorialList from "./components/TutorialList";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand">Hiyan</a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              教程列表
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"addTutorial"} className="nav-link">
              新增教程
            </Link>
          </li>
          <li className="nav-item"></li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route path={["/", "/tutorials"]} exact component={TutorialList} />
          <Route path={"/addTutorial"} exact component={AddTutorial} />
          <Route path="tutorial" component={Tutorial} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
