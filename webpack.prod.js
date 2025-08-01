const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    }
});