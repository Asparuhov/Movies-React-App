import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { BrowserRouter as Router } from "react-router-dom";



const middle = (store) => {
  return (next) => {
    return (action) => {
      console.log(`middleware running`);
      const result = next(action);
      return result;
    };
  };
};
const store = createStore(reducer, applyMiddleware(middle));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
