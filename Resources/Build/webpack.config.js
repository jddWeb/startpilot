const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: "./src/app.js",
    output: {
        path: __dirname + '../../Public/'
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    watch: false,
    devtool: "source-map",
    stats: {
        colors: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "Css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: "css-loader",
                        options: { minimize: true}
                    }, {
                        loader: "sass-loader"
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
};
