const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin') // 打包拷贝插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // html构建
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 每次打包的时候清空打包目录
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') // 终端输出插件
const webpackBar = require('webpackbar') // webpack打包/启动devServer进度显示
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离
const ip = require('ip').address() // 获取本机ip
const portfinder = require('portfinder') // 获取可用端口
const open = require('opn') // 打开浏览器
const VueLoderPlugin = require('vue-loader/lib/plugin')

const componentConfig = require('./component.config')

const resolve = function(dir) {
  return path.resolve(__dirname, dir)
}

const modeDev = process.env.NODE_ENV === 'development' // 是否是开发环境

const devWebPackConfig = {
  mode: process.env.NODE_ENV,
  devtool: modeDev ? 'source-map' : 'none',
  entry: process.env.LIB ? resolve('src/index.js') : resolve('examples/main.js'),
  output: {
    path: process.env.LIB ? resolve('lib') : resolve('dist'),
    filename: process.env.LIB ? `${componentConfig.name}.min.js` : 'js/[name].[hash].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.((sa|sc|le|c)ss|(styl|stylus))$/,
        use: [
          modeDev || process.env.LIB ? 'style-loader' :
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: modeDev
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: resolve('postcss.config.js') }
            },
          },
          'less-loader',
          'sass-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'index',
      template: resolve('examples/index.html')
    }), // 构建index.html
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new CleanWebpackPlugin(), // 自动清理打包目录下的文件
    new webpackBar(), // 打包/启动dev服务器进度
    // new webpack.HotModuleReplacementPlugin(), // 热模块替换开启
    new VueLoderPlugin(), // vueLoader
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    },
    extensions: ['.vue', '.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 9000,
    publicPath: '/',
    // open: true,
    hot: true,
    quiet: true,
    after() {
      open(`http://${ip}:${this.port}`)
    },
    overlay: {
      warnings: false,
      errors: true
    }, // 浏览器全屏显示提示
    clientLogLevel: "none"
    // progress: true
  }
}

module.exports = new Promise((resolve, rejects) => {
  if(process.env.LIB) {
    devWebPackConfig.plugins.push(new CopyPlugin({
      patterns: [
        { from: 'src', to: 'src' }
      ],
    }))
  }
  portfinder.basePort = process.env.PORT || 9000
  portfinder.getPort((err, port) => {
    if (err) {
      rejects(err)
    } else {
      process.env.PORT = port
      devWebPackConfig.devServer.port = port
      devWebPackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`你的程序运行在 http://${ip}:${port}`,`本地查看 http://localhost:${port}`]
        },
        clearConsole: true
      }))

      resolve(devWebPackConfig)
    }
  })
})