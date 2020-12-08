# PugStylekitWebpackPlugin

A plugin that integrates pug files and scss files to improve coding efficiency.

## Installation
```
npm install pug-stylekit-webpack-plugin
```

## Usage

### webpack.config.js

```
const path = require('path');

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const PugStyleKitWebpackPlugin = require('pug-stylekit-webpack-plugin');

module.exports = {
  entry: SOURCE_DIR + '/entry.js',
  output: {
    filename: 'build.js',
    path: OUTPUT_DIR
  },
  module: {},
  plugins: [
    new PugStyleKitWebpackPlugin(
      {
        target: [
          {
            from: SOURCE_DIR + '/index.pug',
            to: {
              html: OUTPUT_DIR + '/index.html',
              css: OUTPUT_DIR + '/style.css',
            },
          }
        ],
      }
    ),
  ]
};
```

### index.pug

```
doctype html
html(lang='ja')
    head
        meta(charset="utf-8")
        link(rel="stylesheet" href="./style.css")
    body.body
        h1.body__title Hello, this is the PugStylekitWebpackPlugin!
          //- stylekit
            .body {
              &__title {
                color: #FF0000;
              }
            }

```

### Directory Tree

```
├── src
│   ├── entry.js
│   └── index.pug
└── dist	// Output products
    ├── build.js
    ├── index.html
    └── style.css
```

### Test on this repository

```
npm test
```
