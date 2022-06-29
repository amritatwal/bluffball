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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/auth/[...auth0].js\n\nconsole.log(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogin.handleLogin);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleAuth)({\n    async login (req, res) {\n        await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogin)(req, res, {\n            returnTo: \"/feed\"\n        });\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4uYXV0aDBdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtCQUErQjtBQUMrQjtBQUM5REUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLHdFQUF1QixDQUFDLENBQUM7QUFDckMsaUVBQWVELCtEQUFVLENBQUM7SUFDeEIsTUFBTUksS0FBSyxFQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUNwQixNQUFNTCxnRUFBVyxDQUFDSSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtZQUMxQkMsUUFBUSxFQUFFLE9BQU87U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVmZmJhbGwvLi9wYWdlcy9hcGkvYXV0aC9bLi4uYXV0aDBdLmpzPzU0NTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL2F1dGgvWy4uLmF1dGgwXS5qc1xuaW1wb3J0IHsgaGFuZGxlQXV0aCwgaGFuZGxlTG9naW4gfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiO1xuY29uc29sZS5sb2coaGFuZGxlTG9naW4uaGFuZGxlTG9naW4pO1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQXV0aCh7XG4gIGFzeW5jIGxvZ2luKHJlcSwgcmVzKSB7XG4gICAgYXdhaXQgaGFuZGxlTG9naW4ocmVxLCByZXMsIHtcbiAgICAgIHJldHVyblRvOiBcIi9mZWVkXCIsXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJoYW5kbGVBdXRoIiwiaGFuZGxlTG9naW4iLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJyZXEiLCJyZXMiLCJyZXR1cm5UbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...auth0].js\n");

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