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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Cards_PhraseCard_PhraseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Cards/PhraseCard/PhraseCard */ \"./src/components/Cards/PhraseCard/PhraseCard.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Feed = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), phrases = ref[0], setPhrases = ref[1];\n    var items = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"item\",\n            \"data-value\": \"1\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg\",\n                al: true\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, _this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"item\",\n            \"data-value\": \"2\",\n            children: \"2\"\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, _this), \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getPhrases() {\n            return _getPhrases.apply(this, arguments);\n        }\n        function _getPhrases() {\n            _getPhrases = _asyncToGenerator(_Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_bluffball_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/phrases\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setPhrases(data.payload);\n                            console.log(phrases);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getPhrases.apply(this, arguments);\n        }\n        getPhrases();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_5___default()), {\n        animationType: \"fadeout\",\n        animationDuration: 800,\n        disableButtonsControls: true,\n        infinite: true,\n        items: items,\n        mouseTracking: true,\n        renderNextButton: true\n    }, void 0, false, {\n        fileName: \"/Users/amritatwal/Desktop/bluffball/pages/feed.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Feed, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed); // <>\n /* {phrases.length > 1 ? (\n        phrases.map((phrase) => {\n          return (\n            <PhraseCard key={phrase.phrase_id} quote={phrase.phrase_desc} />\n          );\n        })\n      ) : (\n        <></>\n      )} */  /* {phrases.length > 1 ? (\n        <PhraseCard\n          key={phrases[0].phrase_id}\n          quote={phrases[0].phrase_desc}\n          club={phrases[0].phrase_club}\n        />\n      ) : (\n        <></>\n      )}\n    </> */ \nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDd0M7QUFDdEI7QUFDSTs7QUFFckQsSUFBTU0sSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQThCTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUDVDLE9BT2dCLEdBQWdCQSxHQUFZLEdBQTVCLEVBUGhCLFVBTzRCLEdBQUlBLEdBQVksR0FBaEI7SUFFMUIsSUFBTVEsS0FBSyxHQUFHO3NCQUNaLDhEQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxNQUFNO1lBQUNDLFlBQVUsRUFBQyxHQUFHO3NCQUNsQyw0RUFBQ0MsS0FBRztnQkFBQ0MsR0FBRyxFQUFDLG1LQUFtSztnQkFBQ0MsRUFBRTs7Ozs7cUJBQUU7Ozs7O2lCQUM3SztzQkFDTiw4REFBQ0wsS0FBRztZQUFDQyxTQUFTLEVBQUMsTUFBTTtZQUFDQyxZQUFVLEVBQUMsR0FBRztzQkFBQyxHQUVyQzs7Ozs7aUJBQU07S0FDUDtJQUVEVixnREFBUyxDQUFDLFdBQU07aUJBQ0NjLFVBQVU7bUJBQVZBLFdBQVU7O2lCQUFWQSxXQUFVO1lBQVZBLFdBQVUsR0FBekIsb0xBQTRCO29CQUNwQkMsUUFBUSxFQUNSQyxJQUFJOzs7OzttQ0FEYUMsS0FBSyxDQUFDLEVBQUMsQ0FBaUIsTUFBUSxDQUF2QmhCLHVEQUFjLEVBQUMsVUFBUSxDQUFDLENBQUM7OzRCQUFuRGMsUUFBUSxZQUEyQzs7bUNBQ3RDQSxRQUFRLENBQUNJLElBQUksRUFBRTs7NEJBQTVCSCxJQUFJLFlBQXdCOzRCQUNsQ1YsVUFBVSxDQUFDVSxJQUFJLENBQUNJLE9BQU8sQ0FBQyxDQUFDOzRCQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNqQixPQUFPLENBQUMsQ0FBQzs7Ozs7O2FBQ3RCO21CQUxjUyxXQUFVOztRQU16QkEsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNYLDZEQUFhO1FBQ1pvQixhQUFhLEVBQUMsU0FBUztRQUN2QkMsaUJBQWlCLEVBQUUsR0FBRztRQUN0QkMsc0JBQXNCO1FBQ3RCQyxRQUFRO1FBQ1JuQixLQUFLLEVBQUVBLEtBQUs7UUFDWm9CLGFBQWE7UUFDYkMsZ0JBQWdCOzs7OzthQUNoQixDQUNGO0NBQ0g7R0FqQ0t4QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFtQ1YsK0RBQWVBLElBQUksRUFBQyxDQUVwQixLQUFLO0NBQ0w7Ozs7Ozs7O1dBUVcsRUFDWDs7Ozs7Ozs7O1VBU1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBQaHJhc2VDYXJkIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DYXJkcy9QaHJhc2VDYXJkL1BocmFzZUNhcmRcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzc1wiO1xuXG5jb25zdCBGZWVkID0gKCkgPT4ge1xuICBjb25zdCBbcGhyYXNlcywgc2V0UGhyYXNlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaXRlbXMgPSBbXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cIjFcIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMucmVtb3ZlLmJnL3JlbW92ZS1iZy13ZWIvZWIxYmI0ODg0NWM1MDA3YzNlYzhkNzJjZTc5NzJmYzhiNzY3MzNiMS9hc3NldHMvc3RhcnQtMWFiZmI0ZmUyOTgwZWFiZmJiYWFhNDM2NWEwNjkyNTM5ZjdjZDI3MjVmMzI0ZjkwNDU2NWE5YTc0NGY4ZTIxNC5qcGdcIiBhbC8+XG4gICAgPC9kaXY+LFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCIyXCI+XG4gICAgICAyXG4gICAgPC9kaXY+LFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGhyYXNlcygpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLkFQSV9VUkx9L3BocmFzZXNgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQaHJhc2VzKGRhdGEucGF5bG9hZCk7XG4gICAgICBjb25zb2xlLmxvZyhwaHJhc2VzKTtcbiAgICB9XG4gICAgZ2V0UGhyYXNlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgYW5pbWF0aW9uVHlwZT1cImZhZGVvdXRcIlxuICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezgwMH1cbiAgICAgIGRpc2FibGVCdXR0b25zQ29udHJvbHNcbiAgICAgIGluZmluaXRlXG4gICAgICBpdGVtcz17aXRlbXN9XG4gICAgICBtb3VzZVRyYWNraW5nXG4gICAgICByZW5kZXJOZXh0QnV0dG9uXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG5cbi8vIDw+XG4vKiB7cGhyYXNlcy5sZW5ndGggPiAxID8gKFxuICAgICAgICBwaHJhc2VzLm1hcCgocGhyYXNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQaHJhc2VDYXJkIGtleT17cGhyYXNlLnBocmFzZV9pZH0gcXVvdGU9e3BocmFzZS5waHJhc2VfZGVzY30gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9ICovXG4vKiB7cGhyYXNlcy5sZW5ndGggPiAxID8gKFxuICAgICAgICA8UGhyYXNlQ2FyZFxuICAgICAgICAgIGtleT17cGhyYXNlc1swXS5waHJhc2VfaWR9XG4gICAgICAgICAgcXVvdGU9e3BocmFzZXNbMF0ucGhyYXNlX2Rlc2N9XG4gICAgICAgICAgY2x1Yj17cGhyYXNlc1swXS5waHJhc2VfY2x1Yn1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvPiAqL1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb25maWciLCJQaHJhc2VDYXJkIiwiQWxpY2VDYXJvdXNlbCIsIkZlZWQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsIml0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS12YWx1ZSIsImltZyIsInNyYyIsImFsIiwiZ2V0UGhyYXNlcyIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoIiwiQVBJX1VSTCIsImpzb24iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsImRpc2FibGVCdXR0b25zQ29udHJvbHMiLCJpbmZpbml0ZSIsIm1vdXNlVHJhY2tpbmciLCJyZW5kZXJOZXh0QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feed.js\n");

/***/ })

});