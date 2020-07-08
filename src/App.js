import React, { useCallback } from "react";
import { useGitBranchCommand as useGitBranchCommandDI } from "./git-branch-command";

import githubMarkLogo from "./GitHub-Mark-120px-plus.png";
import { CopyButton } from "./copy-button";

const App = ({ useGitBranchCommand = useGitBranchCommandDI }) => {
  const [gitBranchCommand] = useGitBranchCommand();

  const onCopyClick = useCallback(() => {
    navigator.clipboard.writeText(gitBranchCommand);
  }, [gitBranchCommand]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pt-2">
          <h5>git-branch-namer</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <pre
            className="p-2 border border-dark bg-light rounded text-wrap"
            style={{ maxHeight: 98 }}
          >
            {gitBranchCommand ? gitBranchCommand : "Loading..."}
          </pre>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6 d-flex">
          <a
            href="https://github.com/gerrytan/git-branch-namer"
            className="btn btn-link text-secondary p-0"
            target="_new"
            data-toggle="tooltip" // bootstrap tooltip doesn't work yet, jQuery in react? Hmm... 😕
            data-placement="right"
            title="Support this project in Github"
          >
            <img
              src={githubMarkLogo}
              alt="Github mark logo"
              style={{ width: 25, height: 25 }}
            />
          </a>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <CopyButton onClick={onCopyClick} />

          {/* Coming soon 🤞
          <button type="button" class="btn btn-sm btn-light">
            Config
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default App;
