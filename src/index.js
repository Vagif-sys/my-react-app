import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Content from "./components/Common/Content";
import "./styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Content className="main" />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
