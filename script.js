import { createHeader } from './components/header';
import { createFooter } from './components/footer';
import { initApp } from './router/render';

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  if (!app) {
    console.error("Элемент с id='app' не найден.");
    return;
  }

  // Добавляем хедер и футер в DOM
  app.appendChild(createHeader());
  initApp();
  app.appendChild(createFooter());
});
