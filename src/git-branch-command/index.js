import { useState, useEffect } from "react";

export const useGitBranchCommand = () => {
  const [windowTitle, setWindowTitle] = useState();
  useEffect(() => {
    if (windowTitle === undefined) {
      // how to apply https://stackoverflow.com/questions/48584556/eslint-chrome-is-not-defined-no-undef
      // and extend eslint in create-react-app?
      // eslint-disable-next-line no-undef
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        setWindowTitle(tabs[0].title);
      });
    }
  });
  return [windowTitle];
};
