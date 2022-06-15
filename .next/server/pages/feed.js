"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/feed";
exports.ids = ["pages/feed"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    AUTH0_SECRET: process.env.AUTH0_SECRET,\n    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,\n    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,\n    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,\n    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,\n    API_URL: \"https://bluffball.herokuapp.com\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRztJQUNiQyxZQUFZLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZO0lBQ3RDRyxjQUFjLEVBQUVGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0lBQzFDQyxxQkFBcUIsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLHFCQUFxQjtJQUN4REMsZUFBZSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csZUFBZTtJQUM1Q0MsbUJBQW1CLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxtQkFBbUI7SUFDcERDLE9BQU8sRUFBRU4saUNBQStCO0NBQ3pDO0FBRUQsaUVBQWVGLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWZmYmFsbC8uL2NvbmZpZy5qcz9jMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcbiAgQVVUSDBfU0VDUkVUOiBwcm9jZXNzLmVudi5BVVRIMF9TRUNSRVQsXG4gIEFVVEgwX0JBU0VfVVJMOiBwcm9jZXNzLmVudi5BVVRIMF9CQVNFX1VSTCxcbiAgQVVUSDBfSVNTVUVSX0JBU0VfVVJMOiBwcm9jZXNzLmVudi5BVVRIMF9JU1NVRVJfQkFTRV9VUkwsXG4gIEFVVEgwX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICBBVVRIMF9DTElFTlRfU0VDUkVUOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxuICBBUElfVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsIkFVVEgwX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9CQVNFX1VSTCIsIkFVVEgwX0lTU1VFUl9CQVNFX1VSTCIsIkFVVEgwX0NMSUVOVF9JRCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJBUElfVVJMIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/feed.js":
/*!***********************!*\
  !*** ./pages/feed.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nconst Feed = ()=>{\n    const { 0: phrases , 1: setPhrases  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getPhrases() {\n            const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_URL}/phrases`);\n            const data = await response.json();\n            setPhrases([\n                ...phrases,\n                data.payload\n            ]);\n            console.log(phrases);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ3BCO0FBRS9CLE1BQU1JLElBQUksR0FBRyxJQUFNO0lBQ2pCLE1BQU0sRUFKUixHQUlTQyxPQUFPLEdBSmhCLEdBSWtCQyxVQUFVLE1BQUlMLCtDQUFRLEVBQUU7SUFFeENDLGdEQUFTLENBQUMsSUFBTTtRQUNkLGVBQWVLLFVBQVUsR0FBRztZQUMxQixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRU4sdURBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxNQUFNUSxJQUFJLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLEVBQUU7WUFDaENOLFVBQVUsQ0FBQzttQkFBSUQsT0FBTztnQkFBRU0sSUFBSSxDQUFDRSxPQUFPO2FBQUMsQ0FBQztZQUN0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNWLE9BQU8sQ0FBQztTQUN2QjtRQUNERSxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw2SUFBSyxDQUFDO0NBQ2Q7QUFFRCxpRUFBZUgsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZmZiYWxsLy4vcGFnZXMvZmVlZC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcblxuY29uc3QgRmVlZCA9ICgpID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBocmFzZXMoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5BUElfVVJMfS9waHJhc2VzYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRQaHJhc2VzKFsuLi5waHJhc2VzLCBkYXRhLnBheWxvYWRdKVxuICAgICAgICBjb25zb2xlLmxvZyhwaHJhc2VzKVxuICAgIH1cbiAgICBnZXRQaHJhc2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPD48Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb25maWciLCJGZWVkIiwicGhyYXNlcyIsInNldFBocmFzZXMiLCJnZXRQaHJhc2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsIkFQSV9VUkwiLCJkYXRhIiwianNvbiIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/feed.js"));
module.exports = __webpack_exports__;

})();