/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\r\n  const footer = document.createElement('footer');\r\n\r\n  const footerList = document.createElement('ul');\r\n  const footerLinks = [\r\n    { text: 'instagram', href: 'https://www.instagram.com/' },\r\n    { text: 'twitter', href: 'https://x.com/' },\r\n    { text: 'facebook', href: 'https://www.facebook.com/' },\r\n    { text: 'youtube', href: 'https://m.youtube.com/?hl=ru' },\r\n    { text: 'twitch', href: 'https://www.twitch.tv/' },\r\n    { text: 'hive', href: 'https://hivebootcamp.ru/' }\r\n  ];\r\n\r\n  footerLinks.forEach(link => {\r\n    const li = document.createElement('li');\r\n    const a = document.createElement('a');\r\n    a.href = link.href;\r\n    a.textContent = link.text;\r\n    li.appendChild(a);\r\n    footerList.appendChild(li);\r\n  });\r\n\r\n  footer.appendChild(footerList);\r\n  return footer;\r\n}\r\n\n\n//# sourceURL=webpack://lection/./components/footer.js?");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _images_logo_ZIRA_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo ZIRA.png */ \"./images/logo ZIRA.png\");\n/* harmony import */ var _images_instagggg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/instagggg.svg */ \"./images/instagggg.svg\");\n/* harmony import */ var _images_2986072_logo_media_social_vk_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/2986072_logo_media_social_vk_icon.svg */ \"./images/2986072_logo_media_social_vk_icon.svg\");\n/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/facebook.svg */ \"./images/facebook.svg\");\n/* harmony import */ var _images_twitt_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/twitt.svg */ \"./images/twitt.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createHeader(activePage) {\r\n  \r\n  const header = document.createElement(\"header\");\r\n\r\n  // Создаем левую часть хедера\r\n  const headerLeft = document.createElement(\"div\");\r\n  headerLeft.className = \"header-left\";\r\n\r\n  // Логотип\r\n  const logoDiv = document.createElement(\"div\");\r\n  logoDiv.className = \"header-left-name\";\r\n  const logoImg = document.createElement(\"img\");\r\n  logoImg.src = _images_logo_ZIRA_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  logoDiv.appendChild(logoImg);\r\n\r\n  // Список социальных иконок\r\n  const socialList = document.createElement(\"ul\");\r\n  const socialIcons = [_images_instagggg_svg__WEBPACK_IMPORTED_MODULE_1__, _images_2986072_logo_media_social_vk_icon_svg__WEBPACK_IMPORTED_MODULE_2__, _images_facebook_svg__WEBPACK_IMPORTED_MODULE_3__, _images_twitt_svg__WEBPACK_IMPORTED_MODULE_4__];\r\n\r\n  socialIcons.forEach((iconSrc) => {\r\n    const li = document.createElement(\"li\");\r\n    const img = document.createElement(\"img\");\r\n    img.className = \"header-icon\";\r\n    img.src = iconSrc;\r\n    li.appendChild(img);\r\n    socialList.appendChild(li);\r\n  });\r\n\r\n  headerLeft.appendChild(logoDiv);\r\n  headerLeft.appendChild(socialList);\r\n\r\n  // Создаем правую часть хедера\r\n  const headerRight = document.createElement(\"div\");\r\n  headerRight.className = \"header-right\";\r\n\r\n  // Список навигации\r\n  const navList = document.createElement(\"ul\");\r\n  const navItems = [\r\n    { text: \"Главная\", id: \"nav-home\", path: \"/\" },\r\n    { text: \"Меню\", id: \"nav-menu\", path: \"/shop\" },\r\n    { text: \"О нас\", id: \"nav-about\", path: \"/about\" },\r\n    { text: \"Галерея\", id: \"nav-gallery\", path: \"/gallery\" },\r\n    { text: \"Вакансии\", id: \"nav-jobs\", path: \"/jobs\" },\r\n    { text: \"Блог\", id: \"nav-blog\", path: \"/blog\" },\r\n  ];\r\n\r\n  navItems.forEach((item) => {\r\n    const li = document.createElement(\"li\");\r\n    li.id = item.id; // Присваиваем id каждому элементу навигации\r\n    li.textContent = item.text;\r\n\r\n    console.log(activePage);\r\n    // Устанавливаем класс 'visited' для активной страницы\r\n    if (item.path === activePage) {\r\n      li.classList.add(\"visited\");\r\n    }\r\n\r\n    navList.appendChild(li);\r\n  });\r\n\r\n  // Список пользовательских опций\r\n  const userOptionsList = document.createElement(\"ul\");\r\n  const userOptions = [\r\n    { text: \"Бронирование\", id: \"nav-reservation\" },\r\n    { text: \"Вход / Регистрация\", id: \"nav-login\" },\r\n  ];\r\n\r\n  userOptions.forEach((option) => {\r\n    const li = document.createElement(\"li\");\r\n    li.id = option.id; // Присваиваем id каждому элементу\r\n    li.textContent = option.text;\r\n    userOptionsList.appendChild(li);\r\n  });\r\n  \r\n\r\n  headerRight.appendChild(navList);\r\n  headerRight.appendChild(userOptionsList);\r\n\r\n  // Добавляем левую и правую части в хедер\r\n  header.appendChild(headerLeft);\r\n  header.appendChild(headerRight);\r\n\r\n  // Возвращаем созданный элемент хедера\r\n  return header;\r\n}\r\n\n\n//# sourceURL=webpack://lection/./components/header.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./basket.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./basket.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  font-family: \"Rubik\", sans-serif;\r\n  -ms-overflow-style: none; \r\n  scrollbar-width: none; \r\n}\r\n\r\n:root {\r\n  --color-white: #fff;\r\n  --color-yellow: #ff9100;\r\n  --color-gray: #73777d;\r\n}\r\n\r\nbody {\r\n  background-color: rgba(22, 24, 27, 1);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 180px;\r\n  height: 70px;\r\n  color: var(--color-gray);\r\n  padding-right: 40px;\r\n  border-bottom: 1px solid var(--color-gray);\r\n  position: relative;\r\n}\r\n\r\n.header-left-name {\r\n  width: 280px;\r\n  position: absolute;\r\n  left: 0;\r\n  padding-right: 25px;\r\n  background-color: #16181b;\r\n  text-align: end;\r\n}\r\n\r\n.header-left ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 15px;\r\n}\r\n\r\n.header-left li img {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color-gray);\r\n  transition: 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.header-left li img:hover {\r\n  background-color: var(--color-yellow);\r\n  transform: scale(1.07);\r\n}\r\n\r\n.visited {\r\n  color: var(--color-yellow);\r\n  position: relative;\r\n  padding-bottom: 1px;\r\n}\r\n.visited::after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 1px;\r\n  bottom: 0;\r\n  background-color: var(--color-yellow);\r\n}\r\n\r\n.header-right ul li a {\r\n  color: var(--color-gray);\r\n  text-decoration: none;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 140px;\r\n}\r\n.header-right ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 40px;\r\n}\r\n.header-right li {\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n.header-right li:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.col-search {\r\n  margin: 20px 50px 30px 0px;\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 30px;\r\n}\r\n\r\n.section-input input {\r\n  padding: 5px;\r\n  padding-right: 25px;\r\n  margin: 5px 7px 0px 0px;\r\n  background-color: transparent;\r\n  color: var(--color-gray);\r\n  border: none;\r\n  border-bottom: 1px solid var(--color-gray);\r\n  outline: none;\r\n}\r\n\r\n.section-paragraph {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.section-btn button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: none;\r\n  background-color: var(--color-yellow);\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in-out;\r\n}\r\n\r\n.section-btn button:hover {\r\n  background-color: white;\r\n}\r\n\r\n.choice ul {\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-right: 50px;\r\n  gap: 20px;\r\n}\r\n\r\n.choice ul li {\r\n  list-style: none;\r\n  color: rgba(122, 127, 132, 1);\r\n  cursor: pointer;\r\n}\r\n\r\n.choice ul li:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.choice-niz {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 35px;\r\n  height: 40px;\r\n  background-color: rgba(31, 33, 37, 1);\r\n}\r\n\r\n.list-col {\r\n  margin-left: 362px;\r\n}\r\n\r\n.list-col ul {\r\n  display: flex;\r\n  gap: 72px;\r\n}\r\n\r\n.list-col ul li {\r\n  color: var(--color-yellow);\r\n  list-style: none;\r\n}\r\n.list-col ul li select {\r\n  border: none;\r\n  background-color: rgba(31, 33, 37, 1);\r\n  color: var(--color-gray);\r\n}\r\n\r\n.icon-right {\r\n  display: flex;\r\n  gap: 18px;\r\n  margin-right: 50px;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 90px;\r\n}\r\n\r\n.section-span {\r\n  width: 10px;\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 17px;\r\n  margin: 70px 100px 100px;\r\n  overflow-y: auto; /* Скрываем прокрутку по умолчанию */\r\n  padding: 20px; /* Добавляем отступы */\r\n}\r\n\r\n.card {\r\n  background-color: var(--color-white);\r\n  width: 362px;\r\n  height: 471px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.col-img {\r\n  height: 240px;\r\n}\r\n\r\n.col-img img {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-text {\r\n  padding: 22px 22px 0 22px;\r\n}\r\n\r\n.card-text h1 {\r\n  margin-top: 10px;\r\n  font-size: 25px;\r\n  line-height: 23.87px;\r\n}\r\n\r\n.p-one {\r\n  font-size: 18px;\r\n  color: var(--color-gray);\r\n  margin-top: 22px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.p-two {\r\n  font-size: 23px;\r\n  margin-top: 10px;\r\n  line-height: 23.87px;\r\n  margin-left: 22px;\r\n  \r\n}\r\n\r\n.p-two span {\r\n  font-weight: bold;\r\n}\r\n\r\n.btn-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 148px;\r\n  height: 44px;\r\n  background-color: var(--color-yellow);\r\n  color: var(--color-white);\r\n  border: none;\r\n  border-top-left-radius: 25px;\r\n  border-bottom-left-radius: 25px;\r\n  cursor: pointer; \r\n  transition: 0.5s;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: rgb(46, 44, 44);\r\n}\r\n\r\n.btn img {\r\n  margin-top: 4px;\r\n}\r\n\r\nfooter ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  list-style: none;\r\n}\r\nfooter ul li a {\r\n  font-size: 19px;\r\n  color: var(--color-gray);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\nfooter ul li:hover a {\r\n  color: var(--color-yellow);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lection/./basket.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./shop.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./shop.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  font-family: \"Rubik\", sans-serif;\r\n  -ms-overflow-style: none; \r\n  scrollbar-width: none; \r\n}\r\n\r\n:root {\r\n  --color-white: #fff;\r\n  --color-yellow: #ff9100;\r\n  --color-gray: #73777d;\r\n}\r\n\r\nbody {\r\n  background-color: rgba(22, 24, 27, 1);\r\n}\r\n\r\n\r\n.header-left-name {\r\n  width: 280px;\r\n  position: absolute;\r\n  left: 0;\r\n  padding-right: 25px;\r\n  background-color: #16181b;\r\n  text-align: end;\r\n}\r\n\r\n.header-left ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 15px;\r\n}\r\n\r\n.header-left li img {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color-gray);\r\n  transition: 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.header-left li img:hover {\r\n  background-color: var(--color-yellow);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.header-right ul li a {\r\n  color: var(--color-gray);\r\n  text-decoration: none;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 140px;\r\n}\r\n.header-right ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 40px;\r\n}\r\n.header-right li {\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.visited {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.header-right li:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.col-search {\r\n  margin: 20px 50px 30px 0px;\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 30px;\r\n}\r\n\r\n.section-input input {\r\n  padding: 5px;\r\n  padding-right: 25px;\r\n  margin: 5px 7px 0px 0px;\r\n  background-color: transparent;\r\n  color: var(--color-gray);\r\n  border: none;\r\n  border-bottom: 1px solid var(--color-gray);\r\n  outline: none;\r\n}\r\n\r\n.section-paragraph {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.section-btn button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: none;\r\n  background-color: var(--color-yellow);\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in-out;\r\n}\r\n\r\n.section-btn button:hover {\r\n  background-color: white;\r\n}\r\n\r\n.choice ul {\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-right: 50px;\r\n  gap: 20px;\r\n}\r\n\r\n.choice ul li {\r\n  list-style: none;\r\n  color: rgba(122, 127, 132, 1);\r\n  cursor: pointer;\r\n}\r\n\r\n.choice ul li:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.choice-niz {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 35px;\r\n  height: 40px;\r\n  background-color: rgba(31, 33, 37, 1);\r\n}\r\n\r\n.list-col {\r\n  margin-left: 362px;\r\n}\r\n\r\n.list-col ul {\r\n  display: flex;\r\n  gap: 72px;\r\n}\r\n\r\n.list-col ul li {\r\n  color: var(--color-yellow);\r\n  list-style: none;\r\n}\r\n.list-col ul li select {\r\n  border: none;\r\n  background-color: rgba(31, 33, 37, 1);\r\n  color: var(--color-gray);\r\n}\r\n\r\n.icon-right {\r\n  display: flex;\r\n  gap: 18px;\r\n  margin-right: 50px;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.section-span {\r\n  width: 10px;\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 17px;\r\n  margin: 20px 100px 0px;\r\n  overflow-y: auto; /* Скрываем прокрутку по умолчанию */\r\n  padding: 20px; /* Добавляем отступы */\r\n}\r\n\r\n.card {\r\n  background-color: var(--color-white);\r\n  width: 362px;\r\n  height: 471px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.col-img {\r\n  height: 240px;\r\n}\r\n\r\n.col-img img {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-text {\r\n  padding: 22px 22px 0 22px;\r\n}\r\n\r\n.card-text h1 {\r\n  margin-top: 10px;\r\n  font-size: 25px;\r\n  line-height: 23.87px;\r\n}\r\n\r\n.p-one {\r\n  font-size: 18px;\r\n  color: var(--color-gray);\r\n  margin-top: 22px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.p-two {\r\n  font-size: 20px;\r\n  line-height: 23.87px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.p-two span {\r\n  font-weight: bold;\r\n}\r\n\r\n.btn-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 148px;\r\n  height: 44px;\r\n  color: var(--color-white);\r\n  border: none;\r\n  border-top-left-radius: 25px;\r\n  border-bottom-left-radius: 25px;\r\n  cursor: pointer; \r\n  transition: 0.5s;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: rgb(46, 44, 44);\r\n}\r\n\r\n.btn img {\r\n  margin-top: 4px;\r\n}\r\n\r\nfooter ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  list-style: none;\r\n}\r\nfooter ul li a {\r\n  font-size: 19px;\r\n  color: var(--color-gray);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\nfooter ul li:hover a {\r\n  color: var(--color-yellow);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lection/./shop.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Itim&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Rubik\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --color-white: #fff;\r\n  --color-yellow: #ff9100;\r\n  --color-gray: #73777d;\r\n}\r\n\r\n.loading {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  padding-bottom: 80px;\r\n  font-size: 85px;\r\n  font-weight: bold;\r\n  font-family: \"Itim\", cursive;\r\n  letter-spacing: 25px;\r\n  color: var(--color-yellow);\r\n}\r\n\r\nbody {\r\n  background-color: #16181b;\r\n}\r\n\r\n\r\n\r\n.header-left-name {\r\n  width: 280px;\r\n  position: absolute;\r\n  left: 0;\r\n  padding-right: 25px;\r\n  background-color: #16181b;\r\n  text-align: end;\r\n}\r\n\r\n.header-left ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 15px;\r\n}\r\n\r\n.header-left li img {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color-gray);\r\n  transition: 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.header-left li img:hover {\r\n  background-color: var(--color-yellow);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 140px;\r\n}\r\n.visited {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.header-right ul li a {\r\n  color: var(--color-gray);\r\n  text-decoration: none;\r\n}\r\n\r\n.header-right ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 40px;\r\n}\r\n.header-right li {\r\n  font-size: 17px;\r\n  letter-spacing: 1px;\r\n  cursor: pointer;\r\n}\r\n.header-right li:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\nsection {\r\n  margin: 20px 50px 30px 0px;\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 40px;\r\n}\r\n\r\n.section-input input {\r\n  padding: 5px;\r\n  padding-right: 25px;\r\n  margin: 5px 7px 0px 0px;\r\n  background-color: transparent;\r\n  color: var(--color-gray);\r\n  border: none;\r\n  border-bottom: 1px solid var(--color-gray);\r\n  outline: none;\r\n}\r\n.section-input {\r\n  position: relative;\r\n}\r\n.section-input img {\r\n  height: 17px;\r\n  width: 17px;\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 12px;\r\n}\r\n\r\n.section-paragraph {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  font-size: 17px;\r\n  letter-spacing: 1px;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.basketIcon a{\r\n  text-decoration: none;\r\n  color: var(--color-gray);\r\n}\r\n.basketIcon a:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\n.section-btn button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: none;\r\n  background-color: var(--color-yellow);\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in-out;\r\n}\r\n.section-btn button:hover {\r\n  background-color: white;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.main-left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 280px;\r\n}\r\n\r\n.main-left h1 {\r\n  width: 450px;\r\n  margin: 0 0 10px 50px;\r\n  font-size: 48px;\r\n  color: rgb(159, 159, 159);\r\n  white-space: nowrap; \r\n  overflow: hidden; \r\n  animation: typing 5s forwards, changeWord 11s 7s forwards;\r\n}\r\n\r\n@keyframes typing {\r\n  0% {\r\n    width: 0; \r\n  }\r\n  50% {\r\n    width: 100%; \r\n  }\r\n  100% {\r\n    width: 100%; \r\n  }\r\n}\r\n\r\n@keyframes changeWord {\r\n  0% {\r\n    width: 0; \r\n  }\r\n  50% {\r\n    width: 100%; \r\n  }\r\n  55% {\r\n    width: 0; \r\n  }\r\n  100% {\r\n    width: 100%; \r\n  }\r\n}\r\n.main-left h2 {\r\n  margin-left: 50px ;\r\n  font-size: 48px;\r\n  color: rgb(159, 159, 159);\r\n  white-space: nowrap; \r\n  overflow: hidden; \r\n  animation: typing 6s forwards, changeWord 11s 7s forwards;\r\n}\r\n\r\n@keyframes typing {\r\n  from {\r\n    width: 0; \r\n  }\r\n  to {\r\n    width: 100%; \r\n  }\r\n}\r\n.main-left h2::after {\r\n  content: \"|\"; \r\n  animation: blink 0.8s infinite; \r\n  color: rgb(159, 159, 159);\r\n  margin-left: 5px;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.main-left p {\r\n  margin: 40px 0px 40px 150px;\r\n  font-size: 16px;\r\n  color: var(--color-yellow);\r\n  position: relative;\r\n}\r\n.main-left p::before {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: 50%;\r\n  content: \" \";\r\n  display: block;\r\n  width: 80px;\r\n  height: 2px;\r\n  background-color: var(--color-yellow);\r\n}\r\n\r\n.btn-main-left {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 15px;\r\n  height: 70px;\r\n  width: 300px;\r\n  letter-spacing: 2px;\r\n  font-weight: 600;\r\n  background-color: var(--color-yellow);\r\n  border-radius: 0 15px 15px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.main-right {\r\n  margin-top: 10px;\r\n  margin-left: 250px;\r\n  overflow-x: auto;\r\n  scrollbar-width: none;\r\n  border-radius: 15px;\r\n}\r\n\r\n.main-right ul {\r\n  display: flex;\r\n  gap: 20px;\r\n  animation: scroll-back-forth 30s linear infinite;\r\n  opacity: 0.9;\r\n}\r\n\r\n@keyframes scroll-back-forth {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  50% {\r\n    transform: translateX(-550px);\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.main-right ul li {\r\n  cursor: pointer;\r\n  list-style: none;\r\n  transition: 0.4s ease-in-out;\r\n}\r\n.main-right ul li:hover {\r\n  transform: scale(1.04);\r\n  filter: opacity(0.8);\r\n}\r\n\r\nfooter {\r\n  margin-top: 155px;\r\n  height: 40px;\r\n}\r\nfooter ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  list-style: none;\r\n}\r\nfooter ul li a {\r\n  font-size: 19px;\r\n  color: var(--color-gray);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  position: relative; \r\n  transition: color 0.4s ease-in-out; \r\n}\r\n\r\nfooter ul li a::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -2px; \r\n  left: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: var(--color-yellow);\r\n  transition: width 0.4s ease-in-out; \r\n}\r\n\r\nfooter ul li a:hover {\r\n  color: var(--color-yellow);\r\n}\r\n\r\nfooter ul li a:hover::after {\r\n  width: 100%; \r\n}\r\n\r\n\r\n\r\n/* НЕ ДОДЕЛАНО */\r\n@media (max-width: 1461px) {\r\n  .header-left-name {\r\n    display: none;\r\n  }\r\n  header ul{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    padding: 0;\r\n  }\r\n  .header-left ul {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 10px;\r\n    padding-left: 40px;\r\n  }\r\n  .header-left li {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: var(--color-gray);\r\n    transition: 0.3s ease-in-out;\r\n    cursor: pointer;\r\n  }\r\n  .header-right ul {\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  .header-right ul li {\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n  }\r\n  .header-right {\r\n    display: flex;\r\n    gap: 20px;\r\n  }\r\n  .header-right ul {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 10px;\r\n  }\r\n  section {\r\n    margin: 20px 50px 30px 0px;\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 30px;\r\n  }\r\n  .section-paragraph {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n    color: var(--color-gray);\r\n  }\r\n  .section-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    font-size: 15px;\r\n    width: 100px;\r\n    height: 30px;\r\n  }\r\n  .main-left {\r\n    margin-top: 235px;\r\n  }\r\n  .main-left h1 {\r\n    width: 450px;\r\n    margin: 0 0 10px 50px;\r\n    font-size: 42px;\r\n    color: rgb(159, 159, 159);\r\n    white-space: nowrap; \r\n    overflow: hidden; \r\n    animation: typing 5s forwards, changeWord 11s 7s forwards;\r\n  }\r\n  .main-left h2 {\r\n    margin-left: 50px ;\r\n    font-size: 42px;\r\n    color: rgb(159, 159, 159);\r\n    white-space: nowrap; \r\n    overflow: hidden; \r\n    animation: typing 6s forwards, changeWord 11s 7s forwards;\r\n  }\r\n  .main-left p {\r\n    margin: 40px 0px 35px 150px;\r\n    font-size: 15px;\r\n    color: var(--color-yellow);\r\n    position: relative;\r\n  }\r\n  .btn-main-left {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    height: 70px;\r\n    width: 300px;\r\n    letter-spacing: 2px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    background-color: var(--color-yellow);\r\n    border-radius: 0 15px 15px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  .main-right ul img{\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 520px;\r\n  }\r\n  footer {\r\n    margin-top: 130px;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n/* НЕ ДОДЕЛАНО */\r\n@media (max-width: 430px) { \r\n  header ul{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    padding: 0;\r\n  }\r\n  .header-left ul {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 10px;\r\n    padding-left: 40px;\r\n  }\r\n  .header-left li {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: var(--color-gray);\r\n    transition: 0.3s ease-in-out;\r\n    cursor: pointer;\r\n  }\r\n  .header-right ul {\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  .header-right ul li {\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n  }\r\n  .header-right {\r\n    display: flex;\r\n    gap: 20px;\r\n  }\r\n  .header-right ul {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 10px;\r\n  }\r\n  section {\r\n    margin: 20px 50px 30px 0px;\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 30px;\r\n  }\r\n  .section-paragraph {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n    color: var(--color-gray);\r\n  }\r\n  .section-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    font-size: 15px;\r\n    width: 100px;\r\n    height: 30px;\r\n  }\r\n  .main-left {\r\n    margin-top: 235px;\r\n  }\r\n  .main-left h1 {\r\n    width: 450px;\r\n    margin: 0 0 10px 50px;\r\n    font-size: 42px;\r\n    color: rgb(159, 159, 159);\r\n    white-space: nowrap; \r\n    overflow: hidden; \r\n    animation: typing 5s forwards, changeWord 11s 7s forwards;\r\n  }\r\n  .main-left h2 {\r\n    margin-left: 50px ;\r\n    font-size: 42px;\r\n    color: rgb(159, 159, 159);\r\n    white-space: nowrap; \r\n    overflow: hidden; \r\n    animation: typing 6s forwards, changeWord 11s 7s forwards;\r\n  }\r\n  .main-left p {\r\n    margin: 40px 0px 35px 150px;\r\n    font-size: 15px;\r\n    color: var(--color-yellow);\r\n    position: relative;\r\n  }\r\n  .btn-main-left {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    height: 70px;\r\n    width: 300px;\r\n    letter-spacing: 2px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    background-color: var(--color-yellow);\r\n    border-radius: 0 15px 15px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  .main-right ul img{\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 520px;\r\n  }\r\n  footer {\r\n    margin-top: 130px;\r\n    height: 40px;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lection/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lection/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lection/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./basket.css":
/*!********************!*\
  !*** ./basket.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./basket.css */ \"./node_modules/css-loader/dist/cjs.js!./basket.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lection/./basket.css?");

