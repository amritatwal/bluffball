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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _src_components_Carousel_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Carousel/carousel */ \"./src/components/Carousel/carousel.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    // const [index, setIndex] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setPhrases(data.payload);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    // function updateProgressBar(item) {\n    //   setIndex(item);\n    //   console.log(index);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        h: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                m: \".8em\",\n                flexDirection: \"row\",\n                border: \"solid 1px black\",\n                justifyContent: \"flex-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    bg: \"none\",\n                    py: \"1em\",\n                    px: \"10em\",\n                    _hover: \"none\",\n                    _after: \"none\",\n                    _visited: \"none\",\n                    _active: \"none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                            w: \"1.7em\",\n                            src: \"https://svgshare.com/i/iQf.svg\",\n                            alt: \"close\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        display: \"flex\",\n                        mt: {\n                            base: \"2em\",\n                            md: \"4em\"\n                        },\n                        alignItems: \"center\",\n                        justifyContent: \"center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        my: \"3em\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Carousel_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        phrases: phrases\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUM2QjtBQUNEO0FBQzlCOztBQUU3QixJQUFNVSxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBOEJULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQNUMsT0FPZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFQaEIsVUFPNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQix3Q0FBd0M7SUFFeENDLGdEQUFTLENBQUMsV0FBTTtpQkFDQ1csVUFBVTttQkFBVkEsV0FBVTs7aUJBQVZBLFdBQVU7WUFBVkEsV0FBVSxHQUF6QixvTEFBNEI7b0JBQ3BCQyxRQUFRLEVBQ1JDLElBQUk7Ozs7O21DQURhQyxLQUFLLENBQUMsRUFBQyxDQUFpQixNQUFRLENBQXZCYix1REFBYyxFQUFDLFVBQVEsQ0FBQyxDQUFDOzs0QkFBbkRXLFFBQVEsWUFBMkM7O21DQUN0Q0EsUUFBUSxDQUFDSSxJQUFJLEVBQUU7OzRCQUE1QkgsSUFBSSxZQUF3Qjs0QkFDbENILFVBQVUsQ0FBQ0csSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQzs7Ozs7O2FBQzFCO21CQUpjTixXQUFVOztRQUt6QkEsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsSUFBSTtJQUVKLHFCQUNFLDhEQUFDUixpREFBRztRQUFDZSxDQUFDLEVBQUMsT0FBTzs7MEJBQ1osOERBQUNoQixrREFBSTtnQkFDSGlCLENBQUMsRUFBQyxNQUFNO2dCQUNSQyxhQUFhLEVBQUMsS0FBSztnQkFDbkJDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCQyxjQUFjLEVBQUUsVUFBVTswQkFFMUIsNEVBQUNsQixvREFBTTtvQkFDTG1CLEVBQUUsRUFBQyxNQUFNO29CQUNUQyxFQUFFLEVBQUMsS0FBSztvQkFDUkMsRUFBRSxFQUFDLE1BQU07b0JBQ1RDLE1BQU0sRUFBRSxNQUFNO29CQUNkQyxNQUFNLEVBQUUsTUFBTTtvQkFDZEMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCQyxPQUFPLEVBQUUsTUFBTTs4QkFFZiw0RUFBQ3RCLGtEQUFJO3dCQUFDdUIsSUFBSSxFQUFFLEdBQUc7a0NBQ2IsNEVBQUN6QixtREFBSzs0QkFBQzBCLENBQUMsRUFBQyxPQUFPOzRCQUFDQyxHQUFHLEVBQUMsZ0NBQWdDOzRCQUFDQyxHQUFHLEVBQUMsT0FBTzs7Ozs7aUNBQUc7Ozs7OzZCQUMvRDs7Ozs7eUJBQ0E7Ozs7O3FCQUNKO1lBQ054QixPQUFPLENBQUN5QixNQUFNLEdBQUcsQ0FBQyxpQkFDakI7O2tDQUNFLDhEQUFDL0IsaURBQUc7d0JBQ0ZnQyxPQUFPLEVBQUMsTUFBTTt3QkFDZEMsRUFBRSxFQUFFOzRCQUFFQyxJQUFJLEVBQUUsS0FBSzs0QkFBRUMsRUFBRSxFQUFFLEtBQUs7eUJBQUU7d0JBQzlCQyxVQUFVLEVBQUMsUUFBUTt3QkFDbkJqQixjQUFjLEVBQUMsUUFBUTs7Ozs7NkJBWW5CO2tDQUNOLDhEQUFDcEIsa0RBQUk7d0JBQUNxQyxVQUFVLEVBQUMsUUFBUTt3QkFBQ2pCLGNBQWMsRUFBQyxRQUFRO3dCQUFDa0IsRUFBRSxFQUFDLEtBQUs7Ozs7OzZCQUFRO2tDQUNsRSw4REFBQ2xDLHlFQUFRO3dCQUFDRyxPQUFPLEVBQUVBLE9BQU87Ozs7OzZCQUFJOzs0QkFDN0IsaUJBRUgsNklBQUs7Ozs7OzthQUVILENBQ047Q0FDSDtHQW5FS0QsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBcUVWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEZsZXgsIEJveCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsL2Nhcm91c2VsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEZlZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFtwaHJhc2VzLCBzZXRQaHJhc2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGhyYXNlcygpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLkFQSV9VUkx9L3BocmFzZXNgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQaHJhc2VzKGRhdGEucGF5bG9hZCk7XG4gICAgfVxuICAgIGdldFBocmFzZXMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKGl0ZW0pIHtcbiAgLy8gICBzZXRJbmRleChpdGVtKTtcbiAgLy8gICBjb25zb2xlLmxvZyhpbmRleCk7XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggaD1cIjEwMHZoXCI+XG4gICAgICA8RmxleFxuICAgICAgICBtPVwiLjhlbVwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBib3JkZXI9e1wic29saWQgMXB4IGJsYWNrXCJ9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcImZsZXgtZW5kXCJ9XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICAgIHB5PVwiMWVtXCJcbiAgICAgICAgICBweD1cIjEwZW1cIlxuICAgICAgICAgIF9ob3Zlcj17XCJub25lXCJ9XG4gICAgICAgICAgX2FmdGVyPXtcIm5vbmVcIn1cbiAgICAgICAgICBfdmlzaXRlZD17XCJub25lXCJ9XG4gICAgICAgICAgX2FjdGl2ZT17XCJub25lXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICA8SW1hZ2Ugdz1cIjEuN2VtXCIgc3JjPVwiaHR0cHM6Ly9zdmdzaGFyZS5jb20vaS9pUWYuc3ZnXCIgYWx0PVwiY2xvc2VcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0ZsZXg+XG4gICAgICB7cGhyYXNlcy5sZW5ndGggPiAxID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIG10PXt7IGJhc2U6IFwiMmVtXCIsIG1kOiBcIjRlbVwiIH19XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPFByb2dyZXNzXG4gICAgICAgICAgICAgIHZhbHVlPXtpbmRleH1cbiAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICBtYXg9e3BocmFzZXMubGVuZ3RofVxuICAgICAgICAgICAgICB3PVwiNTBlbVwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjI1cHhcIlxuICAgICAgICAgICAgICBoPVwiMmVtXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmVlblwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBteT1cIjNlbVwiPjwvRmxleD5cbiAgICAgICAgICA8Q2Fyb3VzZWwgcGhyYXNlcz17cGhyYXNlc30gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIkZsZXgiLCJCb3giLCJCdXR0b24iLCJJbWFnZSIsIkNhcm91c2VsIiwiTGluayIsIkZlZWQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsImdldFBocmFzZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJqc29uIiwicGF5bG9hZCIsImgiLCJtIiwiZmxleERpcmVjdGlvbiIsImJvcmRlciIsImp1c3RpZnlDb250ZW50IiwiYmciLCJweSIsInB4IiwiX2hvdmVyIiwiX2FmdGVyIiwiX3Zpc2l0ZWQiLCJfYWN0aXZlIiwiaHJlZiIsInciLCJzcmMiLCJhbHQiLCJsZW5ndGgiLCJkaXNwbGF5IiwibXQiLCJiYXNlIiwibWQiLCJhbGlnbkl0ZW1zIiwibXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});