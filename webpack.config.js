var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
 
const extractSass = new ExtractTextPlugin({
    filename: "../css/[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry : __dirname + '/src/js/index.js',
    output : {
        path : __dirname + '/dist/js',
        filename : 'dist.js'
    },
    module : {
         rules : [
            {
                test : /\.js$/,
                exclude : '/node_modules',
                use : [

                    { loader :'babel-loader'}
                ]
               
            },
            {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
        }
            

        ]
    },
    plugins: [
        extractSass
    ],


    devServer : {
        //contentBase : './目录 '   //默认为webpack.config.js所在的根目录
        colors : true,
        inline : true,
        port : '8080' //默认8080
    }
}















