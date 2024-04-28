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
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'main.html',// Path to your HTML template
    }),],
};
