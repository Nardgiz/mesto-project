class Validation {
  constructor(config, button, errorElement, inputElement, formElement) {
    this._config = config;
    this._button = button;
    this._errorElement = errorElement;
    this._inputElement = inputElement;
    this._formElement = formElement;
  }

    /**  Функция, которая добавляет класс с ошибкой */
  _showError () {
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._inputElement.classList.add(this._config.inputErrorClass);
  };

  /** Функция, которая удаляет класс с ошибкой */
  _hideError() {
    this._errorElement.textContent = "";
    this._inputElement.classList.remove(this._config.inputErrorClass);
  };
  /** Функция, которая проверяет валидность поля */
  checkInputValidity () {
    const isInputNotValid = !this._inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    if (isInputNotValid) {
      this._showError(this._errorElement, this._inputElement, this._config);
    } else {
      this._hideError(this._errorElement, this._inputElement, this._config);
    }
  };

  

  toggleButtonState (isActive = false) {
    if (isActive) {
      this._button.classList.remove(this._config.inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._config.inactiveButtonClass);
      this._button.disabled = "disabled";
    }
  };

  setEventListers() {
    const inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    toggleButtonState(submitButton, this._formElement.checkValidity(), this._config);

    Array.from(inputsList).forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        const isFormValid = this._formElement.checkValidity();
        this._checkInputValidity(this._formElement, inputElement, this._config);
        toggleButtonState(submitButton, isFormValid, this._config);
      });
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  };


}