/***/ }),

/***/ "./shop.css":
/*!******************!*\
  !*** ./shop.css ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./shop.css */ \"./node_modules/css-loader/dist/cjs.js!./shop.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lection/./shop.css?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lection/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lection/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lection/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lection/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lection/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lection/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lection/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./pages/basket/basket.js":
/*!********************************!*\
  !*** ./pages/basket/basket.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   basketPage: () => (/* binding */ basketPage)\n/* harmony export */ });\n/* harmony import */ var _images_024_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/024.jpg */ \"./images/024.jpg\");\n/* harmony import */ var _images_003_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/003.jpg */ \"./images/003.jpg\");\n/* harmony import */ var _images_004_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/004.jpg */ \"./images/004.jpg\");\n/* harmony import */ var _images_009_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/009.jpg */ \"./images/009.jpg\");\n/* harmony import */ var _images_010_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/010.jpg */ \"./images/010.jpg\");\n/* harmony import */ var _images_011_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/011.jpg */ \"./images/011.jpg\");\n/* harmony import */ var _images_014_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/014.jpg */ \"./images/014.jpg\");\n/* harmony import */ var _images_019_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/019.jpg */ \"./images/019.jpg\");\n/* harmony import */ var _images_025_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/025.jpg */ \"./images/025.jpg\");\n/* harmony import */ var _images_026_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/026.jpg */ \"./images/026.jpg\");\n/* harmony import */ var _images_027_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/027.jpg */ \"./images/027.jpg\");\n/* harmony import */ var _images_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/стейк-рибай.jpg */ \"./images/стейк-рибай.jpg\");\n/* harmony import */ var _basket_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../basket.css */ \"./basket.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const params = new URLSearchParams(window.location.search); const cardId = params.get('id');\r\n\r\nfunction basketPage() {\r\n  const main = document.createElement(\"main\");\r\n  main.className = \"main\";\r\n  \r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.className = \"card-container\";\r\n  \r\n  \r\n  const dataFut = [\r\n    {\r\n      title: \"Стейк-Рибай\",\r\n      discription: \"Это классика мраморного мяса, с которой так или иначе знаком каждый любитель сочной говядины.\",\r\n      price: \"25 999\",\r\n      img: _images_jpg__WEBPACK_IMPORTED_MODULE_11__\r\n    },\r\n    {\r\n      title: \"Шницель натуральный\",\r\n      discription: \"Полуфабрикат из птицы, натуральный, кусковой бескостный, цельный кусок филе\",\r\n      price: \"22 500\",\r\n      img: _images_003_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    },\r\n    {\r\n      title: \"Стейк из семги\",\r\n      discription: 'Мясо и икра семги обладают питательной и вкусовой ценностью и относятся к деликатесам.',\r\n      price: '20 300',\r\n      img: _images_004_jpg__WEBPACK_IMPORTED_MODULE_2__\r\n    },\r\n    {\r\n      title: \"Каммамбер запеченный\",\r\n      discription: \"Имеет сливочный вкус с легкой пикантностью. Подается с фокаччей, посыпанной орегано.\",\r\n      price: \"22 500\",\r\n      img: _images_009_jpg__WEBPACK_IMPORTED_MODULE_3__\r\n    },\r\n  ];\r\n  \r\n  \r\n  dataFut.forEach((card) => {\r\n    const cardElement = document.createElement(\"div\");\r\n    cardElement.className = \"card\";\r\n    \r\n    const colImg = document.createElement(\"div\");\r\n    colImg.className = \"col-img\";\r\n    \r\n    // Создаем элемент img внутри цикла\r\n    const img = document.createElement(\"img\");\r\n    \r\n    img.src = card.img;\r\n    \r\n    // Добавляем img в colImg\r\n    colImg.appendChild(img);\r\n    \r\n    const cardText = document.createElement(\"div\");\r\n    cardText.className = \"card-text\";\r\n    const h1 = document.createElement(\"h1\");\r\n    h1.textContent = card.title;\r\n    const pOne = document.createElement(\"p\");\r\n    pOne.className = \"p-one\";\r\n    pOne.textContent = card.discription;\r\n    cardText.appendChild(h1);\r\n    cardText.appendChild(pOne);\r\n    \r\n    const btnText = document.createElement(\"div\");\r\n    btnText.className = \"btn-text\";\r\n    const pTwo = document.createElement(\"p\");\r\n    pTwo.className = \"p-two\";\r\n    pTwo.innerHTML = `${card.price} &#8381;`;\r\n    \r\n    const button = document.createElement(\"button\");\r\n\r\n    let cartCount = 0; \r\n  \r\n    button.addEventListener('click', () => {\r\n      cartCount++; \r\n      cartSpan.textContent = cartCount; \r\n      console.log(cartSpan);\r\n    });\r\n    \r\n    btnText.appendChild(pTwo);\r\n    btnText.appendChild(button);\r\n\r\n    cardElement.appendChild(colImg);\r\n    cardElement.appendChild(cardText);\r\n    cardElement.appendChild(btnText);\r\n\r\n    cardContainer.appendChild(cardElement);\r\n    main.appendChild(cardContainer);\r\n  });\r\n\r\n\r\n  const basketFood = document.createElement('div');\r\n  basketFood.appendChild(main);\r\n\r\n  return basketFood;\r\n}\n\n//# sourceURL=webpack://lection/./pages/basket/basket.js?");

