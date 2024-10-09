import lupaIcon from "../../images/section lupa.png";
import cartIcon from "../../images/section korzina.png";
import fireIcon from "../../images/fire icon.png";

import menImg from "../../images/main men.png";
import stakeImg from "../../images/main stake.png";
import saladImg from "../../images/main salat.png";
import pinkImg from "../../images/mainPink.png";
import coffeeImg from "../../images/mainCoffe.png";
import vineImg from "../../images/MainVine.png";

import "../../style.css";

export function createWelcomePage() {
  
  // Создание section
  const section = document.createElement("section");

  const inputDiv = document.createElement("div");
  inputDiv.className = "section-input";
  const input = document.createElement("input");
  input.placeholder = "Поиск по названию...";
  input.type = "text";
  const lupaImg = document.createElement("img");
  lupaImg.src = lupaIcon;
  inputDiv.appendChild(input);
  inputDiv.appendChild(lupaImg);

  const cartDiv = document.createElement('div');
  cartDiv.className = 'section-paragraph';
  
  const cartSpan = document.createElement('span');
  cartSpan.classList = 'section-span';
  cartSpan.textContent = 0;
  
  const cartP = document.createElement('p');
  cartP.classList = 'basketIcon';
  cartP.textContent= 'Корзина';
  
  const cartImg = document.createElement('img');
  
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
  const main = document.createElement('main');

  const mainLeft = document.createElement('div');
  mainLeft.className = 'main-left';
  const h1 = document.createElement('h1');
  h1.textContent = 'Эксклюзивное';
  const h11 = document.createElement('h2');
  h11.textContent = 'меню на ваш вкус';
  const p = document.createElement('p');
  p.textContent = 'Смотреть все меню';
  const btn = document.createElement('button');
  btn.className = 'btn-main-left';
  
  btn.textContent = 'АКЦИИ НА СЕГОДНЯ';


  mainLeft.appendChild(h1);
  mainLeft.appendChild(h11);
  mainLeft.appendChild(p);
  mainLeft.appendChild(btn);

  const mainRight = document.createElement("div");
  mainRight.className = "main-right";
  const imgList = [menImg, stakeImg, saladImg, pinkImg, coffeeImg, vineImg];
  const ul = document.createElement("ul");

  imgList.forEach((src) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = src;
    li.appendChild(img);
    ul.appendChild(li);
  });

  mainRight.appendChild(ul);

  main.appendChild(mainLeft);
  main.appendChild(mainRight);

  // Возвращаем полный документ
  const pageContainer = document.createElement("div");
  pageContainer.appendChild(section);
  pageContainer.appendChild(main);

  return pageContainer;
}
