// 현재 화면에 모든 요소들이 다 완성되면
// js 코드를 시작 하겠다.
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const headerFake = document.querySelector("header.fake");
  const section = document.querySelector("section");

  //화면에 스크롤이 발생하면 실행하기
  document.addEventListener("scroll", () => {
    const windowTop = window.scrollY;
    if (windowTop > 150) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
