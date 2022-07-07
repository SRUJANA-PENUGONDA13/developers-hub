import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./frontend/redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";

// Call make Server
makeServer();

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById("root")
);
