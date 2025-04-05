import "./style.css";
import {
  EventSection,
  normalTextChange,
  normalColorChange,
} from "./sections/eventSection";

const MainPage = () => {
  return `
    <div>
      <h1>Hello JS LAB!</h1>
      ${EventSection()}
    </div>
  `;
};
document.querySelector("#app").innerHTML = MainPage();

/** nomal button */
const normalButtonEl = document.getElementById("normal-button");

/** 리스너를 한 번씩 추가합니다. */
normalButtonEl.addEventListener("click", normalTextChange);
normalButtonEl.addEventListener("click", normalColorChange);

/**  익명함수는 기존에 동일한 바디를 가진 리스너가 등록되어 있어도 중복 등록될 수 있습니다. */
// normalButtonEl.addEventListener("click", () => {
//   const normalButtonEl = document.getElementById("normal-button");
//   if (normalButtonEl.innerHTML === `Red`) {
//     normalButtonEl.innerHTML = `Yellow`;
//   } else {
//     normalButtonEl.innerHTML = `Red`;
//   }
// });
// normalButtonEl.addEventListener("click", () => {
//   const normalButtonEl = document.getElementById("normal-button");
//   if (normalButtonEl.innerHTML === `Red`) {
//     normalButtonEl.style.backgroundColor = "red";
//   } else {
//     normalButtonEl.style.backgroundColor = `yellow`;
//   }
// });
