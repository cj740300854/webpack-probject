var webpack = require('webpack');


module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry : __dirname + '/src/js/index.js',
    output : {
        path : __dirname + '/dist/js',
        filename : 'dist.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : '/node_modules',
                loader :'babel-loader'
            },

        ]
    },


    devServer : {
        //contentBase : './目录 '   //默认为webpack.config.js所在的根目录
        colors : true,
        inline : true,
        port : '8080' //默认8080
    }
}















