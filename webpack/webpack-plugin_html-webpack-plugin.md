# Webpack Plugin - html webpack plugin

Loader가 파일 단위로 작업을 수행한다면, Plugin은  번들된 결과물을 처리한다고 볼 수 있다.

> 참고 문서: [Plugins](https://webpack.js.org/concepts/plugins/), [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

html-webpack-plugin을 설치한다

```bash
npm i -D html-webpack-plugin
```

## 옵션

[HTML Webpack Plugin Github](https://github.com/jantimon/html-webpack-plugin) Usage에 있는 예제 코드와 Options를 확인한다. 별도로 살펴보는것을 추천한다

TODO!

## 설정하기

**webpack.config.js** 에서 제일 위에 변수 선언 등 Usage에 있는 코드를 적용해준다

```json
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin([{
      filename: 'index.html',
      template: 'src/index.html'
      // src 폴더에 생성된 html을 자동으로 dist폴더에 생성하는 설정
    }])
  ]
}
```

CSS를 별도의 파일로 번들링 해 `<head>` 섹션에 위치시키는것이 브라우저의 성능 및 사용자 경험을 높일 수 있다. 이를 위해 두개의 플러그인이 필요하다

* html-webpack-plugin
* extract-text-webpack-plugin

**extract-text-webpack-plugin**을 설치한다

```bash
npm i -D extract-text-webpack-plugin
```

**webpack.config.js**에서 플러그인을 변수로 선언한다

```json
const ExtractTextPlugin = require('extract-text-webpack-plugin');
```

**app.bundle.js** 라는 임의의 이름의 파일로 별도의 CSS를 분리하기 위해 rule을 수정해줘야한다

```json
module.exports = {
  module: {
    rules: [{
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    }]
  }
}
```

별도의 CSS로 저장된 파일을 head 섹션에 위치시키는 옵션을 추가 작성한다.

```json
plugins: [
  new HtmlWebpackPlugin([{
    filename: 'index.html',
    template: 'src/index.html',
    files: {
      'css': ['app.bundle.css'],
      'js': ['app.bundle.js'],
      'chunks': {
        'head': {
          'entry': '',
          'css': 'app.bundle.css'
        },
        'body': {
          'entry': 'app.bundle.js',
          'css': ''
        }
      }
    }
  }])
]
```

`HtmlWebpackPlugin` 에 모두 추가해야하는데 반복이 길어지므로 `files` 부분을 별도의 변수로 분리해 관리할 수 있다. 문서 상단에 `foleOptions` 변수를 선언한다

```json
const fileOptions = {
  'css': ['app.bundle.css'],
  'js': ['app.bundle.js'],
  'chunks': {
    'head': {
      'entry': '',
      'css': 'app.bundle.css'
    },
    'body': {
      'entry': 'app.bundle.js',
      'css': ''
    }
  }
};
```

 플러그인 설정은 아래와같이 간략하게 수정할 수 있다

```json
new HtmlWebpackPlugin([{
  filename: 'index.html',
  template: 'src/index.html',
  'files': fileOptions
}]),
```

위에서 선언한 변수는 따옴표 없이 변수명을 그대로 사용하고, 대신 아이템 프로퍼티에는 따옴표를 사용한다.

postcss와 autoprefixer 로더를 설치해준다

```bash
npm i -D postcss-loader autoprefixer
```

설치 후 `postcss.config.js` 파일 생성한 후 아래와 같이 작성

```js
module.exports = {
  pluigins: [
    require('autoprefixer')
  ]
}
```

`npm run dev`, `npm start` 하면 `/dist` 디렉토리에 html 파일과 css 파일이 제대로 들어가는지 확인할 수 있다.

---

나의 경우 dist 폴더로 html 파일의 내용이 올바르게 들어가지 않고, 신규 추가한 html 파일이 제대로 옮겨지지 않는 문제가 있다. 더 찾아볼 필요가 있음
