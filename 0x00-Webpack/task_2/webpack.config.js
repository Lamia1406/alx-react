const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[hash].[ext]',
                  outputPath: 'images',
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  disable: false,
                  mozjpeg: { progressive: true, quality: 65 },
                  optipng: { enabled: true },
                  pngquant: { quality: [0.65, 0.90], speed: 4 },
                },
              },
            ],
          },
        ],
      },
    
};