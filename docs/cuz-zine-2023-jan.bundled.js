/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var x_x;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NoApp\": () => (/* binding */ NoApp)\n/* harmony export */ });\n/* harmony import */ var _pages_01_can_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/01-can.js */ \"./src/pages/01-can.js\");\n/* harmony import */ var _pages_02_tribals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/02-tribals.js */ \"./src/pages/02-tribals.js\");\n/* harmony import */ var _pages_03_lorenz_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/03-lorenz.js */ \"./src/pages/03-lorenz.js\");\n/* harmony import */ var _pages_07_sudoku_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/07-sudoku.js */ \"./src/pages/07-sudoku.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stats.js */ \"./node_modules/stats.js/build/stats.min.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n\n\nvar stats = new (stats_js__WEBPACK_IMPORTED_MODULE_4___default())();\n\nconst PAGES = new Array(16);\nconst RENDER = [];\nclass NoApp {\n  constructor() {}\n  update() {}\n  draw() {}\n  on() {}\n}\n\n/**\n *\n */\nfunction Init(seed) {\n  // Initialize with empty apps\n  for (let i = 0; i < PAGES.length; i++) {\n    if (PAGES[i] && PAGES[i].clear) {\n      PAGES[i].clear();\n    }\n    PAGES[i] = new NoApp();\n  }\n\n  // Fill in cover page\n  PAGES[0] = (0,_pages_01_can_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(seed);\n  PAGES[1] = new _pages_02_tribals_js__WEBPACK_IMPORTED_MODULE_1__.TribalPage(document.getElementById(\"page-02\"), seed);\n  PAGES[2] = new _pages_03_lorenz_js__WEBPACK_IMPORTED_MODULE_2__.LorenzPage(document.getElementById(\"page-03\"), seed);\n  PAGES[6] = new _pages_07_sudoku_js__WEBPACK_IMPORTED_MODULE_3__.SudokuPage(document.getElementById(\"page-07\"), seed);\n\n  // When ready add to render list\n  PAGES[0].on(\"loaded\", function () {\n    RENDER.push(this);\n    PAGES[0].update();\n    PAGES[0].draw();\n  }.bind(PAGES[0]));\n  RENDER.push(PAGES[2]);\n}\n\n// Interpolate between to vec3 points\nfunction interpolat3(start, end, t) {\n  let [x0, y0, z0] = start;\n  let [x1, y1, z1] = end;\n  let x = x0 + t * (x1 - x0);\n  let y = y0 + t * (y1 - y0);\n  let z = z0 + t * (z1 - z0);\n  return [Math.floor(x), Math.floor(y), Math.floor(z)];\n}\nfunction randomString() {\n  let s = \"\";\n  for (let i = 0; i < 10; i++) {\n    s += String.fromCharCode(65 + 26 * Math.random());\n  }\n  return s;\n}\nlet KEY = \"cuz.coupons-seed\";\n\n/**\n * Get Seed\n *\n * Return a seed...\n */\nfunction getSeed() {\n  if (localStorage.getItem(KEY) === null) {\n    localStorage.setItem(KEY, randomString());\n  }\n  return localStorage.getItem(KEY);\n}\nfunction setSeed(val) {\n  localStorage.setItem(KEY, val);\n}\nwindow.addEventListener(\"load\", () => {\n  document.body.appendChild(stats.dom);\n  document.getElementById(\"seed\").value = getSeed();\n  document.getElementById(\"seed\").addEventListener(\"change\", ev => {\n    setSeed(ev.target.value);\n    Init(getSeed());\n  });\n\n  // Initialize and setup render loop\n  // ...\n  // ...\n\n  Init(getSeed());\n\n  // Start render loop\n  (function animate() {\n    requestAnimationFrame(animate);\n    stats.begin();\n    RENDER.forEach(app => {\n      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.isInViewport)(app.el)) {\n        app.update();\n        app.draw();\n      }\n    });\n    stats.end();\n  })();\n  let page01 = document.getElementById(\"page-01\");\n  let meow = document.getElementById(\"meow\");\n\n  // scroll\n  window.addEventListener(\"scroll\", handleScroll);\n  function handleScroll() {\n    const v = interpolat3([255, 165, 0], [255, 255, 255], (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.getScrollPercent)());\n    const c = \"rgb(\" + v.join(\", \") + \")\";\n    document.querySelector(\"HTML\").style.scrollbarColor = c + \" transparent\";\n\n    // SMOOTH THIS OUT\n    const box01 = page01.getBoundingClientRect();\n    let d = Math.min(Math.max(-box01.top, 0) / box01.height, 1.0);\n    if (PAGES[0].setCrush) {\n      PAGES[0].setCrush(d);\n    }\n    if (PAGES[2].app.setRotation) {\n      let u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.getScrollPercent)();\n      PAGES[2].app.setRotation(3 * Math.PI * u + Math.PI / 2.0);\n    }\n  }\n  handleScroll();\n});\n\n//# sourceURL=webpack://x_x/./src/index.js?");

