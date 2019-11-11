webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/semantic.js":
/*!********************************!*\
  !*** ./components/semantic.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/app/components/semantic.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Semantic = function Semantic(props) {
  return props.tags.forEach(function (arrTag) {
    var word = arrTag[0];
    var clasification = arrTag[1];

    __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, word, ": ", clasification));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Semantic);

/***/ })

})
//# sourceMappingURL=index.js.662cb9fd931582545856.hot-update.js.map