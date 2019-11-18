const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },{
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },{
            test: /\.html$/,
            use:[
              "html-loader"
            ]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: "index.html"
      })
    ],
    output:{
      path: __dirname + "/dist",
      publicPath: '/',
      filename: 'bundle.js'
    }
}  