# BitBar Webpack Status Plugin

The plugin simply writes one of the following statuses:

- `-1` (red), failed build
- `0` (yellow), build in progress
- `1` (green), build successful

Into a file `/tmp/webpack-status`.

## Installation

    npm install bitbar-webpack-status-plugin --save-dev

## Usage

```js
var BitBarWebpackStatusPlugin = require('bitbar-webpack-status-plugin');

// webpack configuration
var config = {
  entry: …,
  output: {
    path: …,
    filename: …
  },
  plugins: [
    new BitBarWebpackStatusPlugin()
  ]
};
module.exports = config;
```

## Options

#### filePath

You can configure the file where the status is written with this option.


```js
var BitBarWebpackStatusPlugin = require('bitbar-webpack-status-plugin');

// webpack configuration
var config = {
  entry: …,
  output: {
    path: …,
    filename: …
  },
  plugins: [
    new BitBarWebpackStatusPlugin({ filePath: "/tmp/whatever-status" })
  ]
};
module.exports = config;
```
