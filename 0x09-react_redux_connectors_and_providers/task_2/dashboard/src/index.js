import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import uiReducer, {initialState} from "./reducers/uiReducer";
import {Map} from "immutable";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
      
  </React.StrictMode>,
  document.getElementById("root")
);