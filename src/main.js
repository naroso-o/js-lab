import "./style.css";
import {
  EventSection,
  normalTextChange,
  normalColorChange,
} from "./sections/event/EventSection";

const MainPage = () => {
  return `
    <div>
      <h1>Hello JS LAB!</h1>
      ${EventSection()}
    </div>
  `;
};
document.querySelector("#app").innerHTML = MainPage();