/***/ }),

/***/ "./src/pages/01-can.js":
/*!*****************************!*\
  !*** ./src/pages/01-can.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CanCoverPage)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@pool-water/secret-sauce'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nlet seedrandom = __webpack_require__(/*! seedrandom */ \"./node_modules/seedrandom/index.js\");\nconst COLORS = [\n// [0x000000, 0x777777],\n// [0x000000, 0xF5B11D],\n// [0x000000, 0xAB5067],\n[0x000000, 0x0377FC]];\nconst text = `Breaking through the sealed door, Carter found a passageway filled with stone and rubble. Clearing this passageway revealed another sealed door marked with the royal impressions of Tutankhamun. Carter was sure he had found the king's tomb, but he was afraid it may have been pillaged - its contents removed. On November 26th Carter, with Lord Carnarvon at his side, started to break through this second sealed door. It was, as Carter described, \"the day of days, the most wonderful that I have ever lived through.`;\n\n/**\n *\n */\nfunction features(seed) {\n  let prng = new seedrandom(seed);\n  return {\n    flavor: \"whatever\",\n    label: prng() < 0.5 ? \"waves\" : \"dots\",\n    orientation: prng() < 0.5 ? \"top\" : \"side\",\n    love: text,\n    colors: COLORS[Math.floor(prng() * COLORS.length)],\n    loop: true,\n    reverse: prng() < 0.5\n  };\n}\nfunction CanCoverPage(seed) {\n  // Generate canvas\n  let canvas = document.createElement(\"CANVAS\");\n\n  // Attach to #page-01\n  let el = document.getElementById(\"page-01\");\n  el.querySelectorAll(\":scope > canvas\").forEach(v => {\n    el.removeChild(v);\n  });\n  el.appendChild(canvas);\n  let app = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@pool-water/secret-sauce'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n    el: canvas,\n    reflection: false,\n    ...features(seed)\n  });\n  const w = el.offsetWidth;\n  const h = el.offsetHeight;\n  canvas.width = w;\n  canvas.height = h;\n  app.setSize(w, h);\n  return app;\n}\n\n//# sourceURL=webpack://x_x/./src/pages/01-can.js?");

/***/ }),

/***/ "./src/pages/02-tribals.js":
/*!*********************************!*\
  !*** ./src/pages/02-tribals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TribalPage\": () => (/* binding */ TribalPage)\n/* harmony export */ });\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ \"./src/pages/page.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! seedrandom */ \"./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass TribalPage extends _page_js__WEBPACK_IMPORTED_MODULE_0__.Page {\n  constructor(el, seed) {\n    super(el, seed);\n    this.el.innerHTML = \"\";\n    const table = document.createElement(\"TABLE\");\n    this.features().forEach(url => {\n      const img = new Image();\n      img.src = url;\n      const td = document.createElement(\"TD\");\n      td.appendChild(img);\n      const tr = document.createElement(\"TR\");\n      tr.appendChild(td);\n      table.appendChild(tr);\n    });\n    this.el.appendChild(table);\n  }\n  features() {\n    let prng = new (seedrandom__WEBPACK_IMPORTED_MODULE_1___default())(this.seed);\n    let rands = [prng(), prng(), prng()];\n    let urls = [];\n    rands.forEach(r => {\n      let url = \"/Tribal Array 3/Untitled-3-XXX.svg\";\n      let id = Math.floor(34 * r) + 1;\n      id = id < 10 ? \"0\" + id : \"\" + id;\n      let x = url.replace(\"XXX\", id);\n      urls.push(x);\n    });\n    return urls;\n  }\n}\n\n//# sourceURL=webpack://x_x/./src/pages/02-tribals.js?");

/***/ }),

