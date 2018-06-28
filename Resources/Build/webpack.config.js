const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: ['./Assets/Scss/main.scss'],
    output: {
        path: __dirname + '../../Public/'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "Css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
