import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

const myApp = document.getElementById("app");

if (!myApp) {
  throw new Error('Unable to find the app root element with id "app".');
}

createRoot(myApp).render(createElement(App));
