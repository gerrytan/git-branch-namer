# git-branch-namer

## Deprecated

This project has been deprecated in favour of in-product git checkout command available on Jira Cloud

![screenshot](/jira-cloud-in-product-checkout-namer.png)

## Overview

Chrome extension to generate git branch name from active tab's window title

![screenshot](/screenshot20200708.jpg)

## Installation

Get it from [Chrome Web Store](https://chrome.google.com/webstore/detail/git-branch-namer/blloglbppemlmiibincgieehfdjlladd)

## Local development setup

1. `yarn build`
1. Go to chrome://extensions/
1. Enable Developer mode
1. Load unpacked -> select the `build` dir

Have to `yarn build` for every change to be reflected. Changes to `manifest.json` require extension reload.

## Storybook

Useful to dev UI component without reloading chrome extension each time, run `yarn storybook` to begin.

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
