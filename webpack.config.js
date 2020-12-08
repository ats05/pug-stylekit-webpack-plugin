const path = require('path');

const SOURCE_DIR = path.resolve(__dirname, 'test/src');
const OUTPUT_DIR = path.resolve(__dirname, 'test/dist');

const PugStyleKitWebpackPlugin = require('./index');

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
