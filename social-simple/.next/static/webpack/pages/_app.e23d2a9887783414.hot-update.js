"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout/Footer/Footer.tsx":
/*!*************************************************!*\
  !*** ./src/components/Layout/Footer/Footer.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/constants */ \"./src/config/constants/index.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _partials_FooterLinksDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/FooterLinksDiv */ \"./src/components/Layout/Footer/partials/FooterLinksDiv.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Footer = (props)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // states\n    const [play, setPlay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        wakieIcon: false,\n        emailIcon: false,\n        locationIcon: false\n    });\n    const sendMail = ()=>{\n        router.push(\"mailto:\".concat(atob(_config_constants__WEBPACK_IMPORTED_MODULE_1__.encodedEmail)));\n    };\n    const phoneCall = ()=>{\n        router.push(\"tel:\".concat(atob(_config_constants__WEBPACK_IMPORTED_MODULE_1__.encodedEmail)));\n    };\n    const adressFind = ()=>{\n        router.push(atob(_config_constants__WEBPACK_IMPORTED_MODULE_1__.encodedAdress));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            className: \"bg-primary pt-10 pb-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid xll:grid-cols-[61%_39%] 3xll:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center md:grid md:grid-cols-3 md:text-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                            variant: \"h4\",\n                                            gutterBottom: true,\n                                            className: \"text-white\",\n                                            children: \" Let's keep in touch!\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                            variant: \"subtitle1\",\n                                            gutterBottom: true,\n                                            className: \"text-white mt-0 mb-2\",\n                                            children: \"Find us on any of these platforms, we respond 1-2 business days.\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid md:grid-cols-2 mt-0 md:mt-9 lg:mt-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-7 md:mt-0 flex flex-col items-center md:block\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partials_FooterLinksDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            title: \"Useful Links\",\n                                            array: _config_constants__WEBPACK_IMPORTED_MODULE_1__.footerUserfulItems.slice(0, 3)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-8 md:mt-0 text-center md:text-start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partials_FooterLinksDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            title: \"Legal\",\n                                            array: _config_constants__WEBPACK_IMPORTED_MODULE_1__.footerUserfulItems.slice(3, 6)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"md:my-6 my-4 border-primary-300\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full px-4 mx-auto text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            variant: \"body2\",\n                            gutterBottom: true,\n                            className: \"py-1 uppercase text-white\",\n                            children: [\n                                \"Copyright \\xa9\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    id: \"get-current-year\",\n                                    children: new Date().getFullYear()\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-secondary\",\n                                    children: \" Social Buzz\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\React\\\\social-media\\\\social-simple\\\\src\\\\components\\\\Layout\\\\Footer\\\\Footer.tsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Footer, \"C5Hhk/VzEQj8I0mF5JSeh2jceAw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyL0Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9IO0FBRTFFO0FBQ0g7QUFDZTtBQUdmO0FBSXZDLE1BQU1RLFNBQVMsQ0FBQ0MsUUFBaUI7O0lBRTdCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixTQUFTO0lBQ1QsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQUVRLFdBQVcsS0FBSztRQUFFQyxXQUFXLEtBQUs7UUFBRUMsY0FBYyxLQUFLO0lBQUM7SUFFM0YsTUFBTUMsV0FBVyxJQUFNO1FBQ25CTixPQUFPTyxJQUFJLENBQUMsVUFBVUMsTUFBTSxDQUFDQyxLQUFLbEIsMkRBQVlBO0lBQ2xEO0lBRUEsTUFBTW1CLFlBQVksSUFBTTtRQUNwQlYsT0FBT08sSUFBSSxDQUFDLE9BQU9DLE1BQU0sQ0FBQ0MsS0FBS2xCLDJEQUFZQTtJQUMvQztJQUVBLE1BQU1vQixhQUFhLElBQU07UUFDckJYLE9BQU9PLElBQUksQ0FBQ0UsS0FBS25CLDREQUFhQTtJQUNsQztJQUVBLHFCQUNJO2tCQUNJLDRFQUFDc0I7WUFBT0MsV0FBVTtzQkFDZCw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUVYLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBRVgsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUVYLDRFQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNwQixxREFBVUE7NENBQUNzQixTQUFROzRDQUFLQyxZQUFZOzRDQUFDSCxXQUFVO3NEQUMxQzs7Ozs7O3NEQUdOLDhEQUFDcEIscURBQVVBOzRDQUFDc0IsU0FBUTs0Q0FBWUMsWUFBWTs0Q0FBQ0gsV0FBVTtzREFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU10Riw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUVYLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWCw0RUFBQ2pCLGdFQUFjQTs0Q0FDWHFCLE9BQU07NENBQ05DLE9BQU8xQix1RUFBd0IsQ0FBQyxHQUFHOzs7Ozs7Ozs7OztrREFJM0MsOERBQUNzQjt3Q0FBSUQsV0FBVTtrREFDWCw0RUFBQ2pCLGdFQUFjQTs0Q0FDWHFCLE9BQU07NENBQ05DLE9BQU8xQix1RUFBd0IsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRbkQsOERBQUM0Qjt3QkFBR1AsV0FBVTs7Ozs7O2tDQUdkLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWCw0RUFBQ3BCLHFEQUFVQTs0QkFBQ3NCLFNBQVE7NEJBQVFDLFlBQVk7NEJBQUNILFdBQVU7O2dDQUE0Qjs4Q0FFM0UsOERBQUNRO29DQUFLQyxJQUFHOzhDQUFvQixJQUFJQyxPQUFPQyxXQUFXOzs7Ozs7OENBQ25ELDhEQUFDSDtvQ0FBS1IsV0FBVTs4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzdEO0dBM0VNZjs7UUFFYUQsa0RBQVNBOzs7S0FGdEJDO0FBNkVOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvRm9vdGVyLnRzeD81YTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZHJlc3MsIGVtYWlsQWNjLCBlbmNvZGVkQWRyZXNzLCBlbmNvZGVkRW1haWwsIGZvb3RlclVzZXJmdWxJdGVtcywgbW9iaWxlTnVtYmVyIH0gZnJvbSAnQGNvbmZpZy9jb25zdGFudHMnXHJcbmltcG9ydCB7IG5hdkl0ZW1UeXBlIH0gZnJvbSAnQGNvbmZpZy90eXBlcy90eXBlcydcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyTGlua3NEaXYgZnJvbSAnLi9wYXJ0aWFscy9Gb290ZXJMaW5rc0RpdidcclxuaW1wb3J0IERlc2t0b3BGb2xsb3dNZSBmcm9tICcuL3BhcnRpYWxzL0Rlc2t0b3BGb2xsb3dNZSdcclxuaW1wb3J0IERldGFpbHNJdGVtIGZyb20gJy4vcGFydGlhbHMvRGV0YWlsc0l0ZW0nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHt9XHJcblxyXG5jb25zdCBGb290ZXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gc3RhdGVzXHJcbiAgICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSB1c2VTdGF0ZSh7IHdha2llSWNvbjogZmFsc2UsIGVtYWlsSWNvbjogZmFsc2UsIGxvY2F0aW9uSWNvbjogZmFsc2UgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VuZE1haWwgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJ21haWx0bzonLmNvbmNhdChhdG9iKGVuY29kZWRFbWFpbCkpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGhvbmVDYWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCd0ZWw6Jy5jb25jYXQoYXRvYihlbmNvZGVkRW1haWwpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkcmVzc0ZpbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYXRvYihlbmNvZGVkQWRyZXNzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHB0LTEwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB4bGw6Z3JpZC1jb2xzLVs2MSVfMzklXSAzeGxsOmdyaWQtY29scy0yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMyBtZDp0ZXh0LXN0YXJ0Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgIExldCdzIGtlZXAgaW4gdG91Y2ghYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG10LTAgbWItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgdXMgb24gYW55IG9mIHRoZXNlIHBsYXRmb3Jtcywgd2UgcmVzcG9uZCAxLTIgYnVzaW5lc3MgZGF5cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBtZDpncmlkLWNvbHMtMiBtdC0wIG1kOm10LTkgbGc6bXQtMCc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTcgbWQ6bXQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDpibG9jayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlckxpbmtzRGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdVc2VmdWwgTGlua3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5PXtmb290ZXJVc2VyZnVsSXRlbXMuc2xpY2UoMCwgMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC04IG1kOm10LTAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1zdGFydCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlckxpbmtzRGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdMZWdhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXk9e2Zvb3RlclVzZXJmdWxJdGVtcy5zbGljZSgzLCA2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtZDpteS02IG15LTQgYm9yZGVyLXByaW1hcnktMzAwXCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPVwicHktMSB1cHBlcmNhc2UgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImdldC1jdXJyZW50LXllYXJcIj57bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnknPiBTb2NpYWwgQnV6ejwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdLCJuYW1lcyI6WyJlbmNvZGVkQWRyZXNzIiwiZW5jb2RlZEVtYWlsIiwiZm9vdGVyVXNlcmZ1bEl0ZW1zIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJGb290ZXJMaW5rc0RpdiIsInVzZVJvdXRlciIsIkZvb3RlciIsInByb3BzIiwicm91dGVyIiwicGxheSIsInNldFBsYXkiLCJ3YWtpZUljb24iLCJlbWFpbEljb24iLCJsb2NhdGlvbkljb24iLCJzZW5kTWFpbCIsInB1c2giLCJjb25jYXQiLCJhdG9iIiwicGhvbmVDYWxsIiwiYWRyZXNzRmluZCIsImZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsInZhcmlhbnQiLCJndXR0ZXJCb3R0b20iLCJ0aXRsZSIsImFycmF5Iiwic2xpY2UiLCJociIsInNwYW4iLCJpZCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Footer/Footer.tsx\n"));

/***/ })

});