resolve: {
    extensions: [".tsx", ".ts", ".js", ".ios.js", ".android.js", ".web.js"]
  };

  const path = require('path');

  module.exports = {
    entry: './App.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(js.jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', 'module:metro-react-native-babel-preset'],
                plugins: ['@babel/plugin-proposal-class-properties']
              },
            },
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images',
                },
              },
            ],
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                },
              },
            ],
          },
          {
            test: /\.mp4$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'videos/',
                },
              },
            ],
          },
          {
            test: /\.ttf$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                },
              },
            ],
          },
          {
            test: /registry\.js$/,
            use: [
                {
                  loader: 'file-loader'
                },
              ],
          },
        ]
      }
  };