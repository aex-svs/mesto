const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//popup
const popup = document.querySelector(".popup");

const popupFormEdit = document.querySelector(".popup-edit__profile");

const popupAddElement = document.querySelector(".popup__add-element");

const lightbox = document.querySelector(".popup-lightbox");

const popupFormBtnClose = document.querySelectorAll(".popup__btn-close");

//profile
const profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__info-title");
let profileJob = profile.querySelector(".profile__subtitle");
const popupBtnOpenProfile = profile.querySelector(".profile__btn-edit");

//cardTamplete

const template = document.getElementById("element_card");

const elementList = document.querySelector(".elements__list");

//create item

const elementAdd = profile.querySelector(".profile__btn-add");

const formCreate = document.querySelector(".form-add-element");
const formCreateTitle = formCreate.querySelector(".form-profile__input_type_title");
const formCreateLink = formCreate.querySelector(".form-profile__input_type_link");


//popup lightbox

const lightboxImg = document.querySelector(".popup__figure-img");
const lightboxTitle = document.querySelector(".popup__figure-title");

// Open - close Modal
let nameInput = popupFormEdit.querySelector(".form-profile__input_type_name");
let jobInput = popupFormEdit.querySelector(".form-profile__input_type_job");

const openPopup = function (popup) {
  popup.classList.add("popup_active");

}

const closePopup = function (popup) {
  popup.classList.remove("popup_active");
}


popupFormBtnClose.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

//popup input

const insertInputProfile = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

insertInputProfile(popupFormEdit)

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupFormEdit);
}



// new code


const newItemElement = (item) => {
  const newItemElement = template.content.cloneNode(true);

  const deleteBtn = newItemElement.querySelector(".element__btn-delete");
  deleteBtn.addEventListener("click", deleteItem);

  const likeBtn = newItemElement.querySelector(".element__btn-like");
  likeBtn.addEventListener("click", likeItem);


  const newItemTitle = newItemElement.querySelector(".element__title");
  const newItemLink = newItemElement.querySelector(".element__img");
  newItemTitle.textContent = item.name;
  newItemLink.src = item.link;
  newItemLink.alt = item.name;

  newItemLink.addEventListener("click", (e) => {
    lightboxImg.src = e.target.src
    lightboxImg.alt = item.name
    lightboxTitle.textContent = item.name;

    openPopup(lightbox)
  })

  return newItemElement;
}

const deleteItem = (evt) => {
  evt.target.closest(".element").remove();
};
const likeItem = (evt) => {
  evt.target.classList.toggle("element__btn-like_active");
}

//addBtn
const handleFormAddSubmit = (evt) => {
  evt.preventDefault();

  const addCreateElement = {
    name: formCreateTitle.value,
    link: formCreateLink.value
  }

  elementList.prepend(newItemElement(addCreateElement))

  formCreate.reset()

  closePopup(popupAddElement)
}

//render
const renderItem = (wrap, evt) => {
  wrap.append(newItemElement(evt));
}

initialCards.forEach((evt) => {
  renderItem(elementList, evt);
})

popupBtnOpenProfile.addEventListener("click", () => openPopup(popupFormEdit));
elementAdd.addEventListener("click", () => openPopup(popupAddElement));

popupFormEdit.addEventListener("submit", handleFormSubmit);
popupAddElement.addEventListener("submit", handleFormAddSubmit);
