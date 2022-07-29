export class FormValidator{
  constructor({config, errorElement, inputElement, button}, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._errorElement = errorElement;
    this._inputElement = inputElement;
    this._button = button;

    // this._inputErrorClass = data.inputErrorClass;
    //this._inputSelector = data.inputSelector;
    //this._inactiveButtonClass = data.inactiveButtonClass;

    // this._inputList = Array.from(this._formElement.querySelector(this._inputSelector));
    //this.submitButton = this._formElement.querySelector(this._submitButtonSelector);

  }

  /**проверка инпутов форм на валидность */
  enableValidation = () => {
    const forms = document.querySelectorAll(this._config.formSelector);
    Array.from(forms).forEach((formElement) => {
      setEventListers(formElement, this._config);
    })
  }


  /**  Функция, которая добавляет класс с ошибкой */
  _showError = () => {
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._inputElement.classList.add(this._config.inputErrorClass);
  };
  /** Функция, которая удаляет класс с ошибкой */
  _hideError = () => {
    this._errorElement.textContent = "";
    this._inputElement.classList.remove(this._config.inputErrorClass);
  };
  /** Функция, которая проверяет валидность поля */
  checkInputValidity = () => {
    const isInputNotValid = !this._inputElement.validity.valid;
    //const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);

    if (isInputNotValid) {
      this._showError(this._errorElement, this._inputElement, this._config);
    } else {
      this._hideError(this._errorElement, this._inputElement, this._config);
    }
  };

  _toggleButtonState = (isActive = false) => {
    if (isActive) {
      this._button.classList.remove(this._config.inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._config.inactiveButtonClass);
      this._button.disabled = "disabled";
    }
  };

  _setEventListers = () => {
    const inputsList = formElement.querySelectorAll(this._config.inputSelector);
    // const submitButton = formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(submitButton, this._formElement.checkValidity(), this._config.submitButtonSelector);

    Array.from(inputsList).forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        const isFormValid = this._formElement.checkValidity();
        this._checkInputValidity(this._formElement, inputElement, this._config);
        this._toggleButtonState(submitButton, isFormValid, this._config);
      });
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  };

}