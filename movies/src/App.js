import React from "react";
import "./App.css";
import Movies from "./containers/Movies/Movies";
import logo from "./assets/logo.png";
import { Route, Link } from "react-router-dom";
import Favourites from "./containers/Favourites/Favourites";
function App() {
  return (
    <div>
      <div class="header header-fixed">
        <div class="navbar container">
          <div class="logo">
            <Link to="/">
              <img width="50px" height="50px" src={logo} alt="error" />
            </Link>
          </div>
          <input type="checkbox" id="navbar-toggle" />
          <label for="navbar-toggle">
            <i></i>
          </label>
          <nav class="menu">
            <ul>
              <li>
                <Link to="/">Search for a movie</Link>
              </li>
              <li>
                <Link to="/favourites">Favourites</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="page">
        <Route path="/" exact component={Movies} />
        <Route path="/favourites" exact component={Favourites} />
      </div>
    </div>
  );
}

export default App;
