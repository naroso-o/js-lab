/** nomal button */

/** 리스너를 한 번씩 추가합니다. */
// 추가
// normalButtonEl.addEventListener("click", normalTextChange);
// normalButtonEl.addEventListener("click", normalColorChange);
// // 삭제
// removeButtonEl.addEventListener("click", () => {
//   normalButtonEl.removeEventListener("click", normalTextChange);
// });
// removeButtonEl.addEventListener("click", () => {
//   normalButtonEl.removeEventListener("click", normalColorChange);
// });

/** 리스너 내에서 this를 활용합니다. 익명함수여도 상관없습니다. */
// // 가능
// function printCurrentText (e) {
//   console.log(this.innerHTML)
// }
// normalButtonEl.addEventListener("click", printCurrentText)
// // 가능
// normalButtonEl.addEventListener("click", function (e) {
//   console.log(this.innerHTML)
// })
// // 불가능
// normalButtonEl.addEventListener("click", () => {
//   console.log(this.innerHTML)
// })

/**  익명함수는 기존에 동일한 바디를 가진 리스너가 등록되어 있어도 중복 등록될 수 있습니다. */
// normalButtonEl.addEventListener("click", function () {
//   const normalButtonEl = document.getElementById("normal-button");
//   if (normalButtonEl.innerHTML === `Red`) {
//     normalButtonEl.innerHTML = `Yellow`;
//   } else {
//     normalButtonEl.innerHTML = `Red`;
//   }
// });
// normalButtonEl.addEventListener("click", function () {
//   const normalButtonEl = document.getElementById("normal-button");
//   if (normalButtonEl.innerHTML === `Red`) {
//     normalButtonEl.style.backgroundColor = "red";
//   } else {
//     normalButtonEl.style.backgroundColor = `yellow`;
//   }
// });

/** 함수 참조 관련 문제 케이스 */
// function handleClick(e) {}

// removeButtonEl.addEventListener("click", () => {
//   normalButtonEl.removeEventListener("click", handleClick);
// });

/** 함수의 참조 유지, 하지만 계속해서 재할당 시  */
// for (let i = 1; i <= 3; i++)
//   normalButtonEl.addEventListener(
//     "click",
//     (handleClick = function (e) {
//       console.log(`[${i}] 함수의 참조를 유지한 채 계속해서 재할당`);
//     })
//   );

/** 함수의 참조는 동일, 하지만 계속해서 재정의 시  */
// for (let i = 1; i <= 3; i++)
//   normalButtonEl.addEventListener("click", function handleClick(e) {
//     console.log(`[${i}] 함수를 계속해서 재정의`);
//   });
