'use strict';

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const suit = document.querySelector(`.setup-wizard`);
const coat = suit.querySelector(`.wizard-coat`);
const eyes = suit.querySelector(`.wizard-eyes`);
const fireballWrap = document.querySelector(`.setup-fireball-wrap`);
const coatArr = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesArr = [`black`, `red`, `blue`, `yellow`, `green`];
const fireballArr = [`rgb(238, 72, 48)`, `rgb(48, 168, 238)`, `rgb(92, 230, 192)`, `rgb(232, 72, 213)`, `rgb(230, 232, 72)`];
// const fireballArr = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const sendValues = document.querySelectorAll(`input`);

fireballWrap.style.backgroundColor = fireballArr[0];
coat.style.fill = coatArr[0];
eyes.style.fill = eyesArr[0];

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape` && !evt.target.matches(`input[class="setup-user-name"]`)) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = () => {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, () => {
  openPopup();
});

setupOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, () => {
  closePopup();
});

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

userNameInput.addEventListener(`input`, () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }
  userNameInput.reportValidity();
});

const colorToggle = (arr, element, number) => {
  for (let i = 0; i < arr.length; i++) {
    if (element.style.fill === arr[i] && element.style.fill !== arr[arr.length - 1]) {
      element.style.fill = arr[i + 1];
      sendValues[number].value = element.style.fill;
      break;
    }
    if (element.style.fill === arr[arr.length - 1]) {
      element.style.fill = arr[0];
      sendValues[number].value = element.style.fill;
      break;
    }
  }
};

const colorToggleFireball = (arr, element, number) => {
  for (let i = 0; i < arr.length; i++) {
    if (element.style.backgroundColor === arr[i] && element.style.background !== arr[arr.length - 1]) {
      element.style.backgroundColor = arr[i + 1];
      sendValues[number].value = element.style.background;
      break;
    }
    if (element.style.backgroundColor === arr[arr.length - 1]) {
      element.style.backgroundColor = arr[0];
      sendValues[number].value = element.style.background;
      break;
    }
  }
};

coat.addEventListener(`click`, (evt) => {
  if (evt.target.matches(`use[class="wizard-coat"]`)) {
    colorToggle(coatArr, coat, 2);
  }
});

eyes.addEventListener(`click`, (evt) => {
  if (evt.target.matches(`use[class="wizard-eyes"]`)) {
    colorToggle(eyesArr, eyes, 3);
  }
});

fireballWrap.addEventListener(`click`, (evt) => {
  if (evt.target.matches(`div`)) {
    colorToggleFireball(fireballArr, fireballWrap, 4);
  }
});
