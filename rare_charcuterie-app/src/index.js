import React from "react";
import ReactDOM from "react-dom";
// import './App.scss'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router} from "react-router-dom";
import reducer from './reducers/index'
import rootReducer from "./reducers/rootReducer"



// const reducer = combineReducers(reducers)
 const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
