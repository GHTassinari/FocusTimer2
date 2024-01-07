import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = !state.isRunning;

  if (state.isRunning) {
    timer.countdown();
    sounds.buttonPressAudio.play();
  }
}

export function stop() {
  state.isRunning = false;
  sounds.buttonPressAudio.play();
  timer.stop();
}

export function reset() {
  state.minutes = 25;
  state.seconds = 0;
  timer.updateDisplay();
}

export function increaseTime() {
  const originalSeconds = state.seconds;
  state.minutes += 5;
  timer.updateDisplay();
  state.seconds = originalSeconds
}

export function decreaseTime() {
  const originalSeconds = state.seconds;
  state.minutes = Math.max(0, state.minutes - 5);
  timer.updateDisplay();
  state.seconds = originalSeconds;
}
