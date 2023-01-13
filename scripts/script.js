//popup
const popupForm = document.querySelector(".popup");
const popupFormBtnClose = popupForm.querySelector(".popup__btn-close");

//profile
const profileInfo = document.querySelector(".profile__info");
let profileName = profileInfo.querySelector(".profile__info-title");
let profileJob = profileInfo.querySelector(".profile__subtitle");
const popupBtnOpen = profileInfo.querySelector(".profile__btn-edit");

// Open - close Modal
let nameInput = popupForm.querySelector(".form-profile__input_type_name");
let jobInput = popupForm.querySelector(".form-profile__input_type_job");

function openPopup() {
  popupForm.classList.add("popup_active");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function closePopup() {
  popupForm.classList.remove("popup_active");
}

//popup input
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

popupForm.addEventListener("submit", handleFormSubmit);
popupBtnOpen.addEventListener("click", openPopup);
popupFormBtnClose.addEventListener("click", closePopup);
