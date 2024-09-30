import logoZira from "../images/logo ZIRA.png";
import instagIcon from "../images/instagggg.svg";
import vkIcon from "../images/2986072_logo_media_social_vk_icon.svg";
import facebookIcon from "../images/facebook.svg";
import twitterIcon from "../images/twitt.svg";

export function createHeader(activePage) {
  
  const header = document.createElement("header");

  // Создаем левую часть хедера
  const headerLeft = document.createElement("div");
  headerLeft.className = "header-left";

  // Логотип
  const logoDiv = document.createElement("div");
  logoDiv.className = "header-left-name";
  const logoImg = document.createElement("img");
  logoImg.src = logoZira;
  logoDiv.appendChild(logoImg);

  // Список социальных иконок
  const socialList = document.createElement("ul");
  const socialIcons = [instagIcon, vkIcon, facebookIcon, twitterIcon];

  socialIcons.forEach((iconSrc) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.className = "header-icon";
    img.src = iconSrc;
    li.appendChild(img);
    socialList.appendChild(li);
  });

  headerLeft.appendChild(logoDiv);
  headerLeft.appendChild(socialList);

  // Создаем правую часть хедера
  const headerRight = document.createElement("div");
  headerRight.className = "header-right";

  // Список навигации
  const navList = document.createElement("ul");
  const navItems = [
    { text: "Главная", id: "nav-home", path: "/" },
    { text: "Меню", id: "nav-menu", path: "/shop" },
    { text: "О нас", id: "nav-about", path: "/about" },
    { text: "Галерея", id: "nav-gallery", path: "/gallery" },
    { text: "Вакансии", id: "nav-jobs", path: "/jobs" },
    { text: "Блог", id: "nav-blog", path: "/blog" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.id = item.id; // Присваиваем id каждому элементу навигации
    li.textContent = item.text;

    console.log(activePage);
    // Устанавливаем класс 'visited' для активной страницы
    if (item.path === activePage) {
      li.classList.add("visited");
    }

    navList.appendChild(li);
  });

  // Список пользовательских опций
  const userOptionsList = document.createElement("ul");
  const userOptions = [
    { text: "Бронирование", id: "nav-reservation" },
    { text: "Вход / Регистрация", id: "nav-login" },
  ];

  userOptions.forEach((option) => {
    const li = document.createElement("li");
    li.id = option.id; // Присваиваем id каждому элементу
    li.textContent = option.text;
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
