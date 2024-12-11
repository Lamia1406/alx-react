import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import {createStore} from "react-redux";
import uiReducer, {initialState} from "./reducers/uiReducer";
import {Map} from "immutable";
const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
      <App store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);