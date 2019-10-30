# Webpack Loader - babel

[webpack document - Loaders](https://webpack.js.org/concepts/#loaders)

기본적으로 webpack은 JavaScript 및 JSON 파일만 이해한다. Loader는 webpack이 다른 유형의 파일을 처리하고 이를 app에 적용, dependency에 추가 할 수있는 유효한 모듈로 변환한다.

**webpack.config.js** 에 선언하는 Loader를 부르는 문법은 아래와 같다

```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

>  **중괄호와 대괄호? :**
>
> * 중괄호: object 개념
> * 대괄호: array 즉 배열의 개념



## Babel Loader

Babel은 es6(ECMAScript)로 작성된 스크립트를 이전 버전으로 컴파일 해주는 로더이다. 터미널에서 아래의 명령어로 설치한다

```bash
npm i -D babel-loader babel-core babel-preset-env babel-plugin-transform-object-rest-spread
```

**package.json** 에 아래와 같이 데브 디펜던시 항목에 추가된것을 확인할 수 있다

```json
"devDependencies": {
  "babel-core": "^6.26.3",
  "babel-loader": "^8.0.6",
  "babel-plugin-transform-object-rest-spread": "^6.26.0",
  "babel-preset-env": "^1.7.0",
  ...
}
```

**webpack.config.js** 에 module을 추가한다

```json
module.exports = {
  ...
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
      // node_modules에 추가된 스크립트는 제외시킨다
    }]
  }
};
```

`test: /\.js$/` 의 `/\` 는 자바스크립트의 정규 표현식 (regular expression) 문법으로,  바벨 로더가 컨버팅하는 대상의 확장자가 js 파일임을 선언해준다. Js 뿐 아니라 jsx 확장자도 있어 $를 추가한다.

preset과 object-rest-spread 라는 패키지를 설정한다. **.babelrc**  파일을 생성하고 아래와 같이 입력한다.

```json
{
  "presets": [
    "env"
  ],
  "plugins": [
    "transform-object-rest-spread"
  ]
}
```

이후 `app.js` 에 스크립트를 작성한 후 `npm run dev` 를 실행한다.

`dist/assets/js/app.bundle.js` 파일을 확인하면 아랫쪽에 es6로 작성한 스크립트가 변환되어 들어가 있는것을 확인할 수 있다.