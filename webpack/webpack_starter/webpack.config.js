const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/app.bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: __dirname + '/dist',
    port: 3000
    // __dirname: 현재 위치의 디렉토리 네임
  },
  module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        // node_modules에 추가된 스크립트는 제외시킨다
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // style-loader가 가장 먼저 와야한다
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        // jpe?g는 jpg와 jpeg를 의미한다
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          // file-loader는 이미지 파일의 이름을 만들고 폴더를 이동시키는 기능을 한다
          // [name].[ext] ext = extencion 즉 파일 확장자
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
          // image-webpack-loader는 이미지 사이즈를 줄여주는 역할을 한다
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/assets/images',
      to: './assets/images/'
    }])
  ]
};