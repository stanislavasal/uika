const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    textbook: './src/textbook/textbook.js',
    elements: './src/elements/elements.js',
    articles: './src/articles/articles.js',
    search: './src/search/search.js',
    additions: './src/additions/additions.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Search page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search/index.html',
      filename: './search/index.html',
      chunks: ['search']
    }),

    // Textbook
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/textbook/index.html',
      filename: './textbook/index.html',
      chunks: ['textbook']
    }),

    // Info pages

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/additions/index.html',
      filename: './additions/index.html',
      chunks: ['additions']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/additions/index1.html',
      filename: './additions/index1.html',
      chunks: ['additions']
    }),

    // Elements pages

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/elements/index-small.html',
      filename: './elements/index-small.html',
      chunks: ['elements']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/elements/index-medium.html',
      filename: './elements/index-medium.html',
      chunks: ['elements']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/elements/index-large.html',
      filename: './elements/index-large.html',
      chunks: ['elements']
    }),

    // Articles pages

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index1.html',
      filename: './articles/index1.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index2.html',
      filename: './articles/index2.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index3.html',
      filename: './articles/index3.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index4.html',
      filename: './articles/index4.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index5.html',
      filename: './articles/index5.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index6.html',
      filename: './articles/index6.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index7.html',
      filename: './articles/index7.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index8.html',
      filename: './articles/index8.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index9.html',
      filename: './articles/index9.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index10.html',
      filename: './articles/index10.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index11.html',
      filename: './articles/index11.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index12.html',
      filename: './articles/index12.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index13.html',
      filename: './articles/index13.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index14.html',
      filename: './articles/index14.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index15.html',
      filename: './articles/index15.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index16.html',
      filename: './articles/index16.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index17.html',
      filename: './articles/index17.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index18.html',
      filename: './articles/index18.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index19.html',
      filename: './articles/index19.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index20.html',
      filename: './articles/index20.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index21.html',
      filename: './articles/index21.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index22.html',
      filename: './articles/index22.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index23.html',
      filename: './articles/index23.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index24.html',
      filename: './articles/index24.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index25.html',
      filename: './articles/index25.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index26.html',
      filename: './articles/index26.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index27.html',
      filename: './articles/index27.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index28.html',
      filename: './articles/index28.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index29.html',
      filename: './articles/index29.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index30.html',
      filename: './articles/index30.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index21.html',
      filename: './articles/index21.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index22.html',
      filename: './articles/index22.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index23.html',
      filename: './articles/index23.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index24.html',
      filename: './articles/index24.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index25.html',
      filename: './articles/index25.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index26.html',
      filename: './articles/index26.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index27.html',
      filename: './articles/index27.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index28.html',
      filename: './articles/index28.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index29.html',
      filename: './articles/index29.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index30.html',
      filename: './articles/index30.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index31.html',
      filename: './articles/index31.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index32.html',
      filename: './articles/index32.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index33.html',
      filename: './articles/index33.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index34.html',
      filename: './articles/index34.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index35.html',
      filename: './articles/index35.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index36.html',
      filename: './articles/index36.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index37.html',
      filename: './articles/index37.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index38.html',
      filename: './articles/index38.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index39.html',
      filename: './articles/index39.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index40.html',
      filename: './articles/index40.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index41.html',
      filename: './articles/index41.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index42.html',
      filename: './articles/index42.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/index43.html',
      filename: './articles/index43.html',
      chunks: ['articles']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
