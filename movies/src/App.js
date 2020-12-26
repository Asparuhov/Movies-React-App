import React from "react";
import "./App.css";
import Movies from "./containers/Movies/Movies";
import logo from './assets/logo.png'
import { Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div class="header header-fixed">
        <div class="navbar container">
          <div class="logo">
            <Link to="/"><img width='30px' height='30px' src={logo} alt='error'/></Link>
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
              <li>
                <Link to="/watch-later">Watch later</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div  class='page'>
        <Route path="/" exact component={Movies} />
        <Route path="/favourites" exact render={() => <h1>Favourites</h1>} />
        <Route path="/watch-later" exact render={() => <h1>watch later</h1>} />
      </div>
    </div>
  );
}

export default App;
