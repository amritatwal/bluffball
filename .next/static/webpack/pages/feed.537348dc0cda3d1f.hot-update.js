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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _src_components_Carousel_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Carousel/carousel */ \"./src/components/Carousel/carousel.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    // const [index, setIndex] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setPhrases(data.payload);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    // function updateProgressBar(item) {\n    //   setIndex(item);\n    //   console.log(index);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        h: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                m: \".8em\",\n                display: \"flex\",\n                flexDirection: \"row\",\n                justifyContent: \"flex-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    bg: \"none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                        w: \"1.7em\",\n                        src: \"https://svgshare.com/i/iQf.svg\",\n                        alt: \"close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        display: \"flex\",\n                        mt: {\n                            base: \"2em\",\n                            md: \"4em\"\n                        },\n                        alignItems: \"center\",\n                        justifyContent: \"center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        my: \"3em\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Carousel_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        phrases: phrases\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUM2QjtBQUNEO0FBQzlCOztBQUU3QixJQUFNVSxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBOEJULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQNUMsT0FPZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFQaEIsVUFPNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQix3Q0FBd0M7SUFFeENDLGdEQUFTLENBQUMsV0FBTTtpQkFDQ1csVUFBVTttQkFBVkEsV0FBVTs7aUJBQVZBLFdBQVU7WUFBVkEsV0FBVSxHQUF6QixvTEFBNEI7b0JBQ3BCQyxRQUFRLEVBQ1JDLElBQUk7Ozs7O21DQURhQyxLQUFLLENBQUMsRUFBQyxDQUFpQixNQUFRLENBQXZCYix1REFBYyxFQUFDLFVBQVEsQ0FBQyxDQUFDOzs0QkFBbkRXLFFBQVEsWUFBMkM7O21DQUN0Q0EsUUFBUSxDQUFDSSxJQUFJLEVBQUU7OzRCQUE1QkgsSUFBSSxZQUF3Qjs0QkFDbENILFVBQVUsQ0FBQ0csSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQzs7Ozs7O2FBQzFCO21CQUpjTixXQUFVOztRQUt6QkEsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsSUFBSTtJQUVKLHFCQUNFLDhEQUFDUixpREFBRztRQUFDZSxDQUFDLEVBQUMsT0FBTzs7MEJBQ1osOERBQUNmLGlEQUFHO2dCQUNGZ0IsQ0FBQyxFQUFDLE1BQU07Z0JBQ1JDLE9BQU8sRUFBQyxNQUFNO2dCQUNkQyxhQUFhLEVBQUMsS0FBSztnQkFDbkJDLGNBQWMsRUFBRSxVQUFVOzBCQUUxQiw0RUFBQ2xCLG9EQUFNO29CQUFDbUIsRUFBRSxFQUFDLE1BQU07OEJBQ2YsNEVBQUNsQixtREFBSzt3QkFBQ21CLENBQUMsRUFBQyxPQUFPO3dCQUFDQyxHQUFHLEVBQUMsZ0NBQWdDO3dCQUFDQyxHQUFHLEVBQUMsT0FBTzs7Ozs7NkJBQUc7Ozs7O3lCQUM3RDs7Ozs7cUJBQ0w7WUFDTGpCLE9BQU8sQ0FBQ2tCLE1BQU0sR0FBRyxDQUFDLGlCQUNqQjs7a0NBQ0UsOERBQUN4QixpREFBRzt3QkFDRmlCLE9BQU8sRUFBQyxNQUFNO3dCQUNkUSxFQUFFLEVBQUU7NEJBQUVDLElBQUksRUFBRSxLQUFLOzRCQUFFQyxFQUFFLEVBQUUsS0FBSzt5QkFBRTt3QkFDOUJDLFVBQVUsRUFBQyxRQUFRO3dCQUNuQlQsY0FBYyxFQUFDLFFBQVE7Ozs7OzZCQVluQjtrQ0FDTiw4REFBQ3BCLGtEQUFJO3dCQUFDNkIsVUFBVSxFQUFDLFFBQVE7d0JBQUNULGNBQWMsRUFBQyxRQUFRO3dCQUFDVSxFQUFFLEVBQUMsS0FBSzs7Ozs7NkJBQVE7a0NBQ2xFLDhEQUFDMUIseUVBQVE7d0JBQUNHLE9BQU8sRUFBRUEsT0FBTzs7Ozs7NkJBQUk7OzRCQUM3QixpQkFFSCw2SUFBSzs7Ozs7O2FBRUgsQ0FDTjtDQUNIO0dBekRLRCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUEyRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mZWVkLmpzPzEyNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRmxleCwgQm94LCBCdXR0b24sIEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvY2Fyb3VzZWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRmVlZCA9ICgpID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQaHJhc2VzKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuQVBJX1VSTH0vcGhyYXNlc2ApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFBocmFzZXMoZGF0YS5wYXlsb2FkKTtcbiAgICB9XG4gICAgZ2V0UGhyYXNlcygpO1xuICB9LCBbXSk7XG5cbiAgLy8gZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3NCYXIoaXRlbSkge1xuICAvLyAgIHNldEluZGV4KGl0ZW0pO1xuICAvLyAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBoPVwiMTAwdmhcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgbT1cIi44ZW1cIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJmbGV4LWVuZFwifVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uIGJnPVwibm9uZVwiPlxuICAgICAgICAgIDxJbWFnZSB3PVwiMS43ZW1cIiBzcmM9XCJodHRwczovL3N2Z3NoYXJlLmNvbS9pL2lRZi5zdmdcIiBhbHQ9XCJjbG9zZVwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICB7cGhyYXNlcy5sZW5ndGggPiAxID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIG10PXt7IGJhc2U6IFwiMmVtXCIsIG1kOiBcIjRlbVwiIH19XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPFByb2dyZXNzXG4gICAgICAgICAgICAgIHZhbHVlPXtpbmRleH1cbiAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICBtYXg9e3BocmFzZXMubGVuZ3RofVxuICAgICAgICAgICAgICB3PVwiNTBlbVwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjI1cHhcIlxuICAgICAgICAgICAgICBoPVwiMmVtXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmVlblwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBteT1cIjNlbVwiPjwvRmxleD5cbiAgICAgICAgICA8Q2Fyb3VzZWwgcGhyYXNlcz17cGhyYXNlc30gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIkZsZXgiLCJCb3giLCJCdXR0b24iLCJJbWFnZSIsIkNhcm91c2VsIiwiTGluayIsIkZlZWQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsImdldFBocmFzZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJqc29uIiwicGF5bG9hZCIsImgiLCJtIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJnIiwidyIsInNyYyIsImFsdCIsImxlbmd0aCIsIm10IiwiYmFzZSIsIm1kIiwiYWxpZ25JdGVtcyIsIm15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});