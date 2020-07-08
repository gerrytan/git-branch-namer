import React from "react";
import App from "./App";

const MockPopup = ({ children }) => (
  <div style={{ border: "2px solid #DC3545", width: 400 }}>{children}</div>
);

export default {
  title: "<App>",
  decorators: [(storyFn) => <MockPopup>{storyFn()}</MockPopup>],
};

const useGitBranchCommandMock = (command) => () => [command];

export const SingleLine = () => (
  <App
    useGitBranchCommand={useGitBranchCommandMock(
      'git checkout -b "issue/short"'
    )}
  />
);

export const MultiLines = () => (
  <App
    useGitBranchCommand={useGitBranchCommandMock(
      'git checkout -b "issue/foobar-is-a-long-window-title-ass-with-multiple-lines-on-it-such-that-it-roughly-has-3-lines"'
    )}
  />
);

export const SuperLong = () => (
  <App
    useGitBranchCommand={useGitBranchCommandMock(
      'git checkout -b "issue/foobar-is-a-long-window-title-ass-with-multiple-lines-on-it-such-that-it-roughly-has-more-than-3-lines-and-it-keep-going-to-the-bottom-push-push-push"'
    )}
  />
);

export const Loading = () => (
  <App useGitBranchCommand={useGitBranchCommandMock(undefined)} />
);
