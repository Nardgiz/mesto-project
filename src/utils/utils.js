/**функция измения статуса кнопки Сохранить на Сохранение*/
const loadSubmitButton = (popup, isLoading) => {
  const allSubmitButtons = popup.querySelectorAll(".form__button");
  allSubmitButtons.forEach((button) => {
    if (isLoading) {
      button.textContent+='...';
    } else {
      button.textContent=button.textContent.slice(0,-3);
    }
  });
};

export { loadSubmitButton };