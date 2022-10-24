const upButton = document.querySelector('.table__button_type_up');
const downButton = document.querySelector('.table__button_type_down');
const tableImage = document.querySelector('.table__img');

function hendlerUpButton() {
  tableImage.classList.add('table__img_type_hide');
};

function hendlerDownButton() {
  tableImage.classList.remove('table__img_type_hide');
};

upButton.addEventListener('click', hendlerUpButton);

downButton.addEventListener('click', hendlerDownButton);