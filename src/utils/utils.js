/**функция измения статуса кнопки Сохранить на Сохранение*/
const loadSubmitButton = (popup, isLoading) => {
  const allSubmitButtons = popup.querySelectorAll(".form__button");
  allSubmitButtons.forEach((button) => {
    if (isLoading) {
      button.value = "Сохранение...";
    } else {
      button.value = "Сохранить";
    }
  });
};

export { loadSubmitButton };