/***/ }),

/***/ "./pages/shop/shopPage.js":
/*!********************************!*\
  !*** ./pages/shop/shopPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createShopPage: () => (/* binding */ createShopPage)\n/* harmony export */ });\n/* harmony import */ var _images_section_lupa_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/section lupa.png */ \"./images/section lupa.png\");\n/* harmony import */ var _images_section_korzina_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/section korzina.png */ \"./images/section korzina.png\");\n/* harmony import */ var _images_fire_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/fire icon.png */ \"./images/fire icon.png\");\n/* harmony import */ var _images_024_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/024.jpg */ \"./images/024.jpg\");\n/* harmony import */ var _images_003_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/003.jpg */ \"./images/003.jpg\");\n/* harmony import */ var _images_004_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/004.jpg */ \"./images/004.jpg\");\n/* harmony import */ var _images_009_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/009.jpg */ \"./images/009.jpg\");\n/* harmony import */ var _images_010_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/010.jpg */ \"./images/010.jpg\");\n/* harmony import */ var _images_011_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/011.jpg */ \"./images/011.jpg\");\n/* harmony import */ var _images_014_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/014.jpg */ \"./images/014.jpg\");\n/* harmony import */ var _images_019_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/019.jpg */ \"./images/019.jpg\");\n/* harmony import */ var _images_025_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/025.jpg */ \"./images/025.jpg\");\n/* harmony import */ var _images_026_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/026.jpg */ \"./images/026.jpg\");\n/* harmony import */ var _images_027_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/027.jpg */ \"./images/027.jpg\");\n/* harmony import */ var _images_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/стейк-рибай.jpg */ \"./images/стейк-рибай.jpg\");\n/* harmony import */ var _shop_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shop.css */ \"./shop.css\");\n// import { createHeader } from \"../components/header\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Функция для передачи данных карточки на страницу basket\r\nfunction exportCardData(cardData) {\r\n  // Создаем скрытый элемент iframe\r\n  const iframe = document.createElement('iframe');\r\n  iframe.style.display = 'none';\r\n\r\n  // Добавляем iframe в DOM\r\n  document.body.appendChild(iframe);\r\n\r\n  // Получаем объект window для iframe\r\n  const iframeWindow = iframe.contentWindow;\r\n\r\n  // Получаем текущий URL\r\n  const currentUrl = window.location.href;\r\n  // Заменяем часть URL на \"basket\"\r\n  const basketUrl = currentUrl.replace(/\\/shop/, '/basket'); \r\n\r\n  // Перенаправляем iframe на страницу basket\r\n  iframeWindow.location.href = basketUrl;\r\n\r\n  // Проверяем, была ли страница basket загружена\r\n  iframeWindow.addEventListener('load', () => {\r\n    // Получаем объект window для страницы basket\r\n    const basketWindow = iframeWindow.frames[0].window;\r\n\r\n    // Передаем данные карточки на страницу basket\r\n    basketWindow.cardData = cardData;\r\n\r\n    // Удаляем iframe из DOM\r\n    document.body.removeChild(iframe);\r\n  });\r\n}\r\n\r\nfunction createShopPage() {\r\n  // Создание section\r\n  const section = document.createElement(\"section\");\r\n\r\n  const inputDiv = document.createElement(\"div\");\r\n  inputDiv.className = \"section-input\";\r\n  const input = document.createElement(\"input\");\r\n  input.type = \"text\";\r\n  input.placeholder = \"Поиск по названию...\";\r\n  const lupaImg = document.createElement(\"img\");\r\n  lupaImg.src = _images_section_lupa_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  inputDiv.appendChild(input);\r\n  inputDiv.appendChild(lupaImg);\r\n\r\n  const cartDiv = document.createElement(\"div\");\r\n  cartDiv.className = \"section-paragraph\";\r\n\r\n  const cartSpan = document.createElement(\"span\");\r\n  cartSpan.classList = \"section-span\";\r\n  cartSpan.textContent = \"0\";\r\n\r\n  const cartP = document.createElement(\"p\");\r\n  cartP.classList = \"basketIcon\";\r\n\r\n  const basketHrf = [{ text: \"Koрзина\", href: \"basket\" }];\r\n  basketHrf.forEach((link) => {\r\n    const a = document.createElement(\"a\");\r\n    a.href = link.href;\r\n    a.textContent = link.text;\r\n    cartP.appendChild(a);\r\n  });\r\n\r\n  const cartImg = document.createElement(\"img\");\r\n\r\n  cartImg.src = _images_section_korzina_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  cartDiv.appendChild(cartP);\r\n  cartDiv.appendChild(cartImg);\r\n  cartDiv.appendChild(cartSpan);\r\n\r\n  const btnDiv = document.createElement(\"div\");\r\n  btnDiv.className = \"section-btn\";\r\n  const button = document.createElement(\"button\");\r\n  const fireImg = document.createElement(\"img\");\r\n  fireImg.src = _images_fire_icon_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  button.appendChild(fireImg);\r\n  button.appendChild(document.createTextNode(\"АКЦИИ\"));\r\n  btnDiv.appendChild(button);\r\n\r\n  section.appendChild(inputDiv);\r\n  section.appendChild(cartDiv);\r\n  section.appendChild(btnDiv);\r\n\r\n  \r\n  // Создание main\r\n\r\n  const main = document.createElement(\"main\");\r\n  main.className = \"main\";\r\n\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.className = \"card-container\";\r\n\r\n  const dataFut = [\r\n    {\r\n      id: 1,\r\n      title: \"Стейк-Рибай\",\r\n      discription:\r\n        \"Это классика мраморного мяса, с которой так или иначе знаком каждый любитель сочной говядины.\",\r\n      price: \"25 999\",\r\n      img: _images_jpg__WEBPACK_IMPORTED_MODULE_14__,\r\n    },\r\n    {\r\n      id: 2,\r\n      title: \"Шницель натуральный\",\r\n      discription:\r\n        \"Полуфабрикат из птицы, натуральный, кусковой бескостный, цельный кусок филе\",\r\n      price: \"22 500\",\r\n      img: _images_003_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    },\r\n    {\r\n      id: 3,\r\n      title: \"Стейк из семги\",\r\n      discription:\r\n        \"Мясо и икра семги обладают питательной и вкусовой ценностью и относятся к деликатесам.\",\r\n      price: \"20 300\",\r\n      img: _images_004_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n    },\r\n    {\r\n      id: 4,\r\n      title: \"Каммамбер запеченный\",\r\n      discription:\r\n        \"Имеет сливочный вкус с легкой пикантностью. Подается с фокаччей, посыпанной орегано.\",\r\n      price: \"22 500\",\r\n      img: _images_009_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n    },\r\n    {\r\n      id: 5,\r\n      title: \"Салат Буре из телятины\",\r\n      discription:\r\n        \"В основе салата, отборная телятина, которую маринуем в бальзамическом уксусе чесноке\",\r\n      price: \"22 500\",\r\n      img: _images_010_jpg__WEBPACK_IMPORTED_MODULE_7__,\r\n    },\r\n    {\r\n      id: 6,\r\n      title: \"Ассорти рыбное\",\r\n      discription:\r\n        \"Составлено из аппетитных ломтиков радужной форели и масляной рыбы.\",\r\n      price: \"17 200\",\r\n      img: _images_011_jpg__WEBPACK_IMPORTED_MODULE_8__,\r\n    },\r\n    {\r\n      id: 7,\r\n      title: \"Мильфей с кремом\",\r\n      discription:\r\n        \"Мильфей, к сожалению, не слишком распространен в стране, но одна его ипостась знакома у нас всем.\",\r\n      price: \"19 300\",\r\n      img: _images_014_jpg__WEBPACK_IMPORTED_MODULE_9__,\r\n    },\r\n    {\r\n      id: 8,\r\n      title: \"Наполеон вишневый\",\r\n      discription:\r\n        \"Этот постный десерт сочетает в себе изысканность классического «Наполеона» и сочные вишни.\",\r\n      price: \"22 300\",\r\n      img: _images_019_jpg__WEBPACK_IMPORTED_MODULE_10__,\r\n    },\r\n    {\r\n      id: 9,\r\n      title: \"Карамельная Фуа-Гра\",\r\n      discription:\r\n        \"Фуа-гра считается одним из самых изысканных деликатесов в мире, из французской кухни.\",\r\n      price: \"17 999\",\r\n      img: _images_025_jpg__WEBPACK_IMPORTED_MODULE_11__,\r\n    },\r\n    {\r\n      id: 10,\r\n      title: \"Торт Эстерхази\",\r\n      discription:\r\n        \"Это орехово-сливочный торт, популярный в Венгрии, Австрии и Германии. \",\r\n      price: \"10 999\",\r\n      img: _images_026_jpg__WEBPACK_IMPORTED_MODULE_12__,\r\n    },\r\n    {\r\n      id: 11,\r\n      title: \"Чизкейк Нью-Йорк\",\r\n      discription:\r\n        \"Настоящая американская классика нежный чизкейк из начинки с ванильной ноткой подложке.\",\r\n      price: \"10 999\",\r\n      img: _images_027_jpg__WEBPACK_IMPORTED_MODULE_13__,\r\n    },\r\n    {\r\n      id: 12,\r\n      title: \"Чилийский сибас\",\r\n      discription:\r\n        \"Чилийский сибас — общепризнанно одна из самых вкусных рыб премиального сегмента\",\r\n      price: \"20 999\",\r\n      img: _images_024_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    },\r\n  ];\r\n\r\n  let cartCount = 0;\r\n\r\n  // Проверяем, есть ли данные в localStorage\r\n\r\n  if (localStorage.getItem('cartCount')) {\r\n    cartCount = parseInt(localStorage.getItem('cartCount'), 10); \r\n    cartSpan.textContent = cartCount; \r\n  }\r\n\r\n// Каждая карточка имеет data-titleатрибут, в котором хранится заголовок в нижнем регистре для удобства сопоставления.\r\n\r\n  dataFut.forEach((card) => {\r\n    const cardElement = document.createElement(\"div\");\r\n    cardElement.className = \"card\";\r\n    cardElement.id = `card-${card.id}`;\r\n    cardElement.dataset.title = card.title.toLowerCase();\r\n\r\n\r\n    const colImg = document.createElement(\"div\");\r\n    colImg.className = \"col-img\";\r\n\r\n    // Создаем элемент img внутри цикла\r\n    const img = document.createElement(\"img\");\r\n    img.src = card.img;\r\n\r\n    // Добавляем img в colImg\r\n    colImg.appendChild(img);\r\n\r\n    const cardText = document.createElement(\"div\");\r\n    cardText.className = \"card-text\";\r\n    const h1 = document.createElement(\"h1\");\r\n    h1.textContent = card.title;\r\n    const pOne = document.createElement(\"p\");\r\n    pOne.className = \"p-one\";\r\n    pOne.textContent = card.discription;\r\n    cardText.appendChild(h1);\r\n    cardText.appendChild(pOne);\r\n\r\n    const btnText = document.createElement(\"div\");\r\n    btnText.className = \"btn-text\";\r\n    const pTwo = document.createElement(\"p\");\r\n    pTwo.className = \"p-two\";\r\n    pTwo.innerHTML = `${card.price} &#8381;`;\r\n\r\n    const button = document.createElement(\"button\");\r\n    button.className = \"btn\";\r\n    button.innerHTML = \"<p>в корзину</p>\";\r\n    button.style.backgroundColor = \"var(--color-yellow)\";\r\n\r\n    const updateCart = () => {\r\n      cartCount = parseInt(localStorage.getItem('cartCount'), 10);\r\n      cartSpan.textContent = cartCount;\r\n    };\r\n\r\n\r\n    \r\n\r\n    // Получаем состояние кнопки из LocalStorage\r\n    let buttonState = localStorage.getItem(`buttonState-${card.id}`) || 'initial'; \r\n\r\n\r\n    // Обработчик события click для кнопки\r\n\r\n    button.addEventListener('click', () => {\r\n      if (buttonState === 'initial' || buttonState === 'removed') {\r\n\r\n    // Добавление в корзину\r\n        cartCount++;\r\n        button.style.backgroundColor = \"#3a3a3a\";\r\n        button.textContent = \"отменить выбор\";\r\n        buttonState = 'added';\r\n        cardContainer.prepend(cardElement); \r\n        localStorage.setItem(`buttonState-${card.id}`, 'added');\r\n      } else {\r\n\r\n    // Удаление из корзины\r\n        cartCount--;\r\n        button.style.backgroundColor = \"var(--color-yellow)\";\r\n        button.textContent = \"в корзину\";\r\n        buttonState = 'removed';\r\n        localStorage.setItem(`buttonState-${card.id}`, 'removed');\r\n      }\r\n\r\n      localStorage.setItem('cartCount', cartCount);\r\n      updateCart();\r\n\r\n      // Экспортируем данные карточки\r\n    exportCardData(card);\r\n    });\r\n\r\n    // Устанавливаем начальное состояние кнопки из LocalStorage\r\n\r\n    if (buttonState === 'added') {\r\n      button.style.backgroundColor = \"#3a3a3a\";\r\n      button.textContent = \"отменить выбор\";\r\n    }\r\n\r\n    btnText.appendChild(pTwo);\r\n    btnText.appendChild(button);\r\n    \r\n    cardElement.appendChild(colImg);\r\n    cardElement.appendChild(cardText);\r\n    cardElement.appendChild(btnText);\r\n    \r\n    cardContainer.appendChild(cardElement);\r\n    \r\n    main.appendChild(cardContainer);\r\n  });\r\n\r\n\r\n  // Функционал для инпута\r\n\r\n  input.addEventListener('input', () => {\r\n    const query = input.value.toLowerCase(); // Получить входное значение\r\n    const cards = document.querySelectorAll('.card'); // Получить все элементы карты\r\n\r\n    cards.forEach(card => {\r\n      const title = card.dataset.title; // Получить заголовок из набора данных\r\n      if (title.includes(query)) {\r\n        card.style.display = ''; // Показ карты\r\n      } else {\r\n        card.style.display = 'none'; // Скрыть карту\r\n      }\r\n    });\r\n  });\r\n\r\n\r\n  // При загрузке страницы, устанавливаем состояние кнопки\r\n\r\n  window.addEventListener('load', () => {\r\n  const buttons = document.querySelectorAll('.btn');\r\n  buttons.forEach(button => {\r\n\r\n    // Проверяем, есть ли данные в localStorage для этой конкретной кнопки\r\n\r\n    if (localStorage.getItem(`buttonState-${button.textContent}`)) {\r\n      // Если есть, устанавливаем состояние кнопки в соответствии с данными из localStorage\r\n\r\n      button.style.backgroundColor = localStorage.getItem(`buttonState-${button.textContent}`);\r\n      button.textContent = localStorage.getItem(`buttonText-${button.textContent}`);\r\n  }\r\n  });\r\n  });\r\n  \r\n  const pageShops = document.createElement(\"div\");\r\n  pageShops.appendChild(section);\r\n  pageShops.appendChild(main);\r\n  \r\n  return pageShops;\r\n}\r\n\n\n//# sourceURL=webpack://lection/./pages/shop/shopPage.js?");

