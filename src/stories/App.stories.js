import React from "react";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "./App.stories.css";

export default {
  title: "<App>",
};

const useWindowTitleMock = () => ["foobar"];

export const main = () => (
  <div class="story-container">
    <App useWindowTitle={useWindowTitleMock} />
  </div>
);
