import React from "react";
import { useWindowTitle as useWindowTitleDI } from "./window-title";
import "./App.css";

const App = ({ useWindowTitle = useWindowTitleDI }) => {
  const [windowTitle] = useWindowTitle();
  return (
    <div className="App">
      <header className="App-header">Window title is {windowTitle}</header>
    </div>
  );
};

export default App;