/***/ }),

/***/ "./pages/welcome/welcomePage.js":
/*!**************************************!*\
  !*** ./pages/welcome/welcomePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWelcomePage: () => (/* binding */ createWelcomePage)\n/* harmony export */ });\n/* harmony import */ var _images_section_lupa_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/section lupa.png */ \"./images/section lupa.png\");\n/* harmony import */ var _images_section_korzina_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/section korzina.png */ \"./images/section korzina.png\");\n/* harmony import */ var _images_fire_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/fire icon.png */ \"./images/fire icon.png\");\n/* harmony import */ var _images_main_men_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/main men.png */ \"./images/main men.png\");\n/* harmony import */ var _images_main_stake_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/main stake.png */ \"./images/main stake.png\");\n/* harmony import */ var _images_main_salat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/main salat.png */ \"./images/main salat.png\");\n/* harmony import */ var _images_mainPink_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/mainPink.png */ \"./images/mainPink.png\");\n/* harmony import */ var _images_mainCoffe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/mainCoffe.png */ \"./images/mainCoffe.png\");\n/* harmony import */ var _images_MainVine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/MainVine.png */ \"./images/MainVine.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../style.css */ \"./style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createWelcomePage() {\r\n  // Создание section\r\n  const section = document.createElement(\"section\");\r\n\r\n  const inputDiv = document.createElement(\"div\");\r\n  inputDiv.className = \"section-input\";\r\n  const input = document.createElement(\"input\");\r\n  input.type = \"text\";\r\n  const lupaImg = document.createElement(\"img\");\r\n  lupaImg.src = _images_section_lupa_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  inputDiv.appendChild(input);\r\n  inputDiv.appendChild(lupaImg);\r\n\r\n  const cartDiv = document.createElement('div');\r\n  cartDiv.className = 'section-paragraph';\r\n  \r\n  const cartSpan = document.createElement('span');\r\n  cartSpan.classList = 'section-span';\r\n  cartSpan.textContent = 0;\r\n  \r\n  const cartP = document.createElement('p');\r\n  cartP.classList = 'basketIcon';\r\n  \r\n  \r\n  const basketHrf = [{ id:'basketid', text: 'Koрзина', href: 'basket' }]\r\n  basketHrf.forEach( link => {\r\n    const a = document.createElement('a');\r\n    a.href = link.href;\r\n    a.textContent = link.text;\r\n    a.id = link.id;\r\n    cartP.appendChild(a);\r\n  });\r\n  \r\n  const cartImg = document.createElement('img');\r\n  \r\n  cartImg.src = _images_section_korzina_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  cartDiv.appendChild(cartP);\r\n  cartDiv.appendChild(cartImg);\r\n  cartDiv.appendChild(cartSpan);\r\n\r\n  const btnDiv = document.createElement(\"div\");\r\n  btnDiv.className = \"section-btn\";\r\n  const button = document.createElement(\"button\");\r\n  const fireImg = document.createElement(\"img\");\r\n  fireImg.src = _images_fire_icon_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  button.appendChild(fireImg);\r\n  button.appendChild(document.createTextNode(\"АКЦИИ\"));\r\n  btnDiv.appendChild(button);\r\n  \r\n  section.appendChild(inputDiv);\r\n  section.appendChild(cartDiv);\r\n  section.appendChild(btnDiv);\r\n\r\n  // Создание main\r\n  const main = document.createElement('main');\r\n\r\n  const mainLeft = document.createElement('div');\r\n  mainLeft.className = 'main-left';\r\n  const h1 = document.createElement('h1');\r\n  h1.textContent = 'Эксклюзивное';\r\n  const h11 = document.createElement('h2');\r\n  h11.textContent = 'меню на ваш вкус';\r\n  const p = document.createElement('p');\r\n  p.textContent = 'Смотреть все меню';\r\n  const btn = document.createElement('button');\r\n  btn.className = 'btn-main-left';\r\n  \r\n  btn.textContent = 'АКЦИИ НА СЕГОДНЯ';\r\n\r\n\r\n  mainLeft.appendChild(h1);\r\n  mainLeft.appendChild(h11);\r\n  mainLeft.appendChild(p);\r\n  mainLeft.appendChild(btn);\r\n\r\n  const mainRight = document.createElement(\"div\");\r\n  mainRight.className = \"main-right\";\r\n  const imgList = [_images_main_men_png__WEBPACK_IMPORTED_MODULE_3__, _images_main_stake_png__WEBPACK_IMPORTED_MODULE_4__, _images_main_salat_png__WEBPACK_IMPORTED_MODULE_5__, _images_mainPink_png__WEBPACK_IMPORTED_MODULE_6__, _images_mainCoffe_png__WEBPACK_IMPORTED_MODULE_7__, _images_MainVine_png__WEBPACK_IMPORTED_MODULE_8__];\r\n  const ul = document.createElement(\"ul\");\r\n\r\n  imgList.forEach((src) => {\r\n    const li = document.createElement(\"li\");\r\n    const img = document.createElement(\"img\");\r\n    img.src = src;\r\n    li.appendChild(img);\r\n    ul.appendChild(li);\r\n  });\r\n\r\n  mainRight.appendChild(ul);\r\n\r\n  main.appendChild(mainLeft);\r\n  main.appendChild(mainRight);\r\n\r\n  // Возвращаем полный документ\r\n  const pageContainer = document.createElement(\"div\");\r\n  pageContainer.appendChild(section);\r\n  pageContainer.appendChild(main);\r\n\r\n  return pageContainer;\r\n}\r\n\n\n//# sourceURL=webpack://lection/./pages/welcome/welcomePage.js?");

