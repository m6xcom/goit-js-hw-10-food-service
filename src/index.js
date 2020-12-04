import './styles.css';

import menu from './menu.json';

import cardTemplate from './templates/food-card.hbs';

const menuList = document.querySelector('.js-menu');

const posts = cardTemplate(menu);

menuList.insertAdjacentHTML('afterbegin', posts);
