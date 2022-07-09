/**  Функция, которая добавляет класс с ошибкой */
const showError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};
/** Функция, которая удаляет класс с ошибкой */
const hideError = (errorElement, inputElement, config) => {
  errorElement.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
};
/** Функция, которая проверяет валидность поля */
const checkInputValidity = (formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if (isInputNotValid) {
    showError(errorElement, inputElement, config);
  } else {
    hideError(errorElement, inputElement, config);
  }
};

const toggleButtonState = (button, isActive = false, config) => {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = "disabled";
  }
};

export const setEventListers = (formElement, config) => {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(submitButton, formElement.checkValidity(), config);

  Array.from(inputsList).forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      const isFormValid = formElement.checkValidity();
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(submitButton, isFormValid, config);
    });
  });

  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
};

export { toggleButtonState };
