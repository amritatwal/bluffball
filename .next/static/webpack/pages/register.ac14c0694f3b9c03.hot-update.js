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

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _src_components_Text_Header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Text/Header/header */ \"./src/components/Text/Header/header.js\");\n/* harmony import */ var _src_components_TeamChoice_teamChoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/TeamChoice/teamChoice */ \"./src/components/TeamChoice/teamChoice.js\");\n/* harmony import */ var _src_lib_teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/teams */ \"./src/lib/teams.js\");\n/* harmony import */ var _src_components_Buttons_PrimaryButton_primaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Buttons/PrimaryButton/primaryButton */ \"./src/components/Buttons/PrimaryButton/primaryButton.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Register() {\n    var _this = this;\n    var handleCheckbox = function handleCheckbox(choice) {\n        setOptions(_toConsumableArray(options).concat([\n            choice\n        ]));\n    };\n    var setAllOptions = function setAllOptions() {\n        console.log(\"Skip has been clicked on\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), options = ref[0], setOptions = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            my: \"2em\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n                    status: \"info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AlertIcon, {}, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        \"Chakra is going live on August 30th. Get ready!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    method: \"post\",\n                    action: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            color: \"lightgrey\",\n                            fontSize: \".9em\",\n                            fontWeight: \"600\",\n                            letterSpacing: \"2px\",\n                            my: \"1em\",\n                            textTransform: \"uppercase\",\n                            children: \"1 of 4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Text_Header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                fontSize: \"2em\",\n                                fontWeight: \"800\",\n                                colour: \"#53DB68\",\n                                text: \"Choose your teams\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.RadioGroup, {\n                            children: _src_lib_teams__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function(team, index) {\n                                return team !== \"Arsenal\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TeamChoice_teamChoice__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    team: team,\n                                    handleCheckbox: handleCheckbox\n                                }, index, false, {\n                                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Badge, {\n                                            children: \"BETA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TeamChoice_teamChoice__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            team: team,\n                                            handleCheckbox: handleCheckbox\n                                        }, index, false, {\n                                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    alignItems: \"center\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"center\",\n                    my: \"2em\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Buttons_PrimaryButton_primaryButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            text: \"Continue\",\n                            route: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                            color: \"lightgrey\",\n                            fontSize: \".9em\",\n                            fontWeight: \"600\",\n                            letterSpacing: \"2px\",\n                            my: \"1em\",\n                            textTransform: \"uppercase\",\n                            onClick: setAllOptions,\n                            children: \"Skip\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/register.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Register, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQ1JTLGFBQWEsRUFBQyxXQUFXOzRCQUN6QlMsT0FBTyxFQUFFeEIsYUFBYTtzQ0FDdkIsTUFFRDs7Ozs7Z0NBQU87Ozs7Ozt3QkFDSDs7Ozs7O2dCQUNEO3FCQUNOLENBQ0g7Q0FDSDtHQXRGdUJMLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVGV4dCxcbiAgRmxleCxcbiAgQm94LFxuICBMaW5rLFxuICBCYWRnZSxcbiAgQWxlcnRJY29uLFxuICBBbGVydCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1RleHQvSGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IFRlYW1DaG9pY2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1RlYW1DaG9pY2UvdGVhbUNob2ljZVwiO1xuaW1wb3J0IHRlYW1zIGZyb20gXCIuLi9zcmMvbGliL3RlYW1zXCI7XG5pbXBvcnQgeyBSYWRpb0dyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b25zL1ByaW1hcnlCdXR0b24vcHJpbWFyeUJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94KGNob2ljZSkge1xuICAgIHNldE9wdGlvbnMoWy4uLm9wdGlvbnMsIGNob2ljZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWxsT3B0aW9ucygpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNraXAgaGFzIGJlZW4gY2xpY2tlZCBvblwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4XG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBteT1cIjJlbVwiXG4gICAgICA+XG4gICAgICAgIDxBbGVydCBzdGF0dXM9XCJpbmZvXCI+XG4gICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgIENoYWtyYSBpcyBnb2luZyBsaXZlIG9uIEF1Z3VzdCAzMHRoLiBHZXQgcmVhZHkhXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvXCI+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRncmV5XCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiLjllbVwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIycHhcIlxuICAgICAgICAgICAgbXk9XCIxZW1cIlxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMSBvZiA0XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMmVtXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjgwMFwiXG4gICAgICAgICAgICAgIGNvbG91cj1cIiM1M0RCNjhcIlxuICAgICAgICAgICAgICB0ZXh0PVwiQ2hvb3NlIHlvdXIgdGVhbXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICA8UmFkaW9Hcm91cD5cbiAgICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZWFtICE9PSBcIkFyc2VuYWxcIiA/IChcbiAgICAgICAgICAgICAgICA8VGVhbUNob2ljZVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHRlYW09e3RlYW19XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja2JveD17aGFuZGxlQ2hlY2tib3h9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEJhZGdlPkJFVEE8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPFRlYW1DaG9pY2VcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgdGVhbT17dGVhbX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3g9e2hhbmRsZUNoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBteT1cIjJlbVwiXG4gICAgICAgID5cbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0ZXh0PXtcIkNvbnRpbnVlXCJ9IHJvdXRlPXtcIi9cIn0gLz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgY29sb3I9XCJsaWdodGdyZXlcIlxuICAgICAgICAgICAgZm9udFNpemU9XCIuOWVtXCJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIjJweFwiXG4gICAgICAgICAgICBteT1cIjFlbVwiXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFsbE9wdGlvbnN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2tpcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRleHQiLCJGbGV4IiwiQm94IiwiTGluayIsIkJhZGdlIiwiQWxlcnRJY29uIiwiQWxlcnQiLCJIZWFkZXIiLCJUZWFtQ2hvaWNlIiwidGVhbXMiLCJSYWRpb0dyb3VwIiwiUHJpbWFyeUJ1dHRvbiIsIlJlZ2lzdGVyIiwiaGFuZGxlQ2hlY2tib3giLCJjaG9pY2UiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsInNldEFsbE9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm15Iiwic3RhdHVzIiwiZm9ybSIsIm1ldGhvZCIsImFjdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRUcmFuc2Zvcm0iLCJsZWdlbmQiLCJjb2xvdXIiLCJ0ZXh0IiwibWFwIiwidGVhbSIsImluZGV4IiwiZGlzcGxheSIsInJvdXRlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});