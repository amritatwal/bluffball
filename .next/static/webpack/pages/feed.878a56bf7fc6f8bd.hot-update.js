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

/***/ "./src/components/Carousel/carousel.js":
/*!*********************************************!*\
  !*** ./src/components/Carousel/carousel.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Carousel = function(param1) {\n    var phrases = param1.phrases;\n    var _this1 = _this;\n    var responsive = {\n        0: {\n            items: 1\n        },\n        568: {\n            items: 1\n        },\n        1024: {\n            items: 1\n        }\n    };\n    var items = phrases.map(function(phrase) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrase.phrase_desc,\n            club: phrase.phrase_club\n        }, phrase.phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, _this1);\n    });\n    var renderPrevButton = function(param) {\n        var isDisabled = param.isDisabled;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                opacity: isDisabled ? \"0.5\" : 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"b-refs-buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"50em\",\n                        height: \"auto\",\n                        src: \"https://svgshare.com/i/iM7.svg\",\n                        alt: \"previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this1);\n    };\n    var renderNextButton = function(param) {\n        var isDisabled = param.isDisabled;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                opacity: isDisabled ? \"0.5\" : 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"b-refs-buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"50em\",\n                        height: \"auto\",\n                        src: \"https://svgshare.com/i/iNM.svg\",\n                        alt: \"previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        h: \"100%\",\n        display: \"flex\",\n        mt: \"-5em\",\n        children: phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n            border: \"solid 1px blue\",\n            mouseTracking: true,\n            items: items,\n            responsive: responsive,\n            renderPrevButton: renderPrevButton,\n            renderNextButton: renderNextButton\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNLO0FBQ0c7QUFDVjtBQUNJO0FBRXJELElBQU1TLFFBQVEsR0FBRyxpQkFBaUI7UUFBZEMsT0FBTyxVQUFQQSxPQUFPOztJQUN6QixJQUFNQyxVQUFVLEdBQUc7QUFDakIsU0FBQyxFQUFFO1lBQUVDLEtBQUssRUFBRSxDQUFDO1NBQUU7QUFDZixXQUFHLEVBQUU7WUFBRUEsS0FBSyxFQUFFLENBQUM7U0FBRTtBQUNqQixZQUFJLEVBQUU7WUFBRUEsS0FBSyxFQUFFLENBQUM7U0FBRTtLQUNuQjtJQUVELElBQU1BLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsTUFBTTs2QkFDL0IsOERBQUNYLG9FQUFVO1lBRVRZLEtBQUssRUFBRUQsTUFBTSxDQUFDRSxXQUFXO1lBQ3pCQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0ksV0FBVztXQUZuQkosTUFBTSxDQUFDSyxTQUFTOzs7O2tCQUdyQjtLQUNILENBQUM7SUFFRixJQUFNQyxnQkFBZ0IsR0FBRyxnQkFBb0I7WUFBakJDLFVBQVUsU0FBVkEsVUFBVTtRQUNwQyxxQkFDRSw4REFBQ0MsTUFBSTtZQUFDQyxLQUFLLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRUgsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDO2FBQUU7c0JBQzlDLDRFQUFDZixpREFBRztnQkFBQ21CLFNBQVMsRUFBQyxnQkFBZ0I7MEJBQzdCLDRFQUFDQyxRQUFNOzhCQUNMLDRFQUFDQyxLQUFHO3dCQUNGQyxLQUFLLEVBQUMsTUFBTTt3QkFDWkMsTUFBTSxFQUFDLE1BQU07d0JBQ2JDLEdBQUcsRUFBRSxnQ0FBZ0M7d0JBQ3JDQyxHQUFHLEVBQUMsVUFBVTs7Ozs7OEJBQ2Q7Ozs7OzBCQUNLOzs7OztzQkFDTDs7Ozs7a0JBQ0QsQ0FDUDtLQUNIO0lBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsZ0JBQW9CO1lBQWpCWCxVQUFVLFNBQVZBLFVBQVU7UUFDcEMscUJBQ0UsOERBQUNDLE1BQUk7WUFBQ0MsS0FBSyxFQUFFO2dCQUFFQyxPQUFPLEVBQUVILFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQzthQUFFO3NCQUM5Qyw0RUFBQ2YsaURBQUc7Z0JBQUNtQixTQUFTLEVBQUMsZ0JBQWdCOzBCQUM3Qiw0RUFBQ0MsUUFBTTs4QkFDTCw0RUFBQ0MsS0FBRzt3QkFDRkMsS0FBSyxFQUFDLE1BQU07d0JBQ1pDLE1BQU0sRUFBQyxNQUFNO3dCQUNiQyxHQUFHLEVBQUUsZ0NBQWdDO3dCQUNyQ0MsR0FBRyxFQUFDLFVBQVU7Ozs7OzhCQUNkOzs7OzswQkFDSzs7Ozs7c0JBQ0w7Ozs7O2tCQUNELENBQ1A7S0FDSDtJQUVELHFCQUNFLDhEQUFDekIsaURBQUc7UUFBQzJCLENBQUMsRUFBQyxNQUFNO1FBQUNDLE9BQU8sRUFBQyxNQUFNO1FBQUNDLEVBQUUsRUFBQyxNQUFNO2tCQUNuQ3pCLE9BQU8sQ0FBQzBCLE1BQU0sR0FBRyxDQUFDLGlCQUNqQiw4REFBQzVCLDZEQUFhO1lBQ1o2QixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCQyxhQUFhO1lBQ2IxQixLQUFLLEVBQUVBLEtBQUs7WUFDWkQsVUFBVSxFQUFFQSxVQUFVO1lBQ3RCUyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO1lBQ2xDWSxnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7OztpQkFDbEMsaUJBRUYsNklBQUs7Ozs7O2FBRUgsQ0FDTjtDQUNIO0FBakVLdkIsS0FBQUEsUUFBUTtBQW1FZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsL2Nhcm91c2VsLmpzP2E3YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaHJhc2VDYXJkIGZyb20gXCIuLi9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmRcIjtcbmltcG9ydCB7IFRleHQsIEZsZXgsIEJveCwgU3BhY2VyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzc1wiO1xuXG5jb25zdCBDYXJvdXNlbCA9ICh7IHBocmFzZXMgfSkgPT4ge1xuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIDA6IHsgaXRlbXM6IDEgfSxcbiAgICA1Njg6IHsgaXRlbXM6IDEgfSxcbiAgICAxMDI0OiB7IGl0ZW1zOiAxIH0sXG4gIH07XG5cbiAgY29uc3QgaXRlbXMgPSBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiAoXG4gICAgPFBocmFzZUNhcmRcbiAgICAgIGtleT17cGhyYXNlLnBocmFzZV9pZH1cbiAgICAgIHF1b3RlPXtwaHJhc2UucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2UucGhyYXNlX2NsdWJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgY29uc3QgcmVuZGVyUHJldkJ1dHRvbiA9ICh7IGlzRGlzYWJsZWQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBzdHlsZT17eyBvcGFjaXR5OiBpc0Rpc2FibGVkID8gXCIwLjVcIiA6IDEgfX0+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYi1yZWZzLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICB3aWR0aD1cIjUwZW1cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgc3JjPXtcImh0dHBzOi8vc3Znc2hhcmUuY29tL2kvaU03LnN2Z1wifVxuICAgICAgICAgICAgICBhbHQ9XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck5leHRCdXR0b24gPSAoeyBpc0Rpc2FibGVkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gc3R5bGU9e3sgb3BhY2l0eTogaXNEaXNhYmxlZCA/IFwiMC41XCIgOiAxIH19PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImItcmVmcy1idXR0b25zXCI+XG4gICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgd2lkdGg9XCI1MGVtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHNyYz17XCJodHRwczovL3N2Z3NoYXJlLmNvbS9pL2lOTS5zdmdcIn1cbiAgICAgICAgICAgICAgYWx0PVwicHJldmlvdXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggaD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIG10PVwiLTVlbVwiPlxuICAgICAge3BocmFzZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICBib3JkZXI9e1wic29saWQgMXB4IGJsdWVcIn1cbiAgICAgICAgICBtb3VzZVRyYWNraW5nXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgcmVuZGVyUHJldkJ1dHRvbj17cmVuZGVyUHJldkJ1dHRvbn1cbiAgICAgICAgICByZW5kZXJOZXh0QnV0dG9uPXtyZW5kZXJOZXh0QnV0dG9ufVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGhyYXNlQ2FyZCIsIlRleHQiLCJGbGV4IiwiQm94IiwiU3BhY2VyIiwiQWxpY2VDYXJvdXNlbCIsIkNhcm91c2VsIiwicGhyYXNlcyIsInJlc3BvbnNpdmUiLCJpdGVtcyIsIm1hcCIsInBocmFzZSIsInF1b3RlIiwicGhyYXNlX2Rlc2MiLCJjbHViIiwicGhyYXNlX2NsdWIiLCJwaHJhc2VfaWQiLCJyZW5kZXJQcmV2QnV0dG9uIiwiaXNEaXNhYmxlZCIsInNwYW4iLCJzdHlsZSIsIm9wYWNpdHkiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsInJlbmRlck5leHRCdXR0b24iLCJoIiwiZGlzcGxheSIsIm10IiwibGVuZ3RoIiwiYm9yZGVyIiwibW91c2VUcmFja2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carousel/carousel.js\n");

/***/ })

});