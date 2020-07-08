import { CopyButton, CopyButtonView } from ".";

import React from "react";

export default {
  title: "<CopyButtonView>",
};

export const Initial = () => <CopyButtonView />;

export const Copied = () => <CopyButtonView isCopied={true} />;
