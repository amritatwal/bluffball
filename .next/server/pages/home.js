"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home({ fixtures  }) {\n    console.log(fixtures);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            w: \"100%\",\n            h: \"calc(100vh - 8em)\",\n            flexDirection: {\n                base: \"column\",\n                md: \"row\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/amritatwal/Desktop/bluffball/pages/home.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n// This function gets called at build time\nasync function getStaticProps() {\n    // Call an external API endpoint to get posts\n    try {\n        const res = await fetch(\"https://v3.football.api-sports.io/fixtures?season=2022&league=39\", {\n            method: \"GET\",\n            headers: {\n                \"x-rapidapi-host\": \"v3.football.api-sports.io\",\n                \"x-rapidapi-key\": \"25a390ffc2c18776346b34b43a757422\"\n            }\n        });\n        const data = await res.json();\n        const fixtures = data.response.slice(0, 3);\n        return {\n            props: {\n                fixtures\n            }\n        };\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBRXpCLFNBQVNDLElBQUksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLHFCQUNFO2tCQUNFLDRFQUFDRixrREFBSTtZQUNISyxPQUFPLEVBQUMsTUFBTTtZQUNkQyxVQUFVLEVBQUMsUUFBUTtZQUNuQkMsY0FBYyxFQUFDLFFBQVE7WUFDdkJDLENBQUMsRUFBQyxNQUFNO1lBQ1JDLENBQUMsRUFBRSxtQkFBbUI7WUFDdEJDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLFFBQVE7Z0JBQUVDLEVBQUUsRUFBRSxLQUFLO2FBQUU7Ozs7O2dCQUN0QztxQkFDUCxDQUNIO0NBQ0g7QUFFRCwwQ0FBMEM7QUFDbkMsZUFBZUMsY0FBYyxHQUFHO0lBQ3JDLDZDQUE2QztJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIsa0VBQWtFLEVBQ2xFO1lBQ0VDLE1BQU0sRUFBRSxLQUFLO1lBQ2JDLE9BQU8sRUFBRTtnQkFDUCxpQkFBaUIsRUFBRSwyQkFBMkI7Z0JBQzlDLGdCQUFnQixFQUFFLGtDQUFrQzthQUNyRDtTQUNGLENBQ0Y7UUFDRCxNQUFNQyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFJLEVBQUU7UUFDN0IsTUFBTWpCLFFBQVEsR0FBR2dCLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxPQUFPO1lBQ0xDLEtBQUssRUFBRTtnQkFDTHBCLFFBQVE7YUFDVDtTQUNGLENBQUM7S0FDSCxDQUFDLE9BQU9xQixLQUFLLEVBQUU7UUFDZHBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbUIsS0FBSyxDQUFDLENBQUM7S0FDcEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWZmYmFsbC8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGZpeHR1cmVzIH0pIHtcbiAgY29uc29sZS5sb2coZml4dHVyZXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgaD17XCJjYWxjKDEwMHZoIC0gOGVtKVwifVxuICAgICAgICBmbGV4RGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICA+PC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vdjMuZm9vdGJhbGwuYXBpLXNwb3J0cy5pby9maXh0dXJlcz9zZWFzb249MjAyMiZsZWFndWU9MzlcIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJ2My5mb290YmFsbC5hcGktc3BvcnRzLmlvXCIsXG4gICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcIjI1YTM5MGZmYzJjMTg3NzYzNDZiMzRiNDNhNzU3NDIyXCIsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBmaXh0dXJlcyA9IGRhdGEucmVzcG9uc2Uuc2xpY2UoMCwgMyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGZpeHR1cmVzLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZsZXgiLCJIb21lIiwiZml4dHVyZXMiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInciLCJoIiwiZmxleERpcmVjdGlvbiIsImJhc2UiLCJtZCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJyZXNwb25zZSIsInNsaWNlIiwicHJvcHMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home.js"));
module.exports = __webpack_exports__;

})();