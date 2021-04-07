const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist"; // fix for browserslist and hot reloading
}

console.log(mode);
module.exports = {
    mode,
    target,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i, // sass, scss, css
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        port: 5500,
        contentBase: "./dist",
        hot: true
    }
}
