export class FormValidator{
  constructor(validationConfig, formElement) {
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._inputSelector = validationConfig.inputSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._formSelector = validationConfig.formSelector;
    this._errorClass = validationConfig.errorClass;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._formElement = formElement;
    this._button = this._formElement.querySelector(this._submitButtonSelector)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))

  }



  /**  Функция, которая добавляет класс с ошибкой */
  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._inputErrorClass);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage
  };
  /** Функция, которая удаляет класс с ошибкой */
  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";

  };
  /** Функция, которая проверяет валидность поля */
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  };

  _includInputValid() {
    return this._inputList.some((inputElement)=> {
      return !inputElement.validity.valid
    })
  }


  _toggleButtonState(){
    if (this._includInputValid()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  };

  _setEventListers() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

 resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach(inputElement => {
      this._hideError(inputElement);
    })
  };

  enableValidation() {
      this._setEventListers()
  };
} 