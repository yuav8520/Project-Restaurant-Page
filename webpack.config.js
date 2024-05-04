const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watch } = require('fs');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    

  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'main.html',// Path to your HTML template
    }),],
    devtool: 'source-map', // enable sourcemaps
    mode: 'development', // enable development mode
    
};
