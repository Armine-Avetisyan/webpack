const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        dom: './src/dom.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
}
