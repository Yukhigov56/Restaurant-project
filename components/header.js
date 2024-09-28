import logoZira from '../images/logo ZIRA.png';
import instagIcon from '../images/instagggg.svg';
import vkIcon from '../images/2986072_logo_media_social_vk_icon.svg';
import facebookIcon from '../images/facebook.svg';
import twitterIcon from '../images/twitt.svg';

export function createHeader() {
  const header = document.createElement('header');

  // Создаем левую часть хедера
  const headerLeft = document.createElement('div');
  headerLeft.className = 'header-left';

  const logoDiv = document.createElement('div');
  logoDiv.className = 'header-left-name';
  const logoImg = document.createElement('img');
  logoImg.src = logoZira;
  logoDiv.appendChild(logoImg);

  const socialList = document.createElement('ul');
  const socialIcons = [instagIcon, vkIcon, facebookIcon, twitterIcon];

  socialIcons.forEach(iconSrc => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.className = 'header-icon';
    img.src = iconSrc;
    li.appendChild(img);
    socialList.appendChild(li);
  });

  headerLeft.appendChild(logoDiv);
  headerLeft.appendChild(socialList);

  // Создаем правую часть хедера
  const headerRight = document.createElement('div');
  headerRight.className = 'header-right';

  const navList = document.createElement('ul');
  const navItems = ['Главная', 'Меню', 'О нас', 'Галерея', 'Вакансии', 'Блог'];

  navItems.forEach((item, index) => {
    const li = document.createElement('li');
    if (index === 0) li.className = 'visited';
    li.textContent = item;
    navList.appendChild(li);
  });

  const userOptionsList = document.createElement('ul');
  const userOptions = ['Бронирование', 'Вход / Регистрация'];

  userOptions.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    userOptionsList.appendChild(li);
  });

  headerRight.appendChild(navList);
  headerRight.appendChild(userOptionsList);

  // Добавляем левую и правую части в хедер
  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  // Возвращаем созданный элемент хедера
  return header;
}
