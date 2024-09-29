export class Router {
  constructor() {
    this.routes = {};
    this.init();  // Инициализация для отслеживания изменений URL
  }

  addRoute(path, action) {
    this.routes[path] = action;
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute(path);
  }

  handleRoute(path) {
    const routeAction = this.routes[path] || this.routes['/'];
    if (routeAction) {
      routeAction();
    } else {
      console.error(`Маршрут для ${path} не найден`);
    }
  }

  // Обрабатывает изменения в URL, например, при обновлении страницы или переходе назад/вперед
  init() {
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });

    // Обрабатываем маршрут при первой загрузке страницы
    this.handleRoute(window.location.pathname);
  }
}
