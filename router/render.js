import { createWelcomePage } from "../pages/welcome/welcomePage";
import { createShopPage } from "../pages/shop/shopPage";
import { Router } from "./router";
import { renderPage } from "../utils/renderPage";
import { basketPage } from "../pages/basket/basket";

// Определяем маршруты в массиве
const routes = [
  { path: "/", page: createWelcomePage },
  { path: "/shop", page: createShopPage },
  { path: "/basket", page: basketPage },
];

const router = new Router();

// Функция для настройки маршрутов
const setupRoutes = () => {
  routes.forEach(({ path, page }) => {
    router.addRoute(path, () => renderPage(page(), setupNavigation, path));
  });
};

// Функция для установки навигации
const setupNavigation = () => {
  const navItems = [
    { id: "nav-home", path: "/" },
    { id: "nav-menu", path: "/shop" },
  ];

  navItems.forEach(({ id, path }) => {
    document.getElementById(id).addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate(path);
    });
  })
};

// Функция инициализации приложения
export const initApp = () => {
  setupRoutes(); // Установка маршрутов
  setupNavigation(); // Установка событий навигации

  const activePath = window.location.pathname;
  router.handleRoute(activePath); // Рендерим страницу на основе текущего URL
};
