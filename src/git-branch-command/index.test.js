import { windowTitle2BranchName, issueKeyFromUrl } from "./index";

describe("windowTitle2BranchCommand", () => {
  it("hello world", () => {
    expect(windowTitle2BranchName("hello world")).toEqual("hello-world");
  });

  it('Peppa\'s  big "train" number 2012 !@#', () => {
    expect(
      windowTitle2BranchName('Peppa\'s  big "train" number 2012 !@#')
    ).toEqual("Peppas-big-train-number-2012-");
  });
});

describe("issueKeyFromUrl", () => {
  it("Parses issueKey of a classic Jira board url", () => {
    const issueKey = issueKeyFromUrl(
      "https://gerrytan.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=APPY&selectedIssue=APPY-2"
    );
    expect(issueKey).toEqual("APPY-2");
  });

  it("Parses issueKey of a nextgen board url", () => {
    const issueKey = issueKeyFromUrl(
      "https://gerrytan.atlassian.net/jira/software/projects/SCRUM/boards/3?selectedIssue=SCRUM-1"
    );
    expect(issueKey).toEqual("SCRUM-1");
  });

  it("Parses issueKey of a browse url", () => {
    const issueKey = issueKeyFromUrl(
      "https://gerrytan.atlassian.net/browse/SCRUM-1"
    );
    expect(issueKey).toEqual("SCRUM-1");
  });

  it("Returns undefined for unsupported url", () => {
    const issueKey = issueKeyFromUrl("https://mail.google.com/mail/u/0/#inbox");
    expect(issueKey).toEqual(undefined);
  });
});
