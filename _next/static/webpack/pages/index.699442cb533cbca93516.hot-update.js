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
          lineNumber: 366,
          columnNumber: 21
        }
      }, "\xA9 2020 WHITECANZE.")), ".");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm15aG9tZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibXlhYm91dCIsIm15c2tpbGwiLCJteXByb2plY3QiLCJteWNvbnRhY3QiLCJzdHJpbmdzIiwib3B0aW9ucyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImxvb3AiLCJzaG93Q3Vyc29yIiwidHlwZWQiLCJUeXBlZCIsImVsIiwiaXNCcm93c2VyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdmJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGlja3kiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwib2Zmc2V0VG9wIiwibXlwcm9ncmVzc2JhciIsInRvdGFsaGVpZ2h0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiaG9tZWJ0biIsImFib3V0YnRuIiwic2tpbGxidG4iLCJwcm9qZWN0YnRuIiwiY29udGFjdGJ0biIsImFib3V0bWUiLCJza2lsbHMiLCJwcm9qZWN0cyIsImNvbnRhY3QiLCJwcm9ncmVzcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiZGVzdHJveSIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2Nyb2xsIiwicGFzcyIsIk9iamVjdCIsImVudHJpZXMiLCJQcm9qZWN0IiwibWFwIiwidmFsIiwiaSIsImxpbmsiLCJ0aXRsZSIsImRldGFpbCIsInBsYXRmb3JtIiwiZWRpdG9yIiwiZnJhbWV3b3JrIiwibGlicmFyeSIsImxhbmd1YWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLHNDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSCxDQURKLENBREosQ0FYSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBaEJKLENBREosQ0FISixDQTFHSixFQXVJSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXZJSixDQTlESixNQURKO0FBOE1IOzs7O0VBOVc2QitELCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5OTQ0MmNiNTMzY2JjYTkzNTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vdXRpbC9wcm9qZWN0cy5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLm15aG9tZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm15YWJvdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5teXNraWxsID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubXlwcm9qZWN0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubXljb250YWN0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgID0gXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICBcInRlY2ggZ2Vla1wiLFxuICAgICAgICAgICAgXCJkZXZlbG9wZXJcIixcbiAgICAgICAgICAgIFwiQW5hbHl0aWNhbFwiLFxuICAgICAgICAgICAgXCJFbmpveSB0YWtpbmcgY2hhbGxlbmdlc1wiLFxuICAgICAgICAgICAgXCJNYWtlIGV2ZXJ5dGhpbmcgcG9zc2libGVcIixcbiAgICAgICAgICAgIFwiR2V0IHRoaW5ncyBkb25lXCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgc3RyaW5nczogc3RyaW5ncyxcbiAgICAgICAgICAgIHR5cGVTcGVlZDogMTAwLFxuICAgICAgICAgICAgYmFja1NwZWVkOiA1MCxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBzaG93Q3Vyc29yOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50eXBlZCA9IG5ldyBUeXBlZCh0aGlzLmVsLCBvcHRpb25zKTtcblxuICAgICAgICBjb25zdCBpc0Jyb3dzZXIgPSB3aW5kb3cgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15bmF2XCIpXG4gICAgICAgICAgICBsZXQgc3RpY2t5ID0gUmVhY3RET00uZmluZERPTU5vZGUobmF2YmFyKS5vZmZzZXRUb3BcbiAgICAgICAgICAgIGxldCBteXByb2dyZXNzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzYmFyJylcbiAgICAgICAgICAgIC8vIGxldCBteXByb2dyc3NwZXJjZW50cGVyY2VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJjZW50JylcbiAgICAgICAgICAgIGxldCB0b3RhbGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgICAgICBsZXQgaG9tZWJ0biA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIikpXG4gICAgICAgICAgICBsZXQgYWJvdXRidG4gPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ0blwiKSlcbiAgICAgICAgICAgIGxldCBza2lsbGJ0biA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tpbGxzLWJ0blwiKSlcbiAgICAgICAgICAgIGxldCBwcm9qZWN0YnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1idG5cIikpXG4gICAgICAgICAgICBsZXQgY29udGFjdGJ0biA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1idG5cIikpXG4gICAgICAgICAgICAvLyBsZXQgaGVhZGVyID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IGFib3V0bWUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0bWVcIikpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IHNraWxscyA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tpbGxzXCIpKS5vZmZzZXRUb3BcbiAgICAgICAgICAgIGxldCBwcm9qZWN0cyA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIikpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IGNvbnRhY3QgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIikpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gKHdpbmRvdy5wYWdlWU9mZnNldCAvIHRvdGFsaGVpZ2h0KSAqIDEwMFxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKG15cHJvZ3Jlc3NiYXIpLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreSkge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKG5hdmJhcikuY2xhc3NMaXN0LmFkZChcImZpeGVkLXRvcFwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZShuYXZiYXIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZC10b3BcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFnZVlPZmZzZXQ6XCIrd2luZG93LnBhZ2VZT2Zmc2V0LFwiaGVhZGVyOlwiK2hlYWRlcixcImFib3V0bWU6XCIrYWJvdXRtZSxcInNraWxsczpcIitza2lsbHMsXCJwcm9qZWN0czpcIitwcm9qZWN0cyxcImNvbnRhY3Q6XCIrY29udGFjdClcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCBhYm91dG1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFib3V0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChza2lsbGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBhYm91dG1lLTE4NCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCBza2lsbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaG9tZWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2tpbGxidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc2tpbGxzLTEwMCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGlmIChob21lYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYm91dGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBwcm9qZWN0cy0xMDAgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgY29udGFjdCkge1xuICAgICAgICAgICAgICAgIGlmIChhYm91dGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2tpbGxidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaG9tZWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gY29udGFjdC0zMDAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhvbWVidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJvdXRidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraWxsYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudHlwZWQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHNjcm9sbChyZWYpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5XaGl0ZUNhblpFIC0gRGV2ZWxvcGVyIPCfmoA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL215bG9nbzQud2VicFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gva29ucGEvZGV2aWNvbkBtYXN0ZXIvZGV2aWNvbi5taW4uY3NzXCIvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItMVBLT2dJWTU5eEo4Q284K05FNkZaK0xPQVpLankrS1k4aXEwRzRCM0N5ZVk2d1lITjN5dDlQVzBYcFNyaVZsa01YZTQwUFRLblhyTG5aOStma0Rhb2c9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNS4wLjAtYWxwaGExL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1yNE55UDQ2S3JqRGxlYXdCZ0Q1dHA4WTdVem1MQTA1b00xaUFFUTE3Q1N1RHFuVUsyK2s5bHVYUU9mWEpDSjRJXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC81LjAuMC1hbHBoYTEvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1vZXNpNjJoT0xmenJ5czRMeFJGNjNPSkNYZFhEaXBpWVdCbnZUbDlZOS9UUmx3NXhsS0lFSHBOeXZ2RFNoZ2YvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICB7LyogbmF2YmFyICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lID0gXCJteS1uYXZcIiBpZD1cIm15bmF2XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY29udGVudC1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15bG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiL215bG9nbzQud2VicFwiIGFsdD1cIm15IGxvZ29cIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwibXl0ZXh0XCI+V2hpdGVDYW5aRTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1saXN0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXluYXYtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhhcy1mb2N1c1wiIGlkPVwiaG9tZS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zY3JvbGwodGhpcy5teWhvbWUpfX0+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJhYm91dC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5teWFib3V0ID8gdGhpcy5zY3JvbGwodGhpcy5teWFib3V0KSA6IHBhc3N9fT5BYm91dDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJza2lsbHMtYnRuXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXlza2lsbCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlza2lsbCkgOiBwYXNzfX0+U2tpbGxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInByb2plY3RzLWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15cHJvamVjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlwcm9qZWN0KSA6IHBhc3N9fT5Qcm9qZWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjb250YWN0LWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15Y29udGFjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXljb250YWN0KSA6IHBhc3N9fT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm15cHJvZ3Jlc3NiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGVyY2VudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aGVhZGVyXCIgcmVmPXt0aGlzLm15aG9tZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1oZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cImZpcnN0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGkhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJzdWItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJJ20gV2hpdGVDYW5aRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwic3ViLXRleHQyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17KGVsKSA9PiB7IHRoaXMuZWwgPSBlbDsgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LWN1cy1idG4xXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXljb250YWN0ID8gdGhpcy5zY3JvbGwodGhpcy5teWNvbnRhY3QpIDogcGFzc319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IG1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LWN1cy1idG4yXCIgaHJlZj1cIi9teS1yZXN1bWUtZW4ud2VicFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3IHJlc3VtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItaW1hZ2VcIiBzcmM9XCIvbmV3LWltZzMud2VicFwiIGFsdD1cImhlYWRlci1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogY29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15Ym9keVwiIHJlZj17dGhpcy5teWFib3V0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dG1lXCIgaWQ9XCJhYm91dG1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0bWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT7wn5qAICBBIGxpJ2wgYml0IDxici8+IGFib3V0IG15c2VsZjwvaDE+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGkhLCBpJ20gUGhhdGNoYXJhcG9uZyBKdWxsYW1vbnRvbiBpIGxvdmUgdGVjaCBhbmQgY29tcHV0ZXI8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luY2UgaSB3YXMgeW91bmcgaXQncyBtYWtlIG1lIGJlIGEgdGVjaCBnZWVrLCBkdW5ubyB3aHkgd2hlbiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpcnN0IG1ldCB0aGUgY29kaW5nIGluIGEgY29tcHV0ZXIgY2xhc3MgYXQgdW5pdmVyc2l0eSBpIGZlbHQgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQncyByaWdodCBmb3IgbWUsIHRoZW4gaSB0aGluayBjb2RpbmcgaXQncyBhIHBhcnQgb2YgbXkgbGlmZSwgZWFjaCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIgbGFuZ3VhZ2Ugd2hlbiBpIGxlYXJuIGFuZCB3cml0ZSBpdCBlYXNpZXIgdGhhbiBvdGhlciA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgZm9yIG1lIFB5dGhvbiBsYW5ndWFnZSBpcyB0aGUgYmVzdCBvZiBtZSBiZWNhdXNlIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCdzIHVzZWZ1bCBzbyBtdWNoIHN0dWZmIG9mIHRoaXMgdGltZS4g8J+YhFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LXJlc3VtZS1lbi5wZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LWN1cy1idG4zXCIgZG93bmxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkIHJlc3VtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRtZS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiL25ldy1pbWcxLndlYnBcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlza2lsbHNcIiByZWY9e3RoaXMubXlza2lsbH0gaWQ9XCJza2lsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeV9za2lsbHMgPHNwYW4+Lzwvc3Bhbj48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXpvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1odG1sNS1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWNzczMtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1qYXZhc2NyaXB0LXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tcHl0aG9uLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tZGphbmdvLXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZHJvcC1zaGFkb3dcIiBzcmM9XCIvZmxhc2sud2VicFwiIGFsdD1cImZsYXNrLWljb25cIiB3aWR0aD1cIjgwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tY3NoYXJwLXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tZG90LW5ldC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLW1vbmdvZGItcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1teXNxbC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWphdmEtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1hbmRyb2lkLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlwcm9qZWN0c1wiIHJlZj17dGhpcy5teXByb2plY3R9IGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeSBQcm9qZWN0cyA8c3Bhbj4vPC9zcGFuPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhQcm9qZWN0KS5tYXAoKHZhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjYXJkLXByb2plY3RcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsWzFdLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsWzFdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxbMV0uZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPlBsYXRmb3JtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGExXCI+e3ZhbFsxXS5wbGF0Zm9ybX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPkVkaXRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hLWJveCBhMlwiPnt2YWxbMV0uZWRpdG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+RnJhbWV3b3JrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGEzXCI+e3ZhbFsxXS5mcmFtZXdvcmt9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcS1ib3hcIj5MaWJyYXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGE0XCI+e3ZhbFsxXS5saWJyYXJ5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+TGFuZ3VhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYS1ib3ggYTVcIj57dmFsWzFdLmxhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWNvbnRhY3RcIiByZWY9e3RoaXMubXljb250YWN0fSBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeSBDb250YWN0IDxzcGFuPi88L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TYXkgSGkgdG8gbWUhIPCfkYs8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWJvZHl3b3JrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwibWFpbHRvOnBoYXRjaGFyYXBvbmdqdWxsYW1vbnRvbkBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtb3BlblwiPjwvaT48L2E+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3doaXRlY2FuemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9XaGl0ZUNhblpFL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBmb290ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIMKpIDIwMjAgV0hJVEVDQU5aRS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==