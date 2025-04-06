export const EventSection = () => {
  return `
      <div>
        <div class="w-fit flex gap-16 mt-12 mb-8 p-8 border-4 rounded-lg border-slate-200">
          <div class="flex flex-col gap-2">
            <span>텍스트 변경 버튼</span> 
            <button id="normal-button">No Color</button>
          </div>
          <div class="flex flex-col gap-2">
            <span>이벤트 제거 버튼</span> 
            <button id="remove-event-button">Remove Event</button>
          </div>
          <div class="flex flex-col gap-2">
            <span>이벤트 추가 버튼</span> 
            <button id="add-event-button">Add Event</button>
          </div>
        </div>
      </div>
    `;
};

export const normalTextChange = () => {
  const normalButtonEl = document.getElementById("normal-button");
  if (normalButtonEl.innerHTML === `Red`) {
    normalButtonEl.innerHTML = `Yellow`;
  } else {
    normalButtonEl.innerHTML = `Red`;
  }
};

export const normalColorChange = () => {
  const normalButtonEl = document.getElementById("normal-button");
  if (normalButtonEl.innerHTML === `Red`) {
    normalButtonEl.style.backgroundColor = "red";
  } else {
    normalButtonEl.style.backgroundColor = `yellow`;
  }
};

export const removeEvent = () => {};
export const addEvent = () => {};
