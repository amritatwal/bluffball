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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n\n\n\n\nconst Feed = ()=>{\n    const { 0: phrases , 1: setPhrases  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getPhrases() {\n            const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_URL}/phrases`);\n            const data = await response.json();\n            setPhrases(data.payload);\n            console.log(phrases);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: phrases.length > 1 ? phrases.map((phrase)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                quote: phrase.phrase_desc\n            }, phrase.phrase_id, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNwQjtBQUN3QztBQUV2RSxNQUFNSyxJQUFJLEdBQUcsSUFBTTtJQUNqQixNQUFNLEVBTFIsR0FLU0MsT0FBTyxHQUxoQixHQUtrQkMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUUxQ0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsZUFBZU0sVUFBVSxHQUFHO1lBQzFCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFUCx1REFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELE1BQU1TLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtZQUNsQ04sVUFBVSxDQUFDSyxJQUFJLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsT0FBTyxDQUFDLENBQUM7U0FDdEI7UUFDREUsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0U7a0JBQ0dGLE9BQU8sQ0FBQ1csTUFBTSxHQUFHLENBQUMsR0FDakJYLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBSztZQUN0QixxQkFDRSw4REFBQ2YsbUZBQVU7Z0JBQXdCZ0IsS0FBSyxFQUFFRCxNQUFNLENBQUNFLFdBQVc7ZUFBM0NGLE1BQU0sQ0FBQ0csU0FBUzs7Ozt5QkFBK0IsQ0FDaEU7U0FDSCxDQUFDLGlCQUVGLDZJQUFLO3FCQUVOLENBQ0g7Q0FDSDtBQUVELGlFQUFlakIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZmZiYWxsLy4vcGFnZXMvZmVlZC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBQaHJhc2VDYXJkIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmRcIjtcblxuY29uc3QgRmVlZCA9ICgpID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGhyYXNlcygpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLkFQSV9VUkx9L3BocmFzZXNgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQaHJhc2VzKGRhdGEucGF5bG9hZCk7XG4gICAgICBjb25zb2xlLmxvZyhwaHJhc2VzKTtcbiAgICB9XG4gICAgZ2V0UGhyYXNlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BocmFzZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgcGhyYXNlcy5tYXAoKHBocmFzZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGhyYXNlQ2FyZCBrZXk9e3BocmFzZS5waHJhc2VfaWR9IHF1b3RlPXtwaHJhc2UucGhyYXNlX2Rlc2N9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uZmlnIiwiUGhyYXNlQ2FyZCIsIkZlZWQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsImdldFBocmFzZXMiLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX1VSTCIsImRhdGEiLCJqc29uIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJwaHJhc2UiLCJxdW90ZSIsInBocmFzZV9kZXNjIiwicGhyYXNlX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ }),

/***/ "./src/components/Cards/PhraseCard/PhraseCard.js":
/*!*******************************************************!*\
  !*** ./src/components/Cards/PhraseCard/PhraseCard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Text_Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Text/Header/header */ \"./src/components/Text/Header/header.js\");\n\n\n\n\nconst PhraseCard = ({ quote  })=>{\n    console.log(quote);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                children: quote\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Cards/PhraseCard/PhraseCard.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Text_Header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: quote\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Cards/PhraseCard/PhraseCard.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Cards/PhraseCard/PhraseCard.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhraseCard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNvQjtBQUNBO0FBRTlDLE1BQU1JLFVBQVUsR0FBRyxDQUFDLEVBQUVDLEtBQUssR0FBRSxHQUFLO0lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7SUFDbkIscUJBQ0UsOERBQUNILGtEQUFJOzswQkFDSCw4REFBQ0Qsa0RBQUk7MEJBQUVJLEtBQUs7Ozs7O3lCQUFROzBCQUNwQiw4REFBQ0YsMkRBQU07MEJBQUVFLEtBQUs7Ozs7O3lCQUFVOzs7Ozs7aUJBQ25CLENBQ1A7Q0FDSDtBQUVELGlFQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVmZmJhbGwvLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmQuanM/N2E4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL1RleHQvSGVhZGVyL2hlYWRlclwiO1xuXG5jb25zdCBQaHJhc2VDYXJkID0gKHsgcXVvdGUgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdW90ZSk7XG4gIHJldHVybiAoXG4gICAgPEZsZXg+XG4gICAgICA8VGV4dD57cXVvdGV9PC9UZXh0PlxuICAgICAgPEhlYWRlcj57cXVvdGV9PC9IZWFkZXI+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhyYXNlQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHQiLCJGbGV4IiwiSGVhZGVyIiwiUGhyYXNlQ2FyZCIsInF1b3RlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Cards/PhraseCard/PhraseCard.js\n");

/***/ }),

/***/ "./src/components/Text/Header/header.js":
/*!**********************************************!*\
  !*** ./src/components/Text/Header/header.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Header = ({ fontSize , text , fontWeight , colour  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n            fontFamily: \"Poppins\",\n            fontSize: fontSize,\n            fontWeight: fontWeight,\n            color: colour,\n            letterSpacing: \"1.5px\",\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Text/Header/header.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Text/Header/header.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZXh0L0hlYWRlci9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2lCO0FBRTNDLE1BQU1FLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRUMsSUFBSSxHQUFFQyxVQUFVLEdBQUVDLE1BQU0sR0FBRSxHQUFLO0lBQ3pELHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDTixxREFBTztZQUNOTyxVQUFVLEVBQUMsU0FBUztZQUNwQkwsUUFBUSxFQUFFQSxRQUFRO1lBQ2xCRSxVQUFVLEVBQUVBLFVBQVU7WUFDdEJJLEtBQUssRUFBRUgsTUFBTTtZQUNiSSxhQUFhLEVBQUMsT0FBTztzQkFFcEJOLElBQUk7Ozs7O3FCQUNHOzs7OztpQkFDTixDQUNOO0NBQ0g7QUFFRCxpRUFBZUYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZmZiYWxsLy4vc3JjL2NvbXBvbmVudHMvVGV4dC9IZWFkZXIvaGVhZGVyLmpzPzQ2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGZvbnRTaXplLCB0ZXh0LCBmb250V2VpZ2h0LCBjb2xvdXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGluZ1xuICAgICAgICBmb250RmFtaWx5PVwiUG9wcGluc1wiXG4gICAgICAgIGZvbnRTaXplPXtmb250U2l6ZX1cbiAgICAgICAgZm9udFdlaWdodD17Zm9udFdlaWdodH1cbiAgICAgICAgY29sb3I9e2NvbG91cn1cbiAgICAgICAgbGV0dGVyU3BhY2luZz1cIjEuNXB4XCJcbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkaW5nIiwiSGVhZGVyIiwiZm9udFNpemUiLCJ0ZXh0IiwiZm9udFdlaWdodCIsImNvbG91ciIsImRpdiIsImZvbnRGYW1pbHkiLCJjb2xvciIsImxldHRlclNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Text/Header/header.js\n");

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