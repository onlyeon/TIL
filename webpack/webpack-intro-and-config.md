# Webpack intro and config

## 웹팩이란? 

module bundler. 자바스크립트, CSS, image등을 통합해서 효율적으로 관리해주는 도구.workflow를 자동화해주고 통합 혹은 번들링 해준다. 비슷한 역할을 하는 grunt, gulp 등이 있음

Nodejs를 이용해 만들어졌고, npm(Node Package Manager, 일종의 installer)을 사용하고 있기 때문에 두가지가 설치되어 있어야 한다. 

[Getting Started](https://webpack.js.org/guides/getting-started/)

## 웹팩 설정

웹팩 기본 디펜던시와 데브 디펜던시를 설정한다. 예제용으로 `webpack_starter` 폴더 생성. 프로젝트 폴더로 이동하여 아래 명령어를 입력해 initialize한다.

```bash
npm init
or 
npm init -y
```

`Package.json` 파일 생성된것을 확인한다.

### 웹팩 라이브러리 설정

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

```bash
npm ERR! Error: EACCES: permission denied, open 'file-path'
```

위와 같은 메시지가 뜬다면, 권한이 없는것이므로 아까의 명령어 앞에 `sudo` 를 붙여 비밀번호를 입력한 후 다시 진행한다.

설치가 완료되면 `package.json` 이 있는 디렉토리에 `node_modules` 폴더와 `package-lock.json`이 자동으로 생성되며, `package.json`에 아래와 같은 `devDependencies`가 추가된것을 확인할 수 있다.

> 프로덕션 번들에 번들로 제공 될 패키지를 설치할 때는 `npm install --save`를 사용해야한다. 개발 목적 (예 : 린터, 테스트 라이브러리 등)으로 패키지를 설치하는 경우 `npm install --save-dev`를 사용해야한다. 자세한 내용은 [npm 설명서](https://docs.npmjs.com/cli/install)를 참조하라.

```js
"devDependencies": {
  "webpack": "^4.41.2",
  "webpack-cli": "^3.3.9",
  "webpack-dev-server": "^3.9.0"
}
```

>  dependency(의존성)은 웹 프로젝트에 가장 필요한 주된 애플리케이션 라이브러리를 말하며, devDepdency는 웹프로젝트에 부수적으로 필요한 라이브러리라고 볼 수 있다.

**`webpack.config.js` 파일을 생성한다**

> `webpack.config.js`: webpack의 설정을 정의하는 파일

이후 assets 파일들을 `/src`(source) 폴더에 저장하면 웹팩의 규칙대로 자동으로 CSS, java script, image 파일이 컴파일 및 번들링되어 최종 빌드 폴더 `/dist`(distribution)에 app.bundle.js파일을 생성하게 된다.

**`webpack.config.js` 에서 입력 파일과 출력 파일 경로 지정한다**

```js
const path = require('path');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/app.bundle.js'
  },
  mode: 'development'
};
```

### 명령 스크립트 설정

**`package.json` 에서 명령 스크립트 설정한다**

```js
"scripts": {
  "dev": "webpack"
},
```

`npm run dev` 라는 명령어로 `dist` 폴더와 `app.bundle.js`  파일이 자동으로 생성되는것을 확인한다

**`npm start` 명령어로 파일 수정시 자동으로 브라우저에 반영되도록 스크립트를 설정한다**

`webpack.config.js` 에서 아래와 같이 설정한다:

```js
devServer: {
  contentBase: __dirname + '/dist',
  port: 3000
  // __dirname: 현재 위치의 디렉토리 네임
}
```

`package.json` 에 아래와 같이 명령어 추가:

```js
"scripts": {
  "dev": "webpack",
  "start": "webpack-dev-server"
},
```

