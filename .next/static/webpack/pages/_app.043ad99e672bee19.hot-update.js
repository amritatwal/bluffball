"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/UserNavigation/userNavigation.js":
/*!*********************************************************!*\
  !*** ./src/components/UserNavigation/userNavigation.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UserIcon_userIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserIcon/userIcon */ \"./src/components/UserIcon/userIcon.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UserNavigation = function() {\n    _s();\n    var user = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)().user;\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n        children: !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    mr: \"1em\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        color: \"#403f3f\",\n                        fontSize: \".8em\",\n                        fontWeight: \"600\",\n                        my: \"1em\",\n                        textTransform: \"uppercase\",\n                        children: \"Have an account?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/api/auth/login\",\n                        textDecoration: \"none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            fontSize: \".8em\",\n                            bg: \"none\",\n                            _hover: \"none\",\n                            _active: \"none\",\n                            color: \"#403f3f\",\n                            borderRadius: \"25px\",\n                            border: \"solid 2px #53DB68\",\n                            letterSpacing: \"1px\",\n                            textTransform: \"uppercase\",\n                            children: \"Sign in\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {\n                    \"aria-label\": \"Options\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        alignItems: \"center\",\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            mx: \"1em\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserIcon_userIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                src: user.picture,\n                                alt: user.name\n                            }, void 0, false, {\n                                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuList, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                            color: \"#B0B0B0\",\n                            fontSize: \".8em\",\n                            fontWeight: \"700\",\n                            letterSpacing: \".4px\",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                            color: \"#B0B0B0\",\n                            fontSize: \".8em\",\n                            fontWeight: \"700\",\n                            letterSpacing: \".4px\",\n                            children: \"User Settings\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuDivider, {}, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                            color: \"#B0B0B0\",\n                            fontSize: \".8em\",\n                            fontWeight: \"400\",\n                            letterSpacing: \".4px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/api/auth/logout\",\n                                textDecoration: \"none\",\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/UserNavigation/userNavigation.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserNavigation, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = UserNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserNavigation);\nvar _c;\n$RefreshReg$(_c, \"UserNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyTmF2aWdhdGlvbi91c2VyTmF2aWdhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBV0E7QUFDb0I7QUFDakI7QUFDZTs7QUFFNUMsSUFBTWEsY0FBYyxHQUFHLFdBQU07O0lBQzNCLElBQU0sSUFBTSxHQUFLSCw0REFBTyxFQUFFLENBQWxCSSxJQUFJO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUNsQixxQkFDRSw4REFBQ1Ysa0RBQUk7a0JBQ0YsQ0FBQ1UsSUFBSSxpQkFDSiw4REFBQ1Ysa0RBQUk7WUFBQ2EsT0FBTyxFQUFDLE1BQU07WUFBQ0MsYUFBYSxFQUFDLEtBQUs7WUFBQ0MsVUFBVSxFQUFDLFFBQVE7OzhCQUMxRCw4REFBQ2hCLGlEQUFHO29CQUFDaUIsRUFBRSxFQUFDLEtBQUs7OEJBQ1gsNEVBQUNuQixrREFBSTt3QkFDSG9CLEtBQUssRUFBQyxTQUFTO3dCQUNmQyxRQUFRLEVBQUMsTUFBTTt3QkFDZkMsVUFBVSxFQUFDLEtBQUs7d0JBQ2hCQyxFQUFFLEVBQUMsS0FBSzt3QkFDUkMsYUFBYSxFQUFDLFdBQVc7a0NBQzFCLGtCQUVEOzs7Ozs2QkFBTzs7Ozs7eUJBQ0g7OEJBQ04sOERBQUN0QixpREFBRzs4QkFDRiw0RUFBQ1Esa0RBQUk7d0JBQUNlLElBQUksRUFBRSxpQkFBaUI7d0JBQUVDLGNBQWMsRUFBQyxNQUFNO2tDQUNsRCw0RUFBQ3pCLG9EQUFNOzRCQUNMb0IsUUFBUSxFQUFDLE1BQU07NEJBQ2ZNLEVBQUUsRUFBQyxNQUFNOzRCQUNUQyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsT0FBTyxFQUFFLE1BQU07NEJBQ2ZULEtBQUssRUFBQyxTQUFTOzRCQUNmVSxZQUFZLEVBQUMsTUFBTTs0QkFDbkJDLE1BQU0sRUFBRSxtQkFBbUI7NEJBQzNCQyxhQUFhLEVBQUMsS0FBSzs0QkFDbkJSLGFBQWEsRUFBQyxXQUFXO3NDQUMxQixTQUVEOzs7OztpQ0FBUzs7Ozs7NkJBQ0o7Ozs7O3lCQUNIOzs7Ozs7aUJBQ0QsaUJBRVAsOERBQUNsQixrREFBSTs7OEJBQ0gsOERBQUNDLHdEQUFVO29CQUFDMEIsWUFBVSxFQUFDLFNBQVM7OEJBQzlCLDRFQUFDOUIsa0RBQUk7d0JBQUNlLFVBQVUsRUFBQyxRQUFRO3dCQUFDRixPQUFPLEVBQUMsTUFBTTt3QkFBQ0MsYUFBYSxFQUFDLEtBQUs7a0NBQzFELDRFQUFDZixpREFBRzs0QkFBQ2dDLEVBQUUsRUFBQyxLQUFLO3NDQUNYLDRFQUFDdkIsMERBQVE7Z0NBQUN3QixHQUFHLEVBQUV0QixJQUFJLENBQUN1QixPQUFPO2dDQUFFQyxHQUFHLEVBQUV4QixJQUFJLENBQUN5QixJQUFJOzs7OztxQ0FBSTs7Ozs7aUNBQzNDOzs7Ozs2QkFDRDs7Ozs7eUJBQ0k7OEJBQ2IsOERBQUNsQyxzREFBUTs7c0NBQ1AsOERBQUNDLHNEQUFROzRCQUNQZSxLQUFLLEVBQUMsU0FBUzs0QkFDZkMsUUFBUSxFQUFFLE1BQU07NEJBQ2hCQyxVQUFVLEVBQUMsS0FBSzs0QkFDaEJVLGFBQWEsRUFBQyxNQUFNO3NDQUNyQixTQUVEOzs7OztpQ0FBVztzQ0FDWCw4REFBQzNCLHNEQUFROzRCQUNQZSxLQUFLLEVBQUMsU0FBUzs0QkFDZkMsUUFBUSxFQUFFLE1BQU07NEJBQ2hCQyxVQUFVLEVBQUMsS0FBSzs0QkFDaEJVLGFBQWEsRUFBQyxNQUFNO3NDQUNyQixlQUVEOzs7OztpQ0FBVztzQ0FDWCw4REFBQ3hCLHlEQUFXOzs7O2lDQUFHO3NDQUNmLDhEQUFDSCxzREFBUTs0QkFDUGUsS0FBSyxFQUFDLFNBQVM7NEJBQ2ZDLFFBQVEsRUFBRSxNQUFNOzRCQUNoQkMsVUFBVSxFQUFDLEtBQUs7NEJBQ2hCVSxhQUFhLEVBQUMsTUFBTTtzQ0FFcEIsNEVBQUN0QixrREFBSTtnQ0FBQ2UsSUFBSSxFQUFFLGtCQUFrQjtnQ0FBRUMsY0FBYyxFQUFDLE1BQU07MENBQUMsVUFFdEQ7Ozs7O3FDQUFPOzs7OztpQ0FDRTs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ047Ozs7O2FBRUosQ0FDUDtDQUNIO0dBOUVLZCxjQUFjOztRQUNESCx3REFBTzs7O0FBRHBCRyxLQUFBQSxjQUFjO0FBZ0ZwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VzZXJOYXZpZ2F0aW9uL3VzZXJOYXZpZ2F0aW9uLmpzP2I2ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVGV4dCxcbiAgQnV0dG9uLFxuICBCb3gsXG4gIEZsZXgsXG4gIE1lbnVMaXN0LFxuICBNZW51SXRlbSxcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudURpdmlkZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBVc2VySWNvbiBmcm9tIFwiLi4vVXNlckljb24vdXNlckljb25cIjtcblxuY29uc3QgVXNlck5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleD5cbiAgICAgIHshdXNlciA/IChcbiAgICAgICAgPEZsZXggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxCb3ggbXI9XCIxZW1cIj5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIGNvbG9yPVwiIzQwM2YzZlwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiLjhlbVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgICAgICBteT1cIjFlbVwiXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2FwaS9hdXRoL2xvZ2luXCJ9IHRleHREZWNvcmF0aW9uPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCIuOGVtXCJcbiAgICAgICAgICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17XCJub25lXCJ9XG4gICAgICAgICAgICAgICAgX2FjdGl2ZT17XCJub25lXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9XCIjNDAzZjNmXCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICBib3JkZXI9e1wic29saWQgMnB4ICM1M0RCNjhcIn1cbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiMXB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNZW51PlxuICAgICAgICAgIDxNZW51QnV0dG9uIGFyaWEtbGFiZWw9XCJPcHRpb25zXCI+XG4gICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgIDxCb3ggbXg9XCIxZW1cIj5cbiAgICAgICAgICAgICAgICA8VXNlckljb24gc3JjPXt1c2VyLnBpY3R1cmV9IGFsdD17dXNlci5uYW1lfSAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgPE1lbnVMaXN0PlxuICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgIGNvbG9yPVwiI0IwQjBCMFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPXtcIi44ZW1cIn1cbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIuNHB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICBjb2xvcj1cIiNCMEIwQjBcIlxuICAgICAgICAgICAgICBmb250U2l6ZT17XCIuOGVtXCJ9XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiLjRweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFVzZXIgU2V0dGluZ3NcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICBjb2xvcj1cIiNCMEIwQjBcIlxuICAgICAgICAgICAgICBmb250U2l6ZT17XCIuOGVtXCJ9XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI0MDBcIlxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiLjRweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2FwaS9hdXRoL2xvZ291dFwifSB0ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgIDwvTWVudT5cbiAgICAgICl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiQnV0dG9uIiwiQm94IiwiRmxleCIsIk1lbnVMaXN0IiwiTWVudUl0ZW0iLCJNZW51IiwiTWVudUJ1dHRvbiIsIk1lbnVEaXZpZGVyIiwidXNlVXNlciIsIkxpbmsiLCJVc2VySWNvbiIsIlVzZXJOYXZpZ2F0aW9uIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibXkiLCJ0ZXh0VHJhbnNmb3JtIiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiYmciLCJfaG92ZXIiLCJfYWN0aXZlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwibGV0dGVyU3BhY2luZyIsImFyaWEtbGFiZWwiLCJteCIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UserNavigation/userNavigation.js\n");

/***/ })

});