/***/ }),

/***/ "./router/render.js":
/*!**************************!*\
  !*** ./router/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initApp: () => (/* binding */ initApp)\n/* harmony export */ });\n/* harmony import */ var _pages_welcome_welcomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/welcome/welcomePage */ \"./pages/welcome/welcomePage.js\");\n/* harmony import */ var _pages_shop_shopPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/shop/shopPage */ \"./pages/shop/shopPage.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./router/router.js\");\n/* harmony import */ var _utils_renderPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/renderPage */ \"./utils/renderPage.js\");\n/* harmony import */ var _pages_basket_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/basket/basket */ \"./pages/basket/basket.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Определяем маршруты в массиве\r\nconst routes = [\r\n  { path: \"/\", page: _pages_welcome_welcomePage__WEBPACK_IMPORTED_MODULE_0__.createWelcomePage },\r\n  { path: \"/shop\", page: _pages_shop_shopPage__WEBPACK_IMPORTED_MODULE_1__.createShopPage },\r\n  { path: \"/basket\", page: _pages_basket_basket__WEBPACK_IMPORTED_MODULE_4__.basketPage },\r\n];\r\n\r\nconst router = new _router__WEBPACK_IMPORTED_MODULE_2__.Router();\r\n\r\n// Функция для настройки маршрутов\r\nconst setupRoutes = () => {\r\n  routes.forEach(({ path, page }) => {\r\n    router.addRoute(path, () => (0,_utils_renderPage__WEBPACK_IMPORTED_MODULE_3__.renderPage)(page(), setupNavigation, path));\r\n  });\r\n};\r\n\r\n// Функция для установки навигации\r\nconst setupNavigation = () => {\r\n  const navItems = [\r\n    { id: \"nav-home\", path: \"/\" },\r\n    { id: \"nav-menu\", path: \"/shop\" },\r\n  ];\r\n\r\n  navItems.forEach(({ id, path }) => {\r\n    document.getElementById(id).addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      router.navigate(path);\r\n    });\r\n  })\r\n};\r\n\r\n// Функция инициализации приложения\r\nconst initApp = () => {\r\n  setupRoutes(); // Установка маршрутов\r\n  setupNavigation(); // Установка событий навигации\r\n\r\n  const activePath = window.location.pathname;\r\n  router.handleRoute(activePath); // Рендерим страницу на основе текущего URL\r\n};\r\n\n\n//# sourceURL=webpack://lection/./router/render.js?");

