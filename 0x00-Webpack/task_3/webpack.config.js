const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  plugins: [
		new HTMLWebpackPlugin({
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
	],
  entry: {
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
    shared: 'jquery',
	},
  output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: path.join(__dirname, './public'),
      open: true,
      port: 8564,
    },
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
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
};