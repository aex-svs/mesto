const popupForm = document.querySelector(".form-popup");
const popupFormBtnClose = popupForm.querySelector(".form-popup__btn-close");
const profileBtnEdit = document.querySelector(".profile__btn-edit");

const popupVisibility = function() {
    popupForm.classList.toggle("form-popup_active");
};

profileBtnEdit.addEventListener("click", popupVisibility);