# Webpack Loader - image

이미지를 번들링하는데 필요한 로더 패키지를 설치한다

```bash
npm i -D file-loader image-webpack-loader
```

**package.json** 의 dev dependencies 항목에 추가된것을 확인할 수 있다

```json
"devDependencies": {
  "file-loader": "^4.2.0",
  "image-webpack-loader": "^6.0.0",
}
```

**webpack.config.js** 에 설정을 추가한다. 확장자별로 이미지 사이즈를 줄여주는 설정은 [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader) 에서 확인한다.

```json
module: {
  rules: [{
    test: /\.(gif|png|jpe?g|svg)$/i,
    // jpe?g는 jpg와 jpeg를 의미한다
    use: [
    'file-loader?name=assets/images/[name].[ext]',
    // file-loader는 이미지 파일의 이름을 만들고 폴더를 이동시키는 기능을 한다
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
  }]
}
```

## src의 이미지를 dist 폴더로 이동시키기

**copy-webpack-plugin** 플러그인을 설치한다

```bash
npm i -D copy-webpack-plugin
```

**webpack.config.js** 에 설정을 추가한다

```json
const CopyWebpackPlugin = require('copy-webpack-plugin');

plugins: [
  new CopyWebpackPlugin([{
    from: './src/assets/images',
    to: './assets/images/'
  }])
]
```

`npm run dev`, `npm start` 하면 `/dist` 디렉토리에 image가 이동되어 있는것을 확인할 수 있다.