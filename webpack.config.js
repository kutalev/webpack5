let mode = "development";
if (process.env.NODE_ENV === "production") mode = "production";

module.exports = {
    mode,
    devtool: "source-map", // remove
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        port: 5500,
        contentBase: "./dist",
    }
}
