import { createWelcomePage } from './pages/welcome/welcomePage';
import { createHeader } from './components/header';
import { createFooter } from './components/footer'

const app = document.getElementById('app');
if (app) {
  app.appendChild(createHeader());
  app.appendChild(createWelcomePage());
  app.appendChild(createFooter());
} else {
  console.error("Элемент с id='app' не найден в DOM.");
}