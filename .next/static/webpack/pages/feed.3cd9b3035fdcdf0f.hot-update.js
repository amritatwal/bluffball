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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Carousel = function(param) {\n    var phrases = param.phrases;\n    var responsive = {\n        0: {\n            items: 1\n        },\n        568: {\n            items: 1\n        },\n        1024: {\n            items: 1\n        }\n    };\n    var items = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[0].phrase_desc,\n            club: phrases[0].phrase_club\n        }, phrases[0].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[1].phrase_desc,\n            club: phrases[1].phrase_club\n        }, phrases[1].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            quote: phrases[1].phrase_desc,\n            club: phrases[1].phrase_club\n        }, phrases[1].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, _this), \n    ];\n    // const renderPrevButton = () => {\n    //   return (\n    //     <Box mt=\"-30em\" ml=\"27em\">\n    //       <img\n    //         width=\"50em\"\n    //         height=\"auto\"\n    //         src={\"https://svgshare.com/i/iM7.svg\"}\n    //         alt=\"previous\"\n    //       />\n    //     </Box>\n    //   );\n    // };\n    // const renderNextButton = () => {\n    //   return (\n    //     <Box mt=\"-30em\" ml=\"29em\">\n    //       <img\n    //         width=\"50em\"\n    //         height=\"auto\"\n    //         src={\"https://svgshare.com/i/iNM.svg\"}\n    //         alt=\"next\"\n    //       />\n    //     </Box>\n    //   );\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        border: \"solid 1px blue\",\n        children: phrases.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n            border: \"solid 1px blue\",\n            mouseTracking: true,\n            items: items,\n            responsive: responsive,\n            renderPrevButton: renderPrevButton,\n            renderNextButton: renderNextButton\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/src/components/Carousel/carousel.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNLO0FBQ0c7QUFDVjtBQUNJO0FBRXJELElBQU1TLFFBQVEsR0FBRyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPO0lBQ3pCLElBQU1DLFVBQVUsR0FBRztBQUNqQixTQUFDLEVBQUU7WUFBRUMsS0FBSyxFQUFFLENBQUM7U0FBRTtBQUNmLFdBQUcsRUFBRTtZQUFFQSxLQUFLLEVBQUUsQ0FBQztTQUFFO0FBQ2pCLFlBQUksRUFBRTtZQUFFQSxLQUFLLEVBQUUsQ0FBQztTQUFFO0tBQ25CO0lBRUQsSUFBTUEsS0FBSyxHQUFHO3NCQUNaLDhEQUFDVCxvRUFBVTtZQUVUVSxLQUFLLEVBQUVILE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksV0FBVztZQUM3QkMsSUFBSSxFQUFFTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNNLFdBQVc7V0FGdkJOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sU0FBUzs7OztpQkFHekI7c0JBQ0YsOERBQUNkLG9FQUFVO1lBRVRVLEtBQUssRUFBRUgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxXQUFXO1lBQzdCQyxJQUFJLEVBQUVMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ00sV0FBVztXQUZ2Qk4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTyxTQUFTOzs7O2lCQUd6QjtzQkFDRiw4REFBQ2Qsb0VBQVU7WUFFVFUsS0FBSyxFQUFFSCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNJLFdBQVc7WUFDN0JDLElBQUksRUFBRUwsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTSxXQUFXO1dBRnZCTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNPLFNBQVM7Ozs7aUJBR3pCO0tBQ0g7SUFFRCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsT0FBTztJQUNQLEtBQUs7SUFFTCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsT0FBTztJQUNQLEtBQUs7SUFFTCxxQkFDRSw4REFBQ1gsaURBQUc7UUFBQ1ksTUFBTSxFQUFFLGdCQUFnQjtrQkFDMUJSLE9BQU8sQ0FBQ1MsTUFBTSxHQUFHLENBQUMsaUJBQ2pCLDhEQUFDWCw2REFBYTtZQUNaVSxNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCRSxhQUFhO1lBQ2JSLEtBQUssRUFBRUEsS0FBSztZQUNaRCxVQUFVLEVBQUVBLFVBQVU7WUFDdEJVLGdCQUFnQixFQUFFQSxnQkFBZ0I7WUFDbENDLGdCQUFnQixFQUFFQSxnQkFBZ0I7Ozs7O2lCQUNsQyxpQkFFRiw2SUFBSzs7Ozs7YUFFSCxDQUNOO0NBQ0g7QUFuRUtiLEtBQUFBLFFBQVE7QUFxRWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5qcz9hN2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGhyYXNlQ2FyZCBmcm9tIFwiLi4vQ2FyZHMvUGhyYXNlQ2FyZC9QaHJhc2VDYXJkXCI7XG5pbXBvcnQgeyBUZXh0LCBGbGV4LCBCb3gsIFNwYWNlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyBwaHJhc2VzIH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAwOiB7IGl0ZW1zOiAxIH0sXG4gICAgNTY4OiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMSB9LFxuICB9O1xuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZXNbMF0ucGhyYXNlX2lkfVxuICAgICAgcXVvdGU9e3BocmFzZXNbMF0ucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2VzWzBdLnBocmFzZV9jbHVifVxuICAgIC8+LFxuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZXNbMV0ucGhyYXNlX2lkfVxuICAgICAgcXVvdGU9e3BocmFzZXNbMV0ucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2VzWzFdLnBocmFzZV9jbHVifVxuICAgIC8+LFxuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZXNbMV0ucGhyYXNlX2lkfVxuICAgICAgcXVvdGU9e3BocmFzZXNbMV0ucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2VzWzFdLnBocmFzZV9jbHVifVxuICAgIC8+LFxuICBdO1xuXG4gIC8vIGNvbnN0IHJlbmRlclByZXZCdXR0b24gPSAoKSA9PiB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxCb3ggbXQ9XCItMzBlbVwiIG1sPVwiMjdlbVwiPlxuICAvLyAgICAgICA8aW1nXG4gIC8vICAgICAgICAgd2lkdGg9XCI1MGVtXCJcbiAgLy8gICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgLy8gICAgICAgICBzcmM9e1wiaHR0cHM6Ly9zdmdzaGFyZS5jb20vaS9pTTcuc3ZnXCJ9XG4gIC8vICAgICAgICAgYWx0PVwicHJldmlvdXNcIlxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9Cb3g+XG4gIC8vICAgKTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCByZW5kZXJOZXh0QnV0dG9uID0gKCkgPT4ge1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8Qm94IG10PVwiLTMwZW1cIiBtbD1cIjI5ZW1cIj5cbiAgLy8gICAgICAgPGltZ1xuICAvLyAgICAgICAgIHdpZHRoPVwiNTBlbVwiXG4gIC8vICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gIC8vICAgICAgICAgc3JjPXtcImh0dHBzOi8vc3Znc2hhcmUuY29tL2kvaU5NLnN2Z1wifVxuICAvLyAgICAgICAgIGFsdD1cIm5leHRcIlxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9Cb3g+XG4gIC8vICAgKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYm9yZGVyPXtcInNvbGlkIDFweCBibHVlXCJ9PlxuICAgICAge3BocmFzZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICBib3JkZXI9e1wic29saWQgMXB4IGJsdWVcIn1cbiAgICAgICAgICBtb3VzZVRyYWNraW5nXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgcmVuZGVyUHJldkJ1dHRvbj17cmVuZGVyUHJldkJ1dHRvbn1cbiAgICAgICAgICByZW5kZXJOZXh0QnV0dG9uPXtyZW5kZXJOZXh0QnV0dG9ufVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGhyYXNlQ2FyZCIsIlRleHQiLCJGbGV4IiwiQm94IiwiU3BhY2VyIiwiQWxpY2VDYXJvdXNlbCIsIkNhcm91c2VsIiwicGhyYXNlcyIsInJlc3BvbnNpdmUiLCJpdGVtcyIsInF1b3RlIiwicGhyYXNlX2Rlc2MiLCJjbHViIiwicGhyYXNlX2NsdWIiLCJwaHJhc2VfaWQiLCJib3JkZXIiLCJsZW5ndGgiLCJtb3VzZVRyYWNraW5nIiwicmVuZGVyUHJldkJ1dHRvbiIsInJlbmRlck5leHRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Carousel/carousel.js\n");

/***/ })

});