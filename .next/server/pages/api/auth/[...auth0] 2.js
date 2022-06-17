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
exports.id = "pages/api/auth/[...auth0]";
exports.ids = ["pages/api/auth/[...auth0]"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "(api)/./pages/api/auth/[...auth0].js":
/*!**************************************!*\
  !*** ./pages/api/auth/[...auth0].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleAuth)({\n    async login (req, res) {\n        await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogin)(req, res, {\n            returnTo: \"/\"\n        });\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4uYXV0aDBdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4RDtBQUM5RCxpRUFBZUEsK0RBQVUsQ0FBQztJQUN4QixNQUFNRSxLQUFLLEVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1FBQ3BCLE1BQU1ILGdFQUFXLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1lBQzFCQyxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztLQUNKO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZmZiYWxsLy4vcGFnZXMvYXBpL2F1dGgvWy4uLmF1dGgwXS5qcz81NDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUF1dGgsIGhhbmRsZUxvZ2luIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUF1dGgoe1xuICBhc3luYyBsb2dpbihyZXEsIHJlcykge1xuICAgIGF3YWl0IGhhbmRsZUxvZ2luKHJlcSwgcmVzLCB7XG4gICAgICByZXR1cm5UbzogXCIvXCIsXG4gICAgfSk7XG4gIH0sXG59KTsiXSwibmFtZXMiOlsiaGFuZGxlQXV0aCIsImhhbmRsZUxvZ2luIiwibG9naW4iLCJyZXEiLCJyZXMiLCJyZXR1cm5UbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...auth0].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...auth0].js"));
module.exports = __webpack_exports__;

})();