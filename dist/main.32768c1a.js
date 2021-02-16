// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* \u6211\u4EEC\u5148\u7ED9\u76AE\u5361\u4E18\u4E0A\u8272\u5427\uFF01 */\n.skin {\n  position: relative;\n  background: #ffe600;\n  min-height:60vh;\n}\n/* \u63A5\u4E0B\u6765\u6211\u4EEC\u753B\u76AE\u5361\u4E18\u5706\u5706\u7684\u773C\u775B\uFF01 */\n.eye {\n  border: 3px solid #000;\n  background: #2e2e2e;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  top: 150px;\n  left: 50%;\n  margin-left: -32px;\n  border-radius: 50px;\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  background: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: relative;\n  left: 6px;\n}\n.eye.left {\n  transform: translate(-125px);\n}\n.eye.right {\n  transform: translate(125px);\n}\n/* \u7136\u540E\u6211\u4EEC\u6765\u753B\u76AE\u5361\u4E18\u53EF\u7231\u7684\u5C0F\u9F3B\u5B50 */\n.nose {\n  border-color: #000 transparent transparent transparent;\n  width: 0px;\n  height: 0px;\n  border-width: 10px;\n  border-style: solid;\n  border-radius: 50%;\n  position: relative;\n  top: 200px;\n  left: 50%;\n  margin-left: -10px;\n  z-index: 2;\n}\n/* \u7ED9\u9F3B\u5B50\u52A0\u4E0A\u52A8\u753B */\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  transform-origin: 50% 100%;\n  animation: wave 200ms infinite linear;\n}\n/* \u6765\u753B\u76AE\u5361\u4E18\u7EA2\u7EA2\u7684\u5C0F\u8138\u86CB */\n.face {\n  position: absolute;\n  border: 3px solid black;\n  background: #f00;\n  height: 88px;\n  width: 88px;\n  top: 260px;\n  left: 50%;\n  margin-left: -44px;\n  border-radius: 50%;\n}\n.face > img {\n  position: relative;\n  left: 50%;\n  top: 50%;\n}\n.face.left {\n  transform: translateX(-180px);\n}\n.face.right {\n  transform: translateX(180px);\n}\n\n.face.left > img {\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n}\n/* \u6211\u4EEC\u5F00\u59CB\u753B\u76AE\u5361\u4E18\u7684\u5634\u5566~ */\n.mouth {\n  width: 200px;\n  height: 300px;\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n  top: 210px;\n}\n/* \u5148\u753B\u4E0A\u5634\u5507 */\n.mouth .up {\n  position: relative;\n  top: 0;\n  z-index: 1;\n}\n.mouth .up .lip {\n  position: relative;\n  position: absolute;\n  border: 3px solid black;\n  background: #ffe600;\n  width: 100px;\n  height: 30px;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n top:0;\n  left: 50%;\n  margin-left: -50px;\n}\n.mouth .up .lip.left {\n  border-radius: 50%;\n  transform: rotate(-15deg) translateX(-43px);\n}\n.mouth .up .lip.right {\n  border-radius: 50%;\n  transform: rotate(15deg) translateX(43px);\n}\n.mouth .up .lip:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  bottom: 0;\n  /* background: #ffe600; */\n}\n.mouth .up .lip.left::before {\n  border-radius: 0 0 0 20px;\n  right: -5px;\n}\n.mouth .up .lip.right::before {\n  border-radius: 0 0 20px 0;\n  left: -5px;\n}\n/* \u518D\u7ED9\u76AE\u5361\u4E18\u52A0\u4E0A\u5927\u5927\u7684\u7B11\u5BB9 */\n.mouth .down {\n  width: 100%;\n  height: 150px;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n}\n.mouth .down .round2 {\n  border: 3px solid black;\n  background: #9b000a;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 100px/400px;\n  overflow: hidden;\n}\n.mouth .down .round2 .round3 {\n  background: #ff485f;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  bottom: -25px;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 200px;\n}\n/* \u597D\u5566\uFF0C\u4E00\u4E2A\u76AE\u5361\u4E18\u5C31\u8FD9\u6837\u753B\u5B8C\u5566 */\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 50,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    console.log(player.n + ':' + _css.default.substr(0, player.n));
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 20;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.32768c1a.js.map