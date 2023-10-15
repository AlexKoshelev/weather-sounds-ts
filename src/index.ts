import "./index.scss";
import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";
/* html элементы */
const main: HTMLElement | null | undefined = document.querySelector(
  "main"
) as HTMLElement;
const buttonsWrapper: HTMLElement | null | undefined =
  main?.querySelector("section");
const buttonSun: HTMLElement | null | undefined = buttonsWrapper?.querySelector(
  `[data-id="sun"]`
) as HTMLElement;
const buttonRain: HTMLElement | null | undefined =
  buttonsWrapper?.querySelector(`[data-id="rain"]`) as HTMLElement;
const buttonWinter: HTMLElement | null | undefined =
  buttonsWrapper?.querySelector(`[data-id="winter"]`);
const sunIcon: HTMLElement | null | undefined = buttonSun?.querySelector(
  ".card-icon-sun"
) as HTMLElement;
const rainIcon: HTMLElement | null | undefined = buttonRain?.querySelector(
  ".card-icon-rain"
) as HTMLElement;
const winterIcon: HTMLElement | null | undefined = buttonWinter?.querySelector(
  ".card-icon-winter"
) as HTMLElement;
/* отслеживание, какой звук сейчас играет */
let sunPlay: boolean = false;
let rainPlay: boolean = false;
let winterPlay: boolean = false;
/* звуки */
let audioSun: HTMLAudioElement = new Audio(summerSound);
let audioRain: HTMLAudioElement = new Audio(rainSound);
let audioWinter: HTMLAudioElement = new Audio(winterSound);
const volumeSlider: HTMLInputElement = document.getElementById(
  "volume-slider"
) as HTMLInputElement;

volumeSlider?.addEventListener("input", () => {
  audioSun.volume = +volumeSlider.value;
  audioRain.volume = +volumeSlider.value;
  audioWinter.volume = +volumeSlider.value;
});
/* три обработчика на каждую кнопку */
buttonSun?.addEventListener("click", (e) => {
  e.preventDefault();
  if (!sunPlay) {
    audioRain.pause();
    audioWinter.pause();
    audioSun.play();
    rainIcon.className = "button card-icon card-icon-rain rain";
    winterIcon.className = "button card-icon card-icon-winter winter";
    sunIcon.className = "button card-icon card-icon-sun pause";
    main.className = "background-sun";
    sunPlay = true;
    winterPlay = false;
    rainPlay = false;
  } else {
    sunPlay = false;
    audioSun.pause();
    sunIcon.className = "button card-icon card-icon-sun sun";
  }
});

buttonRain?.addEventListener("click", (e) => {
  e.preventDefault();
  if (!rainPlay) {
    audioWinter.pause();
    audioSun.pause();
    audioRain.play();
    rainIcon.className = "button card-icon card-icon-rain pause";
    winterIcon.className = "button card-icon card-icon-winter winter";
    sunIcon.className = "button card-icon card-icon-sun sun";
    main.className = "background-rain";
    rainPlay = true;
    sunPlay = false;
    winterPlay = false;
  } else {
    audioRain.pause();
    rainPlay = false;
    rainIcon.className = "button card-icon card-icon-rain rain";
  }
});

buttonWinter?.addEventListener("click", (e) => {
  e.preventDefault();
  if (!winterPlay) {
    audioSun.pause();
    audioRain.pause();
    audioWinter.play();
    winterIcon.className = "button card-icon card-icon-rain pause";
    rainIcon.className = "button card-icon card-icon-rain rain";
    sunIcon.className = "button card-icon card-icon-sun sun";
    main.className = "background-winter";
    winterPlay = true;
    sunPlay = false;
    rainPlay = false;
  } else {
    audioWinter.pause();
    winterPlay = false;
    winterIcon.className = "button card-icon card-icon-rain rain";
  }
});
