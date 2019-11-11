webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_recomendation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/recomendation */ "./components/recomendation.js");
var _jsxFileName = "/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([""]),
      synonymList = _useState[0],
      setSynonym = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      definition = _useState2[0],
      setDefinition = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      textValue = _useState3[0],
      setTextValue = _useState3[1];

  function recomendation(textarea) {
    setTextValue(textarea);

    var lastWord = function lastWord(txt) {
      return txt.split(' ').slice(-1);
    };

    fetch('http://localhost:5000/words/' + lastWord(textarea)).then(function (res) {
      res.json().then(function (data) {
        setDefinition(data['definition'] || "...");
        setSynonym(data['synonyms'] || []);
      });
    });
  }

  ;

  function exportar() {
    var txt = document.getElementById('text');
    fetch('http://localhost:5000/semantic/', {
      method: 'POST',
      body: txt.value
    }).then(function (res) {
      res.json().then(function (data) {
        console.table(data);
      });
    });
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("textarea", {
    value: textValue,
    onChange: function onChange(text) {
      return recomendation(text.target.value);
    },
    rows: "10",
    cols: "100",
    id: "text",
    placeholder: "Write here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("button", {
    onClick: exportar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Get semantic")), __jsx(_components_recomendation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    definition: definition,
    synonyms: synonymList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.61282bf1312e6d44cc75.hot-update.js.map