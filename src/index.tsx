import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import setupStore from "./app/store";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
