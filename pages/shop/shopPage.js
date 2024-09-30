// import { createHeader } from "../components/header";

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



export function createShopPage() {




  const main = document.createElement("main");
  main.className = "main";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // const wineImages = [
    //   "/images/025.jpg",
    //   "/images/003.jpg",
    //   "/images/004.jpg",
    //   "/images/009.jpg",
    //   "/images/010.jpg",
    //   "/images/011.jpg",
    //   "/images/014.jpg",
    //   // Добавьте сюда остальные пути к изображениям
    // ];
    
  const dataFut = [
    {
      title: "Стейк-Рибай",
      discription: "Это классика мраморного мяса, с которой так или иначе знаком каждый любитель сочной говядины.",
      price: "25 999",
      img: cardEnd
    },
    {
      title: "Шницель натуральный",
      discription: "Полуфабрикат из птицы, натуральный, кусковой бескостный, цельный кусок филе",
      price: "22 500",
      img: cardTwo,
    },
    {
      title: "Стейк из семги",
      discription: 'Мясо и икра семги обладают питательной и вкусовой ценностью и относятся к деликатесам.',
      price: '20 300',
      img: cardTree
    },
    {
      title: "Каммамбер запеченный",
      discription: "Имеет сливочный вкус с легкой пикантностью. Подается с фокаччей, посыпанной орегано.",
      price: "22 500",
      img: cardFour
    },
    {
      title: "Салат Буре из телятины",
      discription: "В основе салата, отборная телятина, которую маринуем в бальзамическом уксусе чесноке",
      price: "22 500",
      img: cardFive
    },
    {
      title: "Ассорти рыбное",
      discription: "Составлено из аппетитных ломтиков радужной форели и масляной рыбы.",
      price: "17 200",
      img: cardSix
    },
    {
      title: "Мильфей с кремом",
      discription: "Мильфей, к сожалению, не слишком распространен в стране, но одна его ипостась знакома у нас всем.",
      price: "19 300",
      img: cardSeven
    },
    {
      title: "Наполеон вишневый",
      discription: "Этот постный десерт сочетает в себе изысканность классического «Наполеона» и сочные вишни.",
      price: "22 300",
      img: cardNine
    },
    {
      title: "Карамельная Фуа-Гра",
      discription: "Фуа-гра считается одним из самых изысканных деликатесов в мире, из французской кухни.",
      price: "17 999",
      img: cardTen
    },
    {
      title: "Торт Эстерхази",
      discription: "Это орехово-сливочный торт, популярный в Венгрии, Австрии и Германии. ",
      price: "10 999",
      img: cardEleven
    },
    {
      title: "Чизкей Нью-Йорк",
      discription: "Настоящая американская классика нежный чизкейк из начинки с ванильной ноткой подложке.",
      price: "10 999",
      img: cardTvelve
    },
    {
      title: "Чилийский сибас",
      discription: "Чилийский сибас — общепризнанно одна из самых вкусных рыб премиального сегмента",
      price: "20 999",
      img: wineImg,
    }
  ];
  
  dataFut.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    
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
    pTwo.innerHTML = `${card.price} /шт`;

    const button = document.createElement("button");
    button.className = "btn";
    button.innerHTML = "<p>в корзину</p>";

    btnText.appendChild(pTwo);
    btnText.appendChild(button);

    cardElement.appendChild(colImg);
    cardElement.appendChild(cardText);
    cardElement.appendChild(btnText);

    cardContainer.appendChild(cardElement);
  });

  main.appendChild(cardContainer);
  return main;
}
