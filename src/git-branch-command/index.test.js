import { windowTitle2BranchName } from "./index";

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
