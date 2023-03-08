//popups
const popupElement = document.querySelector(".popup");
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

// Open - close Modal
const openPopup = function (popupElement) {
  popupElement.classList.add("popup_active");
}

const closePopup = function (popupElement) {
  popupElement.classList.remove("popup_active");
}

popupFormBtnClose.forEach((btn) => {
  const popupElement = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popupElement));
});

//popup input
insertInputProfile = () => {
  formProfileNameInput.value = profileName.textContent;
  formProfilejobInput.value = profileJob.textContent;
}

insertInputProfile(popupFormEdit)

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = formProfileNameInput.value;
  profileJob.textContent = formProfilejobInput.value;
  closePopup(popupFormEdit);
}

// new code
const createNewItemElement = (item) => {
  const createNewItemElement = templateElement.content.cloneNode(true);
  const deleteBtn = createNewItemElement.querySelector(".element__btn-delete");
  deleteBtn.addEventListener("click", deleteItem);
  const likeBtn = createNewItemElement.querySelector(".element__btn-like");
  likeBtn.addEventListener("click", likeItem);
  const newItemTitle = createNewItemElement.querySelector(".element__title");
  const newItemLink = createNewItemElement.querySelector(".element__img");
  newItemTitle.textContent = item.name;
  newItemLink.src = item.link;
  newItemLink.alt = item.name;
  newItemLink.addEventListener("click", (e) => {
    lightboxImg.src = e.target.src
    lightboxImg.alt = item.name
    lightboxTitle.textContent = item.name;

    openPopup(popupLightbox)
  })

  return createNewItemElement;
}

const deleteItem = (evt) => {
  evt.target.closest(".element").remove();
};
const likeItem = (evt) => {
  evt.target.classList.toggle("element__btn-like_active");
}

//addBtn
const submitFormAddElement = (evt) => {
  evt.preventDefault();

  const addCreateElement = {
    name: formCreateTitle.value,
    link: formCreateLink.value
  }

  elementList.prepend(createNewItemElement(addCreateElement))

  formCreate.reset()

  closePopup(popupAddElement)
}

//render
const renderInitialCards = (wrap, evt) => {
  wrap.append(createNewItemElement(evt));
}

initialCards.forEach((evt) => {
  renderInitialCards(elementList, evt);
})

popupBtnOpenProfile.addEventListener("click", () => openPopup(popupFormEdit));
elementAdd.addEventListener("click", () => {
  openPopup(popupAddElement);
  formCreate.reset();
});
popupFormEdit.addEventListener("submit", submitEditProfileForm);
popupAddElement.addEventListener("submit", submitFormAddElement);
