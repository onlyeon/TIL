# Webpack Loader - Fontawesome

npm으로 인스톨할 수 있긴 하지만 폰트 경로 설정 등의 이슈로 실패해 웹페이지에서 다운로드 받아 설정하는 방식으로 진행한다.

* [Hosting Font Awesome Yourself](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself) 다운로드
*  `webfonts` 폴더는 `src/assets` 로 이동
* `css` 폴더의 `all.css` 파일을 `src/css` 디렉토리로 이동

로더 패키지 설치한다

```bash
npm i -D url-loader font-awesome-loader
```

**webpack.config.js** 에 설정을 추가한다

```json
module: {
  rules: [{
    test: /font-awesome\.config\.js/,
    use: [{
      loader: 'style-loader'
    },
    {
      loader: 'font-awesome-loader'
    }]
  },
  {
    test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
    loader: 'url-loader?limit=50000&name=assets/webfonts/[name].[ext]'
  }]
}


// 플러그인 설정
plugins: [
  new CopyWebpackPlugin([{
    from: './src/assets/webfonts/',
    to: './assets/webfonts/'
  }]),
}
```

**font-awesome.config.js** 파일을 만들고 [font-awesome.config.js](https://gist.github.com/gplume/c935111fc9634583a43936f309a424ba) 페이지를 참고해 설정 파일을 작성한다.

```json
module.exports = {
  styleLoader: 'style-loader!css-loader!sass-loader',
  styles: {
    'mixins': true,
    'bordered-pulled': false,
    'core': true,
    'fixed-width': true,
    'icons': true,
    'larger': true,
    'list': true,
    'path': true,
    'rotated-flipped': false,
    'animated': true,
    'stacked': false
  }
};
```

app.js에 font awesome CSS를 임포트하는 구문을 추가한다

```js
import '../css/fontawesome-all.css'
```

`npm run dev`, `npm start` 하면 `/dist` 디렉토리에 web fonts 폴더가 이동되어 있는것을 확인할 수 있다.

