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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Carousel = function(param1) {\n    var phrases = param1.phrases;\n    var _this1 = _this;\n    var responsive = {\n        0: {\n            items: 1\n        },\n        568: {\n            items: 1\n        },\n        1024: {\n            items: 1\n        }\n    };\n    var items = phrases.map(function(phrase) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrase.phrase_desc,\n            club: phrase.phrase_club\n        }, phrase.phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, _this1);\n    });\n    // const onSlideChanged = (e) => {\n    //   updateProgressBar(e.item);\n    // };\n    var renderPrevButton = function(param) {\n        var isDisabled = param.isDisabled;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                opacity: isDisabled ? \"0.3\" : 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"b-refs-buttons\",\n                mt: {\n                    base: \"1em\",\n                    md: \"2em\"\n                },\n                mx: \"2em\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"50em\",\n                        height: \"auto\",\n                        src: \"https://svgshare.com/i/iM7.svg\",\n                        alt: \"previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this1);\n    };\n    var renderNextButton = function(param) {\n        var isDisabled = param.isDisabled;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                opacity: isDisabled ? \"0.3\" : 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"b-refs-buttons\",\n                mt: {\n                    base: \"1em\",\n                    md: \"2em\"\n                },\n                mx: \"2em\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"50em\",\n                        height: \"auto\",\n                        src: \"https://svgshare.com/i/iNM.svg\",\n                        alt: \"next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        w: \"100%\",\n        h: \"100%\",\n        display: \"flex\",\n        mt: {\n            base: \"-10em\",\n            md: \"-15em\"\n        },\n        children: phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n            mouseTracking: true,\n            infinite: false,\n            items: items,\n            responsive: responsive,\n            disableDotsControls: true,\n            disableSlideInfo: true,\n            renderPrevButton: renderPrevButton,\n            renderNextButton: renderNextButton\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUM4QjtBQUNqQjtBQUNVO0FBQ0k7QUFFckQsSUFBTUksUUFBUSxHQUFHLGlCQUFpQjtRQUFkQyxPQUFPLFVBQVBBLE9BQU87O0lBQ3pCLElBQU1DLFVBQVUsR0FBRztBQUNqQixTQUFDLEVBQUU7WUFBRUMsS0FBSyxFQUFFLENBQUM7U0FBRTtBQUNmLFdBQUcsRUFBRTtZQUFFQSxLQUFLLEVBQUUsQ0FBQztTQUFFO0FBQ2pCLFlBQUksRUFBRTtZQUFFQSxLQUFLLEVBQUUsQ0FBQztTQUFFO0tBQ25CO0lBRUQsSUFBTUEsS0FBSyxHQUFHRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxNQUFNOzZCQUMvQiw4REFBQ1Isb0VBQVU7WUFFVFMsS0FBSyxFQUFFRCxNQUFNLENBQUNFLFdBQVc7WUFDekJDLElBQUksRUFBRUgsTUFBTSxDQUFDSSxXQUFXO1dBRm5CSixNQUFNLENBQUNLLFNBQVM7Ozs7a0JBR3JCO0tBQ0gsQ0FBQztJQUVGLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsS0FBSztJQUVMLElBQU1DLGdCQUFnQixHQUFHLGdCQUFvQjtZQUFqQkMsVUFBVSxTQUFWQSxVQUFVO1FBQ3BDLHFCQUNFLDhEQUFDQyxNQUFJO1lBQUNDLEtBQUssRUFBRTtnQkFBRUMsT0FBTyxFQUFFSCxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUM7YUFBRTtzQkFDOUMsNEVBQUNkLGlEQUFHO2dCQUNGa0IsU0FBUyxFQUFDLGdCQUFnQjtnQkFDMUJDLEVBQUUsRUFBRTtvQkFBRUMsSUFBSSxFQUFFLEtBQUs7b0JBQUVDLEVBQUUsRUFBRSxLQUFLO2lCQUFFO2dCQUM5QkMsRUFBRSxFQUFDLEtBQUs7MEJBRVIsNEVBQUNDLFFBQU07OEJBQ0wsNEVBQUNDLEtBQUc7d0JBQ0ZDLEtBQUssRUFBQyxNQUFNO3dCQUNaQyxNQUFNLEVBQUMsTUFBTTt3QkFDYkMsR0FBRyxFQUFFLGdDQUFnQzt3QkFDckNDLEdBQUcsRUFBQyxVQUFVOzs7Ozs4QkFDZDs7Ozs7MEJBQ0s7Ozs7O3NCQUNMOzs7OztrQkFDRCxDQUNQO0tBQ0g7SUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxnQkFBb0I7WUFBakJmLFVBQVUsU0FBVkEsVUFBVTtRQUNwQyxxQkFDRSw4REFBQ0MsTUFBSTtZQUFDQyxLQUFLLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRUgsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDO2FBQUU7c0JBQzlDLDRFQUFDZCxpREFBRztnQkFDRmtCLFNBQVMsRUFBQyxnQkFBZ0I7Z0JBQzFCQyxFQUFFLEVBQUU7b0JBQUVDLElBQUksRUFBRSxLQUFLO29CQUFFQyxFQUFFLEVBQUUsS0FBSztpQkFBRTtnQkFDOUJDLEVBQUUsRUFBQyxLQUFLOzBCQUVSLDRFQUFDQyxRQUFNOzhCQUNMLDRFQUFDQyxLQUFHO3dCQUNGQyxLQUFLLEVBQUMsTUFBTTt3QkFDWkMsTUFBTSxFQUFDLE1BQU07d0JBQ2JDLEdBQUcsRUFBRSxnQ0FBZ0M7d0JBQ3JDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7OEJBQ1Y7Ozs7OzBCQUNLOzs7OztzQkFDTDs7Ozs7a0JBQ0QsQ0FDUDtLQUNIO0lBRUQscUJBQ0UsOERBQUM1QixpREFBRztRQUFDOEIsQ0FBQyxFQUFDLE1BQU07UUFBQ0MsQ0FBQyxFQUFDLE1BQU07UUFBQ0MsT0FBTyxFQUFDLE1BQU07UUFBQ2IsRUFBRSxFQUFFO1lBQUVDLElBQUksRUFBRSxPQUFPO1lBQUVDLEVBQUUsRUFBRSxPQUFPO1NBQUU7a0JBQ3JFbEIsT0FBTyxDQUFDOEIsTUFBTSxHQUFHLENBQUMsaUJBQ2pCLDhEQUFDaEMsNkRBQWE7WUFDWmlDLGFBQWE7WUFDYkMsUUFBUSxFQUFFLEtBQUs7WUFDZjlCLEtBQUssRUFBRUEsS0FBSztZQUNaRCxVQUFVLEVBQUVBLFVBQVU7WUFDdEJnQyxtQkFBbUI7WUFDbkJDLGdCQUFnQixFQUFFLElBQUk7WUFDdEJ4QixnQkFBZ0IsRUFBRUEsZ0JBQWdCO1lBQ2xDZ0IsZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7aUJBRWxDLGlCQUVGLDZJQUFLOzs7OzthQUVILENBQ047Q0FDSDtBQWhGSzNCLEtBQUFBLFFBQVE7QUFrRmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcz9hN2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaHJhc2VDYXJkIGZyb20gXCIuLi9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmRcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyBwaHJhc2VzIH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAwOiB7IGl0ZW1zOiAxIH0sXG4gICAgNTY4OiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMSB9LFxuICB9O1xuXG4gIGNvbnN0IGl0ZW1zID0gcGhyYXNlcy5tYXAoKHBocmFzZSkgPT4gKFxuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZS5waHJhc2VfaWR9XG4gICAgICBxdW90ZT17cGhyYXNlLnBocmFzZV9kZXNjfVxuICAgICAgY2x1Yj17cGhyYXNlLnBocmFzZV9jbHVifVxuICAgIC8+XG4gICkpO1xuXG4gIC8vIGNvbnN0IG9uU2xpZGVDaGFuZ2VkID0gKGUpID0+IHtcbiAgLy8gICB1cGRhdGVQcm9ncmVzc0JhcihlLml0ZW0pO1xuICAvLyB9O1xuXG4gIGNvbnN0IHJlbmRlclByZXZCdXR0b24gPSAoeyBpc0Rpc2FibGVkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gc3R5bGU9e3sgb3BhY2l0eTogaXNEaXNhYmxlZCA/IFwiMC4zXCIgOiAxIH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYi1yZWZzLWJ1dHRvbnNcIlxuICAgICAgICAgIG10PXt7IGJhc2U6IFwiMWVtXCIsIG1kOiBcIjJlbVwiIH19XG4gICAgICAgICAgbXg9XCIyZW1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgd2lkdGg9XCI1MGVtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHNyYz17XCJodHRwczovL3N2Z3NoYXJlLmNvbS9pL2lNNy5zdmdcIn1cbiAgICAgICAgICAgICAgYWx0PVwicHJldmlvdXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJOZXh0QnV0dG9uID0gKHsgaXNEaXNhYmxlZCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IGlzRGlzYWJsZWQgPyBcIjAuM1wiIDogMSB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNsYXNzTmFtZT1cImItcmVmcy1idXR0b25zXCJcbiAgICAgICAgICBtdD17eyBiYXNlOiBcIjFlbVwiLCBtZDogXCIyZW1cIiB9fVxuICAgICAgICAgIG14PVwiMmVtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTBlbVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgICBzcmM9e1wiaHR0cHM6Ly9zdmdzaGFyZS5jb20vaS9pTk0uc3ZnXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIm5leHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggdz1cIjEwMCVcIiBoPVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIgbXQ9e3sgYmFzZTogXCItMTBlbVwiLCBtZDogXCItMTVlbVwiIH19PlxuICAgICAge3BocmFzZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICBtb3VzZVRyYWNraW5nXG4gICAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgIGRpc2FibGVEb3RzQ29udHJvbHNcbiAgICAgICAgICBkaXNhYmxlU2xpZGVJbmZvPXt0cnVlfVxuICAgICAgICAgIHJlbmRlclByZXZCdXR0b249e3JlbmRlclByZXZCdXR0b259XG4gICAgICAgICAgcmVuZGVyTmV4dEJ1dHRvbj17cmVuZGVyTmV4dEJ1dHRvbn1cbiAgICAgICAgICAvLyBvblNsaWRlQ2hhbmdlZD17b25TbGlkZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGhyYXNlQ2FyZCIsIkJveCIsIkFsaWNlQ2Fyb3VzZWwiLCJDYXJvdXNlbCIsInBocmFzZXMiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJtYXAiLCJwaHJhc2UiLCJxdW90ZSIsInBocmFzZV9kZXNjIiwiY2x1YiIsInBocmFzZV9jbHViIiwicGhyYXNlX2lkIiwicmVuZGVyUHJldkJ1dHRvbiIsImlzRGlzYWJsZWQiLCJzcGFuIiwic3R5bGUiLCJvcGFjaXR5IiwiY2xhc3NOYW1lIiwibXQiLCJiYXNlIiwibWQiLCJteCIsImJ1dHRvbiIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwicmVuZGVyTmV4dEJ1dHRvbiIsInciLCJoIiwiZGlzcGxheSIsImxlbmd0aCIsIm1vdXNlVHJhY2tpbmciLCJpbmZpbml0ZSIsImRpc2FibGVEb3RzQ29udHJvbHMiLCJkaXNhYmxlU2xpZGVJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Carousel/carousel.js\n");

/***/ })

});