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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _src_components_Carousel_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Carousel/carousel */ \"./src/components/Carousel/carousel.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    // const [index, setIndex] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setPhrases(data.payload);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    // function updateProgressBar(item) {\n    //   setIndex(item);\n    //   console.log(index);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        h: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        display: \"flex\",\n                        mt: {\n                            base: \"2em\",\n                            md: \"4em\"\n                        },\n                        alignItems: \"center\",\n                        justifyContent: \"center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        my: \"3em\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Carousel_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        phrases: phrases\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDc0I7QUFDTTs7QUFFM0QsSUFBTVEsSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQThCUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTjVDLE9BTWdCLEdBQWdCQSxHQUFZLEdBQTVCLEVBTmhCLFVBTTRCLEdBQUlBLEdBQVksR0FBaEI7SUFDMUIsd0NBQXdDO0lBRXhDQyxnREFBUyxDQUFDLFdBQU07aUJBQ0NTLFVBQVU7bUJBQVZBLFdBQVU7O2lCQUFWQSxXQUFVO1lBQVZBLFdBQVUsR0FBekIsb0xBQTRCO29CQUNwQkMsUUFBUSxFQUNSQyxJQUFJOzs7OzttQ0FEYUMsS0FBSyxDQUFDLEVBQUMsQ0FBaUIsTUFBUSxDQUF2QlgsdURBQWMsRUFBQyxVQUFRLENBQUMsQ0FBQzs7NEJBQW5EUyxRQUFRLFlBQTJDOzttQ0FDdENBLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFOzs0QkFBNUJILElBQUksWUFBd0I7NEJBQ2xDSCxVQUFVLENBQUNHLElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUM7Ozs7OzthQUMxQjttQkFKY04sV0FBVTs7UUFLekJBLFVBQVUsRUFBRSxDQUFDO0tBQ2QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLElBQUk7SUFFSixxQkFDRSw4REFBQ04saURBQUc7UUFBQ2EsQ0FBQyxFQUFDLE9BQU87OzBCQUNaLDhEQUFDYixpREFBRzswQkFDRiw0RUFBQ0Msb0RBQU07OEJBQUMsR0FBQzs7Ozs7eUJBQVM7Ozs7O3FCQUNkO1lBQ0xHLE9BQU8sQ0FBQ1UsTUFBTSxHQUFHLENBQUMsaUJBQ2pCOztrQ0FDRSw4REFBQ2QsaURBQUc7d0JBQ0ZlLE9BQU8sRUFBQyxNQUFNO3dCQUNkQyxFQUFFLEVBQUU7NEJBQUVDLElBQUksRUFBRSxLQUFLOzRCQUFFQyxFQUFFLEVBQUUsS0FBSzt5QkFBRTt3QkFDOUJDLFVBQVUsRUFBQyxRQUFRO3dCQUNuQkMsY0FBYyxFQUFDLFFBQVE7Ozs7OzZCQVluQjtrQ0FDTiw4REFBQ3JCLGtEQUFJO3dCQUFDb0IsVUFBVSxFQUFDLFFBQVE7d0JBQUNDLGNBQWMsRUFBQyxRQUFRO3dCQUFDQyxFQUFFLEVBQUMsS0FBSzs7Ozs7NkJBQVE7a0NBQ2xFLDhEQUFDbkIseUVBQVE7d0JBQUNFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7NkJBQUk7OzRCQUM3QixpQkFFSCw2SUFBSzs7Ozs7O2FBRUgsQ0FDTjtDQUNIO0dBbERLRCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFvRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mZWVkLmpzPzEyNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRmxleCwgQm94LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbFwiO1xuXG5jb25zdCBGZWVkID0gKCkgPT4ge1xuICBjb25zdCBbcGhyYXNlcywgc2V0UGhyYXNlc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBocmFzZXMoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5BUElfVVJMfS9waHJhc2VzYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UGhyYXNlcyhkYXRhLnBheWxvYWQpO1xuICAgIH1cbiAgICBnZXRQaHJhc2VzKCk7XG4gIH0sIFtdKTtcblxuICAvLyBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzc0JhcihpdGVtKSB7XG4gIC8vICAgc2V0SW5kZXgoaXRlbSk7XG4gIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGg9XCIxMDB2aFwiPlxuICAgICAgPEJveD5cbiAgICAgICAgPEJ1dHRvbj5YPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIHtwaHJhc2VzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgbXQ9e3sgYmFzZTogXCIyZW1cIiwgbWQ6IFwiNGVtXCIgfX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgdmFsdWU9e2luZGV4fVxuICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgIG1heD17cGhyYXNlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIHc9XCI1MGVtXCJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMjVweFwiXG4gICAgICAgICAgICAgIGg9XCIyZW1cIlxuICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyZWVuXCJcbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG15PVwiM2VtXCI+PC9GbGV4PlxuICAgICAgICAgIDxDYXJvdXNlbCBwaHJhc2VzPXtwaHJhc2VzfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uZmlnIiwiRmxleCIsIkJveCIsIkJ1dHRvbiIsIkNhcm91c2VsIiwiRmVlZCIsInBocmFzZXMiLCJzZXRQaHJhc2VzIiwiZ2V0UGhyYXNlcyIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoIiwiQVBJX1VSTCIsImpzb24iLCJwYXlsb2FkIiwiaCIsImxlbmd0aCIsImRpc3BsYXkiLCJtdCIsImJhc2UiLCJtZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});