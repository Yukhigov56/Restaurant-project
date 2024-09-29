import wineImg from '../../images/024.jpg';
import "../../shop.css";

export function createShopPage() {
  const main = document.createElement('main');
  main.className = 'main';

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    const colImg = document.createElement('div');
    colImg.className = 'col-img';
    const img = document.createElement('img');
    img.src = wineImg;
    colImg.appendChild(img);

    const cardText = document.createElement('div');
    cardText.className = 'card-text';
    const h1 = document.createElement('h1');
    h1.textContent = 'Чилийский сибас';
    const pOne = document.createElement('p');
    pOne.className = 'p-one';
    pOne.textContent = 'Красное вино. Молдавская выдержка...';
    cardText.appendChild(h1);
    cardText.appendChild(pOne);

    const btnText = document.createElement('div');
    btnText.className = 'btn-text';
    const pTwo = document.createElement('p');
    pTwo.className = 'p-two';
    pTwo.innerHTML = '<span>26 000</span> /шт';

    const button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = '<p>в корзину</p>';

    btnText.appendChild(pTwo);
    btnText.appendChild(button);

    card.appendChild(colImg);
    card.appendChild(cardText);
    card.appendChild(btnText);

    cardContainer.appendChild(card);
  }

  main.appendChild(cardContainer);
  return main;
}
