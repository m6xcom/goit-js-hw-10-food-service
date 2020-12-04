import './styles.css';

import menu from './menu.json';

import cardTemplate from './templates/food-card.hbs';

const menuList = document.querySelector('.js-menu');

const bodyTheme = document.querySelector('body');

const currentTheme = localStorage.getItem('theme');

const themeController = document.querySelector('.theme-switch__toggle');

if (currentTheme === 'dark') {
  bodyTheme.classList.remove('light-theme');
  bodyTheme.classList.add('dark-theme');
  themeController.checked = true;
} else if (currentTheme === 'light') {
  bodyTheme.classList.add('light-theme');
  bodyTheme.classList.remove('dark-theme');
}

const posts = cardTemplate(menu);

menuList.insertAdjacentHTML('afterbegin', posts);

const changeTheme = event => {
  if (event.target.checked) {
    bodyTheme.classList.remove('light-theme');
    bodyTheme.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyTheme.classList.add('light-theme');
    bodyTheme.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
};

themeController.addEventListener('change', changeTheme);
