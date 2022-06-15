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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n\n\n\n\nconst Feed = ()=>{\n    const { 0: phrases , 1: setPhrases  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getPhrases() {\n            const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_URL}/phrases`);\n            const data = await response.json();\n            setPhrases(data.payload);\n            console.log(phrases);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: phrases ? phrases.map((phrase)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                quote: phrase.desc\n            }, phrase.id, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                lineNumber: 22,\n                columnNumber: 18\n            }, undefined);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNwQjtBQUN3QztBQUV2RSxNQUFNSyxJQUFJLEdBQUcsSUFBTTtJQUNqQixNQUFNLEVBTFIsR0FLU0MsT0FBTyxHQUxoQixHQUtrQkMsVUFBVSxNQUFJTiwrQ0FBUSxFQUFFO0lBRXhDQyxnREFBUyxDQUFDLElBQU07UUFDZCxlQUFlTSxVQUFVLEdBQUc7WUFDMUIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVQLHVEQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsTUFBTVMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO1lBQ2xDTixVQUFVLENBQUNLLElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUM7WUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixPQUFPLENBQUMsQ0FBQztTQUN0QjtRQUNERSxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTtrQkFDR0YsT0FBTyxHQUNOQSxPQUFPLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUs7WUFDdEIscUJBQU8sOERBQUNkLG1GQUFVO2dCQUFpQmUsS0FBSyxFQUFFRCxNQUFNLENBQUNFLElBQUk7ZUFBN0JGLE1BQU0sQ0FBQ0csRUFBRTs7Ozt5QkFBd0IsQ0FBQztTQUMzRCxDQUFDLGlCQUVGLDZJQUFLO3FCQUVOLENBQ0g7Q0FDSDtBQUVELGlFQUFlaEIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZmZiYWxsLy4vcGFnZXMvZmVlZC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBQaHJhc2VDYXJkIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmRcIjtcblxuY29uc3QgRmVlZCA9ICgpID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBocmFzZXMoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5BUElfVVJMfS9waHJhc2VzYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UGhyYXNlcyhkYXRhLnBheWxvYWQpO1xuICAgICAgY29uc29sZS5sb2cocGhyYXNlcyk7XG4gICAgfVxuICAgIGdldFBocmFzZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwaHJhc2VzID8gKFxuICAgICAgICBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQaHJhc2VDYXJkIGtleT17cGhyYXNlLmlkfSBxdW90ZT17cGhyYXNlLmRlc2N9IC8+O1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb25maWciLCJQaHJhc2VDYXJkIiwiRmVlZCIsInBocmFzZXMiLCJzZXRQaHJhc2VzIiwiZ2V0UGhyYXNlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJBUElfVVJMIiwiZGF0YSIsImpzb24iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBocmFzZSIsInF1b3RlIiwiZGVzYyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ }),

/***/ "./src/components/Cards/PhraseCard/PhraseCard.js":
/*!*******************************************************!*\
  !*** ./src/components/Cards/PhraseCard/PhraseCard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst PhraseCard = ({ quote  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            children: quote\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Cards/PhraseCard/PhraseCard.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Cards/PhraseCard/PhraseCard.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhraseCard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ29CO0FBRTlDLE1BQU1HLFVBQVUsR0FBRyxDQUFDLEVBQUVDLEtBQUssR0FBRSxHQUFLO0lBQ2hDLHFCQUNFLDhEQUFDRixrREFBSTtrQkFDSCw0RUFBQ0Qsa0RBQUk7c0JBQUVHLEtBQUs7Ozs7O3FCQUFROzs7OztpQkFDZixDQUNQO0NBQ0g7QUFFRCxpRUFBZUQsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZmZiYWxsLy4vc3JjL2NvbXBvbmVudHMvQ2FyZHMvUGhyYXNlQ2FyZC9QaHJhc2VDYXJkLmpzPzdhOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dCwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IFBocmFzZUNhcmQgPSAoeyBxdW90ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXg+XG4gICAgICA8VGV4dD57cXVvdGV9PC9UZXh0PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBocmFzZUNhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiRmxleCIsIlBocmFzZUNhcmQiLCJxdW90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Cards/PhraseCard/PhraseCard.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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