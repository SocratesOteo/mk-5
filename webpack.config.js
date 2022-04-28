
const path = require('path');
const multi = require('multi-loader')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    mode: 'development',
    
  entry: ['@babel/polyfill','./src/index.js'],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],


  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './main.js'
    
},

target: 'web',

externals:{
    express:'express',
},


resolve: {
    modules:[path.resolve(__dirname,'src'),'node_modules'],

    fallback: { 
        path: require.resolve("path-browserify") ,
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        crypto: require.resolve("crypto-browserify"),
        zlib: require.resolve("browserify-zlib"),
        fs: false,
        net:false,
      },
    },

module:{
      rules:[
          {
              test: /\.(js|jsx)$/,
              exclude:/node_modules/,
              use:{
              loader: 'babel-loader',
              }
          },
          {
            test: /\.css$/i,
            // the order of `use` is important!
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
          {
              test: /\.html$/,
              use:[
                  {
                      loader: 'html-loader'
                  }
              ]
          }
      ]
  },
  stats:{
    children:true,
  },


  plugins:[
      new HtmlWebpackPlugin ({
        template: './src/index.html',
        filename: './index.html'

      })
  ]


}