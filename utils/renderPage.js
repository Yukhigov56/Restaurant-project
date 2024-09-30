import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

// Функция для показа экрана загрузки
export function showLoadingScreen() {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = ''; // Очищаем содержимое
    const loadingDiv = document.createElement('div');
    loadingDiv.textContent = 'ZIRA'; // Текст или анимация загрузки
    loadingDiv.className = 'loading'; // Добавляем стили для экрана загрузки
    app.appendChild(loadingDiv);
  }
}

// Асинхронная функция для рендеринга страницы
export async function renderPage(pageContent, setupNavigation, activePage) {
  showLoadingScreen();

  // Имитация загрузки (например, можно сделать реальный запрос на сервер тут)
  await new Promise((resolve) => setTimeout(resolve, 800)); // Задержка 800ms

  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = ''; // Очищаем контейнер
    app.appendChild(createHeader(activePage)); // Добавляем хедер
    app.appendChild(pageContent);    // Добавляем контент страницы
    app.appendChild(createFooter()); // Добавляем футер

    // После рендера вызываем настройку навигации
    if (typeof setupNavigation === 'function') {
      setupNavigation(); 
    }
  }
}
