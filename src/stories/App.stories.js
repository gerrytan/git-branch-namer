import React from "react";
import App from "../App";
import "../index.css";

export default {
  title: "<App>",
};

const useWindowTitleMock = () => ["foobar"];

export const main = () => <App useWindowTitle={useWindowTitleMock} />;
