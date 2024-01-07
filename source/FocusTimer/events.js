import { timerControls, musicControls } from "./elements.js";
import * as actions from "./actions.js";

function registerControls(controls) {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] === "function") {
      actions[action]();
    }
  });
}

export function registerControlsMusic() {
  const musicControlsElement = musicControls;
  registerControls(musicControlsElement);
}

export function registerControlsTimer() {
  const timerControlsElement = timerControls;
  registerControls(timerControlsElement);
}
