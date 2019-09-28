const path = require("path");

module.exports = {
    entry: path.resolve("index.js"),
    target: "node",
    mode: "development",
    output: {
      filename: "yourlib.js",
      path: path.resolve("./lib"),
      libraryTarget: "window",
      library: "test",
      umdNamedDefine: true,
      libraryExport: 'default'
    },

    resolve: {
        extensions: [".js", ".json"]
    }

  };