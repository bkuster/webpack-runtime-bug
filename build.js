const webpack = require('webpack');
const path = require('path');

webpack({
  experiments: {
    outputModule: true,
  },
  entry: {
    app: './index.js',
    other: './otherIndex.js',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'module',
    },
    module: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
}, (err, stats) => {
  if (err) {
    console.error(err);
  }
});
