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

    output: {
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",

                // type: "asset/inline" // конвертирует картинки в js
                // type: "asset/resource" // кидает в папку все картинки
                // type: "asset" // автоматически решает
                // устанавлвивает значение размера для inline/resource
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024
                //     }
                // }
            },
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
