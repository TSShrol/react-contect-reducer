import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./context/ContextWithReducer";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './store/root.reducer';
const root = ReactDOM.createRoot(document.getElementById("root"));


const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    {/* instaling =>     npm i react-router-dom */}
    {/* <CounterProvider> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </CounterProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