/***/ }),

/***/ "./router/router.js":
/*!**************************!*\
  !*** ./router/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\nclass Router {\r\n  constructor() {\r\n    this.routes = {};\r\n    this.init();  // Инициализация для отслеживания изменений URL\r\n  }\r\n\r\n  addRoute(path, action) {\r\n    this.routes[path] = action;\r\n  }\r\n\r\n  navigate(path) {\r\n    window.history.pushState({}, '', path);\r\n    this.handleRoute(path);\r\n  }\r\n\r\n  handleRoute(path) {\r\n    const routeAction = this.routes[path] || this.routes['/'];\r\n    if (routeAction) {\r\n      routeAction();\r\n    } else {\r\n      console.error(`Маршрут для ${path} не найден`);\r\n    }\r\n  }\r\n\r\n  // Обрабатывает изменения в URL, например, при обновлении страницы или переходе назад/вперед\r\n  init() {\r\n    window.addEventListener('popstate', () => {\r\n      this.handleRoute(window.location.pathname);\r\n    });\r\n\r\n    // Обрабатываем маршрут при первой загрузке страницы\r\n    this.handleRoute(window.location.pathname);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://lection/./router/router.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer */ \"./components/footer.js\");\n/* harmony import */ var _router_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/render */ \"./router/render.js\");\n\r\n\r\n\r\n\r\n// Инициализация приложения\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const app = document.getElementById('app');\r\n  \r\n  if (!app) {\r\n    console.error(\"Элемент с id='app' не найден.\");\r\n    return;\r\n  }\r\n\r\n  // Добавляем хедер и футер в DOM\r\n  app.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\r\n  (0,_router_render__WEBPACK_IMPORTED_MODULE_2__.initApp)();\r\n  app.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)());\r\n});\r\n\n\n//# sourceURL=webpack://lection/./script.js?");

