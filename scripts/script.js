// Open - close Modal
const openPopup = function (popupElement) {
  popupElement.classList.add("popup_active");
  document.addEventListener('keydown', handleButtonEsc);
}

const closePopup = function (popupElement) {
  popupElement.classList.remove("popup_active");
  document.removeEventListener('keydown', handleButtonEsc);
}

popupFormBtnClose.forEach((btn) => {
  const popupElement = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popupElement));
});

/** press  buttons close popup*/
const handleButtonEsc = (evt) => {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector(".popup_active");
    closePopup(currentPopup)
  }
}
popupElement.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup)
    }
  })
})

//popup input
insertInputProfile = () => {
  formProfileNameInput.value = profileName.textContent;
  formProfilejobInput.value = profileJob.textContent;
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = formProfileNameInput.value;
  profileJob.textContent = formProfilejobInput.value;
  closePopup(popupFormEdit);
}

// new code
const createNewItemElement = (item) => {
  const createNewItemElement = templateElement.content.cloneNode(true);
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

elementList.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('element__btn-like')) {
    evt.target.classList.toggle("element__btn-like_active");
  }
  if (evt.target.classList.contains('element__btn-delete')) {
    evt.target.closest(".element").remove();
  }
});

//addBtn
const submitFormAddElement = (evt) => {
  evt.preventDefault();

  const addCreateElement = {
    name: formCreateTitle.value,
    link: formCreateLink.value
  }

  elementList.prepend(createNewItemElement(addCreateElement));
  formCreate.reset();
  closePopup(popupAddElement)
}

//render
const renderInitialCards = (wrap, evt) => {
  wrap.append(createNewItemElement(evt));
}

initialCards.forEach((evt) => {
  renderInitialCards(elementList, evt);
})

popupBtnOpenProfile.addEventListener("click", () => {
  openPopup(popupFormEdit);
  insertInputProfile(popupFormEdit);
});
elementAdd.addEventListener("click", () => {
  openPopup(popupAddElement);
  formCreate.reset();
});

popupFormEdit.addEventListener("submit", submitEditProfileForm);
popupAddElement.addEventListener("submit", submitFormAddElement);

enableValidation(optionsValidation);
