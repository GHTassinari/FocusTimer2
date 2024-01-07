export const buttonPressAudio = new Audio("./assets/button-press.wav");

export const kitchenTimer = new Audio("./assets/kichen-timer.mp3");

export const cafeteriaMusic = new Audio("./assets/cafeteria.wav");
export const fireplaceMusic = new Audio("./assets/fireplace.wav");
export const rainMusic = new Audio("./assets/rain.wav");
export const forestMusic = new Audio("./assets/forest.wav");

const allMusics = [cafeteriaMusic, fireplaceMusic, rainMusic, forestMusic];

allMusics.forEach((music) => {
  music.loop = true;
  music.addEventListener("ended", () => {
    if (music.paused) return;
    music.pause();
    music.currentTime = 0;
  });
});
