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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    var responsive = {\n        0: {\n            items: 1\n        },\n        568: {\n            items: 1\n        },\n        1024: {\n            items: 1\n        }\n    };\n    var items = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            quote: phrases[0].phrase_desc,\n            club: phrases[0].phrase_club\n        }, phrases[0].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            quote: phrases[0].phrase_desc,\n            club: phrases[0].phrase_club\n        }, phrases[0].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            quote: phrases[0].phrase_desc,\n            club: phrases[0].phrase_club\n        }, phrases[0].phrase_id, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        }, _this), \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setPhrases(data.payload);\n                            console.log(phrases);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default()), {\n            mouseTracking: true,\n            items: items,\n            responsive: responsive\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed); // <>\n /* {phrases.length > 1 ? (\n        phrases.map((phrase) => {\n          return (\n            <PhraseCard key={phrase.phrase_id} quote={phrase.phrase_desc} />\n          );\n        })\n      ) : (\n        <></>\n      )} */  /* {phrases.length > 1 ? (\n        <PhraseCard\n          key={phrases[0].phrase_id}\n          quote={phrases[0].phrase_desc}\n          club={phrases[0].phrase_club}\n        />\n      ) : (\n        <></>\n      )}\n    </> */ \nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDd0M7QUFDWjtBQUNWO0FBQ0k7O0FBRXJELElBQU1VLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUE4QlQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVI1QyxPQVFnQixHQUFnQkEsR0FBWSxHQUE1QixFQVJoQixVQVE0QixHQUFJQSxHQUFZLEdBQWhCO0lBRTFCLElBQU1ZLFVBQVUsR0FBRztBQUNqQixTQUFDLEVBQUU7WUFBRUMsS0FBSyxFQUFFLENBQUM7U0FBRTtBQUNmLFdBQUcsRUFBRTtZQUFFQSxLQUFLLEVBQUUsQ0FBQztTQUFFO0FBQ2pCLFlBQUksRUFBRTtZQUFFQSxLQUFLLEVBQUUsQ0FBQztTQUFFO0tBQ25CO0lBRUQsSUFBTUEsS0FBSyxHQUFHO3NCQUNaLDhEQUFDVixtRkFBVTtZQUVUVyxLQUFLLEVBQUVKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssV0FBVztZQUM3QkMsSUFBSSxFQUFFTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNPLFdBQVc7V0FGdkJQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsU0FBUzs7OztpQkFHekI7c0JBQ0YsOERBQUNmLG1GQUFVO1lBRVRXLEtBQUssRUFBRUosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxXQUFXO1lBQzdCQyxJQUFJLEVBQUVOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sV0FBVztXQUZ2QlAsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxTQUFTOzs7O2lCQUd6QjtzQkFDRiw4REFBQ2YsbUZBQVU7WUFFVFcsS0FBSyxFQUFFSixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNLLFdBQVc7WUFDN0JDLElBQUksRUFBRU4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTyxXQUFXO1dBRnZCUCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNRLFNBQVM7Ozs7aUJBR3pCO0tBQ0g7SUFFRGpCLGdEQUFTLENBQUMsV0FBTTtpQkFDQ2tCLFVBQVU7bUJBQVZBLFdBQVU7O2lCQUFWQSxXQUFVO1lBQVZBLFdBQVUsR0FBekIsb0xBQTRCO29CQUNwQkMsUUFBUSxFQUNSQyxJQUFJOzs7OzttQ0FEYUMsS0FBSyxDQUFDLEVBQUMsQ0FBaUIsTUFBUSxDQUF2QnBCLHVEQUFjLEVBQUMsVUFBUSxDQUFDLENBQUM7OzRCQUFuRGtCLFFBQVEsWUFBMkM7O21DQUN0Q0EsUUFBUSxDQUFDSSxJQUFJLEVBQUU7OzRCQUE1QkgsSUFBSSxZQUF3Qjs0QkFDbENWLFVBQVUsQ0FBQ1UsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQzs0QkFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDakIsT0FBTyxDQUFDLENBQUM7Ozs7OzthQUN0QjttQkFMY1MsV0FBVTs7UUFNekJBLFVBQVUsRUFBRSxDQUFDO0tBQ2QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFO2tCQUNFLDRFQUFDWCw2REFBYTtZQUFDb0IsYUFBYTtZQUFDZixLQUFLLEVBQUVBLEtBQUs7WUFBRUQsVUFBVSxFQUFFQSxVQUFVOzs7OztpQkFBSTtxQkFDcEUsQ0FDSDtDQUNIO0dBMUNLSCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE0Q1YsK0RBQWVBLElBQUksRUFBQyxDQUVwQixLQUFLO0NBQ0w7Ozs7Ozs7O1dBUVcsRUFDWDs7Ozs7Ozs7O1VBU1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBQaHJhc2VDYXJkIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmRcIjtcbmltcG9ydCB7IFRleHQsIEZsZXgsIEJveCwgU3BhY2VyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzc1wiO1xuXG5jb25zdCBGZWVkID0gKCkgPT4ge1xuICBjb25zdCBbcGhyYXNlcywgc2V0UGhyYXNlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAwOiB7IGl0ZW1zOiAxIH0sXG4gICAgNTY4OiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMSB9LFxuICB9O1xuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZXNbMF0ucGhyYXNlX2lkfVxuICAgICAgcXVvdGU9e3BocmFzZXNbMF0ucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2VzWzBdLnBocmFzZV9jbHVifVxuICAgIC8+LFxuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZXNbMF0ucGhyYXNlX2lkfVxuICAgICAgcXVvdGU9e3BocmFzZXNbMF0ucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2VzWzBdLnBocmFzZV9jbHVifVxuICAgIC8+LFxuICAgIDxQaHJhc2VDYXJkXG4gICAgICBrZXk9e3BocmFzZXNbMF0ucGhyYXNlX2lkfVxuICAgICAgcXVvdGU9e3BocmFzZXNbMF0ucGhyYXNlX2Rlc2N9XG4gICAgICBjbHViPXtwaHJhc2VzWzBdLnBocmFzZV9jbHVifVxuICAgIC8+LFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGhyYXNlcygpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLkFQSV9VUkx9L3BocmFzZXNgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQaHJhc2VzKGRhdGEucGF5bG9hZCk7XG4gICAgICBjb25zb2xlLmxvZyhwaHJhc2VzKTtcbiAgICB9XG4gICAgZ2V0UGhyYXNlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFsaWNlQ2Fyb3VzZWwgbW91c2VUcmFja2luZyBpdGVtcz17aXRlbXN9IHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkO1xuXG4vLyA8PlxuLyoge3BocmFzZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgcGhyYXNlcy5tYXAoKHBocmFzZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGhyYXNlQ2FyZCBrZXk9e3BocmFzZS5waHJhc2VfaWR9IHF1b3RlPXtwaHJhc2UucGhyYXNlX2Rlc2N9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfSAqL1xuLyoge3BocmFzZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPFBocmFzZUNhcmRcbiAgICAgICAgICBrZXk9e3BocmFzZXNbMF0ucGhyYXNlX2lkfVxuICAgICAgICAgIHF1b3RlPXtwaHJhc2VzWzBdLnBocmFzZV9kZXNjfVxuICAgICAgICAgIGNsdWI9e3BocmFzZXNbMF0ucGhyYXNlX2NsdWJ9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICA8Lz4gKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uZmlnIiwiUGhyYXNlQ2FyZCIsIlRleHQiLCJGbGV4IiwiQm94IiwiU3BhY2VyIiwiQWxpY2VDYXJvdXNlbCIsIkZlZWQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsInJlc3BvbnNpdmUiLCJpdGVtcyIsInF1b3RlIiwicGhyYXNlX2Rlc2MiLCJjbHViIiwicGhyYXNlX2NsdWIiLCJwaHJhc2VfaWQiLCJnZXRQaHJhc2VzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJBUElfVVJMIiwianNvbiIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwibW91c2VUcmFja2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});