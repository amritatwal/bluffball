"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feed",{

/***/ "./pages/feed.js":
/*!***********************!*\
  !*** ./pages/feed.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            console.log(data.payload);\n                            setPhrases(data.payload);\n                            console.log(phrases);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBQ3dDOztBQUV2RSxJQUFNSyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBOEJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMNUMsT0FLZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFMaEIsVUFLNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUUxQkMsZ0RBQVMsQ0FBQyxXQUFNO2lCQUNDTSxVQUFVO21CQUFWQSxXQUFVOztpQkFBVkEsV0FBVTtZQUFWQSxXQUFVLEdBQXpCLG9MQUE0QjtvQkFDcEJDLFFBQVEsRUFDTkMsSUFBSTs7Ozs7bUNBRFdDLEtBQUssQ0FBQyxFQUFDLENBQWlCLE1BQVEsQ0FBdkJSLHVEQUFjLEVBQUMsVUFBUSxDQUFDLENBQUM7OzRCQUFuRE0sUUFBUSxZQUEyQzs7bUNBQ3BDQSxRQUFRLENBQUNJLElBQUksRUFBRTs7NEJBQTVCSCxJQUFJLFlBQXdCOzRCQUNsQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUksQ0FBQ00sT0FBTyxDQUFDOzRCQUMzQlQsVUFBVSxDQUFDRyxJQUFJLENBQUNNLE9BQU8sQ0FBQyxDQUFDOzRCQUN6QkYsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU8sQ0FBQyxDQUFDOzs7Ozs7YUFDdEI7bUJBTmNFLFdBQVU7O1FBT3pCQSxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw2SUFJRyxDQUNIO0NBQ0g7R0FyQktILElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXVCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWQuanM/MTI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgUGhyYXNlQ2FyZCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ2FyZHMvUGhyYXNlQ2FyZC9QaHJhc2VDYXJkXCI7XG5cbmNvbnN0IEZlZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFtwaHJhc2VzLCBzZXRQaHJhc2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBocmFzZXMoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5BUElfVVJMfS9waHJhc2VzYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucGF5bG9hZClcbiAgICAgIHNldFBocmFzZXMoZGF0YS5wYXlsb2FkKTtcbiAgICAgIGNvbnNvbGUubG9nKHBocmFzZXMpO1xuICAgIH1cbiAgICBnZXRQaHJhc2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Lyoge3BocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIDxQaHJhc2VDYXJkIHF1b3RlPXtwaHJhc2V9IC8+O1xuICAgICAgfSl9ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uZmlnIiwiUGhyYXNlQ2FyZCIsIkZlZWQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsImdldFBocmFzZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});