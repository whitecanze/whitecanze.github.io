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
          lineNumber: 181,
          columnNumber: 17
        }
      }, __jsx("nav", {
        className: "my-nav",
        id: "mynav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "box-content-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "mylogo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 29
        }
      }, __jsx("img", {
        loading: "lazy",
        src: "/mylogo4.webp",
        alt: "my logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 33
        }
      }), __jsx("h1", {
        id: "mytext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 33
        }
      }, "WhiteCanZE")), __jsx("div", {
        className: "my-list-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 29
        }
      }, __jsx("ul", {
        className: "mynav-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
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
          lineNumber: 190,
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
          lineNumber: 191,
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
          lineNumber: 192,
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
          lineNumber: 193,
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
          lineNumber: 194,
          columnNumber: 37
        }
      }, "Contact")))), __jsx("div", {
        className: "myprogressbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }
      }, __jsx("div", {
        id: "progressbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 29
        }
      }), __jsx("div", {
        id: "percent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 29
        }
      })))), __jsx("div", {
        className: "myheader",
        ref: this.myhome,
        id: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "first-header-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }
      }, __jsx("h1", {
        id: "first-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 29
        }
      }, "hi!"), __jsx("h1", {
        id: "sub-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 29
        }
      }, "I'm WhiteCanZE"), __jsx("h1", {
        id: "sub-text2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 29
        }
      }, __jsx("span", {
        ref: function ref(el) {
          _this2.el = el;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "my-btn-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
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
          lineNumber: 219,
          columnNumber: 29
        }
      }, "Contact me"), __jsx("a", {
        className: "my-cus-btn2",
        href: "/my-resume-en.webp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 29
        }
      }, "view resume")), __jsx("img", {
        className: "header-image",
        src: "/new-img3.webp",
        alt: "header-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 25
        }
      }))), __jsx("div", {
        className: "mybody",
        ref: this.myabout,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "aboutme",
        id: "aboutme",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "aboutme-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 25
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 29
        }
      }, "\uD83D\uDE80  A li'l bit ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 48
        }
      }), " about myself"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 71
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 29
        }
      }, " Hi!, i'm Phatcharapong Jullamonton i love tech and computer", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 92
        }
      }), "since i was young it's make me be a tech geek, dunno why when ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 95
        }
      }), "the first met the coding in a computer class at university i felt ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 99
        }
      }), "it's right for me, then i think coding it's a part of my life, each ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 101
        }
      }), "computer language when i learn and write it easier than other ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 95
        }
      }), "class for me Python language is the best of me because ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 88
        }
      }), "it's useful so much stuff of this time. \uD83D\uDE04"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 33
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/my-resume-en.pdf",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 29
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 33
        }
      }, __jsx("button", {
        className: "my-cus-btn3",
        download: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 37
        }
      }, "download resume")))), __jsx("div", {
        className: "aboutme-img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 25
        }
      }, __jsx("img", {
        loading: "lazy",
        src: "/new-img1.webp",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 29
        }
      }))), __jsx("div", {
        className: "myskills",
        ref: this.myskill,
        id: "skills",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 29
        }
      }), " My_skills ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 79
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 93
        }
      })), __jsx("div", {
        className: "card-zone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-html5-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-css3-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-javascript-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-python-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 33
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 35
        }
      }), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-django-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
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
          lineNumber: 274,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-csharp-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-dot-net-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-mongodb-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-mysql-plain-wordmark colored drop-shadow",
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
        className: "devicon-java-plain-wordmark colored drop-shadow",
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
        className: "devicon-android-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 33
        }
      })))), __jsx("div", {
        className: "myprojects",
        ref: this.myproject,
        id: "projects",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 29
        }
      }), " My Projects ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 81
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 95
        }
      })), __jsx("div", {
        className: "card-zone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 25
        }
      }, Object.entries(_util_projects_json__WEBPACK_IMPORTED_MODULE_10__).map(function (val, i) {
        return __jsx("div", {
          className: "card-project",
          key: i,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 40
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: val[1].link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 37
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 41
          }
        }, __jsx("h1", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 45
          }
        }, val[1].title))), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 37
          }
        }, val[1].detail), __jsx("div", {
          className: "detail-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 45
          }
        }, "Platform"), __jsx("span", {
          className: "text-a-box a1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 45
          }
        }, val[1].platform)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 45
          }
        }, "Editor"), __jsx("span", {
          className: "text-a-box a2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 45
          }
        }, val[1].editor)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 45
          }
        }, "Framework"), __jsx("span", {
          className: "text-a-box a3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 45
          }
        }, val[1].framework)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 45
          }
        }, "Library"), __jsx("span", {
          className: "text-a-box a4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 45
          }
        }, val[1].library)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 45
          }
        }, "Language"), __jsx("span", {
          className: "text-a-box a5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
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
          lineNumber: 337,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 29
        }
      }), " My Contact ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 80
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 94
        }
      })), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 25
        }
      }, "Say Hi to me! \uD83D\uDC4B"), __jsx("div", {
        className: "mybodywork",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 25
        }
      }, __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 29
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "mailto:phatcharapongjullamonton@gmail.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-envelope-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://github.com/whitecanze",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-github",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://www.facebook.com/WhiteCanZE/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-facebook-f",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 33
        }
      }, __jsx("a", {
        "data-toggle": "modal",
        "data-target": "#line-qrcode",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 37
        }
      }, __jsx("i", {
        className: "fab fa-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 41
        }
      })))))), __jsx("div", {
        className: "myfooter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm15aG9tZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibXlhYm91dCIsIm15c2tpbGwiLCJteXByb2plY3QiLCJteWNvbnRhY3QiLCJzdHJpbmdzIiwib3B0aW9ucyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImxvb3AiLCJzaG93Q3Vyc29yIiwidHlwZWQiLCJUeXBlZCIsImVsIiwiaXNCcm93c2VyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdmJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGlja3kiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwib2Zmc2V0VG9wIiwibXlwcm9ncmVzc2JhciIsInRvdGFsaGVpZ2h0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiaG9tZWJ0biIsImFib3V0YnRuIiwic2tpbGxidG4iLCJwcm9qZWN0YnRuIiwiY29udGFjdGJ0biIsImFib3V0bWUiLCJza2lsbHMiLCJwcm9qZWN0cyIsImNvbnRhY3QiLCJwcm9ncmVzcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiZGVzdHJveSIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2Nyb2xsIiwicGFzcyIsIk9iamVjdCIsImVudHJpZXMiLCJQcm9qZWN0IiwibWFwIiwidmFsIiwiaSIsImxpbmsiLCJ0aXRsZSIsImRldGFpbCIsInBsYXRmb3JtIiwiZWRpdG9yIiwiZnJhbWV3b3JrIiwibGlicmFyeSIsImxhbmd1YWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLHNDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSCxDQURKLENBREosQ0FYSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyx1QkFBWSxPQUFmO0FBQXVCLHVCQUFZLGNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixDQWhCSixDQURKLENBSEosQ0ExR0osRUF3SUk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0F4SUosQ0E5REosQ0FESjtBQTZNSDs7OztFQTdXNkIrRCwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTk2ZTUwOWY0OTlkODEwZjhjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL3V0aWwvcHJvamVjdHMuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5teWhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5teWFib3V0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubXlza2lsbCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm15cHJvamVjdCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm15Y29udGFjdCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzICA9IFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZWNoIGdlZWtcIixcbiAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICBcIkFuYWx5dGljYWxcIixcbiAgICAgICAgICAgIFwiRW5qb3kgdGFraW5nIGNoYWxsZW5nZXNcIixcbiAgICAgICAgICAgIFwiTWFrZSBldmVyeXRoaW5nIHBvc3NpYmxlXCIsXG4gICAgICAgICAgICBcIkdldCB0aGluZ3MgZG9uZVwiLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHN0cmluZ3M6IHN0cmluZ3MsXG4gICAgICAgICAgICB0eXBlU3BlZWQ6IDEwMCxcbiAgICAgICAgICAgIGJhY2tTcGVlZDogNTAsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0N1cnNvcjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHlwZWQgPSBuZXcgVHlwZWQodGhpcy5lbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgaXNCcm93c2VyID0gd2luZG93ICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteW5hdlwiKVxuICAgICAgICAgICAgbGV0IHN0aWNreSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKG5hdmJhcikub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgbXlwcm9ncmVzc2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc2JhcicpXG4gICAgICAgICAgICAvLyBsZXQgbXlwcm9ncnNzcGVyY2VudHBlcmNlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyY2VudCcpXG4gICAgICAgICAgICBsZXQgdG90YWxoZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICAgICAgbGV0IGhvbWVidG4gPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnRuXCIpKVxuICAgICAgICAgICAgbGV0IGFib3V0YnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1idG5cIikpXG4gICAgICAgICAgICBsZXQgc2tpbGxidG4gPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxscy1idG5cIikpXG4gICAgICAgICAgICBsZXQgcHJvamVjdGJ0biA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYnRuXCIpKVxuICAgICAgICAgICAgbGV0IGNvbnRhY3RidG4gPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtYnRuXCIpKVxuICAgICAgICAgICAgLy8gbGV0IGhlYWRlciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpKS5vZmZzZXRUb3BcbiAgICAgICAgICAgIGxldCBhYm91dG1lID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dG1lXCIpKS5vZmZzZXRUb3BcbiAgICAgICAgICAgIGxldCBza2lsbHMgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgcHJvamVjdHMgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpKS5vZmZzZXRUb3BcbiAgICAgICAgICAgIGxldCBjb250YWN0ID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpKS5vZmZzZXRUb3BcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9ICh3aW5kb3cucGFnZVlPZmZzZXQgLyB0b3RhbGhlaWdodCkgKiAxMDBcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEwMCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZShteXByb2dyZXNzYmFyKS5zdHlsZS53aWR0aCA9IHByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBzdGlja3kpIHtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZShuYXZiYXIpLmNsYXNzTGlzdC5hZGQoXCJmaXhlZC10b3BcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUobmF2YmFyKS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWQtdG9wXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBhZ2VZT2Zmc2V0OlwiK3dpbmRvdy5wYWdlWU9mZnNldCxcImhlYWRlcjpcIitoZWFkZXIsXCJhYm91dG1lOlwiK2Fib3V0bWUsXCJza2lsbHM6XCIrc2tpbGxzLFwicHJvamVjdHM6XCIrcHJvamVjdHMsXCJjb250YWN0OlwiK2NvbnRhY3QpXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgYWJvdXRtZSkge1xuICAgICAgICAgICAgICAgIGlmIChhYm91dGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2tpbGxidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gYWJvdXRtZS0xODQgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgc2tpbGxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhvbWVidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraWxsYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHNraWxscy0xMDAgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgcHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaG9tZWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJvdXRidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gcHJvamVjdHMtMTAwICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IGNvbnRhY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWJvdXRidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraWxsYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhvbWVidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGNvbnRhY3QtMzAwICkge1xuICAgICAgICAgICAgICAgIGlmIChob21lYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFib3V0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChza2lsbGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnR5cGVkLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBzY3JvbGwocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+V2hpdGVDYW5aRSAtIERldmVsb3BlciDwn5qAPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9teWxvZ280LndlYnBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2tvbnBhL2Rldmljb25AbWFzdGVyL2Rldmljb24ubWluLmNzc1wiLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTFQS09nSVk1OXhKOENvOCtORTZGWitMT0FaS2p5K0tZOGlxMEc0QjNDeWVZNndZSE4zeXQ5UFcwWHBTcmlWbGtNWGU0MFBUS25YckxuWjkrZmtEYW9nPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzUuMC4wLWFscGhhMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtcjROeVA0NktyakRsZWF3QmdENXRwOFk3VXptTEEwNW9NMWlBRVExN0NTdURxblVLMitrOWx1WFFPZlhKQ0o0SVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNS4wLjAtYWxwaGExL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtb2VzaTYyaE9MZnpyeXM0THhSRjYzT0pDWGRYRGlwaVlXQm52VGw5WTkvVFJsdzV4bEtJRUhwTnl2dkRTaGdmL1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgey8qIG5hdmJhciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZSA9IFwibXktbmF2XCIgaWQ9XCJteW5hdlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNvbnRlbnQtbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIHNyYz1cIi9teWxvZ280LndlYnBcIiBhbHQ9XCJteSBsb2dvXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cIm15dGV4dFwiPldoaXRlQ2FuWkU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktbGlzdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15bmF2LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoYXMtZm9jdXNcIiBpZD1cImhvbWUtYnRuXCIgb25DbGljaz17KCkgPT4ge3RoaXMuc2Nyb2xsKHRoaXMubXlob21lKX19PkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiYWJvdXQtYnRuXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXlhYm91dCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlhYm91dCkgOiBwYXNzfX0+QWJvdXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic2tpbGxzLWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15c2tpbGwgPyB0aGlzLnNjcm9sbCh0aGlzLm15c2tpbGwpIDogcGFzc319PlNraWxsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJwcm9qZWN0cy1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5teXByb2plY3QgPyB0aGlzLnNjcm9sbCh0aGlzLm15cHJvamVjdCkgOiBwYXNzfX0+UHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiY29udGFjdC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5teWNvbnRhY3QgPyB0aGlzLnNjcm9sbCh0aGlzLm15Y29udGFjdCkgOiBwYXNzfX0+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJteXByb2dyZXNzYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2dyZXNzYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBlcmNlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBoZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWhlYWRlclwiIHJlZj17dGhpcy5teWhvbWV9IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJmaXJzdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwic3ViLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSdtIFdoaXRlQ2FuWkVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cInN1Yi10ZXh0MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9eyhlbCkgPT4geyB0aGlzLmVsID0gZWw7IH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWJ0bi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteS1jdXMtYnRuMVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15Y29udGFjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXljb250YWN0KSA6IHBhc3N9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteS1jdXMtYnRuMlwiIGhyZWY9XCIvbXktcmVzdW1lLWVuLndlYnBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldyByZXN1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVyLWltYWdlXCIgc3JjPVwiL25ldy1pbWczLndlYnBcIiBhbHQ9XCJoZWFkZXItaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGNvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWJvZHlcIiByZWY9e3RoaXMubXlhYm91dH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRtZVwiIGlkPVwiYWJvdXRtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dG1lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+8J+agCAgQSBsaSdsIGJpdCA8YnIvPiBhYm91dCBteXNlbGY8L2gxPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhpISwgaSdtIFBoYXRjaGFyYXBvbmcgSnVsbGFtb250b24gaSBsb3ZlIHRlY2ggYW5kIGNvbXB1dGVyPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmNlIGkgd2FzIHlvdW5nIGl0J3MgbWFrZSBtZSBiZSBhIHRlY2ggZ2VlaywgZHVubm8gd2h5IHdoZW4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaXJzdCBtZXQgdGhlIGNvZGluZyBpbiBhIGNvbXB1dGVyIGNsYXNzIGF0IHVuaXZlcnNpdHkgaSBmZWx0IDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0J3MgcmlnaHQgZm9yIG1lLCB0aGVuIGkgdGhpbmsgY29kaW5nIGl0J3MgYSBwYXJ0IG9mIG15IGxpZmUsIGVhY2ggPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyIGxhbmd1YWdlIHdoZW4gaSBsZWFybiBhbmQgd3JpdGUgaXQgZWFzaWVyIHRoYW4gb3RoZXIgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIGZvciBtZSBQeXRob24gbGFuZ3VhZ2UgaXMgdGhlIGJlc3Qgb2YgbWUgYmVjYXVzZSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQncyB1c2VmdWwgc28gbXVjaCBzdHVmZiBvZiB0aGlzIHRpbWUuIPCfmIRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1yZXN1bWUtZW4ucGRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS1jdXMtYnRuM1wiIGRvd25sb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZCByZXN1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0bWUtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIHNyYz1cIi9uZXctaW1nMS53ZWJwXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15c2tpbGxzXCIgcmVmPXt0aGlzLm15c2tpbGx9IGlkPVwic2tpbGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gTXlfc2tpbGxzIDxzcGFuPi88L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC16b25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24taHRtbDUtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1jc3MzLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tamF2YXNjcmlwdC1wbGFpbiBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLXB5dGhvbi1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWRqYW5nby1wbGFpbiBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRyb3Atc2hhZG93XCIgc3JjPVwiL2ZsYXNrLndlYnBcIiBhbHQ9XCJmbGFzay1pY29uXCIgd2lkdGg9XCI4MHB4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWNzaGFycC1wbGFpbiBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWRvdC1uZXQtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1tb25nb2RiLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tbXlzcWwtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1qYXZhLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tYW5kcm9pZC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15cHJvamVjdHNcIiByZWY9e3RoaXMubXlwcm9qZWN0fSBpZD1cInByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gTXkgUHJvamVjdHMgPHNwYW4+Lzwvc3Bhbj48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXpvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoUHJvamVjdCkubWFwKCh2YWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wcm9qZWN0XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ZhbFsxXS5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbFsxXS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsWzFdLmRldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcS1ib3hcIj5QbGF0Zm9ybTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hLWJveCBhMVwiPnt2YWxbMV0ucGxhdGZvcm19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcS1ib3hcIj5FZGl0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYS1ib3ggYTJcIj57dmFsWzFdLmVkaXRvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPkZyYW1ld29yazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hLWJveCBhM1wiPnt2YWxbMV0uZnJhbWV3b3JrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+TGlicmFyeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hLWJveCBhNFwiPnt2YWxbMV0ubGlicmFyeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPkxhbmd1YWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGE1XCI+e3ZhbFsxXS5sYW5ndWFnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXljb250YWN0XCIgcmVmPXt0aGlzLm15Y29udGFjdH0gaWQ9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gTXkgQ29udGFjdCA8c3Bhbj4vPC9zcGFuPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2F5IEhpIHRvIG1lISDwn5GLPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlib2R5d29ya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpwaGF0Y2hhcmFwb25nanVsbGFtb250b25AZ21haWwuY29tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW5cIj48L2k+PC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZWNhbnplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vV2hpdGVDYW5aRS9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNsaW5lLXFyY29kZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBmb290ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIMKpIDIwMjAgV0hJVEVDQU5aRS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==