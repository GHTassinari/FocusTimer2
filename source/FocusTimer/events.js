import { timerControls, musicControls, musicButtons } from "./elements.js";
import * as actions from "./actions.js";

function registerControls(controls) {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] === "function") {
      actions[action]();
    } else if (musicButtons[action]) {
      actions.startMusic(action);
      toggleActiveButton(action);
    }
  });
}

function toggleActiveButton(musicType) {
  const button = musicButtons[musicType];
  button.classList.toggle("active");
}

export function registerControlsMusic() {
  const musicControlsElement = musicControls;
  registerControls(musicControlsElement);
  
  Object.values(musicButtons).forEach((button) => {
    button.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (typeof actions[action] === "function") {
        actions[action]();
      }
      toggleActiveButton(action);
    });
  });
}

export function registerControlsTimer() {
  const timerControlsElement = timerControls;
  registerControls(timerControlsElement);
}
