import { useState, useEffect } from "react";

// This config is intended to be configurable by user
const config = {
  branchCommand: "git checkout -b",
  branchPrefix: "issue/",
  strReplaces: [
    {
      regexOrSubstr: / - [^-]+$/i,
      replacement: "",
      description: 'Remove " - SITENAME" suffix at the end of Jira sites',
    },
  ],
};

export const windowTitle2BranchName = (windowTitle) => {
  return windowTitle
    .replace(/\s+/g, "-") // replace consecutive whitespaces with a single -
    .replace(/[^\w-]/g, ""); // only allow A-Za-z0-9-_, strip all other characters
};

export const useGitBranchCommand = () => {
  const [gitBranchCommand, setGitBranchCommand] = useState();
  useEffect(() => {
    if (gitBranchCommand === undefined) {
      // how to apply https://stackoverflow.com/questions/48584556/eslint-chrome-is-not-defined-no-undef
      // and extend eslint in create-react-app?
      // eslint-disable-next-line no-undef
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let windowTitle = tabs[0].title;

        // Useful to apply string replace only to some domain
        const url = tabs[0].url; // ex: "https://foobar.atlassian.net/browse/APPY-2"

        // apply custom string replacements
        config.strReplaces.forEach((strReplace) => {
          windowTitle = windowTitle.replace(
            strReplace.regexOrSubstr,
            strReplace.replacement
          );
        });

        const branchName = windowTitle2BranchName(windowTitle);

        setGitBranchCommand(
          `${config.branchCommand} "${config.branchPrefix}${branchName}"`
        );
      });
    }
  });
  return [gitBranchCommand];
};
