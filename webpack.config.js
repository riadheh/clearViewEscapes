const path = require("path");
const webpack = require('webpack');

module.exports = {
   entry: './app/assets/scripts/App.js',
   output: {
      filename: "App.js",
      path: path.resolve(__dirname, "./app/temp/scripts")
      
   },

   module: {
      rules: [
         {
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env']
            },
            test: /\.js$/,
            exclude: /node_modules/
         }
      ]
   },

   plugins: [new webpack.ProvidePlugin({ $: "jquery", jQuery: 'jquery' })]

};
