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

import "../../basket.css";


export function basketPage() {
  const main = document.createElement("main");
  main.className = "main";
  
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  
  
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
    pTwo.innerHTML = `${card.price} &#8381;`;
    
    const button = document.createElement("button");

  
    let cartCount = 0; 
  
    button.addEventListener('click', () => {
      cartCount++; 
      cartSpan.textContent = cartCount; 
      console.log(cartSpan);
    });
    
    btnText.appendChild(pTwo);
    btnText.appendChild(button);

    cardElement.appendChild(colImg);
    cardElement.appendChild(cardText);
    cardElement.appendChild(btnText);

    cardContainer.appendChild(cardElement);
    main.appendChild(cardContainer);
  });


  const basketFood = document.createElement('div');
  basketFood.appendChild(main);

  return basketFood;
}