import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import cartReducer from "./components/reducers/cartReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
