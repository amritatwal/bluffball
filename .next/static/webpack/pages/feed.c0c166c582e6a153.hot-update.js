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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    var handleDragStart = function(e) {\n        return e.preventDefault();\n    };\n    var items = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n            src: \"https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg\",\n            onDragStart: handleDragStart,\n            alt: \"presentation\"\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n            src: \"https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg\",\n            onDragStart: handleDragStart,\n            alt: \"presentation\"\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n            src: \"https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg\",\n            onDragStart: handleDragStart,\n            alt: \"presentation\"\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, _this), \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setPhrases(data.payload);\n                            console.log(phrases);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default()), {\n        mouseTracking: true,\n        items: items\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, _this);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed); // <>\n /* {phrases.length > 1 ? (\n        phrases.map((phrase) => {\n          return (\n            <PhraseCard key={phrase.phrase_id} quote={phrase.phrase_desc} />\n          );\n        })\n      ) : (\n        <></>\n      )} */  /* {phrases.length > 1 ? (\n        <PhraseCard\n          key={phrases[0].phrase_id}\n          quote={phrases[0].phrase_desc}\n          club={phrases[0].phrase_club}\n        />\n      ) : (\n        <></>\n      )}\n    </> */ \nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBQ3dDO0FBQ3RCOztBQUVqRCxJQUFNTSxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBOEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFONUMsT0FNZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFOaEIsVUFNNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQixJQUFNUSxlQUFlLEdBQUcsU0FBQ0MsQ0FBQztlQUFLQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtLQUFBO0lBQ2pELElBQU1DLEtBQUssR0FBRztzQkFDWiw4REFBQ0MsS0FBRztZQUNGQyxHQUFHLEVBQUMsbUtBQW1LO1lBQ3ZLQyxXQUFXLEVBQUVOLGVBQWU7WUFDNUJPLEdBQUcsRUFBQyxjQUFjOzs7OztpQkFDbEI7c0JBQ0YsOERBQUNILEtBQUc7WUFDRkMsR0FBRyxFQUFDLG1LQUFtSztZQUN2S0MsV0FBVyxFQUFFTixlQUFlO1lBQzVCTyxHQUFHLEVBQUMsY0FBYzs7Ozs7aUJBQ2xCO3NCQUNGLDhEQUFDSCxLQUFHO1lBQ0ZDLEdBQUcsRUFBQyxtS0FBbUs7WUFDdktDLFdBQVcsRUFBRU4sZUFBZTtZQUM1Qk8sR0FBRyxFQUFDLGNBQWM7Ozs7O2lCQUNsQjtLQUNIO0lBRURkLGdEQUFTLENBQUMsV0FBTTtpQkFDQ2UsVUFBVTttQkFBVkEsV0FBVTs7aUJBQVZBLFdBQVU7WUFBVkEsV0FBVSxHQUF6QixvTEFBNEI7b0JBQ3BCQyxRQUFRLEVBQ1JDLElBQUk7Ozs7O21DQURhQyxLQUFLLENBQUMsRUFBQyxDQUFpQixNQUFRLENBQXZCakIsdURBQWMsRUFBQyxVQUFRLENBQUMsQ0FBQzs7NEJBQW5EZSxRQUFRLFlBQTJDOzttQ0FDdENBLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFOzs0QkFBNUJILElBQUksWUFBd0I7NEJBQ2xDWCxVQUFVLENBQUNXLElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUM7NEJBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2xCLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7YUFDdEI7bUJBTGNVLFdBQVU7O1FBTXpCQSxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ1osNkRBQWE7UUFBQ3FCLGFBQWE7UUFBQ2QsS0FBSyxFQUFFQSxLQUFLOzs7OzthQUFJLENBQUM7Q0FDdEQ7R0FoQ0tOLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQWtDViwrREFBZUEsSUFBSSxFQUFDLENBRXBCLEtBQUs7Q0FDTDs7Ozs7Ozs7V0FRVyxFQUNYOzs7Ozs7Ozs7VUFTVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mZWVkLmpzPzEyNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IFBocmFzZUNhcmQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NhcmRzL1BocmFzZUNhcmQvUGhyYXNlQ2FyZFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5cbmNvbnN0IEZlZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFtwaHJhc2VzLCBzZXRQaHJhc2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaXRlbXMgPSBbXG4gICAgPGltZ1xuICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMucmVtb3ZlLmJnL3JlbW92ZS1iZy13ZWIvZWIxYmI0ODg0NWM1MDA3YzNlYzhkNzJjZTc5NzJmYzhiNzY3MzNiMS9hc3NldHMvc3RhcnQtMWFiZmI0ZmUyOTgwZWFiZmJiYWFhNDM2NWEwNjkyNTM5ZjdjZDI3MjVmMzI0ZjkwNDU2NWE5YTc0NGY4ZTIxNC5qcGdcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGFsdD1cInByZXNlbnRhdGlvblwiXG4gICAgLz4sXG4gICAgPGltZ1xuICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMucmVtb3ZlLmJnL3JlbW92ZS1iZy13ZWIvZWIxYmI0ODg0NWM1MDA3YzNlYzhkNzJjZTc5NzJmYzhiNzY3MzNiMS9hc3NldHMvc3RhcnQtMWFiZmI0ZmUyOTgwZWFiZmJiYWFhNDM2NWEwNjkyNTM5ZjdjZDI3MjVmMzI0ZjkwNDU2NWE5YTc0NGY4ZTIxNC5qcGdcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGFsdD1cInByZXNlbnRhdGlvblwiXG4gICAgLz4sXG4gICAgPGltZ1xuICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMucmVtb3ZlLmJnL3JlbW92ZS1iZy13ZWIvZWIxYmI0ODg0NWM1MDA3YzNlYzhkNzJjZTc5NzJmYzhiNzY3MzNiMS9hc3NldHMvc3RhcnQtMWFiZmI0ZmUyOTgwZWFiZmJiYWFhNDM2NWEwNjkyNTM5ZjdjZDI3MjVmMzI0ZjkwNDU2NWE5YTc0NGY4ZTIxNC5qcGdcIlxuICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgIGFsdD1cInByZXNlbnRhdGlvblwiXG4gICAgLz4sXG4gIF07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQaHJhc2VzKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuQVBJX1VSTH0vcGhyYXNlc2ApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFBocmFzZXMoZGF0YS5wYXlsb2FkKTtcbiAgICAgIGNvbnNvbGUubG9nKHBocmFzZXMpO1xuICAgIH1cbiAgICBnZXRQaHJhc2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPEFsaWNlQ2Fyb3VzZWwgbW91c2VUcmFja2luZyBpdGVtcz17aXRlbXN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcblxuLy8gPD5cbi8qIHtwaHJhc2VzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgIHBocmFzZXMubWFwKChwaHJhc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBocmFzZUNhcmQga2V5PXtwaHJhc2UucGhyYXNlX2lkfSBxdW90ZT17cGhyYXNlLnBocmFzZV9kZXNjfSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX0gKi9cbi8qIHtwaHJhc2VzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgIDxQaHJhc2VDYXJkXG4gICAgICAgICAga2V5PXtwaHJhc2VzWzBdLnBocmFzZV9pZH1cbiAgICAgICAgICBxdW90ZT17cGhyYXNlc1swXS5waHJhc2VfZGVzY31cbiAgICAgICAgICBjbHViPXtwaHJhc2VzWzBdLnBocmFzZV9jbHVifVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC8+ICovXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIlBocmFzZUNhcmQiLCJBbGljZUNhcm91c2VsIiwiRmVlZCIsInBocmFzZXMiLCJzZXRQaHJhc2VzIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXRlbXMiLCJpbWciLCJzcmMiLCJvbkRyYWdTdGFydCIsImFsdCIsImdldFBocmFzZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJqc29uIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJtb3VzZVRyYWNraW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});