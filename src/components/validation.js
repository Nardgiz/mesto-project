export class FormValidator{
  constructor(data, formElement) {
    this._inputErrorClass = data.inputErrorClass;
    this._inputSelector = data.inputSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._formElement = formElement;
    // this._inputList = Array.from(this._formElement.querySelector(this._inputSelector));
    this.submitButton = this._formElement.querySelector(this._submitButtonSelector);

  }

/**  Функция, которая добавляет класс с ошибкой */
_showError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(this._inputErrorClass);
};
/** Функция, которая удаляет класс с ошибкой */
_hideError = (errorElement, inputElement, config) => {
  errorElement.textContent = "";
  inputElement.classList.remove(this._inputErrorClass);
};
/** Функция, которая проверяет валидность поля */
_checkInputValidity = (_formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

  if (isInputNotValid) {
    this._showError(errorElement, inputElement, config);
  } else {
    this._hideError(errorElement, inputElement, config);
  }
};

_toggleButtonState = (button, isActive = false) => {
  if (isActive) {
    button.classList.remove(this._inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(this._inactiveButtonClass);
    button.disabled = "disabled";
  }
};

_setEventListers = (formElement, config) => {
  const inputsList = formElement.querySelectorAll(this._inputSelector);
  // const submitButton = formElement.querySelector(this._submitButtonSelector);
  this._toggleButtonState(submitButton, formElement.checkValidity(), config);

  Array.from(inputsList).forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      const isFormValid = this._formElement.checkValidity();
      this._checkInputValidity(formElement, inputElement, config);
      this._toggleButtonState(submitButton, isFormValid, config);
    });
  });

  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
};

}