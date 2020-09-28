'use strict';

const WIZARD_NUMBER = 4;
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const shuffle = (arr) => arr.sort(() => Math.round(Math.random() * 100) - 50);

const createObjWizards = (wizardNames, wizardSurnames, wizardCoatColors, wizardEyesColors) => {
  const names = shuffle(wizardNames);
  const surnames = shuffle(wizardSurnames);
  const coatColors = shuffle(wizardCoatColors);
  const eyesColors = shuffle(wizardEyesColors);
  const arr = [];
  for (let i = 0; i < WIZARD_NUMBER; i++) {
    const obj = {};
    obj.name = names[i];
    obj.surname = surnames[i];
    obj.coatColor = coatColors[i];
    obj.eyesColor = eyesColors[i];
    arr[i] = obj;
  }
  return arr;
};

const wizards = createObjWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  const label = wizardElement.querySelector(`.setup-similar-label`);
  const wizardCoat = wizardElement.querySelector(`.wizard-coat`);
  const wizardEyes = wizardElement.querySelector(`.wizard-eyes`);

  label.textContent = `${wizard.name} ${wizard.surname}`;
  wizardCoat.style.fill = wizard.coatColor;
  wizardEyes.style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.append(renderWizard(wizards[i]));
}
similarListElement.append(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
