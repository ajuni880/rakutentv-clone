const path = require('path');

const htmlLoaderOptions =  {
  attributes: {
    list: [
      {
        tag: 'link',
        attribute: 'href',
        type: 'src',
        filter: (tag, attribute, attributes) => {
          if (!/icon/i.test(attributes.rel)) {
            return false;
          }
          if (
            attributes.type &&
            attributes.type.trim().toLowerCase() !== 'image/png'
          ) {
            return false;
          }

          return true;
        },
      },
    ]
  }
}

module.exports = {
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: htmlLoaderOptions
        }
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }
      }
    ],
  },
};
