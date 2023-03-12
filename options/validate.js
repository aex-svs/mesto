const enableInputError = (formElement, inputElement, errorElement, options) => {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorMessage.textContent = errorElement;
  errorMessage.classList.add(options.errorClass);
}

const disableInputError = (formElement, inputElement, options) => {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorMessage.classList.remove(options.errorClass);
  errorMessage.textContent = "";
}

const inputValidation = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    enableInputError(formElement, inputElement, inputElement.validationMessage, options)
  } else {
    disableInputError(formElement, inputElement, options);
  }
}

const handleInput = (inputItems) => {
  return inputItems.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const buttonToggleDisable = (inputItems, buttonElement, disableButtonClass) => {
  if (handleInput(inputItems)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(disableButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(disableButtonClass);
  }
}

const handleEventFormElement = (formElement, options) => {
  const inputItems = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  buttonToggleDisable(inputItems, buttonElement);
  inputItems.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      inputValidation(formElement, inputElement, options);
      buttonToggleDisable(inputItems, buttonElement, options.submitButtonSelector);
    })
  })
}

const clearValidation = (formElement, options) => {
  const inputItems = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  buttonToggleDisable(inputItems, buttonElement, options.disableButtonClass);
  inputItems.forEach((inputElement) => {
    disableInputError(formElement, inputElement, options);
  })
}
enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const fieldsets = Array.from(formElement.querySelectorAll(options.inputFieldsetSelector))
    fieldsets.forEach((item) => {
      handleEventFormElement(item, options);
    })
  })
}
