"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/Construction.tsx":
/*!*********************************************!*\
  !*** ./components/layouts/Construction.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Construction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Construction() {\n    _s();\n    const [currImage, setCurrImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchRandomPicture = async ()=>{\n        const response = await fetch(\"https://dog.ceo/api/breeds/image/random\");\n        const data = await response.json();\n        if (data.status == \"success\") {\n            setCurrImage(data.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchInitialPicture() {\n            await fetchRandomPicture();\n        }\n        fetchInitialPicture();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center\",\n        children: [\n            currImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"construction-dog\",\n                className: \"w-[280px] h-[217px] rounded-[20px] object-cover bg-no-repeat bg-center border-solid border-[1px] border-black\",\n                style: {\n                    backgroundImage: \"url(\".concat(currImage, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilma-mds/Desktop/Naarkz/_projects_practice/naarkz-port/components/layouts/Construction.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-dark-blue font-[400] text-[20px] leading-[23.2px] mb-[17px] mt-[20px]\",\n                children: [\n                    \"Site is still under construction. For the meantime,\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/wilma-mds/Desktop/Naarkz/_projects_practice/naarkz-port/components/layouts/Construction.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    \" enjoy these random pictures of dogs with jobs!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wilma-mds/Desktop/Naarkz/_projects_practice/naarkz-port/components/layouts/Construction.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"w-[55px] rounded-[12px] bg-dark-blue h-[55px] text-white flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/static/images/refresh-icon.svg\",\n                    alt: \"refresh-icon\",\n                    width: 22,\n                    height: 22\n                }, void 0, false, {\n                    fileName: \"/Users/wilma-mds/Desktop/Naarkz/_projects_practice/naarkz-port/components/layouts/Construction.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wilma-mds/Desktop/Naarkz/_projects_practice/naarkz-port/components/layouts/Construction.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilma-mds/Desktop/Naarkz/_projects_practice/naarkz-port/components/layouts/Construction.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Construction, \"vk1Gp+1SvqEZBPj9ygtb98yqLRY=\");\n_c = Construction;\nvar _c;\n$RefreshReg$(_c, \"Construction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvQ29uc3RydWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBRXBCO0FBQ2hCLFNBQVNJLGVBQWU7O0lBQ3JDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUVuRCxNQUFNTSxxQkFBcUIsVUFBWTtRQUNyQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFFN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBQ2hDLElBQUlELEtBQUtFLE1BQU0sSUFBSSxXQUFXO1lBQzVCTixhQUFhSSxLQUFLRyxPQUFPO1FBQzNCLENBQUM7SUFDSDtJQUVBWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZVksc0JBQXNCO1lBQ25DLE1BQU1QO1FBQ1I7UUFDQU87SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWlgsMkJBQ0MsOERBQUNVO2dCQUNDRSxJQUFHO2dCQUNIRCxXQUFVO2dCQUNWRSxPQUFPO29CQUFFQyxpQkFBaUIsT0FBaUIsT0FBVmQsV0FBVTtnQkFBRzs7Ozs7OzBCQUdsRCw4REFBQ2U7Z0JBQUVKLFdBQVU7O29CQUE2RTtrQ0FFeEYsOERBQUNLOzs7OztvQkFBSzs7Ozs7OzswQkFFUiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xQLFdBQVU7MEJBRVYsNEVBQUNiLG1EQUFLQTtvQkFDSnFCLEtBQUs7b0JBQ0xDLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCLENBQUM7R0E3Q3VCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnN0cnVjdGlvbi50c3g/MzIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnN0cnVjdGlvbigpIHtcbiAgY29uc3QgW2N1cnJJbWFnZSwgc2V0Q3VyckltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgZmV0Y2hSYW5kb21QaWN0dXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChkYXRhLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgc2V0Q3VyckltYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbml0aWFsUGljdHVyZSgpIHtcbiAgICAgIGF3YWl0IGZldGNoUmFuZG9tUGljdHVyZSgpO1xuICAgIH1cbiAgICBmZXRjaEluaXRpYWxQaWN0dXJlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIHtjdXJySW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJjb25zdHJ1Y3Rpb24tZG9nXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyODBweF0gaC1bMjE3cHhdIHJvdW5kZWQtWzIwcHhdIG9iamVjdC1jb3ZlciBiZy1uby1yZXBlYXQgYmctY2VudGVyIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjdXJySW1hZ2V9KWAgfX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFyay1ibHVlIGZvbnQtWzQwMF0gdGV4dC1bMjBweF0gbGVhZGluZy1bMjMuMnB4XSBtYi1bMTdweF0gbXQtWzIwcHhdXCI+XG4gICAgICAgIFNpdGUgaXMgc3RpbGwgdW5kZXIgY29uc3RydWN0aW9uLiBGb3IgdGhlIG1lYW50aW1lLFxuICAgICAgICA8YnIgLz4gZW5qb3kgdGhlc2UgcmFuZG9tIHBpY3R1cmVzIG9mIGRvZ3Mgd2l0aCBqb2JzIVxuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1bNTVweF0gcm91bmRlZC1bMTJweF0gYmctZGFyay1ibHVlIGgtWzU1cHhdIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e1wiL3N0YXRpYy9pbWFnZXMvcmVmcmVzaC1pY29uLnN2Z1wifVxuICAgICAgICAgIGFsdD1cInJlZnJlc2gtaWNvblwiXG4gICAgICAgICAgd2lkdGg9ezIyfVxuICAgICAgICAgIGhlaWdodD17MjJ9XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJDb25zdHJ1Y3Rpb24iLCJjdXJySW1hZ2UiLCJzZXRDdXJySW1hZ2UiLCJmZXRjaFJhbmRvbVBpY3R1cmUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwiZmV0Y2hJbml0aWFsUGljdHVyZSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwIiwiYnIiLCJidXR0b24iLCJ0eXBlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/Construction.tsx\n"));

/***/ })

});