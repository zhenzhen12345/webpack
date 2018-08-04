/**
 * Created by Zhenzhen on 2018/8/4.
 */
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',//入口文件
    output:{//出口文件
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
     module:{},
     plugins:[
         new HtmlWebpackPlugin({
             title:"felloe23",
             minify:{
                 removeAttributeQuotes:true
             },
             hash:true,
             template:'./src/index.html'
         }) ,
     ],
     devServer:{
        contentBase:path.resolve(__dirname,'dist'),
         host:'127.0.0.1',
         port:'8081',
         compress:true
     }
};