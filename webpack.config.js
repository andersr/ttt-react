const webpack = require('webpack')
const validate = require('webpack-validator')
const merge = require('webpack-merge')
const PATHS = require('./config/paths')
const webpack_parts = require('./webpack/parts')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = {
  context: PATHS.app,
  entry: './main',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: PATHS.indexTemplate,
      inject: 'body',
      filename: 'index.html'
    })
  ]
}
const config = merge(
  common,
  {
    devtool: 'eval-source-map',
    // Disable performance hints during development
    performance: {
      hints: false
    }
  },
  webpack_parts.loadJSX([PATHS.app]),
  webpack_parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  })
)

module.exports = validate(config, {
  quiet: true
})

// ,
// template: PATHS.indexTemplate,
// inject: 'body',
// filename: 'index.html'
// ,
// publicPath: '/'
// webpack_parts.indexTemplate({title: 'My App', template: PATHS.indexTemplate}),
// webpack_parts.loadJSX([PATHS.app, PATHS.libs])
// plugins: [
//   new HtmlWebpackPlugin({
//    title: 'Webpack demo'
//  })
// ],
// resolve: {
//   extensions: PATHS.extensions
// }
// webpack_parts.loadFonts([PATHS.icons]),
// webpack_parts.loadCSS([PATHS.icons]),
// webpack_parts.loadSCSS([PATHS.styles])
// new webpack.HotModuleReplacementPlugin(),
// new webpack.NoErrorsPlugin()
//     new webpack.optimize.OccurenceOrderPlugin(),
// 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'


// module.exports = {
//   entry: {
//     app: ['./app/main.js']
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/public/',
//     filename: 'bundle.js'
//   }
// };
