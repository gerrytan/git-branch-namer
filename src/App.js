import React from "react";
import { useGitBranchCommand as useGitBranchCommandDI } from "./git-branch-command";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CheckIcon from "./CheckIcon";

const App = ({ useGitBranchCommand = useGitBranchCommandDI }) => {
  const [gitBranchCommand] = useGitBranchCommand();
  return (
    <div className="container">
      <div class="row">
        <div class="col-12 pt-2">
          <h5>git-branch-namer</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pre class="p-2 border border-dark bg-light rounded text-wrap mh-98">
            {gitBranchCommand ? gitBranchCommand : "Loading..."}
          </pre>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 d-flex justify-content-end">
          <button type="button" class="btn btn-sm btn-secondary mr-2">
            Copy
          </button>
          <button type="button" class="btn btn-sm btn-light">
            Config
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
