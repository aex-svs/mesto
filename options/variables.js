//popups
const popupElement = document.querySelectorAll(".popup");
const popupFormEdit = document.querySelector(".popup-edit-profile");
const popupAddElement = document.querySelector(".popup-add-element");
const popupLightbox = document.querySelector(".popup-lightbox");
const popupFormBtnClose = document.querySelectorAll(".popup__btn-close");

//profile
const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__info-title");
const profileJob = profileElement.querySelector(".profile__subtitle");
const popupBtnOpenProfile = profileElement.querySelector(".profile__btn-edit");

//profile form
const formProfileEdit = document.querySelector(".form-profile");
const formProfileNameInput = formProfileEdit.querySelector(".form__input_type_name");
const formProfilejobInput = formProfileEdit.querySelector(".form__input_type_job");

//cardTamplete
const templateElement = document.getElementById("element_card");
const elementList = document.querySelector(".elements__list");

//create item
const elementAdd = profileElement.querySelector(".profile__btn-add");
const formCreate = document.querySelector(".form-add-element");
const formCreateTitle = formCreate.querySelector(".form__input_type_title");
const formCreateLink = formCreate.querySelector(".form__input_type_link");

//popup lightbox
const lightboxImg = document.querySelector(".popup__figure-img");
const lightboxTitle = document.querySelector(".popup__figure-title");

//options validate
const optionsValidation = ({
  formSelector: '.form',
  inputFieldsetSelector: '.form__fieldset',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-submit',
  disableButtonClass: 'form__btn-submit_disable',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-message_visible'
});