/***/ "./src/pages/03-lorenz.js":
/*!********************************!*\
  !*** ./src/pages/03-lorenz.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LorenzPage\": () => (/* binding */ LorenzPage)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@pool-water/secret-sauce'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ \"./src/pages/page.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seedrandom */ \"./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/**\n *\n */\nclass LorenzPage extends _page_js__WEBPACK_IMPORTED_MODULE_1__.Page {\n  constructor(el, seed) {\n    super(el, seed);\n    const canvas = document.createElement(\"CANVAS\");\n    canvas.className = \"backdrop\";\n    canvas.width = el.clientWidth;\n    canvas.height = el.clientHeight;\n    this.el.appendChild(canvas);\n    this.app = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@pool-water/secret-sauce'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n      el: canvas,\n      ...this.features()\n    });\n  }\n  update() {\n    this.app.update();\n  }\n  draw() {\n    this.app.draw();\n  }\n  clear() {\n    this.el.querySelectorAll(\":scope > canvas\").forEach(v => {\n      this.el.removeChild(v);\n    });\n  }\n  features() {\n    let prng = new (seedrandom__WEBPACK_IMPORTED_MODULE_2___default())(this.seed);\n    return {\n      pos: [0.1, 0.0, 0.0],\n      sigma: 10.0,\n      rho: 10.74 + prng() * 20.0,\n      beta: 8.0 / 3.0\n    };\n  }\n}\n\n//# sourceURL=webpack://x_x/./src/pages/03-lorenz.js?");

/***/ }),

/***/ "./src/pages/07-sudoku.js":
/*!********************************!*\
  !*** ./src/pages/07-sudoku.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SudokuPage\": () => (/* binding */ SudokuPage)\n/* harmony export */ });\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ \"./src/pages/page.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! seedrandom */ \"./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction generateTable(n, className) {\n  const table = document.createElement(\"TABLE\");\n  for (let i = 0; i < n; i++) {\n    const row = document.createElement(\"TR\");\n    table.appendChild(row);\n    for (let j = 0; j < n; j++) {\n      const cell = document.createElement(\"TD\");\n      row.appendChild(cell);\n      cell.className = className || \"\";\n    }\n  }\n  return table;\n}\nclass SudokuPage extends _page_js__WEBPACK_IMPORTED_MODULE_0__.Page {\n  constructor(el, seed) {\n    super(el, seed);\n    let prng = new (seedrandom__WEBPACK_IMPORTED_MODULE_1___default())(this.seed);\n    const container = el;\n    const grid = generateTable(3, \"big\");\n    grid.name = grid.id = \"sudoku\";\n    grid.className = \"sudoku\";\n    grid.querySelectorAll(\":scope td\").forEach(el => {\n      const tab = generateTable(3, \"small\");\n      tab.className = \"subgrid\";\n      el.appendChild(tab);\n      tab.querySelectorAll(\":scope td\").forEach(cell => {\n        const input = document.createElement(\"INPUT\");\n        input.maxLength = 1;\n        input.size = 1;\n        input.type = \"tel\";\n        input.className = \"sudoku-entry\";\n        if (prng() < 0.5) {\n          input.value = Math.floor(1 + 8 * prng());\n        }\n        cell.appendChild(input);\n      });\n    });\n    el.appendChild(grid);\n  }\n}\n\n//# sourceURL=webpack://x_x/./src/pages/07-sudoku.js?");

/***/ }),

