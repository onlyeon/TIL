# 그리고 남은 것 들...

## 파일로 쪼개서 정리 정돈하기

함수와 객체보다 더 큰 정리정돈 도구로, 서로 연관된 코드를 파일로 묶어 그룹핑 하는 방법이 있다. 

이 방법을 사용하면 수많은 웹페이지를 감당할 수 있게 된다.

`<script>` 태그 내에 작성했던 내용을 별도의 js 파일로 저장한 후 `src` 속성으로 임포트해준다. 

- 코드 정리정돈의 효과
- 원본 코드 하나만 수정하면 되는 유지보수의 용이성
- 웹 서버를 자주 들러야하지만 cache(캐시) 에 저장되기 때문에 트래픽이 절감된다

## 라이브러리와 프레임워크

- Library
  - 내가 만들려는 프로그램에 필요한 부품을 사용하기 쉽게 정리정돈 해놓은 것
  - 필요한걸 땡겨와서 작업하는 느낌
- Framework
  - 내가 만들려는 프로그램의 종류(게임, 웹 채팅...)에 따라 그것을 만들기 위해 기본적인건 프레임워크를 사용하고, 정말 우리에게 필요한것은 살짝 살짝 가져다 쓰는것
  - 프레임워크 안에 들어가서 작업하는 느낌

라이브러리 예시

- jQuery: 생산성이 높아진다.

### jQuery

- CDN: content delivery network

```jsx
$('a').css('color', color);
```

이 웹페이지의 모든 `a` 태그의 CSS `color` 를 매개변수(파라미터) `color` 를 받아 바꾸겠다.

위 태그는 곧 아래 태그와 같은 역할을 수행한다.

```jsx
var alist = document.querySelectorAll("a");
var i = 0;
while (i < alist.length) {
  alist[i].style.color = color;
	i = i + 1;
}
```

새로 쏟아지는 라이브러리들을 많이 알 수록 더 많은 일을 처리할 수 있게된다!

## UI vs API

- UI: User Interface
- API: Application Programming Interface

`alert` 과 같이 미리 프로그래밍된 조작 장치를 API라 부른다. API와 순서는 뗄레야 뗼 수 없는 관계이다. 

## 수업을 마치며

- document: 객체를 살펴보고 필요한 메소드를 찾아내라
- DOM(Document Object Model)
- window: 웹브라우저 자체를 제어해야할 때
- ajax: 웹페이지를 변경하지 않고 정보를 변경할 때
- cookie: 웹페이지가 리로드되도 현재 상태를 유지하고 싶을 때. 개인화된 서비스 제공 가능
- offline web application: 인터넷이 끊겨도 동작하는 서비스를 만들고싶을 때
- speech: 음성을 인식하고 음성으로 정보를 전달하고 싶을때
- webGL: 3차원 그래픽으로 게임을 만들고 싶을 때
- webVR: 가상현실

## 나만의, 수업을 마치며

 WEB2강의는 만들고자 하는 최종 목표를 설정해두고, 그 목표를 위해 필요한 JavaScript의 기초적인 문법들을 습득해나가는 방식이어서 더 실용적으로 내용을 습득할 수 있었다. 특히 예전 아무것도 모르던 시절에 들었을 때와는 다른 느낌이 들었다. 

 조금 더 머리에 잘 들어오는것 같았는데 Sass를 쓴 경험때문인 것 같다. 뭔지 잘 이해가 안되는 Sass 예제들을 들여다보며 애쓰던 시절이 이렇게 도움이 된다. 그떄 이해가 안가고 그냥 이런게 있구나, 하고 넘겼던것들이 수업을 들으며 좀더 명확하게 이해되는 순간이었다. 잘 몰라도 반복하고 익숙하게 만들었던게 이번 강의 수강에 큰 도움이 되었다.
