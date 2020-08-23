webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_projects_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/projects.json */ "./src/util/projects.json");
var _util_projects_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../util/projects.json */ "./src/util/projects.json", 1);





var _jsxFileName = "C:\\Users\\WhiteCanZE\\Desktop\\whitecanze.github.io\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);
    _this.myhome = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.myabout = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.myskill = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.myproject = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.mycontact = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var strings = ["tech geek", "developer", "Analytical", "Enjoy taking challenges", "Make everything possible", "Get things done"];
      var options = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: false
      };
      this.typed = new typed_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.el, options);
      var isBrowser = window && window.addEventListener('scroll', function () {
        var navbar = document.getElementById("mynav");
        var sticky = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(navbar).offsetTop;
        var myprogressbar = document.getElementById('progressbar'); // let myprogrsspercentpercent = document.getElementById('percent')

        var totalheight = document.body.scrollHeight - window.innerHeight;
        var homebtn = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("home-btn"));
        var aboutbtn = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("about-btn"));
        var skillbtn = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("skills-btn"));
        var projectbtn = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("projects-btn"));
        var contactbtn = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("contact-btn")); // let header = ReactDOM.findDOMNode(document.getElementById("header")).offsetTop

        var aboutme = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("aboutme")).offsetTop;
        var skills = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("skills")).offsetTop;
        var projects = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("projects")).offsetTop;
        var contact = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(document.getElementById("contact")).offsetTop;
        var progress = window.pageYOffset / totalheight * 100;

        if (progress > 100) {
          progress = 100;
        }

        react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(myprogressbar).style.width = progress + "%";

        if (window.pageYOffset > sticky) {
          react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(navbar).classList.add("fixed-top");
        } else {
          react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(navbar).classList.remove("fixed-top");
        } // console.log("pageYOffset:"+window.pageYOffset,"header:"+header,"aboutme:"+aboutme,"skills:"+skills,"projects:"+projects,"contact:"+contact)


        if (window.pageYOffset < aboutme) {
          if (aboutbtn.classList.contains('has-focus')) {
            aboutbtn.classList.remove('has-focus');
            homebtn.classList.add('has-focus');
          } else if (skillbtn.classList.contains('has-focus')) {
            skillbtn.classList.remove('has-focus');
            homebtn.classList.add('has-focus');
          } else if (projectbtn.classList.contains('has-focus')) {
            projectbtn.classList.remove('has-focus');
            homebtn.classList.add('has-focus');
          } else if (contactbtn.classList.contains('has-focus')) {
            contactbtn.classList.remove('has-focus');
            homebtn.classList.add('has-focus');
          }
        }

        if (window.pageYOffset >= aboutme - 184 && window.pageYOffset < skills) {
          if (homebtn.classList.contains('has-focus')) {
            homebtn.classList.remove('has-focus');
            aboutbtn.classList.add('has-focus');
          } else if (skillbtn.classList.contains('has-focus')) {
            skillbtn.classList.remove('has-focus');
            aboutbtn.classList.add('has-focus');
          } else if (projectbtn.classList.contains('has-focus')) {
            projectbtn.classList.remove('has-focus');
            aboutbtn.classList.add('has-focus');
          } else if (contactbtn.classList.contains('has-focus')) {
            contactbtn.classList.remove('has-focus');
            aboutbtn.classList.add('has-focus');
          }
        }

        if (window.pageYOffset >= skills - 100 && window.pageYOffset < projects) {
          if (homebtn.classList.contains('has-focus')) {
            homebtn.classList.remove('has-focus');
            skillbtn.classList.add('has-focus');
          } else if (aboutbtn.classList.contains('has-focus')) {
            aboutbtn.classList.remove('has-focus');
            skillbtn.classList.add('has-focus');
          } else if (projectbtn.classList.contains('has-focus')) {
            projectbtn.classList.remove('has-focus');
            skillbtn.classList.add('has-focus');
          } else if (contactbtn.classList.contains('has-focus')) {
            contactbtn.classList.remove('has-focus');
            skillbtn.classList.add('has-focus');
          }
        }

        if (window.pageYOffset >= projects - 100 && window.pageYOffset < contact) {
          if (aboutbtn.classList.contains('has-focus')) {
            aboutbtn.classList.remove('has-focus');
            projectbtn.classList.add('has-focus');
          } else if (skillbtn.classList.contains('has-focus')) {
            skillbtn.classList.remove('has-focus');
            projectbtn.classList.add('has-focus');
          } else if (contactbtn.classList.contains('has-focus')) {
            contactbtn.classList.remove('has-focus');
            projectbtn.classList.add('has-focus');
          } else if (homebtn.classList.contains('has-focus')) {
            homebtn.classList.remove('has-focus');
            projectbtn.classList.add('has-focus');
          }
        }

        if (window.pageYOffset >= contact - 300) {
          if (homebtn.classList.contains('has-focus')) {
            homebtn.classList.remove('has-focus');
            contactbtn.classList.add('has-focus');
          } else if (aboutbtn.classList.contains('has-focus')) {
            aboutbtn.classList.remove('has-focus');
            contactbtn.classList.add('has-focus');
          } else if (skillbtn.classList.contains('has-focus')) {
            skillbtn.classList.remove('has-focus');
            contactbtn.classList.add('has-focus');
          } else if (projectbtn.classList.contains('has-focus')) {
            projectbtn.classList.remove('has-focus');
            contactbtn.classList.add('has-focus');
          }
        }

        return progress;
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.typed.destroy();
    }
  }, {
    key: "scroll",
    value: function scroll(ref) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }
      }, "WhiteCanZE - Developer \uD83D\uDE80"), __jsx("link", {
        rel: "icon",
        href: "/mylogo4.webp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",
        integrity: "sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css",
        integrity: "sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 17
        }
      }), __jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }), __jsx("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js",
        integrity: "sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }
      }, __jsx("nav", {
        className: "my-nav",
        id: "mynav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "box-content-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "mylogo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 29
        }
      }, __jsx("img", {
        loading: "lazy",
        src: "/mylogo4.webp",
        alt: "my logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 33
        }
      }), __jsx("h1", {
        id: "mytext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 33
        }
      }, "WhiteCanZE")), __jsx("div", {
        className: "my-list-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 29
        }
      }, __jsx("ul", {
        className: "mynav-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 33
        }
      }, __jsx("li", {
        className: "has-focus",
        id: "home-btn",
        onClick: function onClick() {
          _this2.scroll(_this2.myhome);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 37
        }
      }, "Home"), __jsx("li", {
        id: "about-btn",
        onClick: function onClick() {
          _this2.myabout ? _this2.scroll(_this2.myabout) : pass;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 37
        }
      }, "About"), __jsx("li", {
        id: "skills-btn",
        onClick: function onClick() {
          _this2.myskill ? _this2.scroll(_this2.myskill) : pass;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 37
        }
      }, "Skills"), __jsx("li", {
        id: "projects-btn",
        onClick: function onClick() {
          _this2.myproject ? _this2.scroll(_this2.myproject) : pass;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 37
        }
      }, "Projects"), __jsx("li", {
        id: "contact-btn",
        onClick: function onClick() {
          _this2.mycontact ? _this2.scroll(_this2.mycontact) : pass;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 37
        }
      }, "Contact")))), __jsx("div", {
        className: "myprogressbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }
      }, __jsx("div", {
        id: "progressbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 29
        }
      }), __jsx("div", {
        id: "percent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 29
        }
      })))), __jsx("div", {
        className: "myheader",
        ref: this.myhome,
        id: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "first-header-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 25
        }
      }, __jsx("h1", {
        id: "first-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 29
        }
      }, "hi!"), __jsx("h1", {
        id: "sub-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 29
        }
      }, "I'm WhiteCanZE"), __jsx("h1", {
        id: "sub-text2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 29
        }
      }, __jsx("span", {
        ref: function ref(el) {
          _this2.el = el;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "my-btn-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "my-cus-btn1",
        onClick: function onClick() {
          _this2.mycontact ? _this2.scroll(_this2.mycontact) : pass;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 29
        }
      }, "Contact me"), __jsx("a", {
        className: "my-cus-btn2",
        href: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 29
        }
      }, "view resume")), __jsx("img", {
        className: "header-image",
        src: "/new-img3.webp",
        alt: "header-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 25
        }
      }))), __jsx("div", {
        className: "mybody",
        ref: this.myabout,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "aboutme",
        id: "aboutme",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "aboutme-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 25
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 29
        }
      }, "\uD83D\uDE80  A li'l bit ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 48
        }
      }), " about myself"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 71
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 29
        }
      }, " Hi!, i'm Phatcharapong Jullamonton i love tech and computer", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 92
        }
      }), "since i was young it's make me be a tech geek, dunno why when ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 95
        }
      }), "the first met the coding in a computer class at university i felt ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 99
        }
      }), "it's right for me, then i think coding it's a part of my life, each ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 101
        }
      }), "computer language when i learn and write it easier than other ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 95
        }
      }), "class for me Python language is the best of me because ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 88
        }
      }), "it's useful so much stuff of this time. \uD83D\uDE04"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 33
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/my-resume-en.pdf",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 29
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 33
        }
      }, __jsx("button", {
        className: "my-cus-btn3",
        download: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 37
        }
      }, "download resume")))), __jsx("div", {
        className: "aboutme-img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 25
        }
      }, __jsx("img", {
        loading: "lazy",
        src: "/new-img1.webp",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 29
        }
      }))), __jsx("div", {
        className: "myskills",
        ref: this.myskill,
        id: "skills",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 29
        }
      }), " My_skills ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 79
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 93
        }
      })), __jsx("div", {
        className: "card-zone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-html5-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-css3-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-javascript-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-python-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 33
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 35
        }
      }), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-django-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 29
        }
      }, __jsx("img", {
        className: "drop-shadow",
        src: "/flask.webp",
        alt: "flask-icon",
        width: "80px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-csharp-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-dot-net-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-mongodb-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-mysql-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-java-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-android-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 33
        }
      })))), __jsx("div", {
        className: "myprojects",
        ref: this.myproject,
        id: "projects",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 29
        }
      }), " My Projects ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 81
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 95
        }
      })), __jsx("div", {
        className: "card-zone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 25
        }
      }, Object.entries(_util_projects_json__WEBPACK_IMPORTED_MODULE_10__).map(function (val, i) {
        return __jsx("div", {
          className: "card-project",
          key: i,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 40
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: val[1].link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 37
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 41
          }
        }, __jsx("h1", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 45
          }
        }, val[1].title))), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 37
          }
        }, val[1].detail), __jsx("div", {
          className: "detail-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 45
          }
        }, "Platform"), __jsx("span", {
          className: "text-a-box a1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 45
          }
        }, val[1].platform)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 45
          }
        }, "Editor"), __jsx("span", {
          className: "text-a-box a2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 45
          }
        }, val[1].editor)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 45
          }
        }, "Framework"), __jsx("span", {
          className: "text-a-box a3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 45
          }
        }, val[1].framework)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 45
          }
        }, "Library"), __jsx("span", {
          className: "text-a-box a4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 45
          }
        }, val[1].library)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 45
          }
        }, "Language"), __jsx("span", {
          className: "text-a-box a5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 45
          }
        }, val[1].language))));
      }))), __jsx("div", {
        className: "mycontact",
        ref: this.mycontact,
        id: "contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 29
        }
      }), " My Contact ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 80
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 94
        }
      })), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 25
        }
      }, "Say Hi to me! \uD83D\uDC4B"), __jsx("div", {
        className: "mybodywork",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 25
        }
      }, __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 29
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "mailto:phatcharapongjullamonton@gmail.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-envelope-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://github.com/whitecanze",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-github",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://www.facebook.com/WhiteCanZE/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-facebook-f",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 33
        }
      }, __jsx("a", {
        "data-toggle": "modal",
        "data-target": "#line-qrcode",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 37
        }
      }, __jsx("i", {
        className: "fab fa-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 41
        }
      })))))), __jsx("div", {
        className: "myfooter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }
      }, "\xA9 2020 WHITECANZE.")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm15aG9tZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibXlhYm91dCIsIm15c2tpbGwiLCJteXByb2plY3QiLCJteWNvbnRhY3QiLCJzdHJpbmdzIiwib3B0aW9ucyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImxvb3AiLCJzaG93Q3Vyc29yIiwidHlwZWQiLCJUeXBlZCIsImVsIiwiaXNCcm93c2VyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdmJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGlja3kiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwib2Zmc2V0VG9wIiwibXlwcm9ncmVzc2JhciIsInRvdGFsaGVpZ2h0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiaG9tZWJ0biIsImFib3V0YnRuIiwic2tpbGxidG4iLCJwcm9qZWN0YnRuIiwiY29udGFjdGJ0biIsImFib3V0bWUiLCJza2lsbHMiLCJwcm9qZWN0cyIsImNvbnRhY3QiLCJwcm9ncmVzcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiZGVzdHJveSIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2Nyb2xsIiwicGFzcyIsIk9iamVjdCIsImVudHJpZXMiLCJQcm9qZWN0IiwibWFwIiwidmFsIiwiaSIsImxpbmsiLCJ0aXRsZSIsImRldGFpbCIsInBsYXRmb3JtIiwiZWRpdG9yIiwiZnJhbWV3b3JrIiwibGlicmFyeSIsImxhbmd1YWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7O0FBR2pCLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxNQUFMLEdBQWNDLDRDQUFLLENBQUNDLFNBQU4sRUFBZDtBQUNBLFVBQUtDLE9BQUwsR0FBZUYsNENBQUssQ0FBQ0MsU0FBTixFQUFmO0FBQ0EsVUFBS0UsT0FBTCxHQUFlSCw0Q0FBSyxDQUFDQyxTQUFOLEVBQWY7QUFDQSxVQUFLRyxTQUFMLEdBQWlCSiw0Q0FBSyxDQUFDQyxTQUFOLEVBQWpCO0FBQ0EsVUFBS0ksU0FBTCxHQUFpQkwsNENBQUssQ0FBQ0MsU0FBTixFQUFqQjtBQU5lO0FBT2xCOzs7O3dDQUVtQjtBQUNoQixVQUFNSyxPQUFPLEdBQ1QsQ0FDQSxXQURBLEVBRUEsV0FGQSxFQUdBLFlBSEEsRUFJQSx5QkFKQSxFQUtBLDBCQUxBLEVBTUEsaUJBTkEsQ0FESjtBQVNBLFVBQU1DLE9BQU8sR0FBRztBQUNaRCxlQUFPLEVBQUVBLE9BREc7QUFFWkUsaUJBQVMsRUFBRSxHQUZDO0FBR1pDLGlCQUFTLEVBQUUsRUFIQztBQUlaQyxZQUFJLEVBQUUsSUFKTTtBQUtaQyxrQkFBVSxFQUFFO0FBTEEsT0FBaEI7QUFPQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsK0NBQUosQ0FBVSxLQUFLQyxFQUFmLEVBQW1CUCxPQUFuQixDQUFiO0FBRUEsVUFBTVEsU0FBUyxHQUFHQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNoRSxZQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0EsWUFBSUMsTUFBTSxHQUFHQyxnREFBUSxDQUFDQyxXQUFULENBQXFCTCxNQUFyQixFQUE2Qk0sU0FBMUM7QUFDQSxZQUFJQyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQixDQUhnRSxDQUloRTs7QUFDQSxZQUFJTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjQyxZQUFkLEdBQTZCWixNQUFNLENBQUNhLFdBQXREO0FBQ0EsWUFBSUMsT0FBTyxHQUFHUixnREFBUSxDQUFDQyxXQUFULENBQXFCSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBckIsQ0FBZDtBQUNBLFlBQUlXLFFBQVEsR0FBR1QsZ0RBQVEsQ0FBQ0MsV0FBVCxDQUFxQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQXJCLENBQWY7QUFDQSxZQUFJWSxRQUFRLEdBQUdWLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFyQixDQUFmO0FBQ0EsWUFBSWEsVUFBVSxHQUFHWCxnREFBUSxDQUFDQyxXQUFULENBQXFCSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckIsQ0FBakI7QUFDQSxZQUFJYyxVQUFVLEdBQUdaLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFyQixDQUFqQixDQVZnRSxDQVdoRTs7QUFDQSxZQUFJZSxPQUFPLEdBQUdiLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFyQixFQUF5REksU0FBdkU7QUFDQSxZQUFJWSxNQUFNLEdBQUdkLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFyQixFQUF3REksU0FBckU7QUFDQSxZQUFJYSxRQUFRLEdBQUdmLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFyQixFQUEwREksU0FBekU7QUFDQSxZQUFJYyxPQUFPLEdBQUdoQixnREFBUSxDQUFDQyxXQUFULENBQXFCSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBckIsRUFBeURJLFNBQXZFO0FBQ0EsWUFBSWUsUUFBUSxHQUFJdkIsTUFBTSxDQUFDd0IsV0FBUCxHQUFxQmQsV0FBdEIsR0FBcUMsR0FBcEQ7O0FBQ0EsWUFBSWEsUUFBUSxHQUFHLEdBQWYsRUFBb0I7QUFDaEJBLGtCQUFRLEdBQUcsR0FBWDtBQUNIOztBQUNEakIsd0RBQVEsQ0FBQ0MsV0FBVCxDQUFxQkUsYUFBckIsRUFBb0NnQixLQUFwQyxDQUEwQ0MsS0FBMUMsR0FBa0RILFFBQVEsR0FBRyxHQUE3RDs7QUFDQSxZQUFJdkIsTUFBTSxDQUFDd0IsV0FBUCxHQUFxQm5CLE1BQXpCLEVBQWlDO0FBQzdCQywwREFBUSxDQUFDQyxXQUFULENBQXFCTCxNQUFyQixFQUE2QnlCLFNBQTdCLENBQXVDQyxHQUF2QyxDQUEyQyxXQUEzQztBQUNILFNBRkQsTUFFTztBQUNIdEIsMERBQVEsQ0FBQ0MsV0FBVCxDQUFxQkwsTUFBckIsRUFBNkJ5QixTQUE3QixDQUF1Q0UsTUFBdkMsQ0FBOEMsV0FBOUM7QUFDSCxTQXpCK0QsQ0EwQmhFOzs7QUFDQSxZQUFJN0IsTUFBTSxDQUFDd0IsV0FBUCxHQUFxQkwsT0FBekIsRUFBa0M7QUFDOUIsY0FBSUosUUFBUSxDQUFDWSxTQUFULENBQW1CRyxRQUFuQixDQUE0QixXQUE1QixDQUFKLEVBQThDO0FBQzFDZixvQkFBUSxDQUFDWSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixXQUExQjtBQUNBZixtQkFBTyxDQUFDYSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixXQUF0QjtBQUNILFdBSEQsTUFJSyxJQUFJWixRQUFRLENBQUNXLFNBQVQsQ0FBbUJHLFFBQW5CLENBQTRCLFdBQTVCLENBQUosRUFBOEM7QUFDL0NkLG9CQUFRLENBQUNXLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0FmLG1CQUFPLENBQUNhLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0gsV0FISSxNQUlBLElBQUlYLFVBQVUsQ0FBQ1UsU0FBWCxDQUFxQkcsUUFBckIsQ0FBOEIsV0FBOUIsQ0FBSixFQUFnRDtBQUNqRGIsc0JBQVUsQ0FBQ1UsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsV0FBNUI7QUFDQWYsbUJBQU8sQ0FBQ2EsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDSCxXQUhJLE1BSUEsSUFBSVYsVUFBVSxDQUFDUyxTQUFYLENBQXFCRyxRQUFyQixDQUE4QixXQUE5QixDQUFKLEVBQWdEO0FBQ2pEWixzQkFBVSxDQUFDUyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixXQUE1QjtBQUNBZixtQkFBTyxDQUFDYSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixXQUF0QjtBQUNIO0FBQ0o7O0FBQ0QsWUFBSTVCLE1BQU0sQ0FBQ3dCLFdBQVAsSUFBc0JMLE9BQU8sR0FBQyxHQUE5QixJQUFxQ25CLE1BQU0sQ0FBQ3dCLFdBQVAsR0FBcUJKLE1BQTlELEVBQXNFO0FBQ2xFLGNBQUlOLE9BQU8sQ0FBQ2EsU0FBUixDQUFrQkcsUUFBbEIsQ0FBMkIsV0FBM0IsQ0FBSixFQUE2QztBQUN6Q2hCLG1CQUFPLENBQUNhLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFdBQXpCO0FBQ0FkLG9CQUFRLENBQUNZLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0gsV0FIRCxNQUlLLElBQUlaLFFBQVEsQ0FBQ1csU0FBVCxDQUFtQkcsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBSixFQUE4QztBQUMvQ2Qsb0JBQVEsQ0FBQ1csU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDQWQsb0JBQVEsQ0FBQ1ksU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDSCxXQUhJLE1BSUEsSUFBSVgsVUFBVSxDQUFDVSxTQUFYLENBQXFCRyxRQUFyQixDQUE4QixXQUE5QixDQUFKLEVBQWdEO0FBQ2pEYixzQkFBVSxDQUFDVSxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixXQUE1QjtBQUNBZCxvQkFBUSxDQUFDWSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUNILFdBSEksTUFJQSxJQUFJVixVQUFVLENBQUNTLFNBQVgsQ0FBcUJHLFFBQXJCLENBQThCLFdBQTlCLENBQUosRUFBZ0Q7QUFDakRaLHNCQUFVLENBQUNTLFNBQVgsQ0FBcUJFLE1BQXJCLENBQTRCLFdBQTVCO0FBQ0FkLG9CQUFRLENBQUNZLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0g7QUFDSjs7QUFDRCxZQUFJNUIsTUFBTSxDQUFDd0IsV0FBUCxJQUFzQkosTUFBTSxHQUFDLEdBQTdCLElBQW9DcEIsTUFBTSxDQUFDd0IsV0FBUCxHQUFxQkgsUUFBN0QsRUFBdUU7QUFDbkUsY0FBSVAsT0FBTyxDQUFDYSxTQUFSLENBQWtCRyxRQUFsQixDQUEyQixXQUEzQixDQUFKLEVBQTZDO0FBQ3pDaEIsbUJBQU8sQ0FBQ2EsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsV0FBekI7QUFDQWIsb0JBQVEsQ0FBQ1csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDSCxXQUhELE1BSUssSUFBSWIsUUFBUSxDQUFDWSxTQUFULENBQW1CRyxRQUFuQixDQUE0QixXQUE1QixDQUFKLEVBQThDO0FBQy9DZixvQkFBUSxDQUFDWSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixXQUExQjtBQUNBYixvQkFBUSxDQUFDVyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUNILFdBSEksTUFJQSxJQUFJWCxVQUFVLENBQUNVLFNBQVgsQ0FBcUJHLFFBQXJCLENBQThCLFdBQTlCLENBQUosRUFBZ0Q7QUFDakRiLHNCQUFVLENBQUNVLFNBQVgsQ0FBcUJFLE1BQXJCLENBQTRCLFdBQTVCO0FBQ0FiLG9CQUFRLENBQUNXLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0gsV0FISSxNQUlBLElBQUlWLFVBQVUsQ0FBQ1MsU0FBWCxDQUFxQkcsUUFBckIsQ0FBOEIsV0FBOUIsQ0FBSixFQUFnRDtBQUNqRFosc0JBQVUsQ0FBQ1MsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsV0FBNUI7QUFDQWIsb0JBQVEsQ0FBQ1csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDSDtBQUNKOztBQUNELFlBQUk1QixNQUFNLENBQUN3QixXQUFQLElBQXNCSCxRQUFRLEdBQUMsR0FBL0IsSUFBc0NyQixNQUFNLENBQUN3QixXQUFQLEdBQXFCRixPQUEvRCxFQUF3RTtBQUNwRSxjQUFJUCxRQUFRLENBQUNZLFNBQVQsQ0FBbUJHLFFBQW5CLENBQTRCLFdBQTVCLENBQUosRUFBOEM7QUFDMUNmLG9CQUFRLENBQUNZLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0FaLHNCQUFVLENBQUNVLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFdBQXpCO0FBQ0gsV0FIRCxNQUlLLElBQUlaLFFBQVEsQ0FBQ1csU0FBVCxDQUFtQkcsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBSixFQUE4QztBQUMvQ2Qsb0JBQVEsQ0FBQ1csU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDQVosc0JBQVUsQ0FBQ1UsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsV0FBekI7QUFDSCxXQUhJLE1BSUEsSUFBSVYsVUFBVSxDQUFDUyxTQUFYLENBQXFCRyxRQUFyQixDQUE4QixXQUE5QixDQUFKLEVBQWdEO0FBQ2pEWixzQkFBVSxDQUFDUyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixXQUE1QjtBQUNBWixzQkFBVSxDQUFDVSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixXQUF6QjtBQUNILFdBSEksTUFJQSxJQUFJZCxPQUFPLENBQUNhLFNBQVIsQ0FBa0JHLFFBQWxCLENBQTJCLFdBQTNCLENBQUosRUFBNkM7QUFDOUNoQixtQkFBTyxDQUFDYSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixXQUF6QjtBQUNBWixzQkFBVSxDQUFDVSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixXQUF6QjtBQUNIO0FBQ0o7O0FBQ0QsWUFBSTVCLE1BQU0sQ0FBQ3dCLFdBQVAsSUFBc0JGLE9BQU8sR0FBQyxHQUFsQyxFQUF3QztBQUNwQyxjQUFJUixPQUFPLENBQUNhLFNBQVIsQ0FBa0JHLFFBQWxCLENBQTJCLFdBQTNCLENBQUosRUFBNkM7QUFDekNoQixtQkFBTyxDQUFDYSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixXQUF6QjtBQUNBWCxzQkFBVSxDQUFDUyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixXQUF6QjtBQUNILFdBSEQsTUFJSyxJQUFJYixRQUFRLENBQUNZLFNBQVQsQ0FBbUJHLFFBQW5CLENBQTRCLFdBQTVCLENBQUosRUFBOEM7QUFDL0NmLG9CQUFRLENBQUNZLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0FYLHNCQUFVLENBQUNTLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFdBQXpCO0FBQ0gsV0FISSxNQUlBLElBQUlaLFFBQVEsQ0FBQ1csU0FBVCxDQUFtQkcsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBSixFQUE4QztBQUMvQ2Qsb0JBQVEsQ0FBQ1csU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDQVgsc0JBQVUsQ0FBQ1MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsV0FBekI7QUFDSCxXQUhJLE1BSUEsSUFBSVgsVUFBVSxDQUFDVSxTQUFYLENBQXFCRyxRQUFyQixDQUE4QixXQUE5QixDQUFKLEVBQWdEO0FBQ2pEYixzQkFBVSxDQUFDVSxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixXQUE1QjtBQUNBWCxzQkFBVSxDQUFDUyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixXQUF6QjtBQUNIO0FBQ0o7O0FBQ0QsZUFBT0wsUUFBUDtBQUNILE9BdEgyQixDQUE1QjtBQXVISDs7OzJDQUVzQjtBQUNuQixXQUFLM0IsS0FBTCxDQUFXbUMsT0FBWDtBQUNIOzs7MkJBRU1DLEcsRUFBSztBQUNSQSxTQUFHLENBQUNDLE9BQUosQ0FBWUMsY0FBWixDQUEyQjtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBM0I7QUFDSDs7OzZCQUNRO0FBQUE7O0FBQ0wsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FESixFQUVJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLGVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLGtFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEosRUFJSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyw0RUFBNUI7QUFBeUcsaUJBQVMsRUFBQyxpR0FBbkg7QUFBcU4sbUJBQVcsRUFBQyxXQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosRUFNSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyxpRkFBNUI7QUFBOEcsaUJBQVMsRUFBQyx5RUFBeEg7QUFBa00sbUJBQVcsRUFBQyxXQUE5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkosRUFPSTtBQUFRLFdBQUcsRUFBQyxzRUFBWjtBQUFtRixpQkFBUyxFQUFDLHlFQUE3RjtBQUF1SyxtQkFBVyxFQUFDLFdBQW5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQSixFQVFJO0FBQVEsV0FBRyxFQUFDLCtFQUFaO0FBQTRGLGlCQUFTLEVBQUMseUVBQXRHO0FBQWdMLG1CQUFXLEVBQUMsV0FBNUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREEsRUF1Q0k7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBRyxRQUFqQjtBQUEwQixVQUFFLEVBQUMsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssZUFBTyxFQUFDLE1BQWI7QUFBb0IsV0FBRyxFQUFDLGVBQXhCO0FBQXdDLFdBQUcsRUFBQyxTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSTtBQUFJLFVBQUUsRUFBQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosQ0FESixFQUtJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBMEIsVUFBRSxFQUFDLFVBQTdCO0FBQXdDLGVBQU8sRUFBRSxtQkFBTTtBQUFDLGdCQUFJLENBQUNDLE1BQUwsQ0FBWSxNQUFJLENBQUNyRCxNQUFqQjtBQUF5QixTQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBSSxVQUFFLEVBQUMsV0FBUDtBQUFtQixlQUFPLEVBQUUsbUJBQU07QUFBQyxnQkFBSSxDQUFDRyxPQUFMLEdBQWUsTUFBSSxDQUFDa0QsTUFBTCxDQUFZLE1BQUksQ0FBQ2xELE9BQWpCLENBQWYsR0FBMkNtRCxJQUEzQztBQUFnRCxTQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0k7QUFBSSxVQUFFLEVBQUMsWUFBUDtBQUFvQixlQUFPLEVBQUUsbUJBQU07QUFBQyxnQkFBSSxDQUFDbEQsT0FBTCxHQUFlLE1BQUksQ0FBQ2lELE1BQUwsQ0FBWSxNQUFJLENBQUNqRCxPQUFqQixDQUFmLEdBQTJDa0QsSUFBM0M7QUFBZ0QsU0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixFQUlJO0FBQUksVUFBRSxFQUFDLGNBQVA7QUFBc0IsZUFBTyxFQUFFLG1CQUFNO0FBQUMsZ0JBQUksQ0FBQ2pELFNBQUwsR0FBaUIsTUFBSSxDQUFDZ0QsTUFBTCxDQUFZLE1BQUksQ0FBQ2hELFNBQWpCLENBQWpCLEdBQStDaUQsSUFBL0M7QUFBb0QsU0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixFQUtJO0FBQUksVUFBRSxFQUFDLGFBQVA7QUFBcUIsZUFBTyxFQUFFLG1CQUFNO0FBQUMsZ0JBQUksQ0FBQ2hELFNBQUwsR0FBaUIsTUFBSSxDQUFDK0MsTUFBTCxDQUFZLE1BQUksQ0FBQy9DLFNBQWpCLENBQWpCLEdBQStDZ0QsSUFBL0M7QUFBb0QsU0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixDQURKLENBTEosQ0FESixFQWdCSTtBQUFLLGlCQUFTLEVBQUcsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssVUFBRSxFQUFDLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBSyxVQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FoQkosQ0FESixDQXZDSixFQStESTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUEwQixXQUFHLEVBQUUsS0FBS3RELE1BQXBDO0FBQTRDLFVBQUUsRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksVUFBRSxFQUFDLFlBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBSUk7QUFBSSxVQUFFLEVBQUMsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKLEVBT0k7QUFBSSxVQUFFLEVBQUMsV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxXQUFHLEVBQUUsYUFBQ2UsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ0EsRUFBTCxHQUFVQSxFQUFWO0FBQWUsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBUEosQ0FESixFQVlJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUEyQixlQUFPLEVBQUUsbUJBQU07QUFBQyxnQkFBSSxDQUFDVCxTQUFMLEdBQWlCLE1BQUksQ0FBQytDLE1BQUwsQ0FBWSxNQUFJLENBQUMvQyxTQUFqQixDQUFqQixHQUErQ2dELElBQS9DO0FBQW9ELFNBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFJSTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUEyQixZQUFJLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixDQVpKLEVBb0JJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQThCLFdBQUcsRUFBQyxnQkFBbEM7QUFBbUQsV0FBRyxFQUFDLGNBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFwQkosQ0FESixDQS9ESixFQXlGSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUF3QixXQUFHLEVBQUUsS0FBS25ELE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixVQUFFLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFuQixrQkFESixFQUM4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRDlDLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvRCxvRUFDa0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURsRSx3RUFFc0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZ0RSwwRUFHd0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUh4RSxvRUFJa0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpsRSw2REFLMkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUwzRCx5REFGSixFQVNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFUUixFQVVJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBZ0MsZ0JBQVEsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixDQURKLENBVkosQ0FESixFQW1CSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxlQUFPLEVBQUMsTUFBYjtBQUFvQixXQUFHLEVBQUMsZ0JBQXhCO0FBQXlDLFdBQUcsRUFBQyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FuQkosQ0FESixFQXdCSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUEwQixXQUFHLEVBQUUsS0FBS0MsT0FBcEM7QUFBNkMsVUFBRSxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixpQkFBc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF0RCxFQUFvRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFwRSxDQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsa0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLGlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQUpKLEVBT0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyw4Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FQSixFQVVJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsbURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBVkosRUFZVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWlYsRUFhSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLDBDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQWJKLEVBZ0JJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFHLEVBQUMsYUFBakM7QUFBK0MsV0FBRyxFQUFDLFlBQW5EO0FBQWdFLGFBQUssRUFBQyxNQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FoQkosRUFtQkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQywwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FuQkosRUFzQkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxvREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0F0QkosRUF5Qkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxvREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0F6QkosRUE0Qkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0E1QkosRUErQkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxpREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0EvQkosRUFrQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxvREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FsQ0osQ0FGSixDQXhCSixFQWlFSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixXQUFHLEVBQUUsS0FBS0MsU0FBdEM7QUFBaUQsVUFBRSxFQUFDLFVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixtQkFBd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF4RCxFQUFzRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF0RSxDQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLa0QsTUFBTSxDQUFDQyxPQUFQLENBQWVDLGlEQUFmLEVBQXdCQyxHQUF4QixDQUE0QixVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUNyQyxlQUFPO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQThCLGFBQUcsRUFBRUEsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNILE1BQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVELEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0UsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0tGLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0csS0FEWixDQURKLENBREosQ0FERyxFQVFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDS0gsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPSSxNQURaLENBUkcsRUFXSDtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFNLG1CQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVJO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlDSixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9LLFFBQXhDLENBRkosQ0FESixFQUtJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBTSxtQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFNLG1CQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpQ0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPTSxNQUF4QyxDQUZKLENBTEosRUFTSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQU0sbUJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUk7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaUNOLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT08sU0FBeEMsQ0FGSixDQVRKLEVBYUk7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFNLG1CQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlDUCxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9RLE9BQXhDLENBRkosQ0FiSixFQWlCSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQU0sbUJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaUNSLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT1MsUUFBeEMsQ0FGSixDQWpCSixDQVhHLENBQVA7QUFrQ0gsT0FuQ0EsQ0FETCxDQUZKLENBakVKLEVBMEdJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUcsRUFBRSxLQUFLOUQsU0FBckM7QUFBZ0QsVUFBRSxFQUFDLFNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixrQkFBdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF2RCxFQUFxRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFyRSxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FGSixFQUdJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsMkNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRztBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFILENBREosQ0FESixDQURKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsK0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRztBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsQ0FESixDQURKLENBTkosRUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxzQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFHO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsQ0FESixDQURKLENBWEosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsdUJBQVksT0FBZjtBQUF1Qix1QkFBWSxjQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosQ0FoQkosQ0FESixDQUhKLENBMUdKLEVBd0lJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBeElKLENBekZKLENBREo7QUF3T0g7Ozs7RUF4WTZCK0QsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGIxMmRmZjYyMjRjNjczZjUzY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi91dGlsL3Byb2plY3RzLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMubXlob21lID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubXlhYm91dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm15c2tpbGwgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5teXByb2plY3QgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5teWNvbnRhY3QgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyAgPSBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGVjaCBnZWVrXCIsXG4gICAgICAgICAgICBcImRldmVsb3BlclwiLFxuICAgICAgICAgICAgXCJBbmFseXRpY2FsXCIsXG4gICAgICAgICAgICBcIkVuam95IHRha2luZyBjaGFsbGVuZ2VzXCIsXG4gICAgICAgICAgICBcIk1ha2UgZXZlcnl0aGluZyBwb3NzaWJsZVwiLFxuICAgICAgICAgICAgXCJHZXQgdGhpbmdzIGRvbmVcIixcbiAgICAgICAgICAgIF07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHJpbmdzOiBzdHJpbmdzLFxuICAgICAgICAgICAgdHlwZVNwZWVkOiAxMDAsXG4gICAgICAgICAgICBiYWNrU3BlZWQ6IDUwLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDdXJzb3I6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlciA9IHdpbmRvdyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXluYXZcIilcbiAgICAgICAgICAgIGxldCBzdGlja3kgPSBSZWFjdERPTS5maW5kRE9NTm9kZShuYXZiYXIpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IG15cHJvZ3Jlc3NiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NiYXInKVxuICAgICAgICAgICAgLy8gbGV0IG15cHJvZ3Jzc3BlcmNlbnRwZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcmNlbnQnKVxuICAgICAgICAgICAgbGV0IHRvdGFsaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICAgIGxldCBob21lYnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKSlcbiAgICAgICAgICAgIGxldCBhYm91dGJ0biA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtYnRuXCIpKVxuICAgICAgICAgICAgbGV0IHNraWxsYnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHMtYnRuXCIpKVxuICAgICAgICAgICAgbGV0IHByb2plY3RidG4gPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWJ0blwiKSlcbiAgICAgICAgICAgIGxldCBjb250YWN0YnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ0blwiKSlcbiAgICAgICAgICAgIC8vIGxldCBoZWFkZXIgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgYWJvdXRtZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRtZVwiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgc2tpbGxzID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHNcIikpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IHByb2plY3RzID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgY29udGFjdCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAod2luZG93LnBhZ2VZT2Zmc2V0IC8gdG90YWxoZWlnaHQpICogMTAwXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUobXlwcm9ncmVzc2Jhcikuc3R5bGUud2lkdGggPSBwcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUobmF2YmFyKS5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtdG9wXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKG5hdmJhcikuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkLXRvcFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYWdlWU9mZnNldDpcIit3aW5kb3cucGFnZVlPZmZzZXQsXCJoZWFkZXI6XCIraGVhZGVyLFwiYWJvdXRtZTpcIithYm91dG1lLFwic2tpbGxzOlwiK3NraWxscyxcInByb2plY3RzOlwiK3Byb2plY3RzLFwiY29udGFjdDpcIitjb250YWN0KVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IGFib3V0bWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWJvdXRidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraWxsYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGFib3V0bWUtMTg0ICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IHNraWxscykge1xuICAgICAgICAgICAgICAgIGlmIChob21lYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChza2lsbGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBza2lsbHMtMTAwICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhvbWVidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFib3V0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHByb2plY3RzLTEwMCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCBjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFib3V0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChza2lsbGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChob21lYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBjb250YWN0LTMwMCApIHtcbiAgICAgICAgICAgICAgICBpZiAoaG9tZWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYm91dGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2tpbGxidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3NcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy50eXBlZC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsKHJlZikge1xuICAgICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPldoaXRlQ2FuWkUgLSBEZXZlbG9wZXIg8J+agDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbXlsb2dvNC53ZWJwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9rb25wYS9kZXZpY29uQG1hc3Rlci9kZXZpY29uLm1pbi5jc3NcIi8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi0xUEtPZ0lZNTl4SjhDbzgrTkU2RlorTE9BWktqeStLWThpcTBHNEIzQ3llWTZ3WUhOM3l0OVBXMFhwU3JpVmxrTVhlNDBQVEtuWHJMblo5K2ZrRGFvZz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC81LjAuMC1hbHBoYTEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LXI0TnlQNDZLcmpEbGVhd0JnRDV0cDhZN1V6bUxBMDVvTTFpQUVRMTdDU3VEcW5VSzIrazlsdVhRT2ZYSkNKNElcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzUuMC4wLWFscGhhMS9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LW9lc2k2MmhPTGZ6cnlzNEx4UkY2M09KQ1hkWERpcGlZV0JudlRsOVk5L1RSbHc1eGxLSUVIcE55dnZEU2hnZi9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHsvKiBuYXZiYXIgKi99XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwicmVzdW1lLWltYWdlXCIgdGFiSW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cIk15IHJlc3VtZSBpbWFnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1mdWxsc2NyZWVuIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTXlyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBzcmM9XCIvbXktcmVzdW1lLWVuLndlYnBcIiBhbHQ9XCJNeSByZXN1bWUgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tbGcgYnRuLWJsb2NrXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibGluZS1xcmNvZGVcIiB0YWJJbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiTGluZUBiZW5qYW1pbml6YSBRUi1DT0RFXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWZ1bGxzY3JlZW4tc20tZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJsaW5lLWltZ1wiIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiL2xpbmVxcmNvZGUud2VicFwiIGFsdD1cIkBiZW5qYW1pbml6YVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPklEIDogYmVuamFtaW5pemE8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1sZyBidG4tYmxvY2tcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lID0gXCJteS1uYXZcIiBpZD1cIm15bmF2XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY29udGVudC1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15bG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiL215bG9nbzQud2VicFwiIGFsdD1cIm15IGxvZ29cIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwibXl0ZXh0XCI+V2hpdGVDYW5aRTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1saXN0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXluYXYtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhhcy1mb2N1c1wiIGlkPVwiaG9tZS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zY3JvbGwodGhpcy5teWhvbWUpfX0+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJhYm91dC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5teWFib3V0ID8gdGhpcy5zY3JvbGwodGhpcy5teWFib3V0KSA6IHBhc3N9fT5BYm91dDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJza2lsbHMtYnRuXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXlza2lsbCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlza2lsbCkgOiBwYXNzfX0+U2tpbGxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInByb2plY3RzLWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15cHJvamVjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlwcm9qZWN0KSA6IHBhc3N9fT5Qcm9qZWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjb250YWN0LWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15Y29udGFjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXljb250YWN0KSA6IHBhc3N9fT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm15cHJvZ3Jlc3NiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGVyY2VudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aGVhZGVyXCIgcmVmPXt0aGlzLm15aG9tZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1oZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cImZpcnN0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGkhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJzdWItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJJ20gV2hpdGVDYW5aRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwic3ViLXRleHQyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17KGVsKSA9PiB7IHRoaXMuZWwgPSBlbDsgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LWN1cy1idG4xXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXljb250YWN0ID8gdGhpcy5zY3JvbGwodGhpcy5teWNvbnRhY3QpIDogcGFzc319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IG1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LWN1cy1idG4yXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3IHJlc3VtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItaW1hZ2VcIiBzcmM9XCIvbmV3LWltZzMud2VicFwiIGFsdD1cImhlYWRlci1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogY29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15Ym9keVwiIHJlZj17dGhpcy5teWFib3V0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dG1lXCIgaWQ9XCJhYm91dG1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0bWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT7wn5qAICBBIGxpJ2wgYml0IDxici8+IGFib3V0IG15c2VsZjwvaDE+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGkhLCBpJ20gUGhhdGNoYXJhcG9uZyBKdWxsYW1vbnRvbiBpIGxvdmUgdGVjaCBhbmQgY29tcHV0ZXI8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luY2UgaSB3YXMgeW91bmcgaXQncyBtYWtlIG1lIGJlIGEgdGVjaCBnZWVrLCBkdW5ubyB3aHkgd2hlbiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpcnN0IG1ldCB0aGUgY29kaW5nIGluIGEgY29tcHV0ZXIgY2xhc3MgYXQgdW5pdmVyc2l0eSBpIGZlbHQgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQncyByaWdodCBmb3IgbWUsIHRoZW4gaSB0aGluayBjb2RpbmcgaXQncyBhIHBhcnQgb2YgbXkgbGlmZSwgZWFjaCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIgbGFuZ3VhZ2Ugd2hlbiBpIGxlYXJuIGFuZCB3cml0ZSBpdCBlYXNpZXIgdGhhbiBvdGhlciA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgZm9yIG1lIFB5dGhvbiBsYW5ndWFnZSBpcyB0aGUgYmVzdCBvZiBtZSBiZWNhdXNlIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCdzIHVzZWZ1bCBzbyBtdWNoIHN0dWZmIG9mIHRoaXMgdGltZS4g8J+YhFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LXJlc3VtZS1lbi5wZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LWN1cy1idG4zXCIgZG93bmxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkIHJlc3VtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRtZS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiL25ldy1pbWcxLndlYnBcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlza2lsbHNcIiByZWY9e3RoaXMubXlza2lsbH0gaWQ9XCJza2lsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeV9za2lsbHMgPHNwYW4+Lzwvc3Bhbj48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXpvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1odG1sNS1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWNzczMtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1qYXZhc2NyaXB0LXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tcHl0aG9uLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tZGphbmdvLXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZHJvcC1zaGFkb3dcIiBzcmM9XCIvZmxhc2sud2VicFwiIGFsdD1cImZsYXNrLWljb25cIiB3aWR0aD1cIjgwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tY3NoYXJwLXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tZG90LW5ldC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLW1vbmdvZGItcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1teXNxbC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWphdmEtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1hbmRyb2lkLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlwcm9qZWN0c1wiIHJlZj17dGhpcy5teXByb2plY3R9IGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeSBQcm9qZWN0cyA8c3Bhbj4vPC9zcGFuPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhQcm9qZWN0KS5tYXAoKHZhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjYXJkLXByb2plY3RcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsWzFdLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsWzFdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxbMV0uZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPlBsYXRmb3JtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGExXCI+e3ZhbFsxXS5wbGF0Zm9ybX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPkVkaXRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hLWJveCBhMlwiPnt2YWxbMV0uZWRpdG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+RnJhbWV3b3JrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGEzXCI+e3ZhbFsxXS5mcmFtZXdvcmt9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcS1ib3hcIj5MaWJyYXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGE0XCI+e3ZhbFsxXS5saWJyYXJ5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+TGFuZ3VhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYS1ib3ggYTVcIj57dmFsWzFdLmxhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWNvbnRhY3RcIiByZWY9e3RoaXMubXljb250YWN0fSBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeSBDb250YWN0IDxzcGFuPi88L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TYXkgSGkgdG8gbWUhIPCfkYs8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWJvZHl3b3JrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwibWFpbHRvOnBoYXRjaGFyYXBvbmdqdWxsYW1vbnRvbkBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtb3BlblwiPjwvaT48L2E+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3doaXRlY2FuemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9XaGl0ZUNhblpFL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2xpbmUtcXJjb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvb3RlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgwqkgMjAyMCBXSElURUNBTlpFLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9