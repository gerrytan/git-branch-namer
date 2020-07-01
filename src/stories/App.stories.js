import React from "react";
import App from "../App";
import "../index.css";
import "./App.stories.css";

export default {
  title: "<App>",
};

const useWindowTitleMock = () => ["foobar"];

export const main = () => (
  <div class="container">
    <App useWindowTitle={useWindowTitleMock} />
  </div>
);
