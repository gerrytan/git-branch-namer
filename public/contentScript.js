// Warning: this file is not built by webpack due to difficulty in re-configuring a second
// js-only entry in create-react-app even after ejecting.

// Content script is a file that's run on the content page (not in extension popup)
// We have to communicate with the extension via messaging
// See official docs: https://developer.chrome.com/docs/extensions/mv2/architecture-overview/

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.command === "SUMMARY") {
    let node;

    // Get summary from issue view if it's open
    node = document.querySelector(
      'h1[data-test-id="issue.views.issue-base.foundation.summary.heading"]'
    );
    if (node) {
      sendResponse({ summary: node.innerText });
      return;
    }

    // Alternatively get the summary from selected issue card in the board
    node = document.querySelector(".ghx-selected .ghx-summary");
    if (node) {
      sendResponse({ summary: node.innerText });
      return;
    }

    // Send an undefined if can't find any
    sendResponse({ summary: undefined });
  }
});
