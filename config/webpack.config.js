const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, '../src/main.tsx'),
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, '../build/'),
    filename: '[name].js',
    chunkFilename: "chunk.[name].js"
  },
  module: {
    rules: [
      {
        test: /.tsx$|.ts$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: {
      rewrites: [
        { from: /^\/(\/)?[^]*$/, to: '/index.html' },
      ],
      disableDotRule: true,
    },
    compress: true,
    port: 9000,
    proxy: {
      '/git': {
        target: 'https://api.github.com',
        pathRewrite: {
          '^/git': '/'
        },
        changeOrigin: true
      }
    },
  },
   resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      'components': path.resolve(__dirname, '../src/components'),
      'actions': path.resolve(__dirname, '../src/store/actions'),
      'api': path.resolve(__dirname, '../src/Api')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '.',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\/]node_modules[\/]/,
          name: 'react',
          priority: -10,
          minChunks:1
        },
        default: {
          minChunks: 1,
          name: "common",
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
     name: 'manifest'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '简书',
      template: path.resolve(__dirname, '../index.html'),
      inject: true,
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
    }),
  ]
}
