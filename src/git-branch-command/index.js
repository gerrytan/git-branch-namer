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

export const issueKeyFromUrl = (url) => {
  let match;

  // Classic board URL
  match = url.match(/RapidBoard.jspa.*selectedIssue=([^&]+)/);
  if (match && match.length >= 2) {
    return match[1];
  }

  // Nextgen board URL
  match = url.match(/jira\/software\/projects.*selectedIssue=([^&]+)/);
  if (match && match.length >= 2) {
    return match[1];
  }

  // Browse URL
  match = url.match(/browse\/([^/]+)/);
  if (match && match.length >= 2) {
    return match[1];
  }

  return undefined;
};

export const useGitBranchCommand = () => {
  const [issueKeyAndSummary, setIssueKeyAndSummary] = useState({
    issueKey: undefined,
    summary: undefined,
    fetchInProgress: false,
    fetchComplete: false,
  });

  const {
    issueKey,
    summary,
    fetchInProgress,
    fetchComplete,
  } = issueKeyAndSummary;

  if (!fetchInProgress && !fetchComplete) {
    setIssueKeyAndSummary({ ...issueKeyAndSummary, fetchInProgress: true });

    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const issueKey = issueKeyFromUrl(tabs[0].url);

      // eslint-disable-next-line no-undef
      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "SUMMARY" },
        function (response) {
          console.log("received response:");
          console.log(response);
          setIssueKeyAndSummary({
            ...issueKeyAndSummary,
            issueKey,
            // TODO this needs a more appropriate name
            summary: windowTitle2BranchName(response.summary),
            fetchInProgress: false,
            fetchComplete: true,
          });
        }
      );
    });
  }

  // Strip punctuation, replace whitespaces with dash, etc.
  const normalisedSummary = summary;

  return [
    fetchComplete
      ? `${config.branchCommand} "${config.branchPrefix}${issueKey}-${normalisedSummary}"`
      : undefined,
  ];
};
