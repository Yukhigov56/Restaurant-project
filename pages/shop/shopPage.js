// import { createHeader } from "../components/header";

import lupaIcon from "../../images/section lupa.png";
import cartIcon from "../../images/section korzina.png";
import fireIcon from "../../images/fire icon.png";

import wineImg from "../../images/024.jpg";
import cardTwo from "../../images/003.jpg";
import cardTree from "../../images/004.jpg";
import cardFour from "../../images/009.jpg";
import cardFive from "../../images/010.jpg";
import cardSix from "../../images/011.jpg";
import cardSeven from "../../images/014.jpg";
import cardNine from "../../images/019.jpg";
import cardTen from "../../images/025.jpg";
import cardEleven from "../../images/026.jpg";
import cardTvelve from "../../images/027.jpg";
import cardEnd from "../../images/стейк-рибай.jpg";

import "../../shop.css";

// Функция для передачи данных карточки на страницу basket
function exportCardData(cardData) {
  // Создаем скрытый элемент iframe
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';

  // Добавляем iframe в DOM
  document.body.appendChild(iframe);

  // Получаем объект window для iframe
  const iframeWindow = iframe.contentWindow;

  // Получаем текущий URL
  const currentUrl = window.location.href;
  // Заменяем часть URL на "basket"
  const basketUrl = currentUrl.replace(/\/shop/, '/basket'); 

  // Перенаправляем iframe на страницу basket
  iframeWindow.location.href = basketUrl;

  // Проверяем, была ли страница basket загружена
  iframeWindow.addEventListener('load', () => {
    // Получаем объект window для страницы basket
    const basketWindow = iframeWindow.frames[0].window;

    // Передаем данные карточки на страницу basket
    basketWindow.cardData = cardData;

    // Удаляем iframe из DOM
    document.body.removeChild(iframe);
  });
}

export function createShopPage() {
  // Создание section
  const section = document.createElement("section");

  const inputDiv = document.createElement("div");
  inputDiv.className = "section-input";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Поиск по названию...";
  const lupaImg = document.createElement("img");
  lupaImg.src = lupaIcon;
  inputDiv.appendChild(input);
  inputDiv.appendChild(lupaImg);

  const cartDiv = document.createElement("div");
  cartDiv.className = "section-paragraph";

  const cartSpan = document.createElement("span");
  cartSpan.classList = "section-span";
  cartSpan.textContent = "0";

  const cartP = document.createElement("p");
  cartP.classList = "basketIcon";

  const basketHrf = [{ text: "Koрзина", href: "basket" }];
  basketHrf.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    cartP.appendChild(a);
  });

  const cartImg = document.createElement("img");

  cartImg.src = cartIcon;
  cartDiv.appendChild(cartP);
  cartDiv.appendChild(cartImg);
  cartDiv.appendChild(cartSpan);

  const btnDiv = document.createElement("div");
  btnDiv.className = "section-btn";
  const button = document.createElement("button");
  const fireImg = document.createElement("img");
  fireImg.src = fireIcon;
  button.appendChild(fireImg);
  button.appendChild(document.createTextNode("АКЦИИ"));
  btnDiv.appendChild(button);

  section.appendChild(inputDiv);
  section.appendChild(cartDiv);
  section.appendChild(btnDiv);

  
  // Создание main

  const main = document.createElement("main");
  main.className = "main";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  const dataFut = [
    {
      id: 1,
      title: "Стейк-Рибай",
      discription:
        "Это классика мраморного мяса, с которой так или иначе знаком каждый любитель сочной говядины.",
      price: "25 999",
      img: cardEnd,
    },
    {
      id: 2,
      title: "Шницель натуральный",
      discription:
        "Полуфабрикат из птицы, натуральный, кусковой бескостный, цельный кусок филе",
      price: "22 500",
      img: cardTwo,
    },
    {
      id: 3,
      title: "Стейк из семги",
      discription:
        "Мясо и икра семги обладают питательной и вкусовой ценностью и относятся к деликатесам.",
      price: "20 300",
      img: cardTree,
    },
    {
      id: 4,
      title: "Каммамбер запеченный",
      discription:
        "Имеет сливочный вкус с легкой пикантностью. Подается с фокаччей, посыпанной орегано.",
      price: "22 500",
      img: cardFour,
    },
    {
      id: 5,
      title: "Салат Буре из телятины",
      discription:
        "В основе салата, отборная телятина, которую маринуем в бальзамическом уксусе чесноке",
      price: "22 500",
      img: cardFive,
    },
    {
      id: 6,
      title: "Ассорти рыбное",
      discription:
        "Составлено из аппетитных ломтиков радужной форели и масляной рыбы.",
      price: "17 200",
      img: cardSix,
    },
    {
      id: 7,
      title: "Мильфей с кремом",
      discription:
        "Мильфей, к сожалению, не слишком распространен в стране, но одна его ипостась знакома у нас всем.",
      price: "19 300",
      img: cardSeven,
    },
    {
      id: 8,
      title: "Наполеон вишневый",
      discription:
        "Этот постный десерт сочетает в себе изысканность классического «Наполеона» и сочные вишни.",
      price: "22 300",
      img: cardNine,
    },
    {
      id: 9,
      title: "Карамельная Фуа-Гра",
      discription:
        "Фуа-гра считается одним из самых изысканных деликатесов в мире, из французской кухни.",
      price: "17 999",
      img: cardTen,
    },
    {
      id: 10,
      title: "Торт Эстерхази",
      discription:
        "Это орехово-сливочный торт, популярный в Венгрии, Австрии и Германии. ",
      price: "10 999",
      img: cardEleven,
    },
    {
      id: 11,
      title: "Чизкейк Нью-Йорк",
      discription:
        "Настоящая американская классика нежный чизкейк из начинки с ванильной ноткой подложке.",
      price: "10 999",
      img: cardTvelve,
    },
    {
      id: 12,
      title: "Чилийский сибас",
      discription:
        "Чилийский сибас — общепризнанно одна из самых вкусных рыб премиального сегмента",
      price: "20 999",
      img: wineImg,
    },
  ];

  let cartCount = 0;

  // Проверяем, есть ли данные в localStorage

  if (localStorage.getItem('cartCount')) {
    cartCount = parseInt(localStorage.getItem('cartCount'), 10); 
    cartSpan.textContent = cartCount; 
  }

