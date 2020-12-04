import './styles.css';

import menu from './menu.json';

import cardTemplate from './templates/food-card.hbs';

const menuList = document.querySelector('.js-menu');

const bodyTheme = document.querySelector('body');

const currentTheme = localStorage.getItem('theme');

const themeController = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (currentTheme === Theme.DARK) {
  bodyTheme.classList.add(Theme.DARK);
  themeController.checked = true;
} else {
  bodyTheme.classList.add(Theme.LIGHT);
}

const posts = cardTemplate(menu);

menuList.insertAdjacentHTML('afterbegin', posts);

const changeTheme = () => {
  let oldTheme = localStorage.getItem('theme');
  let newTheme;
  if (oldTheme === Theme.DARK) {
    newTheme = Theme.LIGHT;
  } else {
    newTheme = Theme.DARK;
  }
  bodyTheme.classList.remove(oldTheme);
  bodyTheme.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
};

themeController.addEventListener('change', changeTheme);
