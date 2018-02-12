var path = require('path');

module.exports = {
    entry:'./build/index.js',
    output: {
        path: path.resolve(__dirname,'./js'),
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js?/,
                exclude: /node_modules/
            }
        ]
    },
    devServer:{
        port:3000,
        contentBase:'./',
        inline:true
    }
}