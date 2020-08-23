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
        href: "/mylogo4.png",
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
        src: "/mylogo4.png",
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 29
        }
      }, "view resume")), __jsx("img", {
        className: "header-image",
        src: "/new-img3.png",
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
          lineNumber: 230,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "aboutme",
        id: "aboutme",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "aboutme-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 25
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 29
        }
      }, "\uD83D\uDE80  A li'l bit ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 48
        }
      }), " about myself"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 71
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 29
        }
      }, " Hi!, i'm Phatcharapong Jullamonton i love tech and computer", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 92
        }
      }), "since i was young it's make me be a tech geek, dunno why when ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 95
        }
      }), "the first met the coding in a computer class at university i felt ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 99
        }
      }), "it's right for me, then i think coding it's a part of my life, each ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 101
        }
      }), "computer language when i learn and write it easier than other ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 95
        }
      }), "class for me Python language is the best of me because ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 88
        }
      }), "it's useful so much stuff of this time. \uD83D\uDE04"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 33
        }
      }), __jsx("button", {
        className: "my-cus-btn3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 29
        }
      }, "download resume")), __jsx("div", {
        className: "aboutme-img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 25
        }
      }, __jsx("img", {
        loading: "lazy",
        src: "/new-img1.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 29
        }
      }))), __jsx("div", {
        className: "myskills",
        ref: this.myskill,
        id: "skills",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 29
        }
      }), " My_skills ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 79
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 93
        }
      })), __jsx("div", {
        className: "card-zone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-html5-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-css3-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-javascript-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-python-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 33
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 35
        }
      }), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-django-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 29
        }
      }, __jsx("img", {
        className: "drop-shadow",
        src: "/flask.png",
        alt: "flask-icon",
        width: "80px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-csharp-plain colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-dot-net-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-mongodb-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-mysql-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-java-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "card-skill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "devicon-android-plain-wordmark colored drop-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 33
        }
      })))), __jsx("div", {
        className: "myprojects",
        ref: this.myproject,
        id: "projects",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 29
        }
      }), " My Projects ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 81
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 95
        }
      })), __jsx("div", {
        className: "card-zone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }
      }, Object.entries(_util_projects_json__WEBPACK_IMPORTED_MODULE_10__).map(function (val, i) {
        return __jsx("div", {
          className: "card-project",
          key: i,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 40
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: val[1].link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 37
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 41
          }
        }, __jsx("h1", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 45
          }
        }, val[1].title))), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 37
          }
        }, val[1].detail), __jsx("div", {
          className: "detail-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 45
          }
        }, "Platform"), __jsx("span", {
          className: "text-a-box a1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 45
          }
        }, val[1].platform)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 45
          }
        }, "Editor"), __jsx("span", {
          className: "text-a-box a2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 45
          }
        }, val[1].editor)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 45
          }
        }, "Framework"), __jsx("span", {
          className: "text-a-box a3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 45
          }
        }, val[1].framework)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 45
          }
        }, "Library"), __jsx("span", {
          className: "text-a-box a4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 45
          }
        }, val[1].library)), __jsx("div", {
          className: "detail-data-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: "text-q-box",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 45
          }
        }, "Language"), __jsx("span", {
          className: "text-a-box a5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325,
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
          lineNumber: 332,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 29
        }
      }), " My Contact ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 80
        }
      }, "/"), __jsx("i", {
        className: "fas fa-chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 94
        }
      })), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 25
        }
      }, "Say Hi to me! \uD83D\uDC4B"), __jsx("div", {
        className: "mybodywork",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 25
        }
      }, __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 29
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "mailto:phatcharapongjullamonton@gmail.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-envelope-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://github.com/whitecanze",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-github",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://www.facebook.com/WhiteCanZE/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-facebook-f",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 44
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 45
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fab fa-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 45
        }
      }))))))), __jsx("div", {
        className: "myfooter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm15aG9tZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibXlhYm91dCIsIm15c2tpbGwiLCJteXByb2plY3QiLCJteWNvbnRhY3QiLCJzdHJpbmdzIiwib3B0aW9ucyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImxvb3AiLCJzaG93Q3Vyc29yIiwidHlwZWQiLCJUeXBlZCIsImVsIiwiaXNCcm93c2VyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdmJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGlja3kiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwib2Zmc2V0VG9wIiwibXlwcm9ncmVzc2JhciIsInRvdGFsaGVpZ2h0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiaG9tZWJ0biIsImFib3V0YnRuIiwic2tpbGxidG4iLCJwcm9qZWN0YnRuIiwiY29udGFjdGJ0biIsImFib3V0bWUiLCJza2lsbHMiLCJwcm9qZWN0cyIsImNvbnRhY3QiLCJwcm9ncmVzcyIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiZGVzdHJveSIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2Nyb2xsIiwicGFzcyIsIk9iamVjdCIsImVudHJpZXMiLCJQcm9qZWN0IiwibWFwIiwidmFsIiwiaSIsImxpbmsiLCJ0aXRsZSIsImRldGFpbCIsInBsYXRmb3JtIiwiZWRpdG9yIiwiZnJhbWV3b3JrIiwibGlicmFyeSIsImxhbmd1YWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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YjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsQ0FESixDQURKLENBWEosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBREosQ0FoQkosRUF1Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBREosQ0F2QkosQ0FESixDQUpKLENBdEdKLEVBNklJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBN0lKLENBN0RKLENBREo7QUFpTkg7Ozs7RUFqWDZCK0QsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI0OTRkMWU0OGNlZDUyOTU2YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi91dGlsL3Byb2plY3RzLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMubXlob21lID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubXlhYm91dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm15c2tpbGwgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5teXByb2plY3QgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5teWNvbnRhY3QgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyAgPSBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGVjaCBnZWVrXCIsXG4gICAgICAgICAgICBcImRldmVsb3BlclwiLFxuICAgICAgICAgICAgXCJBbmFseXRpY2FsXCIsXG4gICAgICAgICAgICBcIkVuam95IHRha2luZyBjaGFsbGVuZ2VzXCIsXG4gICAgICAgICAgICBcIk1ha2UgZXZlcnl0aGluZyBwb3NzaWJsZVwiLFxuICAgICAgICAgICAgXCJHZXQgdGhpbmdzIGRvbmVcIixcbiAgICAgICAgICAgIF07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHJpbmdzOiBzdHJpbmdzLFxuICAgICAgICAgICAgdHlwZVNwZWVkOiAxMDAsXG4gICAgICAgICAgICBiYWNrU3BlZWQ6IDUwLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDdXJzb3I6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlciA9IHdpbmRvdyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXluYXZcIilcbiAgICAgICAgICAgIGxldCBzdGlja3kgPSBSZWFjdERPTS5maW5kRE9NTm9kZShuYXZiYXIpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IG15cHJvZ3Jlc3NiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NiYXInKVxuICAgICAgICAgICAgLy8gbGV0IG15cHJvZ3Jzc3BlcmNlbnRwZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcmNlbnQnKVxuICAgICAgICAgICAgbGV0IHRvdGFsaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICAgIGxldCBob21lYnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKSlcbiAgICAgICAgICAgIGxldCBhYm91dGJ0biA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtYnRuXCIpKVxuICAgICAgICAgICAgbGV0IHNraWxsYnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHMtYnRuXCIpKVxuICAgICAgICAgICAgbGV0IHByb2plY3RidG4gPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWJ0blwiKSlcbiAgICAgICAgICAgIGxldCBjb250YWN0YnRuID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ0blwiKSlcbiAgICAgICAgICAgIC8vIGxldCBoZWFkZXIgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgYWJvdXRtZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRtZVwiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgc2tpbGxzID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHNcIikpLm9mZnNldFRvcFxuICAgICAgICAgICAgbGV0IHByb2plY3RzID0gUmVhY3RET00uZmluZERPTU5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgY29udGFjdCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKSkub2Zmc2V0VG9wXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAod2luZG93LnBhZ2VZT2Zmc2V0IC8gdG90YWxoZWlnaHQpICogMTAwXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUobXlwcm9ncmVzc2Jhcikuc3R5bGUud2lkdGggPSBwcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUobmF2YmFyKS5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtdG9wXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKG5hdmJhcikuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkLXRvcFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYWdlWU9mZnNldDpcIit3aW5kb3cucGFnZVlPZmZzZXQsXCJoZWFkZXI6XCIraGVhZGVyLFwiYWJvdXRtZTpcIithYm91dG1lLFwic2tpbGxzOlwiK3NraWxscyxcInByb2plY3RzOlwiK3Byb2plY3RzLFwiY29udGFjdDpcIitjb250YWN0KVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IGFib3V0bWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWJvdXRidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraWxsYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGFib3V0bWUtMTg0ICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IHNraWxscykge1xuICAgICAgICAgICAgICAgIGlmIChob21lYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBhYm91dGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChza2lsbGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBza2lsbHMtMTAwICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhvbWVidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBob21lYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFib3V0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHByb2plY3RzLTEwMCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCBjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFib3V0YnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChza2lsbGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFjdGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChob21lYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZWJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBjb250YWN0LTMwMCApIHtcbiAgICAgICAgICAgICAgICBpZiAoaG9tZWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdGJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYm91dGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3V0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2tpbGxidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBza2lsbGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0YnRuLmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3NcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy50eXBlZC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsKHJlZikge1xuICAgICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPldoaXRlQ2FuWkUgLSBEZXZlbG9wZXIg8J+agDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbXlsb2dvNC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2tvbnBhL2Rldmljb25AbWFzdGVyL2Rldmljb24ubWluLmNzc1wiLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTFQS09nSVk1OXhKOENvOCtORTZGWitMT0FaS2p5K0tZOGlxMEc0QjNDeWVZNndZSE4zeXQ5UFcwWHBTcmlWbGtNWGU0MFBUS25YckxuWjkrZmtEYW9nPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzUuMC4wLWFscGhhMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtcjROeVA0NktyakRsZWF3QmdENXRwOFk3VXptTEEwNW9NMWlBRVExN0NTdURxblVLMitrOWx1WFFPZlhKQ0o0SVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNS4wLjAtYWxwaGExL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtb2VzaTYyaE9MZnpyeXM0THhSRjYzT0pDWGRYRGlwaVlXQm52VGw5WTkvVFJsdzV4bEtJRUhwTnl2dkRTaGdmL1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgey8qIG5hdmJhciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZSA9IFwibXktbmF2XCIgaWQ9XCJteW5hdlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNvbnRlbnQtbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIHNyYz1cIi9teWxvZ280LnBuZ1wiIGFsdD1cIm15IGxvZ29cIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwibXl0ZXh0XCI+V2hpdGVDYW5aRTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1saXN0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXluYXYtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhhcy1mb2N1c1wiIGlkPVwiaG9tZS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zY3JvbGwodGhpcy5teWhvbWUpfX0+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJhYm91dC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5teWFib3V0ID8gdGhpcy5zY3JvbGwodGhpcy5teWFib3V0KSA6IHBhc3N9fT5BYm91dDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJza2lsbHMtYnRuXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXlza2lsbCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlza2lsbCkgOiBwYXNzfX0+U2tpbGxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInByb2plY3RzLWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15cHJvamVjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXlwcm9qZWN0KSA6IHBhc3N9fT5Qcm9qZWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjb250YWN0LWJ0blwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLm15Y29udGFjdCA/IHRoaXMuc2Nyb2xsKHRoaXMubXljb250YWN0KSA6IHBhc3N9fT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm15cHJvZ3Jlc3NiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGVyY2VudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aGVhZGVyXCIgcmVmPXt0aGlzLm15aG9tZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1oZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cImZpcnN0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGkhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJzdWItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJJ20gV2hpdGVDYW5aRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwic3ViLXRleHQyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17KGVsKSA9PiB7IHRoaXMuZWwgPSBlbDsgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LWN1cy1idG4xXCIgb25DbGljaz17KCkgPT4ge3RoaXMubXljb250YWN0ID8gdGhpcy5zY3JvbGwodGhpcy5teWNvbnRhY3QpIDogcGFzc319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IG1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LWN1cy1idG4yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcgcmVzdW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYWRlci1pbWFnZVwiIHNyYz1cIi9uZXctaW1nMy5wbmdcIiBhbHQ9XCJoZWFkZXItaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGNvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWJvZHlcIiByZWY9e3RoaXMubXlhYm91dH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRtZVwiIGlkPVwiYWJvdXRtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dG1lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+8J+agCAgQSBsaSdsIGJpdCA8YnIvPiBhYm91dCBteXNlbGY8L2gxPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhpISwgaSdtIFBoYXRjaGFyYXBvbmcgSnVsbGFtb250b24gaSBsb3ZlIHRlY2ggYW5kIGNvbXB1dGVyPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmNlIGkgd2FzIHlvdW5nIGl0J3MgbWFrZSBtZSBiZSBhIHRlY2ggZ2VlaywgZHVubm8gd2h5IHdoZW4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaXJzdCBtZXQgdGhlIGNvZGluZyBpbiBhIGNvbXB1dGVyIGNsYXNzIGF0IHVuaXZlcnNpdHkgaSBmZWx0IDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0J3MgcmlnaHQgZm9yIG1lLCB0aGVuIGkgdGhpbmsgY29kaW5nIGl0J3MgYSBwYXJ0IG9mIG15IGxpZmUsIGVhY2ggPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyIGxhbmd1YWdlIHdoZW4gaSBsZWFybiBhbmQgd3JpdGUgaXQgZWFzaWVyIHRoYW4gb3RoZXIgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIGZvciBtZSBQeXRob24gbGFuZ3VhZ2UgaXMgdGhlIGJlc3Qgb2YgbWUgYmVjYXVzZSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQncyB1c2VmdWwgc28gbXVjaCBzdHVmZiBvZiB0aGlzIHRpbWUuIPCfmIRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS1jdXMtYnRuM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZCByZXN1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dG1lLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBzcmM9XCIvbmV3LWltZzEucG5nXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15c2tpbGxzXCIgcmVmPXt0aGlzLm15c2tpbGx9IGlkPVwic2tpbGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gTXlfc2tpbGxzIDxzcGFuPi88L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC16b25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24taHRtbDUtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1jc3MzLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tamF2YXNjcmlwdC1wbGFpbiBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLXB5dGhvbi1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWRqYW5nby1wbGFpbiBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRyb3Atc2hhZG93XCIgc3JjPVwiL2ZsYXNrLnBuZ1wiIGFsdD1cImZsYXNrLWljb25cIiB3aWR0aD1cIjgwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tY3NoYXJwLXBsYWluIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tZG90LW5ldC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLW1vbmdvZGItcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1teXNxbC1wbGFpbi13b3JkbWFyayBjb2xvcmVkIGRyb3Atc2hhZG93XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1za2lsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWphdmEtcGxhaW4td29yZG1hcmsgY29sb3JlZCBkcm9wLXNoYWRvd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2tpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1hbmRyb2lkLXBsYWluLXdvcmRtYXJrIGNvbG9yZWQgZHJvcC1zaGFkb3dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlwcm9qZWN0c1wiIHJlZj17dGhpcy5teXByb2plY3R9IGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeSBQcm9qZWN0cyA8c3Bhbj4vPC9zcGFuPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhQcm9qZWN0KS5tYXAoKHZhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjYXJkLXByb2plY3RcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsWzFdLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsWzFdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxbMV0uZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPlBsYXRmb3JtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGExXCI+e3ZhbFsxXS5wbGF0Zm9ybX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1xLWJveFwiPkVkaXRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hLWJveCBhMlwiPnt2YWxbMV0uZWRpdG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+RnJhbWV3b3JrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGEzXCI+e3ZhbFsxXS5mcmFtZXdvcmt9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcS1ib3hcIj5MaWJyYXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWEtYm94IGE0XCI+e3ZhbFsxXS5saWJyYXJ5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1kYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXEtYm94XCI+TGFuZ3VhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYS1ib3ggYTVcIj57dmFsWzFdLmxhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWNvbnRhY3RcIiByZWY9e3RoaXMubXljb250YWN0fSBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBNeSBDb250YWN0IDxzcGFuPi88L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cIm15cHJvaW1nXCIgc3JjPVwiLzU5MDE2NDAwXzEucG5nXCIgYWx0PVwiXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2F5IEhpIHRvIG1lISDwn5GLPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlib2R5d29ya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpwaGF0Y2hhcmFwb25nanVsbGFtb250b25AZ21haWwuY29tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW5cIj48L2k+PC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZWNhbnplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vV2hpdGVDYW5aRS9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBmb290ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIMKpIDIwMjAgV0hJVEVDQU5aRS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==