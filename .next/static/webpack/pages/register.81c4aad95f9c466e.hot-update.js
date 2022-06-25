"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/components/TeamChoice/teamChoice.js":
/*!*************************************************!*\
  !*** ./src/components/TeamChoice/teamChoice.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ \"./src/lib/icons.js\");\nvar _this = undefined;\n\n\n\n\n\nvar TeamChoice = function(param) {\n    var team = param.team, handleCheckbox = param.handleCheckbox;\n    var icon1 = _lib_icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(function(icon) {\n        return icon.club === team;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            my: \"1.5em\",\n            px: \"1em\",\n            py: \".2em\",\n            borderRadius: \"25px\",\n            border: \"solid 1px #e1e1e1\",\n            w: {\n                md: \"40em\"\n            },\n            children: [\n                icon1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    mr: \".5em\",\n                    w: \"1.1em\",\n                    h: \"1.5\",\n                    src: icon1.src\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    flexGrow: 1,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        fontSize: \"1.4em\",\n                        fontWeight: \"600\",\n                        color: \"#333232\",\n                        letterSpacing: \"1px\",\n                        children: team\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    children: team !== \"Arsenal\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                        size: \"lg\",\n                        isDisabled: true,\n                        color: \"#53DB68\",\n                        onChange: function() {\n                            return handleCheckbox(team);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                        size: \"lg\",\n                        color: \"#53DB68\",\n                        onChange: function() {\n                            return handleCheckbox(team);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/TeamChoice/teamChoice.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = TeamChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamChoice);\nvar _c;\n$RefreshReg$(_c, \"TeamChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWFtQ2hvaWNlL3RlYW1DaG9pY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQjtBQUMyQjtBQUNUO0FBQ1I7QUFFcEMsSUFBTU0sVUFBVSxHQUFHLGdCQUE4QjtRQUEzQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGNBQWMsU0FBZEEsY0FBYztJQUN4QyxJQUFNQyxLQUFJLEdBQUdKLHVEQUFVLENBQUMsU0FBQ0ksSUFBSTtlQUFLQSxJQUFJLENBQUNFLElBQUksS0FBS0osSUFBSTtLQUFBLENBQUM7SUFDckQscUJBQ0U7a0JBQ0UsNEVBQUNMLGtEQUFJO1lBQ0hVLEVBQUUsRUFBQyxPQUFPO1lBQ1ZDLEVBQUUsRUFBQyxLQUFLO1lBQ1JDLEVBQUUsRUFBQyxNQUFNO1lBQ1RDLFlBQVksRUFBQyxNQUFNO1lBQ25CQyxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCQyxDQUFDLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRSxNQUFNO2FBQUU7O2dCQUVoQlQsS0FBSSxpQkFBRyw4REFBQ04sbURBQUs7b0JBQUNnQixFQUFFLEVBQUMsTUFBTTtvQkFBQ0YsQ0FBQyxFQUFDLE9BQU87b0JBQUNHLENBQUMsRUFBQyxLQUFLO29CQUFDQyxHQUFHLEVBQUVaLEtBQUksQ0FBQ1ksR0FBRzs7Ozs7eUJBQUksaUJBQUcsNklBQUs7OEJBQ3BFLDhEQUFDbkIsa0RBQUk7b0JBQUNvQixRQUFRLEVBQUUsQ0FBQzs4QkFDZiw0RUFBQ3JCLGtEQUFJO3dCQUNIc0IsUUFBUSxFQUFDLE9BQU87d0JBQ2hCQyxVQUFVLEVBQUMsS0FBSzt3QkFDaEJDLEtBQUssRUFBQyxTQUFTO3dCQUNmQyxhQUFhLEVBQUMsS0FBSztrQ0FFbEJuQixJQUFJOzs7Ozs2QkFDQTs7Ozs7eUJBQ0Y7OEJBQ1AsOERBQUNMLGtEQUFJOzhCQUNGSyxJQUFJLEtBQUssU0FBUyxpQkFDakIsOERBQUNILHNEQUFRO3dCQUNQdUIsSUFBSSxFQUFDLElBQUk7d0JBQ1RDLFVBQVU7d0JBQ1ZILEtBQUssRUFBQyxTQUFTO3dCQUNmSSxRQUFRLEVBQUU7bUNBQU1yQixjQUFjLENBQUNELElBQUksQ0FBQzt5QkFBQTs7Ozs7NkJBQ3BDLGlCQUVGLDhEQUFDSCxzREFBUTt3QkFDUHVCLElBQUksRUFBQyxJQUFJO3dCQUNURixLQUFLLEVBQUMsU0FBUzt3QkFDZkksUUFBUSxFQUFFO21DQUFNckIsY0FBYyxDQUFDRCxJQUFJLENBQUM7eUJBQUE7Ozs7OzZCQUNwQzs7Ozs7eUJBRUM7Ozs7OztpQkFDRjtxQkFDTixDQUNIO0NBQ0g7QUExQ0tELEtBQUFBLFVBQVU7QUE0Q2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVhbUNob2ljZS90ZWFtQ2hvaWNlLmpzP2Q0ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dCwgRmxleCwgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGljb25zIGZyb20gXCIuLi8uLi9saWIvaWNvbnNcIjtcblxuY29uc3QgVGVhbUNob2ljZSA9ICh7IHRlYW0sIGhhbmRsZUNoZWNrYm94IH0pID0+IHtcbiAgY29uc3QgaWNvbiA9IGljb25zLmZpbmQoKGljb24pID0+IGljb24uY2x1YiA9PT0gdGVhbSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4XG4gICAgICAgIG15PVwiMS41ZW1cIlxuICAgICAgICBweD1cIjFlbVwiXG4gICAgICAgIHB5PVwiLjJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjI1cHhcIlxuICAgICAgICBib3JkZXI9e1wic29saWQgMXB4ICNlMWUxZTFcIn1cbiAgICAgICAgdz17eyBtZDogXCI0MGVtXCIgfX1cbiAgICAgID5cbiAgICAgICAge2ljb24gPyA8SW1hZ2UgbXI9XCIuNWVtXCIgdz1cIjEuMWVtXCIgaD1cIjEuNVwiIHNyYz17aWNvbi5zcmN9IC8+IDogPD48Lz59XG4gICAgICAgIDxGbGV4IGZsZXhHcm93PXsxfT5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgZm9udFNpemU9XCIxLjRlbVwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICAgIGNvbG9yPVwiIzMzMzIzMlwiXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiMXB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGVhbX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAge3RlYW0gIT09IFwiQXJzZW5hbFwiID8gKFxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWRcbiAgICAgICAgICAgICAgY29sb3I9XCIjNTNEQjY4XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94KHRlYW0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzUzREI2OFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja2JveCh0ZWFtKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbUNob2ljZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHQiLCJGbGV4IiwiSW1hZ2UiLCJDaGVja2JveCIsImljb25zIiwiVGVhbUNob2ljZSIsInRlYW0iLCJoYW5kbGVDaGVja2JveCIsImljb24iLCJmaW5kIiwiY2x1YiIsIm15IiwicHgiLCJweSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInciLCJtZCIsIm1yIiwiaCIsInNyYyIsImZsZXhHcm93IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwic2l6ZSIsImlzRGlzYWJsZWQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TeamChoice/teamChoice.js\n");

/***/ })

});