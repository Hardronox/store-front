const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {

  entry: [
    './client/index.js',
    './client/styles/main.scss',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
          "plugins": [
            "transform-runtime",
            "transform-class-properties",
            "transform-object-rest-spread"
          ]
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader","sass-loader"],
          fallback: "style-loader",
        })
      },
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("bundle.css"),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync([
    //     path.join(__dirname, 'client/components/admin/*.js'),
    //     path.join(__dirname, 'client/components/admin/dashboard/*.js'),
    //     path.join(__dirname, 'client/components/admin/items/*.js'),
    //     path.join(__dirname, 'client/components/admin/statistics/*.js'),
    //     path.join(__dirname, 'client/components/reusable/*.js'),
    //     path.join(__dirname, 'client/components/*.js'),
    //     path.join(__dirname, 'client/index.html')
    //   ]),
    //
    // })
  ]
};