/***/ }),

/***/ "./utils/renderPage.js":
/*!*****************************!*\
  !*** ./utils/renderPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage),\n/* harmony export */   showLoadingScreen: () => (/* binding */ showLoadingScreen)\n/* harmony export */ });\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n\r\n\r\n\r\n// Функция для показа экрана загрузки\r\nfunction showLoadingScreen() {\r\n  const app = document.getElementById(\"app\");\r\n  if (app) {\r\n    app.innerHTML = ''; // Очищаем содержимое\r\n    const loadingDiv = document.createElement('div');\r\n    loadingDiv.textContent = 'ZIRA'; // Текст или анимация загрузки\r\n    loadingDiv.className = 'loading'; // Добавляем стили для экрана загрузки\r\n\r\n    app.appendChild(loadingDiv);\r\n  }\r\n}\r\n\r\n// Асинхронная функция для рендеринга страницы\r\nasync function renderPage(pageContent, setupNavigation, activePage) {\r\n  showLoadingScreen();\r\n\r\n  // Имитация загрузки (например, можно сделать реальный запрос на сервер тут)\r\n  await new Promise((resolve) => setTimeout(resolve, 800)); // Задержка 800ms\r\n\r\n  const app = document.getElementById(\"app\");\r\n  if (app) {\r\n    app.innerHTML = \"\"; // Очищаем контейнер\r\n    app.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(activePage)); // Добавляем хедер\r\n    app.appendChild(pageContent); // Добавляем контент страницы\r\n    app.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)()); // Добавляем футер\r\n\r\n    // После рендера вызываем настройку навигации\r\n    if (typeof setupNavigation === \"function\") {\r\n      setupNavigation();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://lection/./utils/renderPage.js?");

