

  // Функция, которая добавляет класс с ошибкой
  const showError = (errorElement, inputElement, inputErrorClass) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass)
}
  // Функция, которая удаляет класс с ошибкой
  const hideError = (errorElement, inputElement, inputErrorClass) => {
    errorElement.textContent = '';
    inputElement.classList.remove(inputErrorClass)
}
  // Функция, которая проверяет валидность поля
  const checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if(isInputNotValid) {
        showError(errorElement, inputElement, config);
    } else {
        hideError(errorElement, inputElement, config);
    }
}

const toggleButtonState = (button, isActive, inactiveButtonClass) => {
    if(isActive){
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(inactiveButtonClass);
        button.disabled = 'disabled';
    }
}

export const setEventListers = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
    const inputsList = formElement.querySelectorAll(inputSelector);
    const submitButton = formElement.querySelector(submitButtonSelector);
 

    Array.from(inputsList).forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            const isFormValid = formElement.checkValidity();
            checkInputValidity(formElement, inputElement, inputErrorClass)
            toggleButtonState(submitButton, isFormValid, inactiveButtonClass)
        })
    }) 

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('отправка формы');
    })

}