const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/bundles')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              publicPath: '/static/bundles/',
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: './assets/webpack-stats.json'
    })
  ],
  resolve: {
    alias: {
      'material-dashboard-react-master': path.resolve(__dirname, 'src/material-dashboard-react-master'),
      'components': path.resolve(__dirname, 'src/material-dashboard-react-master/src/components'),
      'views': path.resolve(__dirname, 'src/material-dashboard-react-master/src/views'),
      'layouts': path.resolve(__dirname, 'src/material-dashboard-react-master/src/layouts'),
      'assets': path.resolve(__dirname, 'src/material-dashboard-react-master/src/assets'),
      'variables': path.resolve(__dirname, 'src/material-dashboard-react-master/src/variables'),
      'routes.js': path.resolve(__dirname, 'src/material-dashboard-react-master/src/routes.js')
    }
  }
}
