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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Carousel = function(param1) {\n    var phrases = param1.phrases;\n    var _this1 = _this;\n    var responsive = {\n        0: {\n            items: 1\n        },\n        568: {\n            items: 1\n        },\n        1024: {\n            items: 1\n        }\n    };\n    // <PhraseCard\n    //   key={phrases[0].phrase_id}\n    //   quote={phrases[0].phrase_desc}\n    //   club={phrases[0].phrase_club}\n    // />\n    var items = phrases.map(function(phrase) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[0].phrase_desc,\n            club: phrases[0].phrase_club\n        }, phrases[0].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, _this1);\n    });\n    var renderPrevButton = function(param) {\n        var isDisabled = param.isDisabled;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                opacity: isDisabled ? \"0.5\" : 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"b-refs-buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"50em\",\n                        height: \"auto\",\n                        src: \"https://svgshare.com/i/iM7.svg\",\n                        alt: \"previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this1);\n    };\n    var renderNextButton = function(param) {\n        var isDisabled = param.isDisabled;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                opacity: isDisabled ? \"0.5\" : 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"b-refs-buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"50em\",\n                        height: \"auto\",\n                        src: \"https://svgshare.com/i/iNM.svg\",\n                        alt: \"previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        h: \"100%\",\n        display: \"flex\",\n        mt: \"-5em\",\n        children: phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n            border: \"solid 1px blue\",\n            mouseTracking: true,\n            items: items,\n            responsive: responsive,\n            renderPrevButton: renderPrevButton,\n            renderNextButton: renderNextButton\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNLO0FBQ0c7QUFDVjtBQUNJO0FBRXJELElBQU1TLFFBQVEsR0FBRyxpQkFBaUI7UUFBZEMsT0FBTyxVQUFQQSxPQUFPOztJQUN6QixJQUFNQyxVQUFVLEdBQUc7QUFDakIsU0FBQyxFQUFFO1lBQUVDLEtBQUssRUFBRSxDQUFDO1NBQUU7QUFDZixXQUFHLEVBQUU7WUFBRUEsS0FBSyxFQUFFLENBQUM7U0FBRTtBQUNqQixZQUFJLEVBQUU7WUFBRUEsS0FBSyxFQUFFLENBQUM7U0FBRTtLQUNuQjtJQUVELGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxLQUFLO0lBQ0wsSUFBTUEsS0FBSyxHQUFHRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxNQUFNOzZCQUMvQiw4REFBQ1gsb0VBQVU7WUFFVFksS0FBSyxFQUFFTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNNLFdBQVc7WUFDN0JDLElBQUksRUFBRVAsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxXQUFXO1dBRnZCUixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNTLFNBQVM7Ozs7a0JBR3pCO0tBQ0gsQ0FBQztJQUVGLElBQU1DLGdCQUFnQixHQUFHLGdCQUFvQjtZQUFqQkMsVUFBVSxTQUFWQSxVQUFVO1FBQ3BDLHFCQUNFLDhEQUFDQyxNQUFJO1lBQUNDLEtBQUssRUFBRTtnQkFBRUMsT0FBTyxFQUFFSCxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUM7YUFBRTtzQkFDOUMsNEVBQUNJLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7MEJBQzdCLDRFQUFDQyxRQUFNOzhCQUNMLDRFQUFDQyxLQUFHO3dCQUNGQyxLQUFLLEVBQUMsTUFBTTt3QkFDWkMsTUFBTSxFQUFDLE1BQU07d0JBQ2JDLEdBQUcsRUFBRSxnQ0FBZ0M7d0JBQ3JDQyxHQUFHLEVBQUMsVUFBVTs7Ozs7OEJBQ2Q7Ozs7OzBCQUNLOzs7OztzQkFDTDs7Ozs7a0JBQ0QsQ0FDUDtLQUNIO0lBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsZ0JBQW9CO1lBQWpCWixVQUFVLFNBQVZBLFVBQVU7UUFDcEMscUJBQ0UsOERBQUNDLE1BQUk7WUFBQ0MsS0FBSyxFQUFFO2dCQUFFQyxPQUFPLEVBQUVILFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQzthQUFFO3NCQUM5Qyw0RUFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjswQkFDN0IsNEVBQUNDLFFBQU07OEJBQ0wsNEVBQUNDLEtBQUc7d0JBQ0ZDLEtBQUssRUFBQyxNQUFNO3dCQUNaQyxNQUFNLEVBQUMsTUFBTTt3QkFDYkMsR0FBRyxFQUFFLGdDQUFnQzt3QkFDckNDLEdBQUcsRUFBQyxVQUFVOzs7Ozs4QkFDZDs7Ozs7MEJBQ0s7Ozs7O3NCQUNMOzs7OztrQkFDRCxDQUNQO0tBQ0g7SUFFRCxxQkFDRSw4REFBQzFCLGlEQUFHO1FBQUM0QixDQUFDLEVBQUMsTUFBTTtRQUFDQyxPQUFPLEVBQUMsTUFBTTtRQUFDQyxFQUFFLEVBQUMsTUFBTTtrQkFDbkMxQixPQUFPLENBQUMyQixNQUFNLEdBQUcsQ0FBQyxpQkFDakIsOERBQUM3Qiw2REFBYTtZQUNaOEIsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QkMsYUFBYTtZQUNiM0IsS0FBSyxFQUFFQSxLQUFLO1lBQ1pELFVBQVUsRUFBRUEsVUFBVTtZQUN0QlMsZ0JBQWdCLEVBQUVBLGdCQUFnQjtZQUNsQ2EsZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7aUJBQ2xDLGlCQUVGLDZJQUFLOzs7OzthQUVILENBQ047Q0FDSDtBQXRFS3hCLEtBQUFBLFFBQVE7QUF3RWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcz9hN2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGhyYXNlQ2FyZCBmcm9tIFwiLi4vQ2FyZHMvUGhyYXNlQ2FyZC9QaHJhc2VDYXJkXCI7XG5pbXBvcnQgeyBUZXh0LCBGbGV4LCBCb3gsIFNwYWNlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyBwaHJhc2VzIH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAwOiB7IGl0ZW1zOiAxIH0sXG4gICAgNTY4OiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMSB9LFxuICB9O1xuXG4gIC8vIDxQaHJhc2VDYXJkXG4gIC8vICAga2V5PXtwaHJhc2VzWzBdLnBocmFzZV9pZH1cbiAgLy8gICBxdW90ZT17cGhyYXNlc1swXS5waHJhc2VfZGVzY31cbiAgLy8gICBjbHViPXtwaHJhc2VzWzBdLnBocmFzZV9jbHVifVxuICAvLyAvPlxuICBjb25zdCBpdGVtcyA9IHBocmFzZXMubWFwKChwaHJhc2UpID0+IChcbiAgICA8UGhyYXNlQ2FyZFxuICAgICAga2V5PXtwaHJhc2VzWzBdLnBocmFzZV9pZH1cbiAgICAgIHF1b3RlPXtwaHJhc2VzWzBdLnBocmFzZV9kZXNjfVxuICAgICAgY2x1Yj17cGhyYXNlc1swXS5waHJhc2VfY2x1Yn1cbiAgICAvPlxuICApKTtcblxuICBjb25zdCByZW5kZXJQcmV2QnV0dG9uID0gKHsgaXNEaXNhYmxlZCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IGlzRGlzYWJsZWQgPyBcIjAuNVwiIDogMSB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLXJlZnMtYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTBlbVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgICBzcmM9e1wiaHR0cHM6Ly9zdmdzaGFyZS5jb20vaS9pTTcuc3ZnXCJ9XG4gICAgICAgICAgICAgIGFsdD1cInByZXZpb3VzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTmV4dEJ1dHRvbiA9ICh7IGlzRGlzYWJsZWQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBzdHlsZT17eyBvcGFjaXR5OiBpc0Rpc2FibGVkID8gXCIwLjVcIiA6IDEgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1yZWZzLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICB3aWR0aD1cIjUwZW1cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgc3JjPXtcImh0dHBzOi8vc3Znc2hhcmUuY29tL2kvaU5NLnN2Z1wifVxuICAgICAgICAgICAgICBhbHQ9XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBoPVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIgbXQ9XCItNWVtXCI+XG4gICAgICB7cGhyYXNlcy5sZW5ndGggPiAxID8gKFxuICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgIGJvcmRlcj17XCJzb2xpZCAxcHggYmx1ZVwifVxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICByZW5kZXJQcmV2QnV0dG9uPXtyZW5kZXJQcmV2QnV0dG9ufVxuICAgICAgICAgIHJlbmRlck5leHRCdXR0b249e3JlbmRlck5leHRCdXR0b259XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQaHJhc2VDYXJkIiwiVGV4dCIsIkZsZXgiLCJCb3giLCJTcGFjZXIiLCJBbGljZUNhcm91c2VsIiwiQ2Fyb3VzZWwiLCJwaHJhc2VzIiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwibWFwIiwicGhyYXNlIiwicXVvdGUiLCJwaHJhc2VfZGVzYyIsImNsdWIiLCJwaHJhc2VfY2x1YiIsInBocmFzZV9pZCIsInJlbmRlclByZXZCdXR0b24iLCJpc0Rpc2FibGVkIiwic3BhbiIsInN0eWxlIiwib3BhY2l0eSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwicmVuZGVyTmV4dEJ1dHRvbiIsImgiLCJkaXNwbGF5IiwibXQiLCJsZW5ndGgiLCJib3JkZXIiLCJtb3VzZVRyYWNraW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Carousel/carousel.js\n");

/***/ })

});