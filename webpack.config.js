const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

let mode = "development";

if(process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {

    mode: mode,
    
    module: {
      rules: [
        {
          test: /\.css$/i,
          use:[MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test : /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ]
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map", // this is used for build to normal- setting false too but I replace this with source-map

    devServer : {
        static: {
            directory: path.join(__dirname, "dist")
          },
          compress: true,
          port: 3010,
        }
};