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
  sounds.buttonPressAudio.play();
  state.minutes += 5;
  timer.updateDisplay();
  state.seconds = originalSeconds
}

export function decreaseTime() {
  const originalSeconds = state.seconds;
  sounds.buttonPressAudio.play();
  state.minutes = Math.max(0, state.minutes - 5);

  if (state.minutes < 1) {
    state.seconds = 0;
  } else {
    state.seconds = originalSeconds;
  }

  timer.updateDisplay();
}

// Music buttons

function deactivateAllButtonsExcept(exceptButtonId) {
  const buttonIds = ['forestMusicButton', 'rainMusicButton', 'coffeeShopMusicButton', 'fireplaceMusicButton'];
  buttonIds.forEach(id => {
    if (id !== exceptButtonId) {
      const button = document.getElementById(id);
      button.classList.remove("active");
    }
  });

  if (exceptButtonId !== 'forestMusicButton') sounds.forestMusic.pause();
  if (exceptButtonId !== 'rainMusicButton') sounds.rainMusic.pause();
  if (exceptButtonId !== 'coffeeShopMusicButton') sounds.cafeteriaMusic.pause();
  if (exceptButtonId !== 'fireplaceMusicButton') sounds.fireplaceMusic.pause();
}

export function coffeeShopMusic() {
  const button = document.getElementById('coffeeShopMusicButton');
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    sounds.cafeteriaMusic.pause();
    sounds.cafeteriaMusic.currentTime = 0;
  } else {
    deactivateAllButtonsExcept('coffeeShopMusicButton');
    button.classList.add("active");
    sounds.cafeteriaMusic.play();
  }
}

export function fireplaceMusic() {
  const button = document.getElementById('fireplaceMusicButton');
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    sounds.fireplaceMusic.pause();
    sounds.fireplaceMusic.currentTime = 0;
  } else {
    deactivateAllButtonsExcept('fireplaceMusicButton');
    button.classList.add("active");
    sounds.fireplaceMusic.play();
  }
}

export function rainMusic() {
  const button = document.getElementById('rainMusicButton');
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    sounds.rainMusic.pause();
    sounds.rainMusic.currentTime = 0;
  } else {
    deactivateAllButtonsExcept('rainMusicButton');
    button.classList.add("active");
    sounds.rainMusic.play();
  }
}

export function forestMusic() {
  const button = document.getElementById('forestMusicButton');
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    sounds.forestMusic.pause();
    sounds.forestMusic.currentTime = 0;
  } else {
    deactivateAllButtonsExcept('foretMusicButton');
    button.classList.add("active");
    sounds.forestMusic.play();
  }
}