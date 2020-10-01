'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !evt.target.matches('input[class="setup-user-name"]')) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

//-----------------------------------------------------------
// var userNameInput = document.querySelector('.setup-user-name');

// userNameInput.addEventListener('invalid', function () {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   } else {
//     userNameInput.setCustomValidity('');
//   }
// });

// console.log(userNameInput.validity);
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;
  console.log(valueLength);

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});
//-------------------------------------------------------------------------------
/* <use xlink:href="#wizard-coat" class="wizard-coat" style="fill: #6589a4"></use>
<use xlink:href="#wizard-head" class="wizard-head"></use>
<use xlink:href="#wizard-eyes" class="wizard-eyes"></use>
<use xlink:href="#wizard-hands" class="wizard-hands"></use> */

var coat = document.querySelector('#wizard-coat');
//  coat.style.fill = 'red';

setupOpen.addEventListener('click', function () {
  setup.classList.add('hidden');
});


document.addEventListener('keydown', function (evt) {
  if (evt.key === 'd') {
    debugger
    setup.classList.add('hidden');
    coat.style.fill = 'red';
  }
});
console

