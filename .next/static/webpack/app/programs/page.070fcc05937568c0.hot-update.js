"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/programs/page",{

/***/ "(app-pages-browser)/./src/app/programs/list.tsx":
/*!***********************************!*\
  !*** ./src/app/programs/list.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProgramList: function() { return /* binding */ ProgramList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _programcontainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programcontainer */ \"(app-pages-browser)/./src/app/programs/programcontainer.tsx\");\n/* __next_internal_client_entry_do_not_use__ ProgramList auto */ \nvar _s = $RefreshSig$();\n\n\nconst ProgramList = ()=>{\n    _s();\n    const programs = [\n        {\n            name: \"ULSP\",\n            description: \"Undergraduate Learning Support Program\",\n            link: \"/programs/ulsp\",\n            isCurrent: false,\n            startDate: \"Aug 6, 2023\",\n            endDate: \"Aug 6, 2024\",\n            badge: \"New\"\n        },\n        {\n            name: \"FBS\",\n            description: \"Foundation Board Scholarship\",\n            link: \"/programs/fbs\",\n            isCurrent: true,\n            startDate: \"Aug 6, 2023\",\n            endDate: \"Aug 6, 2024\",\n            badge: \"New\"\n        },\n        {\n            name: \"SMP\",\n            description: \"Student Mentorship Program\",\n            link: \"/programs/smp\",\n            isCurrent: false,\n            startDate: \"Aug 6, 2023\",\n            endDate: \"Aug 6, 2024\",\n            badge: \"New\"\n        },\n        {\n            name: \"M-First\",\n            description: \"Undergraduate Learning Support Program\",\n            link: \"/programs/\",\n            isCurrent: false,\n            startDate: \"Aug 6, 2023\",\n            endDate: \"Aug 6, 2024\",\n            badge: \"New\"\n        },\n        {\n            name: \"ULSP\",\n            description: \"Undergraduate Learning Support Program\",\n            link: \"/programs/\",\n            isCurrent: true,\n            startDate: \"Aug 6, 2023\",\n            endDate: \"Aug 6, 2024\",\n            badge: \"New\"\n        },\n        {\n            name: \"ULSP\",\n            description: \"Undergraduate Learning Support Program\",\n            link: \"/programs/\",\n            isCurrent: false,\n            startDate: \"Aug 6, 2023\",\n            endDate: \"Aug 6, 2024\",\n            badge: \"New\"\n        }\n    ];\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const tabs = [\n        \"All\",\n        \"Current\",\n        \"Past\"\n    ];\n    const filterPrograms = ()=>{\n        if (activeTab === \"Current\") {\n            return programs.filter((program)=>program.isCurrent);\n        } else if (activeTab === \"Past\") {\n            return programs.filter((program)=>!program.isCurrent);\n        } else {\n            return programs;\n        }\n    };\n    const filteredPrograms = filterPrograms();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:mx-24 m-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-5xl text-purple-900 font-semibold mb-5 text-center underline\",\n                    children: \"Our Programs\"\n                }, void 0, false, {\n                    fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-5 mb-5\",\n                    children: tabs.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-extrabold cursor-pointer hover:underline hover:text-purple-500 \".concat(activeTab === tab ? \"text-purple-500 underline hover:text-grey-500\" : \"text-gray-500\"),\n                            onClick: ()=>setActiveTab(tab),\n                            children: tab\n                        }, index, false, {\n                            fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5\",\n                    children: filteredPrograms.map((program, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_programcontainer__WEBPACK_IMPORTED_MODULE_2__.ProgramContainer, {\n                            program: program\n                        }, index, false, {\n                            fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/khabibthekillys./Documents/Client/src/app/programs/list.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProgramList, \"1k6lhePRljloIu0Vz/5Kfpi6iMY=\");\n_c = ProgramList;\nvar _c;\n$RefreshReg$(_c, \"ProgramList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZ3JhbXMvbGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNxQztBQUV0RSxNQUFNRyxjQUFjOztJQUN2QixNQUFNQyxXQUErQztRQUNqRDtZQUFFQyxNQUFNO1lBQVFDLGFBQWE7WUFBMENDLE1BQU07WUFBa0JDLFdBQVc7WUFBT0MsV0FBVztZQUFlQyxTQUFTO1lBQWVDLE9BQU87UUFBTTtRQUNoTDtZQUFFTixNQUFNO1lBQU9DLGFBQWE7WUFBZ0NDLE1BQU07WUFBaUJDLFdBQVc7WUFBTUMsV0FBVztZQUFlQyxTQUFTO1lBQWVDLE9BQU87UUFBTTtRQUNuSztZQUFFTixNQUFNO1lBQU9DLGFBQWE7WUFBOEJDLE1BQU07WUFBaUJDLFdBQVc7WUFBT0MsV0FBVztZQUFlQyxTQUFTO1lBQWVDLE9BQU87UUFBTTtRQUNsSztZQUFFTixNQUFNO1lBQVdDLGFBQWE7WUFBMENDLE1BQU07WUFBY0MsV0FBVztZQUFPQyxXQUFXO1lBQWVDLFNBQVM7WUFBZUMsT0FBTztRQUFNO1FBQy9LO1lBQUVOLE1BQU07WUFBUUMsYUFBYTtZQUEwQ0MsTUFBTTtZQUFjQyxXQUFXO1lBQU1DLFdBQVc7WUFBZUMsU0FBUztZQUFlQyxPQUFPO1FBQU07UUFDM0s7WUFBRU4sTUFBTTtZQUFRQyxhQUFhO1lBQTBDQyxNQUFNO1lBQWNDLFdBQVc7WUFBT0MsV0FBVztZQUFlQyxTQUFTO1lBQWVDLE9BQU87UUFBTTtLQUMvSztJQUVELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNYSxPQUFPO1FBQUM7UUFBTztRQUFXO0tBQU87SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ25CLElBQUlILGNBQWMsV0FBVztZQUN6QixPQUFPUixTQUFTWSxNQUFNLENBQUNDLENBQUFBLFVBQVdBLFFBQVFULFNBQVM7UUFDdkQsT0FBTyxJQUFJSSxjQUFjLFFBQVE7WUFDN0IsT0FBT1IsU0FBU1ksTUFBTSxDQUFDQyxDQUFBQSxVQUFXLENBQUNBLFFBQVFULFNBQVM7UUFDeEQsT0FBTztZQUNILE9BQU9KO1FBQ1g7SUFDSjtJQUVBLE1BQU1jLG1CQUFtQkg7SUFFekIscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEOzs4QkFDRyw4REFBQ0U7b0JBQUdELFdBQVU7OEJBQW9FOzs7Ozs7OEJBQ2xGLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDVk4sS0FBS1EsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNaLDhEQUFDSDs0QkFFR0QsV0FBVyxnRkFBc0ssT0FBdEZSLGNBQWNXLE1BQU0sa0RBQWtEOzRCQUNqS0UsU0FBUyxJQUFNWixhQUFhVTtzQ0FFM0JBOzJCQUpJQzs7Ozs7Ozs7Ozs4QkFRakIsOERBQUNMO29CQUFJQyxXQUFVOzhCQUNWRixpQkFBaUJJLEdBQUcsQ0FBQyxDQUFDTCxTQUFTTyxzQkFDNUIsOERBQUN0QiwrREFBZ0JBOzRCQUFDZSxTQUFTQTsyQkFBY087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRSxFQUFFO0dBakRXckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9ncmFtcy9saXN0LnRzeD80OTcwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9ncmFtQ29udGFpbmVyLCBQcm9ncmFtQ29udGFpbmVyUHJvcHMgfSBmcm9tICcuL3Byb2dyYW1jb250YWluZXInO1xuXG5leHBvcnQgY29uc3QgUHJvZ3JhbUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvZ3JhbXM6IFByb2dyYW1Db250YWluZXJQcm9wc1sncHJvZ3JhbSddW10gPSBbXG4gICAgICAgIHsgbmFtZTogJ1VMU1AnLCBkZXNjcmlwdGlvbjogJ1VuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgU3VwcG9ydCBQcm9ncmFtJywgbGluazogJy9wcm9ncmFtcy91bHNwJywgaXNDdXJyZW50OiBmYWxzZSwgc3RhcnREYXRlOiAnQXVnIDYsIDIwMjMnLCBlbmREYXRlOiAnQXVnIDYsIDIwMjQnLCBiYWRnZTogJ05ldycgfSxcbiAgICAgICAgeyBuYW1lOiAnRkJTJywgZGVzY3JpcHRpb246ICdGb3VuZGF0aW9uIEJvYXJkIFNjaG9sYXJzaGlwJywgbGluazogJy9wcm9ncmFtcy9mYnMnLCBpc0N1cnJlbnQ6IHRydWUsIHN0YXJ0RGF0ZTogJ0F1ZyA2LCAyMDIzJywgZW5kRGF0ZTogJ0F1ZyA2LCAyMDI0JywgYmFkZ2U6ICdOZXcnIH0sXG4gICAgICAgIHsgbmFtZTogJ1NNUCcsIGRlc2NyaXB0aW9uOiAnU3R1ZGVudCBNZW50b3JzaGlwIFByb2dyYW0nLCBsaW5rOiAnL3Byb2dyYW1zL3NtcCcsIGlzQ3VycmVudDogZmFsc2UsIHN0YXJ0RGF0ZTogJ0F1ZyA2LCAyMDIzJywgZW5kRGF0ZTogJ0F1ZyA2LCAyMDI0JywgYmFkZ2U6ICdOZXcnIH0sXG4gICAgICAgIHsgbmFtZTogJ00tRmlyc3QnLCBkZXNjcmlwdGlvbjogJ1VuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgU3VwcG9ydCBQcm9ncmFtJywgbGluazogJy9wcm9ncmFtcy8nLCBpc0N1cnJlbnQ6IGZhbHNlLCBzdGFydERhdGU6ICdBdWcgNiwgMjAyMycsIGVuZERhdGU6ICdBdWcgNiwgMjAyNCcsIGJhZGdlOiAnTmV3JyB9LFxuICAgICAgICB7IG5hbWU6ICdVTFNQJywgZGVzY3JpcHRpb246ICdVbmRlcmdyYWR1YXRlIExlYXJuaW5nIFN1cHBvcnQgUHJvZ3JhbScsIGxpbms6ICcvcHJvZ3JhbXMvJywgaXNDdXJyZW50OiB0cnVlLCBzdGFydERhdGU6ICdBdWcgNiwgMjAyMycsIGVuZERhdGU6ICdBdWcgNiwgMjAyNCcsIGJhZGdlOiAnTmV3JyB9LFxuICAgICAgICB7IG5hbWU6ICdVTFNQJywgZGVzY3JpcHRpb246ICdVbmRlcmdyYWR1YXRlIExlYXJuaW5nIFN1cHBvcnQgUHJvZ3JhbScsIGxpbms6ICcvcHJvZ3JhbXMvJywgaXNDdXJyZW50OiBmYWxzZSwgc3RhcnREYXRlOiAnQXVnIDYsIDIwMjMnLCBlbmREYXRlOiAnQXVnIDYsIDIwMjQnLCBiYWRnZTogJ05ldycgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdBbGwnKTtcblxuICAgIGNvbnN0IHRhYnMgPSBbJ0FsbCcsICdDdXJyZW50JywgJ1Bhc3QnXTtcblxuICAgIGNvbnN0IGZpbHRlclByb2dyYW1zID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlVGFiID09PSAnQ3VycmVudCcpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiBwcm9ncmFtLmlzQ3VycmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVGFiID09PSAnUGFzdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiAhcHJvZ3JhbS5pc0N1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW1zO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZ3JhbXMgPSBmaWx0ZXJQcm9ncmFtcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOm14LTI0IG0tMTInPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1wdXJwbGUtOTAwIGZvbnQtc2VtaWJvbGQgbWItNSB0ZXh0LWNlbnRlciB1bmRlcmxpbmVcIj5PdXIgUHJvZ3JhbXM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1wdXJwbGUtNTAwICR7YWN0aXZlVGFiID09PSB0YWIgPyAndGV4dC1wdXJwbGUtNTAwIHVuZGVybGluZSBob3Zlcjp0ZXh0LWdyZXktNTAwJyA6ICd0ZXh0LWdyYXktNTAwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0YWIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLXgtNVwiPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRQcm9ncmFtcy5tYXAoKHByb2dyYW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3JhbUNvbnRhaW5lciBwcm9ncmFtPXtwcm9ncmFtfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZ3JhbUNvbnRhaW5lciIsIlByb2dyYW1MaXN0IiwicHJvZ3JhbXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwiaXNDdXJyZW50Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImJhZGdlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidGFicyIsImZpbHRlclByb2dyYW1zIiwiZmlsdGVyIiwicHJvZ3JhbSIsImZpbHRlcmVkUHJvZ3JhbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInRhYiIsImluZGV4Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/programs/list.tsx\n"));

/***/ })

});