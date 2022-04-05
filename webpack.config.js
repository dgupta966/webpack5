const path = require('path');

module.exports = {

    mode: "development",
    
    module: {
      rules: [
        {
          test : /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ]
    },

    devtool: false, // this is used for build to normal

    devServer : {
        static: {
            directory: path.join(__dirname, "dist")
          },
          compress: true,
          port: 3010,
        }
};