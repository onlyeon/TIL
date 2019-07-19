// 프로그래머를 도와줄 유틸리티(장비, 도구)
// 함수(function)
// 화살표(Arrow) Function

// 선택자를 전달받아 문서에서 대상(요소 - Element, el)를 찾아오는 일을 수행하는 유틸리티 함수
// const 함수이름 = 화살표 함수
const el = (selector) => {
  // 수행한 결과를 반환 (return)
  return document.querySelector(selector)
}

// 최근에 변경된 신택스(ES6)를 따르면 아래의 형태로도 동일한 결과를 받아올 수 있다
// const el = selector => document.querySelector(selector)
const elList = selector => document.querySelectorAll(selector)

// 함수 실행 (선택자)
// const menuItemButton = el('.ediya-menu__item a')
// const menuItemButton = elList('.ediya-menu__item a')

// .ediya-menu__item a 요소를 선택
// JavaScript 프로그래밍 (기억, 메모리 => 변수, 상수)
// const menuItemButton = document.querySelector('.ediya-menu__item a')

// `console.log(menuItemButton)` 는 CSS로 보면 `.ediya-menu__item a {}` 한 것곽 같은 내용이다
// console.log(menuItemButton) // consol panel에 null이 나오는 경우 자바스크립트를 잘못 작성한것 


// 함수 실행

// 메뉴 아이템(집합)
const menuItems = elList('.ediya-menu__item')
// 메뉴 아이템 버튼(집합)
const menuItemButtons = elList('.ediya-menu__item a[role="button"]')
// 메뉴 아이템 모달(집합)
const menuItemModals = elList('.ediya-menu__item div[role="dialog"]')

console.log('menuItems', menuItems)
console.log('menuItemButtons', menuItemButtons)
console.log('menuItemModals', menuItemModals)

// 클릭했을 때 처리될 함수를 작성
// 이벤트 핸들러 함수가 됨 e = event의 약자, evt 등으로도 사용한다
const handleShowModal = (e) => {
  // preventDefault
  // 브라우저의 기본 동작 차단 - 브라우저 네이티브 기능을 사용하면 상관없으나, 새로운 디자인으로 만들경우 접근성과 인터렉션을 제어하기 위해 작성한다
  e.preventDefault()
  // 클릭한 버튼
  const button = e.currentTarget
  // a[role="button"] + div[role="dialog"] 찾는다
  const modal = button.nextElementSibling
  // 버튼 누른 상태 업데이트
  button.setAttribute('aria-pressed', true)
  // div[role="dialog"] 요소의 hidden 속성 제거
  modal.removeAttribute('hidden')
  // div [role="dialog"] 요소의 is-active 클래스 속성 추가
  modal.setTimeout(() => modal.classList.add('is-active'), 0)
}

// 이벤트 연결(bind) => 문서의 요소(클릭 가능한 a[role="button"])
menuItemButtons.forEach((item, index) => {
  // console.log(item, index)
  // 문서에 존재하는 수집된 a[role="button"]를 순환하여
  // 개별적으로 이벤트를 처리할 함수에 연결한다.
  item.addEventListener('click', handleShowModal)
})
// 위와 같은 내용을 출력하지만 ES6 syntax
// menuItemButtons.forEach(button => button.addEventListener('click', handleShowModal))