/***/ }),

/***/ "./images/003.jpg":
/*!************************!*\
  !*** ./images/003.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76d8a928777210dfc896.jpg\";\n\n//# sourceURL=webpack://lection/./images/003.jpg?");

/***/ }),

/***/ "./images/004.jpg":
/*!************************!*\
  !*** ./images/004.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8550d2452e76c557f124.jpg\";\n\n//# sourceURL=webpack://lection/./images/004.jpg?");

/***/ }),

/***/ "./images/009.jpg":
/*!************************!*\
  !*** ./images/009.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"171102ff6684eed39c7e.jpg\";\n\n//# sourceURL=webpack://lection/./images/009.jpg?");

/***/ }),

/***/ "./images/010.jpg":
/*!************************!*\
  !*** ./images/010.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d287d56ee12e148770b8.jpg\";\n\n//# sourceURL=webpack://lection/./images/010.jpg?");

/***/ }),

/***/ "./images/011.jpg":
/*!************************!*\
  !*** ./images/011.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1a1c10f520f431963ad.jpg\";\n\n//# sourceURL=webpack://lection/./images/011.jpg?");

/***/ }),

/***/ "./images/014.jpg":
/*!************************!*\
  !*** ./images/014.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7226ee59f4f912989b58.jpg\";\n\n//# sourceURL=webpack://lection/./images/014.jpg?");

/***/ }),

/***/ "./images/019.jpg":
/*!************************!*\
  !*** ./images/019.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82736efd00c2937271de.jpg\";\n\n//# sourceURL=webpack://lection/./images/019.jpg?");

/***/ }),

/***/ "./images/024.jpg":
/*!************************!*\
  !*** ./images/024.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b88a3ebb73ae4c091847.jpg\";\n\n//# sourceURL=webpack://lection/./images/024.jpg?");

/***/ }),

/***/ "./images/025.jpg":
/*!************************!*\
  !*** ./images/025.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"decec1c76247c81012f0.jpg\";\n\n//# sourceURL=webpack://lection/./images/025.jpg?");

/***/ }),

/***/ "./images/026.jpg":
/*!************************!*\
  !*** ./images/026.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89aafc40b95884c09fb6.jpg\";\n\n//# sourceURL=webpack://lection/./images/026.jpg?");

/***/ }),

/***/ "./images/027.jpg":
/*!************************!*\
  !*** ./images/027.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2703caff08c4e872fdb4.jpg\";\n\n//# sourceURL=webpack://lection/./images/027.jpg?");

/***/ }),

/***/ "./images/2986072_logo_media_social_vk_icon.svg":
/*!******************************************************!*\
  !*** ./images/2986072_logo_media_social_vk_icon.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eebf854a2e78fe766780.svg\";\n\n//# sourceURL=webpack://lection/./images/2986072_logo_media_social_vk_icon.svg?");

/***/ }),

/***/ "./images/MainVine.png":
/*!*****************************!*\
  !*** ./images/MainVine.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7a738fc4ebf14618073.png\";\n\n//# sourceURL=webpack://lection/./images/MainVine.png?");

/***/ }),

/***/ "./images/facebook.svg":
/*!*****************************!*\
  !*** ./images/facebook.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3b112dfe04f1965de42.svg\";\n\n//# sourceURL=webpack://lection/./images/facebook.svg?");

/***/ }),

/***/ "./images/fire icon.png":
/*!******************************!*\
  !*** ./images/fire icon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eee89bb44a6a9a578703.png\";\n\n//# sourceURL=webpack://lection/./images/fire_icon.png?");

/***/ }),

/***/ "./images/instagggg.svg":
/*!******************************!*\
  !*** ./images/instagggg.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7dcb12702346f2e85a5.svg\";\n\n//# sourceURL=webpack://lection/./images/instagggg.svg?");

/***/ }),

/***/ "./images/logo ZIRA.png":
/*!******************************!*\
  !*** ./images/logo ZIRA.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e07f98e358a90c9325e0.png\";\n\n//# sourceURL=webpack://lection/./images/logo_ZIRA.png?");

/***/ }),

/***/ "./images/main men.png":
/*!*****************************!*\
  !*** ./images/main men.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a41d8b3492b311a889d.png\";\n\n//# sourceURL=webpack://lection/./images/main_men.png?");

/***/ }),

/***/ "./images/main salat.png":
/*!*******************************!*\
  !*** ./images/main salat.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d19eaeb81148363b8d99.png\";\n\n//# sourceURL=webpack://lection/./images/main_salat.png?");

/***/ }),

/***/ "./images/main stake.png":
/*!*******************************!*\
  !*** ./images/main stake.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c9b90007eb99cdf4444.png\";\n\n//# sourceURL=webpack://lection/./images/main_stake.png?");

/***/ }),

/***/ "./images/mainCoffe.png":
/*!******************************!*\
  !*** ./images/mainCoffe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"873741f90f56e0354141.png\";\n\n//# sourceURL=webpack://lection/./images/mainCoffe.png?");

/***/ }),

/***/ "./images/mainPink.png":
/*!*****************************!*\
  !*** ./images/mainPink.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d70bbe2057ef2ae48c46.png\";\n\n//# sourceURL=webpack://lection/./images/mainPink.png?");

/***/ }),

/***/ "./images/section korzina.png":
/*!************************************!*\
  !*** ./images/section korzina.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68f3499e0db3b484d407.png\";\n\n//# sourceURL=webpack://lection/./images/section_korzina.png?");

/***/ }),

/***/ "./images/section lupa.png":
/*!*********************************!*\
  !*** ./images/section lupa.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0db769a240cb9c434c91.png\";\n\n//# sourceURL=webpack://lection/./images/section_lupa.png?");

/***/ }),

/***/ "./images/twitt.svg":
/*!**************************!*\
  !*** ./images/twitt.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9832809b3a11ae706ea8.svg\";\n\n//# sourceURL=webpack://lection/./images/twitt.svg?");

/***/ }),

/***/ "./images/стейк-рибай.jpg":
/*!********************************!*\
  !*** ./images/стейк-рибай.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f52d02ab25c9b265a522.jpg\";\n\n//# sourceURL=webpack://lection/./images/%D1%81%D1%82%D0%B5%D0%B9%D0%BA-%D1%80%D0%B8%D0%B1%D0%B0%D0%B9.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;