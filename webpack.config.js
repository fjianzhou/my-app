
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(css)$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|gif|svg|woff|ttf|eot|woff2)$/,use:'url-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}