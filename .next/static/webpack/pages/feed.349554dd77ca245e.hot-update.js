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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Carousel = function(param) {\n    var phrases = param.phrases;\n    var _this1 = _this;\n    var responsive = {\n        0: {\n            items: 1\n        },\n        568: {\n            items: 1\n        },\n        1024: {\n            items: 1\n        }\n    };\n    var items = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[0].phrase_desc,\n            club: phrases[0].phrase_club\n        }, phrases[0].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[1].phrase_desc,\n            club: phrases[1].phrase_club\n        }, phrases[1].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[1].phrase_desc,\n            club: phrases[1].phrase_club\n        }, phrases[1].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, _this), \n    ];\n    // const renderPrevButton = () => {\n    //   return (\n    //     <Box mt=\"-30em\" ml=\"27em\">\n    //       <img\n    //         width=\"50em\"\n    //         height=\"auto\"\n    //         src={\"https://svgshare.com/i/iM7.svg\"}\n    //         alt=\"previous\"\n    //       />\n    //     </Box>\n    //   );\n    // };\n    var renderNextButton = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            mt: \"-30em\",\n            ml: \"29em\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                width: \"50em\",\n                height: \"auto\",\n                src: \"https://svgshare.com/i/iNM.svg\",\n                alt: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        border: \"solid 1px blue\",\n        children: phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n            border: \"solid 1px blue\",\n            mouseTracking: true,\n            items: items,\n            responsive: responsive,\n            renderPrevButton: renderPrevButton,\n            renderNextButton: renderNextButton\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNLO0FBQ0c7QUFDVjtBQUNJO0FBRXJELElBQU1TLFFBQVEsR0FBRyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOztJQUN6QixJQUFNQyxVQUFVLEdBQUc7QUFDakIsU0FBQyxFQUFFO1lBQUVDLEtBQUssRUFBRSxDQUFDO1NBQUU7QUFDZixXQUFHLEVBQUU7WUFBRUEsS0FBSyxFQUFFLENBQUM7U0FBRTtBQUNqQixZQUFJLEVBQUU7WUFBRUEsS0FBSyxFQUFFLENBQUM7U0FBRTtLQUNuQjtJQUVELElBQU1BLEtBQUssR0FBRztzQkFDWiw4REFBQ1Qsb0VBQVU7WUFFVFUsS0FBSyxFQUFFSCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNJLFdBQVc7WUFDN0JDLElBQUksRUFBRUwsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTSxXQUFXO1dBRnZCTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNPLFNBQVM7Ozs7aUJBR3pCO3NCQUNGLDhEQUFDZCxvRUFBVTtZQUVUVSxLQUFLLEVBQUVILE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksV0FBVztZQUM3QkMsSUFBSSxFQUFFTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNNLFdBQVc7V0FGdkJOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sU0FBUzs7OztpQkFHekI7c0JBQ0YsOERBQUNkLG9FQUFVO1lBRVRVLEtBQUssRUFBRUgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxXQUFXO1lBQzdCQyxJQUFJLEVBQUVMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ00sV0FBVztXQUZ2Qk4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTyxTQUFTOzs7O2lCQUd6QjtLQUNIO0lBRUQsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLE9BQU87SUFDUCxLQUFLO0lBRUwsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QixxQkFDRSw4REFBQ1osaURBQUc7WUFBQ2EsRUFBRSxFQUFDLE9BQU87WUFBQ0MsRUFBRSxFQUFDLE1BQU07c0JBQ3ZCLDRFQUFDQyxLQUFHO2dCQUNGQyxLQUFLLEVBQUMsTUFBTTtnQkFDWkMsTUFBTSxFQUFDLE1BQU07Z0JBQ2JDLEdBQUcsRUFBRSxnQ0FBZ0M7Z0JBQ3JDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7c0JBQ1Y7Ozs7O2tCQUNFLENBQ047S0FDSDtJQUVELHFCQUNFLDhEQUFDbkIsaURBQUc7UUFBQ29CLE1BQU0sRUFBRSxnQkFBZ0I7a0JBQzFCaEIsT0FBTyxDQUFDaUIsTUFBTSxHQUFHLENBQUMsaUJBQ2pCLDhEQUFDbkIsNkRBQWE7WUFDWmtCLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEJFLGFBQWE7WUFDYmhCLEtBQUssRUFBRUEsS0FBSztZQUNaRCxVQUFVLEVBQUVBLFVBQVU7WUFDdEJrQixnQkFBZ0IsRUFBRUEsZ0JBQWdCO1lBQ2xDWCxnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7OztpQkFDbEMsaUJBRUYsNklBQUs7Ozs7O2FBRUgsQ0FDTjtDQUNIO0FBbkVLVCxLQUFBQSxRQUFRO0FBcUVkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvY2Fyb3VzZWwuanM/YTdhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBocmFzZUNhcmQgZnJvbSBcIi4uL0NhcmRzL1BocmFzZUNhcmQvUGhyYXNlQ2FyZFwiO1xuaW1wb3J0IHsgVGV4dCwgRmxleCwgQm94LCBTcGFjZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG5cbmNvbnN0IENhcm91c2VsID0gKHsgcGhyYXNlcyB9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgMDogeyBpdGVtczogMSB9LFxuICAgIDU2ODogeyBpdGVtczogMSB9LFxuICAgIDEwMjQ6IHsgaXRlbXM6IDEgfSxcbiAgfTtcblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICA8UGhyYXNlQ2FyZFxuICAgICAga2V5PXtwaHJhc2VzWzBdLnBocmFzZV9pZH1cbiAgICAgIHF1b3RlPXtwaHJhc2VzWzBdLnBocmFzZV9kZXNjfVxuICAgICAgY2x1Yj17cGhyYXNlc1swXS5waHJhc2VfY2x1Yn1cbiAgICAvPixcbiAgICA8UGhyYXNlQ2FyZFxuICAgICAga2V5PXtwaHJhc2VzWzFdLnBocmFzZV9pZH1cbiAgICAgIHF1b3RlPXtwaHJhc2VzWzFdLnBocmFzZV9kZXNjfVxuICAgICAgY2x1Yj17cGhyYXNlc1sxXS5waHJhc2VfY2x1Yn1cbiAgICAvPixcbiAgICA8UGhyYXNlQ2FyZFxuICAgICAga2V5PXtwaHJhc2VzWzFdLnBocmFzZV9pZH1cbiAgICAgIHF1b3RlPXtwaHJhc2VzWzFdLnBocmFzZV9kZXNjfVxuICAgICAgY2x1Yj17cGhyYXNlc1sxXS5waHJhc2VfY2x1Yn1cbiAgICAvPixcbiAgXTtcblxuICAvLyBjb25zdCByZW5kZXJQcmV2QnV0dG9uID0gKCkgPT4ge1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8Qm94IG10PVwiLTMwZW1cIiBtbD1cIjI3ZW1cIj5cbiAgLy8gICAgICAgPGltZ1xuICAvLyAgICAgICAgIHdpZHRoPVwiNTBlbVwiXG4gIC8vICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gIC8vICAgICAgICAgc3JjPXtcImh0dHBzOi8vc3Znc2hhcmUuY29tL2kvaU03LnN2Z1wifVxuICAvLyAgICAgICAgIGFsdD1cInByZXZpb3VzXCJcbiAgLy8gICAgICAgLz5cbiAgLy8gICAgIDwvQm94PlxuICAvLyAgICk7XG4gIC8vIH07XG5cbiAgY29uc3QgcmVuZGVyTmV4dEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBtdD1cIi0zMGVtXCIgbWw9XCIyOWVtXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICB3aWR0aD1cIjUwZW1cIlxuICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgIHNyYz17XCJodHRwczovL3N2Z3NoYXJlLmNvbS9pL2lOTS5zdmdcIn1cbiAgICAgICAgICBhbHQ9XCJuZXh0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGJvcmRlcj17XCJzb2xpZCAxcHggYmx1ZVwifT5cbiAgICAgIHtwaHJhc2VzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgYm9yZGVyPXtcInNvbGlkIDFweCBibHVlXCJ9XG4gICAgICAgICAgbW91c2VUcmFja2luZ1xuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgIHJlbmRlclByZXZCdXR0b249e3JlbmRlclByZXZCdXR0b259XG4gICAgICAgICAgcmVuZGVyTmV4dEJ1dHRvbj17cmVuZGVyTmV4dEJ1dHRvbn1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBocmFzZUNhcmQiLCJUZXh0IiwiRmxleCIsIkJveCIsIlNwYWNlciIsIkFsaWNlQ2Fyb3VzZWwiLCJDYXJvdXNlbCIsInBocmFzZXMiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJxdW90ZSIsInBocmFzZV9kZXNjIiwiY2x1YiIsInBocmFzZV9jbHViIiwicGhyYXNlX2lkIiwicmVuZGVyTmV4dEJ1dHRvbiIsIm10IiwibWwiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsImJvcmRlciIsImxlbmd0aCIsIm1vdXNlVHJhY2tpbmciLCJyZW5kZXJQcmV2QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Carousel/carousel.js\n");

/***/ })

});