// Каждая карточка имеет data-titleатрибут, в котором хранится заголовок в нижнем регистре для удобства сопоставления.

  dataFut.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.id = `card-${card.id}`;
    cardElement.dataset.title = card.title.toLowerCase();


    const colImg = document.createElement("div");
    colImg.className = "col-img";

    // Создаем элемент img внутри цикла
    const img = document.createElement("img");
    img.src = card.img;

    // Добавляем img в colImg
    colImg.appendChild(img);

    const cardText = document.createElement("div");
    cardText.className = "card-text";
    const h1 = document.createElement("h1");
    h1.textContent = card.title;
    const pOne = document.createElement("p");
    pOne.className = "p-one";
    pOne.textContent = card.discription;
    cardText.appendChild(h1);
    cardText.appendChild(pOne);

    const btnText = document.createElement("div");
    btnText.className = "btn-text";
    const pTwo = document.createElement("p");
    pTwo.className = "p-two";
    pTwo.innerHTML = `${card.price} &#8381;`;

    const button = document.createElement("button");
    button.className = "btn";
    button.innerHTML = "<p>в корзину</p>";
    button.style.backgroundColor = "var(--color-yellow)";

    const updateCart = () => {
      cartCount = parseInt(localStorage.getItem('cartCount'), 10);
      cartSpan.textContent = cartCount;
    };


    

    // Получаем состояние кнопки из LocalStorage
    let buttonState = localStorage.getItem(`buttonState-${card.id}`) || 'initial'; 


    // Обработчик события click для кнопки

    button.addEventListener('click', () => {
      if (buttonState === 'initial' || buttonState === 'removed') {

    // Добавление в корзину
        cartCount++;
        button.style.backgroundColor = "#3a3a3a";
        button.textContent = "отменить выбор";
        buttonState = 'added';
        cardContainer.prepend(cardElement); 
        localStorage.setItem(`buttonState-${card.id}`, 'added');
      } else {

    // Удаление из корзины
        cartCount--;
        button.style.backgroundColor = "var(--color-yellow)";
        button.textContent = "в корзину";
        buttonState = 'removed';
        localStorage.setItem(`buttonState-${card.id}`, 'removed');
      }

      localStorage.setItem('cartCount', cartCount);
      updateCart();

      // Экспортируем данные карточки
    exportCardData(card);
    });

    // Устанавливаем начальное состояние кнопки из LocalStorage

    if (buttonState === 'added') {
      button.style.backgroundColor = "#3a3a3a";
      button.textContent = "отменить выбор";
    }

    btnText.appendChild(pTwo);
    btnText.appendChild(button);
    
    cardElement.appendChild(colImg);
    cardElement.appendChild(cardText);
    cardElement.appendChild(btnText);
    
    cardContainer.appendChild(cardElement);
    
    main.appendChild(cardContainer);
  });


  // Функционал для инпута

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase(); // Получить входное значение
    const cards = document.querySelectorAll('.card'); // Получить все элементы карты

    cards.forEach(card => {
      const title = card.dataset.title; // Получить заголовок из набора данных
      if (title.includes(query)) {
        card.style.display = ''; // Показ карты
      } else {
        card.style.display = 'none'; // Скрыть карту
      }
    });
  });


  // При загрузке страницы, устанавливаем состояние кнопки

  window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {

    // Проверяем, есть ли данные в localStorage для этой конкретной кнопки

    if (localStorage.getItem(`buttonState-${button.textContent}`)) {
      // Если есть, устанавливаем состояние кнопки в соответствии с данными из localStorage

      button.style.backgroundColor = localStorage.getItem(`buttonState-${button.textContent}`);
      button.textContent = localStorage.getItem(`buttonText-${button.textContent}`);
  }
  });
  });
  
  const pageShops = document.createElement("div");
  pageShops.appendChild(section);
  pageShops.appendChild(main);
  
  return pageShops;
}
