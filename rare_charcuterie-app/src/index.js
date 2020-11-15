import React from "react";
import ReactDOM from "react-dom";
import './App.scss'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { BrowserRouter } from "react-router-dom";
import itemsReducer from "./reducers/itemsReducer.js";



 const store = createStore(itemsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
