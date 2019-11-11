module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nhdb/Definition/app/components/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "stop words not works")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/nhdb/Definition/app/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Definition"), __jsx("link", {
    rel: "stylesheet",
    href: "./index.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("script", {
    src: "./index.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Definition Words")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/recomendation.js":
/*!*************************************!*\
  !*** ./components/recomendation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nhdb/Definition/app/components/recomendation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Recomendation(props) {
  function change(selectWord) {
    const txt = document.getElementById('text');
    const words = txt.value.trim().split(' ');
    words.pop();
    words.push(selectWord.trim());
    txt.value = words.join(' ');
  }

  return __jsx("div", {
    className: "col-sm-12 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Definition: "), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("p", {
    id: "definition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.definition), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Synonyms: "), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("ul", {
    id: "synonym_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.synonyms.map(synonym => __jsx("li", {
    key: synonym,
    className: "synonym",
    onClick: e => change(e.target.innerHTML),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " ", synonym))));
}

/* harmony default export */ __webpack_exports__["default"] = (Recomendation);

/***/ }),

/***/ "./components/semantic.js":
/*!********************************!*\
  !*** ./components/semantic.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nhdb/Definition/app/components/semantic.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Semantic = props => {
  console.table(props.tags);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.tags.forEach(arrTag => __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, arrTag[0], "  ", arrTag[1])));
};

/* harmony default export */ __webpack_exports__["default"] = (Semantic);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_semantic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/semantic */ "./components/semantic.js");
/* harmony import */ var _components_recomendation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/recomendation */ "./components/recomendation.js");
var _jsxFileName = "/home/nhdb/Definition/app/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function App() {
  const {
    0: synonymList,
    1: setSynonym
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([""]);
  const {
    0: definition,
    1: setDefinition
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: textValue,
    1: setTextValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: tags,
    1: setTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  function recomendation(textarea) {
    setTextValue(textarea);

    const lastWord = txt => txt.split(' ').slice(-1);

    fetch('https://apidefinition.herokuapp.com/words/' + lastWord(textarea)).then(res => {
      res.json().then(data => {
        setDefinition(data['definition'] || "...");
        setSynonym(data['synonyms'] || []);
      });
    });
  }

  ;

  function sintaticAnalisis() {
    const txt = document.getElementById('text');
    fetch('http://localhost:5000', {
      method: 'POST',
      body: txt.value
    }).then(res => res.json().then(data => setTags(data['tags'])));
  }

  return __jsx("div", {
    className: "jsx-4082422546" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4082422546" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4082422546" + " " + 'col-sm-12 col-lg-6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("textarea", {
    value: textValue,
    onChange: text => recomendation(text.target.value),
    id: "text",
    placeholder: "Write here",
    className: "jsx-4082422546" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-4082422546",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(_components_recomendation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    definition: definition,
    synonyms: synonymList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(_components_semantic__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tags: tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4082422546",
    __self: this
  }, "@font-face{font-family:myFirstFont;src:url(imperfecta.ttf);}body{background-color:rgb(31,31,31);color:rgb(202,202,202);font-family:myFirstFont;margin-left:25px;}.title,footer{font-size:60px;font-weight:900;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin:5px;padding:10px;}.synonym{list-style-type:none;}body{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25oZGIvRGVmaW5pdGlvbi9hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEN5QixBQUcrQixBQUtXLEFBT2xCLEFBU00sQUFLVCxlQWJJLE1BU2pCLEdBckJ1QixPQUtBLEFBUUYsaUJBWHJCLE1BSXlCLG9CQW9CSCxJQW5CTCxpQkFDakIsaUNBT1csV0FDRSxhQUNiLEFBVUEiLCJmaWxlIjoiL2hvbWUvbmhkYi9EZWZpbml0aW9uL2FwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBTZW1hbnRpYyBmcm9tICcuLi9jb21wb25lbnRzL3NlbWFudGljJztcbmltcG9ydCBSZWNvbWVuZGF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvcmVjb21lbmRhdGlvbic7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblx0Y29uc3QgW3N5bm9ueW1MaXN0LCBzZXRTeW5vbnltXSA9IHVzZVN0YXRlKFtcIlwiXSk7XG5cdGNvbnN0IFtkZWZpbml0aW9uLCBzZXREZWZpbml0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbdGV4dFZhbHVlLCBzZXRUZXh0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRmdW5jdGlvbiByZWNvbWVuZGF0aW9uKHRleHRhcmVhKSB7XG5cdFx0c2V0VGV4dFZhbHVlKHRleHRhcmVhKTtcblx0XHRjb25zdCBsYXN0V29yZCA9IHR4dCA9PiB0eHQuc3BsaXQoJyAnKS5zbGljZSgtMSk7XG5cblx0XHRmZXRjaCgnaHR0cHM6Ly9hcGlkZWZpbml0aW9uLmhlcm9rdWFwcC5jb20vd29yZHMvJytsYXN0V29yZCh0ZXh0YXJlYSkpXG5cdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdHJlcy5qc29uKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRzZXREZWZpbml0aW9uKGRhdGFbJ2RlZmluaXRpb24nXSB8fCBcIi4uLlwiKTtcblx0XHRcdFx0c2V0U3lub255bShkYXRhWydzeW5vbnltcyddIHx8IFtdKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gc2ludGF0aWNBbmFsaXNpcygpe1xuXHRcdGNvbnN0IHR4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0Jyk7XG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0Ym9keTogdHh0LnZhbHVlLFxuXHRcdH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkudGhlbihkYXRhID0+IHNldFRhZ3MoZGF0YVsndGFncyddKSApKTtcblx0fVxuXG5cdHJldHVybiAoXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdDxIZWFkZXIvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbGctNic+XG5cdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0ZXh0VmFsdWV9IG9uQ2hhbmdlPXsgdGV4dCA9PiByZWNvbWVuZGF0aW9uKHRleHQudGFyZ2V0LnZhbHVlKSB9IGlkPSd0ZXh0JyBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmVcIi8+PGJyLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxSZWNvbWVuZGF0aW9uIGRlZmluaXRpb249e2RlZmluaXRpb259IHN5bm9ueW1zPXtzeW5vbnltTGlzdH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PFNlbWFudGljIHRhZ3M9e3RhZ3N9Lz5cblx0XHRcdFxuICAgICAgXHRcdDxGb290ZXIvPlxuXHRcdFx0ICA8c3R5bGUganN4IGdsb2JhbCA+e2Bcblx0XHRcdFx0XHRAZm9udC1mYWNlIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBteUZpcnN0Rm9udDtcblx0XHRcdFx0XHRcdHNyYzogdXJsKGltcGVyZmVjdGEudHRmKTtcblx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgYm9keXtcblx0XHRcdFx0XHRcdCAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xuXHRcdFx0XHRcdFx0ICBjb2xvcjpyZ2IoMjAyLDIwMiwyMDIpO1xuXHRcdFx0XHRcdFx0ICBmb250LWZhbWlseTogbXlGaXJzdEZvbnQ7XG5cdFx0XHRcdFx0XHQgIG1hcmdpbi1sZWZ0OjI1cHg7XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICBcblx0XHRcdFx0XHQgIC50aXRsZSwgZm9vdGVye1xuXHRcdFx0XHRcdFx0ICBmb250LXNpemU6IDYwcHg7XG5cdFx0XHRcdFx0XHQgIGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdFx0XHQgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgIG1hcmdpbjo1cHg7XG5cdFx0XHRcdFx0XHQgIHBhZGRpbmc6MTBweDtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdCAgLnN5bm9ueW17XG5cdFx0XHRcdFx0XHQgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgXG5cdFx0XHRcdFx0ICB9XG5cblx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdCAgYm9keXsgXG5cdFx0XHRcdFx0XHQgIGRpc3BsYXk6ZmxleDsgXG5cdFx0XHRcdFx0XHQgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXG5cdFx0XHRcdFx0ICB9XG5cblx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdCAgXG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=/home/nhdb/Definition/app/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nhdb/Definition/app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map