/***/ "./src/pages/page.js":
/*!***************************!*\
  !*** ./src/pages/page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": () => (/* binding */ Page)\n/* harmony export */ });\n/**\n * Page\n */\nclass Page {\n  constructor(el, seed) {\n    this.el = el;\n    this.seed = seed;\n    this.app = undefined;\n  }\n  update() {}\n  draw() {}\n  clear() {}\n  features() {\n    throw \"Need to implement features\";\n  }\n}\n\n//# sourceURL=webpack://x_x/./src/pages/page.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getScrollPercent\": () => (/* binding */ getScrollPercent),\n/* harmony export */   \"isInViewport\": () => (/* binding */ isInViewport),\n/* harmony export */   \"position\": () => (/* binding */ position)\n/* harmony export */ });\n/**\n *\n */\nfunction position(el) {\n  const rect = el.getBoundingClientRect();\n  return rect.top;\n}\n\n/**\n * Is in Viewport?\n */\nfunction isInViewport(el) {\n  const rect = el.getBoundingClientRect();\n  const h = window.innerHeight || document.documentElement.clientHeight;\n  if (rect.top < 0 && rect.bottom < 0) {\n    return false;\n  }\n  if (rect.top > h && rect.bottom > h) {\n    return false;\n  }\n  return true;\n}\n\n/**\n * Get Scroll Percent\n *\n * Return the %-scrolled. 0.00 at top and 1.00 at bottom.\n */\nfunction getScrollPercent() {\n  var h = document.documentElement,\n    b = document.body,\n    st = 'scrollTop',\n    sh = 'scrollHeight';\n  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);\n}\n\n//# sourceURL=webpack://x_x/./src/utils.js?");

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// A library of seedable RNGs implemented in Javascript.\n//\n// Usage:\n//\n// var seedrandom = require('seedrandom');\n// var random = seedrandom(1); // or any seed.\n// var x = random();       // 0 <= x < 1.  Every bit is random.\n// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.\n\n// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.\n// Period: ~2^116\n// Reported to pass all BigCrush tests.\nvar alea = __webpack_require__(/*! ./lib/alea */ \"./node_modules/seedrandom/lib/alea.js\");\n\n// xor128, a pure xor-shift generator by George Marsaglia.\n// Period: 2^128-1.\n// Reported to fail: MatrixRank and LinearComp.\nvar xor128 = __webpack_require__(/*! ./lib/xor128 */ \"./node_modules/seedrandom/lib/xor128.js\");\n\n// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.\n// Period: 2^192-2^32\n// Reported to fail: CollisionOver, SimpPoker, and LinearComp.\nvar xorwow = __webpack_require__(/*! ./lib/xorwow */ \"./node_modules/seedrandom/lib/xorwow.js\");\n\n// xorshift7, by François Panneton and Pierre L'ecuyer, takes\n// a different approach: it adds robustness by allowing more shifts\n// than Marsaglia's original three.  It is a 7-shift generator\n// with 256 bits, that passes BigCrush with no systmatic failures.\n// Period 2^256-1.\n// No systematic BigCrush failures reported.\nvar xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ \"./node_modules/seedrandom/lib/xorshift7.js\");\n\n// xor4096, by Richard Brent, is a 4096-bit xor-shift with a\n// very long period that also adds a Weyl generator. It also passes\n// BigCrush with no systematic failures.  Its long period may\n// be useful if you have many generators and need to avoid\n// collisions.\n// Period: 2^4128-2^32.\n// No systematic BigCrush failures reported.\nvar xor4096 = __webpack_require__(/*! ./lib/xor4096 */ \"./node_modules/seedrandom/lib/xor4096.js\");\n\n// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random\n// number generator derived from ChaCha, a modern stream cipher.\n// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf\n// Period: ~2^127\n// No systematic BigCrush failures reported.\nvar tychei = __webpack_require__(/*! ./lib/tychei */ \"./node_modules/seedrandom/lib/tychei.js\");\n\n// The original ARC4-based prng included in this library.\n// Period: ~2^1600\nvar sr = __webpack_require__(/*! ./seedrandom */ \"./node_modules/seedrandom/seedrandom.js\");\n\nsr.alea = alea;\nsr.xor128 = xor128;\nsr.xorwow = xorwow;\nsr.xorshift7 = xorshift7;\nsr.xor4096 = xor4096;\nsr.tychei = tychei;\n\nmodule.exports = sr;\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/index.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010\n// http://baagoe.com/en/RandomMusings/javascript/\n// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror\n// Original work is under MIT license -\n\n// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n\n\n(function(global, module, define) {\n\nfunction Alea(seed) {\n  var me = this, mash = Mash();\n\n  me.next = function() {\n    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32\n    me.s0 = me.s1;\n    me.s1 = me.s2;\n    return me.s2 = t - (me.c = t | 0);\n  };\n\n  // Apply the seeding algorithm from Baagoe.\n  me.c = 1;\n  me.s0 = mash(' ');\n  me.s1 = mash(' ');\n  me.s2 = mash(' ');\n  me.s0 -= mash(seed);\n  if (me.s0 < 0) { me.s0 += 1; }\n  me.s1 -= mash(seed);\n  if (me.s1 < 0) { me.s1 += 1; }\n  me.s2 -= mash(seed);\n  if (me.s2 < 0) { me.s2 += 1; }\n  mash = null;\n}\n\nfunction copy(f, t) {\n  t.c = f.c;\n  t.s0 = f.s0;\n  t.s1 = f.s1;\n  t.s2 = f.s2;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new Alea(seed),\n      state = opts && opts.state,\n      prng = xg.next;\n  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }\n  prng.double = function() {\n    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53\n  };\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nfunction Mash() {\n  var n = 0xefc8249d;\n\n  var mash = function(data) {\n    data = String(data);\n    for (var i = 0; i < data.length; i++) {\n      n += data.charCodeAt(i);\n      var h = 0.02519603282416938 * n;\n      n = h >>> 0;\n      h -= n;\n      h *= n;\n      n = h >>> 0;\n      h -= n;\n      n += h * 0x100000000; // 2^32\n    }\n    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32\n  };\n\n  return mash;\n}\n\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__.amdD && __webpack_require__.amdO) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.alea = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__.amdD   // present with an AMD loader\n);\n\n\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/lib/alea.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"Tyche-i\" prng algorithm by\n// Samuel Neves and Filipe Araujo.\n// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  // Set up generator function.\n  me.next = function() {\n    var b = me.b, c = me.c, d = me.d, a = me.a;\n    b = (b << 25) ^ (b >>> 7) ^ c;\n    c = (c - d) | 0;\n    d = (d << 24) ^ (d >>> 8) ^ a;\n    a = (a - b) | 0;\n    me.b = b = (b << 20) ^ (b >>> 12) ^ c;\n    me.c = c = (c - d) | 0;\n    me.d = (d << 16) ^ (c >>> 16) ^ a;\n    return me.a = (a - b) | 0;\n  };\n\n  /* The following is non-inverted tyche, which has better internal\n   * bit diffusion, but which is about 25% slower than tyche-i in JS.\n  me.next = function() {\n    var a = me.a, b = me.b, c = me.c, d = me.d;\n    a = (me.a + me.b | 0) >>> 0;\n    d = me.d ^ a; d = d << 16 ^ d >>> 16;\n    c = me.c + d | 0;\n    b = me.b ^ c; b = b << 12 ^ d >>> 20;\n    me.a = a = a + b | 0;\n    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;\n    me.c = c = c + d | 0;\n    b = b ^ c;\n    return me.b = (b << 7 ^ b >>> 25);\n  }\n  */\n\n  me.a = 0;\n  me.b = 0;\n  me.c = 2654435769 | 0;\n  me.d = 1367130551;\n\n  if (seed === Math.floor(seed)) {\n    // Integer seed.\n    me.a = (seed / 0x100000000) | 0;\n    me.b = seed | 0;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 20; k++) {\n    me.b ^= strseed.charCodeAt(k) | 0;\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.a = f.a;\n  t.b = f.b;\n  t.c = f.c;\n  t.d = f.d;\n  return t;\n};\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__.amdD && __webpack_require__.amdO) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.tychei = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__.amdD   // present with an AMD loader\n);\n\n\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/lib/tychei.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xor128\" prng algorithm by\n// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  me.x = 0;\n  me.y = 0;\n  me.z = 0;\n  me.w = 0;\n\n  // Set up generator function.\n  me.next = function() {\n    var t = me.x ^ (me.x << 11);\n    me.x = me.y;\n    me.y = me.z;\n    me.z = me.w;\n    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);\n  };\n\n  if (seed === (seed | 0)) {\n    // Integer seed.\n    me.x = seed;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 64; k++) {\n    me.x ^= strseed.charCodeAt(k) | 0;\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.x = f.x;\n  t.y = f.y;\n  t.z = f.z;\n  t.w = f.w;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__.amdD && __webpack_require__.amdO) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xor128 = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__.amdD   // present with an AMD loader\n);\n\n\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/lib/xor128.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.\n//\n// This fast non-cryptographic random number generator is designed for\n// use in Monte-Carlo algorithms. It combines a long-period xorshift\n// generator with a Weyl generator, and it passes all common batteries\n// of stasticial tests for randomness while consuming only a few nanoseconds\n// for each prng generated.  For background on the generator, see Brent's\n// paper: \"Some long-period random number generators using shifts and xors.\"\n// http://arxiv.org/pdf/1004.3115v1.pdf\n//\n// Usage:\n//\n// var xor4096 = require('xor4096');\n// random = xor4096(1);                        // Seed with int32 or string.\n// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.\n// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.\n//\n// For nonzero numeric keys, this impelementation provides a sequence\n// identical to that by Brent's xorgens 3 implementaion in C.  This\n// implementation also provides for initalizing the generator with\n// string seeds, or for saving and restoring the state of the generator.\n//\n// On Chrome, this prng benchmarks about 2.1 times slower than\n// Javascript's built-in Math.random().\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this;\n\n  // Set up generator function.\n  me.next = function() {\n    var w = me.w,\n        X = me.X, i = me.i, t, v;\n    // Update Weyl generator.\n    me.w = w = (w + 0x61c88647) | 0;\n    // Update xor generator.\n    v = X[(i + 34) & 127];\n    t = X[i = ((i + 1) & 127)];\n    v ^= v << 13;\n    t ^= t << 17;\n    v ^= v >>> 15;\n    t ^= t >>> 12;\n    // Update Xor generator array state.\n    v = X[i] = v ^ t;\n    me.i = i;\n    // Result is the combination.\n    return (v + (w ^ (w >>> 16))) | 0;\n  };\n\n  function init(me, seed) {\n    var t, v, i, j, w, X = [], limit = 128;\n    if (seed === (seed | 0)) {\n      // Numeric seeds initialize v, which is used to generates X.\n      v = seed;\n      seed = null;\n    } else {\n      // String seeds are mixed into v and X one character at a time.\n      seed = seed + '\\0';\n      v = 0;\n      limit = Math.max(limit, seed.length);\n    }\n    // Initialize circular array and weyl value.\n    for (i = 0, j = -32; j < limit; ++j) {\n      // Put the unicode characters into the array, and shuffle them.\n      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);\n      // After 32 shuffles, take v as the starting w value.\n      if (j === 0) w = v;\n      v ^= v << 10;\n      v ^= v >>> 15;\n      v ^= v << 4;\n      v ^= v >>> 13;\n      if (j >= 0) {\n        w = (w + 0x61c88647) | 0;     // Weyl.\n        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.\n        i = (0 == t) ? i + 1 : 0;     // Count zeroes.\n      }\n    }\n    // We have detected all zeroes; make the key nonzero.\n    if (i >= 128) {\n      X[(seed && seed.length || 0) & 127] = -1;\n    }\n    // Run the generator 512 times to further mix the state before using it.\n    // Factoring this as a function slows the main generator, so it is just\n    // unrolled here.  The weyl generator is not advanced while warming up.\n    i = 127;\n    for (j = 4 * 128; j > 0; --j) {\n      v = X[(i + 34) & 127];\n      t = X[i = ((i + 1) & 127)];\n      v ^= v << 13;\n      t ^= t << 17;\n      v ^= v >>> 15;\n      t ^= t >>> 12;\n      X[i] = v ^ t;\n    }\n    // Storing state as object members is faster than using closure variables.\n    me.w = w;\n    me.X = X;\n    me.i = i;\n  }\n\n  init(me, seed);\n}\n\nfunction copy(f, t) {\n  t.i = f.i;\n  t.w = f.w;\n  t.X = f.X.slice();\n  return t;\n};\n\nfunction impl(seed, opts) {\n  if (seed == null) seed = +(new Date);\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (state.X) copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__.amdD && __webpack_require__.amdO) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xor4096 = impl;\n}\n\n})(\n  this,                                     // window object or global\n   true && module,    // present in node.js\n  __webpack_require__.amdD   // present with an AMD loader\n);\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/lib/xor4096.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xorshift7\" algorithm by\n// François Panneton and Pierre L'ecuyer:\n// \"On the Xorgshift Random Number Generators\"\n// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this;\n\n  // Set up generator function.\n  me.next = function() {\n    // Update xor generator.\n    var X = me.x, i = me.i, t, v, w;\n    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);\n    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);\n    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);\n    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);\n    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);\n    X[i] = v;\n    me.i = (i + 1) & 7;\n    return v;\n  };\n\n  function init(me, seed) {\n    var j, w, X = [];\n\n    if (seed === (seed | 0)) {\n      // Seed state array using a 32-bit integer.\n      w = X[0] = seed;\n    } else {\n      // Seed state using a string.\n      seed = '' + seed;\n      for (j = 0; j < seed.length; ++j) {\n        X[j & 7] = (X[j & 7] << 15) ^\n            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);\n      }\n    }\n    // Enforce an array length of 8, not all zeroes.\n    while (X.length < 8) X.push(0);\n    for (j = 0; j < 8 && X[j] === 0; ++j);\n    if (j == 8) w = X[7] = -1; else w = X[j];\n\n    me.x = X;\n    me.i = 0;\n\n    // Discard an initial 256 values.\n    for (j = 256; j > 0; --j) {\n      me.next();\n    }\n  }\n\n  init(me, seed);\n}\n\nfunction copy(f, t) {\n  t.x = f.x.slice();\n  t.i = f.i;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  if (seed == null) seed = +(new Date);\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (state.x) copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__.amdD && __webpack_require__.amdO) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xorshift7 = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__.amdD   // present with an AMD loader\n);\n\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/lib/xorshift7.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xorwow\" prng algorithm by\n// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  // Set up generator function.\n  me.next = function() {\n    var t = (me.x ^ (me.x >>> 2));\n    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;\n    return (me.d = (me.d + 362437 | 0)) +\n       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;\n  };\n\n  me.x = 0;\n  me.y = 0;\n  me.z = 0;\n  me.w = 0;\n  me.v = 0;\n\n  if (seed === (seed | 0)) {\n    // Integer seed.\n    me.x = seed;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 64; k++) {\n    me.x ^= strseed.charCodeAt(k) | 0;\n    if (k == strseed.length) {\n      me.d = me.x << 10 ^ me.x >>> 4;\n    }\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.x = f.x;\n  t.y = f.y;\n  t.z = f.z;\n  t.w = f.w;\n  t.v = f.v;\n  t.d = f.d;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__.amdD && __webpack_require__.amdO) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xorwow = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__.amdD   // present with an AMD loader\n);\n\n\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/lib/xorwow.js?");

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*\nCopyright 2019 David Bau.\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n*/\n\n(function (global, pool, math) {\n//\n// The following constants are related to IEEE 754 limits.\n//\n\nvar width = 256,        // each RC4 output is 0 <= x < 256\n    chunks = 6,         // at least six RC4 outputs for each double\n    digits = 52,        // there are 52 significant digits in a double\n    rngname = 'random', // rngname: name for Math.random and Math.seedrandom\n    startdenom = math.pow(width, chunks),\n    significance = math.pow(2, digits),\n    overflow = significance * 2,\n    mask = width - 1,\n    nodecrypto;         // node.js crypto module, initialized at the bottom.\n\n//\n// seedrandom()\n// This is the seedrandom function described above.\n//\nfunction seedrandom(seed, options, callback) {\n  var key = [];\n  options = (options == true) ? { entropy: true } : (options || {});\n\n  // Flatten the seed string or build one from local entropy if needed.\n  var shortseed = mixkey(flatten(\n    options.entropy ? [seed, tostring(pool)] :\n    (seed == null) ? autoseed() : seed, 3), key);\n\n  // Use the seed to initialize an ARC4 generator.\n  var arc4 = new ARC4(key);\n\n  // This function returns a random double in [0, 1) that contains\n  // randomness in every bit of the mantissa of the IEEE 754 value.\n  var prng = function() {\n    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48\n        d = startdenom,                 //   and denominator d = 2 ^ 48.\n        x = 0;                          //   and no 'extra last byte'.\n    while (n < significance) {          // Fill up all significant digits by\n      n = (n + x) * width;              //   shifting numerator and\n      d *= width;                       //   denominator and generating a\n      x = arc4.g(1);                    //   new least-significant-byte.\n    }\n    while (n >= overflow) {             // To avoid rounding up, before adding\n      n /= 2;                           //   last byte, shift everything\n      d /= 2;                           //   right using integer math until\n      x >>>= 1;                         //   we have exactly the desired bits.\n    }\n    return (n + x) / d;                 // Form the number within [0, 1).\n  };\n\n  prng.int32 = function() { return arc4.g(4) | 0; }\n  prng.quick = function() { return arc4.g(4) / 0x100000000; }\n  prng.double = prng;\n\n  // Mix the randomness into accumulated entropy.\n  mixkey(tostring(arc4.S), pool);\n\n  // Calling convention: what to return as a function of prng, seed, is_math.\n  return (options.pass || callback ||\n      function(prng, seed, is_math_call, state) {\n        if (state) {\n          // Load the arc4 state from the given state if it has an S array.\n          if (state.S) { copy(state, arc4); }\n          // Only provide the .state method if requested via options.state.\n          prng.state = function() { return copy(arc4, {}); }\n        }\n\n        // If called as a method of Math (Math.seedrandom()), mutate\n        // Math.random because that is how seedrandom.js has worked since v1.0.\n        if (is_math_call) { math[rngname] = prng; return seed; }\n\n        // Otherwise, it is a newer calling convention, so return the\n        // prng directly.\n        else return prng;\n      })(\n  prng,\n  shortseed,\n  'global' in options ? options.global : (this == math),\n  options.state);\n}\n\n//\n// ARC4\n//\n// An ARC4 implementation.  The constructor takes a key in the form of\n// an array of at most (width) integers that should be 0 <= x < (width).\n//\n// The g(count) method returns a pseudorandom integer that concatenates\n// the next (count) outputs from ARC4.  Its return value is a number x\n// that is in the range 0 <= x < (width ^ count).\n//\nfunction ARC4(key) {\n  var t, keylen = key.length,\n      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];\n\n  // The empty key [] is treated as [0].\n  if (!keylen) { key = [keylen++]; }\n\n  // Set up S using the standard key scheduling algorithm.\n  while (i < width) {\n    s[i] = i++;\n  }\n  for (i = 0; i < width; i++) {\n    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];\n    s[j] = t;\n  }\n\n  // The \"g\" method returns the next (count) outputs as one number.\n  (me.g = function(count) {\n    // Using instance members instead of closure state nearly doubles speed.\n    var t, r = 0,\n        i = me.i, j = me.j, s = me.S;\n    while (count--) {\n      t = s[i = mask & (i + 1)];\n      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];\n    }\n    me.i = i; me.j = j;\n    return r;\n    // For robust unpredictability, the function call below automatically\n    // discards an initial batch of values.  This is called RC4-drop[256].\n    // See http://google.com/search?q=rsa+fluhrer+response&btnI\n  })(width);\n}\n\n//\n// copy()\n// Copies internal state of ARC4 to or from a plain object.\n//\nfunction copy(f, t) {\n  t.i = f.i;\n  t.j = f.j;\n  t.S = f.S.slice();\n  return t;\n};\n\n//\n// flatten()\n// Converts an object tree to nested arrays of strings.\n//\nfunction flatten(obj, depth) {\n  var result = [], typ = (typeof obj), prop;\n  if (depth && typ == 'object') {\n    for (prop in obj) {\n      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}\n    }\n  }\n  return (result.length ? result : typ == 'string' ? obj : obj + '\\0');\n}\n\n//\n// mixkey()\n// Mixes a string seed into a key that is an array of integers, and\n// returns a shortened string seed that is equivalent to the result key.\n//\nfunction mixkey(seed, key) {\n  var stringseed = seed + '', smear, j = 0;\n  while (j < stringseed.length) {\n    key[mask & j] =\n      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));\n  }\n  return tostring(key);\n}\n\n//\n// autoseed()\n// Returns an object for autoseeding, using window.crypto and Node crypto\n// module if available.\n//\nfunction autoseed() {\n  try {\n    var out;\n    if (nodecrypto && (out = nodecrypto.randomBytes)) {\n      // The use of 'out' to remember randomBytes makes tight minified code.\n      out = out(width);\n    } else {\n      out = new Uint8Array(width);\n      (global.crypto || global.msCrypto).getRandomValues(out);\n    }\n    return tostring(out);\n  } catch (e) {\n    var browser = global.navigator,\n        plugins = browser && browser.plugins;\n    return [+new Date, global, plugins, global.screen, tostring(pool)];\n  }\n}\n\n//\n// tostring()\n// Converts an array of charcodes to a string\n//\nfunction tostring(a) {\n  return String.fromCharCode.apply(0, a);\n}\n\n//\n// When seedrandom.js is loaded, we immediately mix a few bits\n// from the built-in RNG into the entropy pool.  Because we do\n// not want to interfere with deterministic PRNG state later,\n// seedrandom will not call math.random on its own again after\n// initialization.\n//\nmixkey(math.random(), pool);\n\n//\n// Nodejs and AMD support: export the implementation as a module using\n// either convention.\n//\nif ( true && module.exports) {\n  module.exports = seedrandom;\n  // When in node.js, try using crypto package for autoseeding.\n  try {\n    nodecrypto = __webpack_require__(/*! crypto */ \"?d4c0\");\n  } catch (ex) {}\n} else if (true) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {}\n\n\n// End anonymous scope, and pass initial values.\n})(\n  // global: `self` in browsers (including strict mode and web workers),\n  // otherwise `this` in Node and other environments\n  (typeof self !== 'undefined') ? self : this,\n  [],     // pool: entropy pool starts empty\n  Math    // math: package containing random, pow, and seedrandom\n);\n\n\n//# sourceURL=webpack://x_x/./node_modules/seedrandom/seedrandom.js?");

/***/ }),

/***/ "./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/***/ (function(module) {

eval("// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel(\"FPS\",\"#0ff\",\"#002\")),h=e(new f.Panel(\"MS\",\"#0f0\",\"#020\"));if(self.performance&&self.performance.memory)var t=e(new f.Panel(\"MB\",\"#f08\",\"#201\"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=h;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+\" \"+e+\" (\"+g(c)+\"-\"+g(k)+\")\",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n\n\n//# sourceURL=webpack://x_x/./node_modules/stats.js/build/stats.min.js?");

/***/ }),

/***/ "?d4c0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://x_x/crypto_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	x_x = __webpack_exports__;
/******/ 	
/******/ })()
;