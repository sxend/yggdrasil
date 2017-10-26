const path = require('path');
const webpack = require('webpack');

module.exports = function(env, argv) {
  return (env || "production").split(",").map(configuration).reduce((a, b) => a.concat(b));
};
function configuration(env) {
  const plugins = [
    new webpack.ProgressPlugin()
  ];
  const raw = {
    entry: './src/main/typescript/index.ts',
    output: {
      path: path.resolve(__dirname, 'target', 'build', env),
      filename: 'yggdrasil.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'preprocess-loader?' + JSON.stringify(environments[env])
        ]
      }]
    },
    plugins: plugins
  };
  const compressed = Object.assign({}, raw, {
    output: Object.assign({}, raw.output, {
      filename: 'yggdrasil.min.js'
    }),
    plugins: plugins
      .concat(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }))
      .concat(new webpack.SourceMapDevToolPlugin({
        filename: 'yggdrasil.min.js.map'
      }))
  });
  return [raw, compressed];
}

const environments = require('./build/environments.json');
