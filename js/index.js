// BURGER

const checkbox = document.querySelector('.navigation__checkbox');
const menuItemsBlock = document.querySelector('.navigation__list');

menuItemsBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__link')) {
    checkbox.checked = !checkbox.checked;
  }
});
