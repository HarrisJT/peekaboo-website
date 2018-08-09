var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: './server/index.js',
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/dist/',
    filename: 'bundle.[name].js',
  },
  module: {
    rules: [
      // Loader for CSS, both .css
      // and <style> in vue files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      // Loader for SCSS, both .scss
      // and <style lang="scss"> in vue files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // Loader for Vue files
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // Loader for pug files, both .pug
      // and <template lang="pug"> in vue files
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      // Loader for JS, both .js files
      // and <script> in vue files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // Loader for images
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      // Loader for fonts
      {
        test: /font.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true,
  //   overlay: true,
  // },
  // performance: {
  //   hints: false,
  // },
  // devtool: '#eval-source-map',
};
