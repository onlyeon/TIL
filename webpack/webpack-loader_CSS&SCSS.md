# Webpack Loader - CSS & SCSS

일반적으로 html파일에서 CSS 파일은 `<head>` 섹션에 링크를 걸고, javascript는 `<body>` 섹션에 그 소스 링크를 걸어둔다. 그런데 webpack에서는 이 CSS와 javascript를 하나의 번들로 통합할 수 있다.

```bash
npm i -D style-loader css-loader node-sass sass-loader
```

**package.json** 의 dev dependencies 항목에 추가된것을 확인할 수 있다

```json
"devDependencies": {
  "css-loader": "^3.2.0",
  "node-sass": "^4.13.0",
  "sass-loader": "^8.0.0",
  "style-loader": "^1.0.0",
}
```

**webpack.config.js** 에 설정을 추가한다

```json
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
  }]
}
```

## CSS 번들링하기

`/src/assets` 폴더 하위에 `css` 폴더를 생성하고 `app.css` 파일을 생성한다.

**app.css** 에 임의 스타일을 작성

```css
body {
  background-color: coral;
}
```

**app.js** 에 CSS를 임포트 하는 구문을 추가

```js
import '../css/app.css';
```

`npm run dev`, `npm start` 한 후 `index.html` 을 실행하면 배경 색상이 코랄로 바뀐것을 확인할 수 있다.

마찬가지로 `dist/assets/js/app.bundle.js` 파일에 CSS가 임포트되는것을 확인할 수 있다.

## Sass 번들링하기

`/src/assets` 폴더 하위에 `scss` 폴더 생성하고 `style.scss` 파일을 생성한다.

**style.scss** 에 `h1` 의 색상을 변경하는 스타일을 작성

```scss
$font-color: papayawhip;

h1 {
  color: $font-color;
}

```

app.js 에 Scss 파일을 임포트하는 구문을 추가

```scss
import '../scss/style.scss'
```

`npm run dev`, `npm start` 한 후 `index.html` 을 실행하면 `h1` 의 폰트 컬러가 변경된것을 확인할 수 있다.

> 실행된 npm을 종료하려면 `ctl + C` 



## Wrap Up

* HTML에 입력하는 외부 링크가 줄어들어 코드가 깔끔해진다
* CSS와 JS 등을 개별로 작업하고, 모든 파일이 번들 JS로 통합되어 간편하다
* 프로젝트 규모가 커져서 HTML페이지의 로딩이 길어질 경우 문서의 컨텐츠가 먼저 보여지고 CSS 로딩이 늦어지는 단점이 있다
  * HTML 파일 랜더링 할 때 `doctype`에서부터 순차적으로 코드를 해석하기 때문
  * `app.bundle.js` 를 `head` 섹션에 위치시킨다면 웹사이트 전체가 느려질 수 있다
  * 결국, 전통적인 포지션대로 CSS는 `head` 섹션, JS는 `body` 섹션에 위치하는것이 좋다
* `app.bundle.js` 에서 CSS를 별도로 분리시키는 방법은 Plugin 파트에서 학습 예정



📖 **추가 자료**

* [How to configure SCSS modules for Webpack](https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/)

