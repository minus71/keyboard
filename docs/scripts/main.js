webpackJsonp([0],[,function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar App = function () {\n\tfunction App(ref) {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, App);\n\n\t\tthis.root = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(ref);\n\t\tthis.name = 'Fantastic ES6 Application';\n\t\tconsole.log('Initialize app.');\n\n\t\tthis.gameScreen = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<div class=\"gameScreen\"/>');\n\n\t\tthis.menu = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<div class=\"menu\"/>');\n\t\tvar startButton = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<button class=\"btn\">Start</button>');\n\t\tthis.lastScoreElm = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<span class=\"score_value\"></span>');\n\t\tthis.highScoreElm = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<span class=\"score_value\"></span>');\n\n\t\tthis.lastScore = 0;\n\t\tthis.highScore = localStorage.getItem('highscore') || 0;\n\n\t\tvar _lastScoreElm = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<span class=\"score last\">Last</span>');\n\t\tvar _highScoreElm = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<span class=\"score high\">High</span>');\n\n\t\t_lastScoreElm.append(this.lastScoreElm);\n\t\t_highScoreElm.append(this.highScoreElm);\n\n\t\tstartButton.click(function () {\n\t\t\treturn _this.startGame();\n\t\t});\n\n\t\tthis.menu.append(startButton);\n\t\tthis.menu.append(_lastScoreElm);\n\t\tthis.menu.append(_highScoreElm);\n\t\tthis.root.append(this.gameScreen);\n\t\tthis.root.append(this.menu);\n\t\tthis.showScores();\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'startGame',\n\t\tvalue: function startGame() {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis.menu.addClass('hidden');\n\t\t\tthis.gameScreen.removeClass('hidden');\n\t\t\tthis.game = new __WEBPACK_IMPORTED_MODULE_0__game__[\"a\" /* default */](this.gameScreen);\n\t\t\tthis.game.on('end', function () {\n\t\t\t\t_this2.gameEnded();\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'showScores',\n\t\tvalue: function showScores() {\n\t\t\tthis.lastScoreElm.text(this.lastScore);\n\t\t\tthis.highScoreElm.text(this.highScore);\n\t\t}\n\t}, {\n\t\tkey: 'gameEnded',\n\t\tvalue: function gameEnded() {\n\t\t\tthis.menu.removeClass('hidden');\n\t\t\tvar score = this.game.score;\n\t\t\tthis.lastScore = score;\n\t\t\tthis.highScore = Math.max(score, this.highScore);\n\t\t\tlocalStorage.setItem('highscore', this.highScore);\n\t\t\tthis.showScores();\n\t\t}\n\t}]);\n\n\treturn App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"a\"] = App;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/scripts/modules/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/scripts/modules/index.js?")},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/styles/main.scss\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/styles/main.scss?")},,function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "audio/hit.wav";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/static/audio/hit.wav\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/static/audio/hit.wav?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "audio/miss.wav";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/static/audio/miss.wav\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/static/audio/miss.wav?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/logo.svg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/static/images/logo.svg\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/static/images/logo.svg?')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nfunction pick(set) {\n    var n = set.length;\n    var i = n * Math.random();\n    return set[Math.floor(i)];\n}\n\nvar BASE_SET_ITALIAN = 'napolidiqualcheorafalanotiziadiunuomonelnapoletanorimastovittimadiungraveinc' + 'identesecondounaprimaricostruzionedeifattituttoaccadutoieripomeriggioallalte' + 'zzadiviaduomoadiacenzedelchioscoperemussoditoninoscardadettomappinaunuomodia' + 'nniresidentenelrionedonguanellaascampiaavevadecisodifareunviaggioallesterode' + 'stinazionenapolicentrocgcoschiameremoilprotagonistadiquestavicendaperchilsuo' + 'nomerealeportasfortunastavaguidandonormalmenteimmersonellaletturadelsuosmart' + 'phoneoggettodellasuaprimitivacuriositdaanalfabetafunzionaleuntrattatosuiluog' + 'hicomuniacaricodeinapoletaniintitolatooradivolarealtoncoppjammejamanoinonsia' + 'mocosavrebbeesclamatopivolteluomobevendolasuatazzulellaecafpreparatanellacaf' + 'fettieracustoditanellalettaparasoleladevonosmettereconquestipregiudizisuinap' + 'oletani'.split('');\n\nvar LEVELS = [{\n    next: 10,\n    min: 1,\n    freq: 5,\n    eta: 15,\n    hit: 1,\n    miss: 2\n}, {\n    next: 50,\n    min: 2,\n    freq: 4,\n    eta: 14,\n    hit: 2,\n    miss: 5\n}, {\n    next: 200,\n    min: 2,\n    freq: 3.7,\n    eta: 13,\n    hit: 5,\n    miss: 10\n}, {\n    next: 500,\n    min: 3,\n    freq: 3.5,\n    eta: 12,\n    hit: 10,\n    miss: 25\n}, {\n    next: 100000,\n    min: 6,\n    freq: 3,\n    eta: 10,\n    hit: 50,\n    miss: 100\n}];\n\nfunction now() {\n    return new Date().getTime();\n}\n\nvar Game = function () {\n    function Game(screen) {\n        var _this = this;\n\n        _classCallCheck(this, Game);\n\n        this.gameScreen = screen;\n        this.scoreWrapper = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class=\"score\">Score</div>');\n        this.levelWrapper = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class=\"level\">Level</div>');\n\n        var rateWrapper = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class=\"rate\">Rate</div>');\n        this.rateElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class=\"rate_value\"></div>');\n        rateWrapper.append(this.rateElement);\n\n        this.scoreElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class=\"score_value\"></div>');\n        this.levelElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class=\"level_value\"></div>');\n\n        this.gameScreen.html(this.scoreWrapper);\n        this.gameScreen.append(this.levelWrapper);\n        this.gameScreen.append(rateWrapper);\n\n        this.scoreWrapper.append(this.scoreElement);\n        this.levelWrapper.append(this.levelElement);\n\n        this.hits = 0;\n        this.miss = 0;\n\n        this.score = 0;\n        this.level = 0;\n        this.lastEmission = 0;\n        this.levelElement.text(this.level);\n\n        this.char_set = [];\n        this.averageSpeed = 1 / 10000.0;\n        this.genFactor = 1 / 5000.0;\n        // this.startTime = new Date().getTime();\n        this.fallingLetters = [];\n        this.lastFrame = new Date().getTime();\n\n        for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {\n            this.char_set.push(String.fromCharCode(i));\n        }\n\n        this.char_set = [].concat(_toConsumableArray(this.char_set), _toConsumableArray(BASE_SET_ITALIAN));\n\n        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).keypress(function (evt) {\n            var chr = String.fromCharCode(evt.which).toLowerCase();\n            (function () {\n                return _this.checkKey(chr);\n            })();\n        });\n\n        window.requestAnimationFrame(function (t) {\n            return _this.step(t);\n        });\n    }\n\n    _createClass(Game, [{\n        key: 'updateRate',\n        value: function updateRate() {\n            var total = this.hits + this.miss;\n            var rate = total ? (this.hits / total * 100).toFixed(0) : 0;\n            var rateFmt = rate ? rate + '%' : 'n/a';\n            this.rateElement.text(rateFmt);\n        }\n    }, {\n        key: 'checkKey',\n        value: function checkKey(chr) {\n            var opt_letter = this.fallingLetters.find(function (l) {\n                return l.char == chr && !l.hitTime;\n            });\n            if (opt_letter) {\n                opt_letter.hit();\n                this.hit();\n                this.updateRate();\n            } else {\n                var _LEVELS$level = LEVELS[this.level],\n                    next = _LEVELS$level.next,\n                    freq = _LEVELS$level.freq,\n                    eta = _LEVELS$level.eta,\n                    hit = _LEVELS$level.hit,\n                    miss = _LEVELS$level.miss,\n                    min = _LEVELS$level.min;\n\n                this.miss++;\n                this.updateRate();\n                __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#missSound')[0].play();\n                this.score -= miss;\n                this.scoreElement.text(this.score);\n            }\n        }\n    }, {\n        key: 'hit',\n        value: function hit() {\n            this.hits++;\n            var _LEVELS$level2 = LEVELS[this.level],\n                next = _LEVELS$level2.next,\n                freq = _LEVELS$level2.freq,\n                eta = _LEVELS$level2.eta,\n                hit = _LEVELS$level2.hit,\n                miss = _LEVELS$level2.miss,\n                min = _LEVELS$level2.min;\n\n            this.score = this.score + hit;\n            this.scoreElement.text(this.score);\n            // this.averageSpeed = this.averageSpeed * 1.001;\n            // this.genFactor = this.genFactor * 1.03;\n            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#audio')[0].play();\n            if (this.score > next) {\n                this.level++;\n                this.levelElement.text(this.level);\n            }\n        }\n    }, {\n        key: 'step',\n        value: function step(t) {\n            var _this2 = this;\n\n            var delta = t - this.lastFrame;\n\n            this.fallingLetters.forEach(function (l) {\n                l.move(delta);\n            });\n\n            this.checkStop();\n\n            this.getLetter(delta);\n\n            this.cleanUp();\n\n            this.lastFrame = t;\n            if (!this.stop) {\n                window.requestAnimationFrame(function (t) {\n                    return _this2.step(t);\n                });\n            }\n        }\n    }, {\n        key: 'cleanUp',\n        value: function cleanUp() {\n            this.fallingLetters = this.fallingLetters.filter(function (l) {\n                return !l.isDecayed();\n            });\n        }\n    }, {\n        key: 'checkStop',\n        value: function checkStop() {\n            var _this3 = this;\n\n            this.fallingLetters.forEach(function (l) {\n                if (l.isOut()) {\n                    _this3.stop = true;\n                    if (_this3.triggerEnd) {\n                        _this3.triggerEnd();\n                    }\n                }\n            });\n        }\n    }, {\n        key: 'getLetter',\n        value: function getLetter(delta) {\n            var _LEVELS$level3 = LEVELS[this.level],\n                next = _LEVELS$level3.next,\n                freq = _LEVELS$level3.freq,\n                eta = _LEVELS$level3.eta,\n                hit = _LEVELS$level3.hit,\n                miss = _LEVELS$level3.miss,\n                min = _LEVELS$level3.min;\n\n            var t = now();\n            var falling = (this.fallingLetters || []).filter(function (l) {\n                return !l.hitTime;\n            }).length;\n\n            if (falling < min || (t - this.lastEmission) / 1000 > freq) {\n\n                var c = pick(this.char_set);\n                var randmoness = (Math.random() - 0.5) / 4 + 1;\n                var speed = 1 / eta / 1000;\n\n                var letter = new FallingLetter(c, speed, this.gameScreen);\n                this.fallingLetters.push(letter);\n                this.lastEmission = t;\n            }\n\n            /*\r\n            if(!this.fallingLetters.length || Math.random()<this.genFactor * delta){\r\n                const c = pick(this.char_set);\r\n                const speed = this.averageSpeed * ( (Math.random()-0.5) / 4 + 1);\r\n                const letter = new FallingLetter(c,speed,this.gameScreen);\r\n                this.fallingLetters.push(letter);\r\n            }\r\n            */\n        }\n    }, {\n        key: 'on',\n        value: function on(evt, triggerEnd) {\n            switch (evt) {\n                case \"end\":\n                    {\n                        if (triggerEnd) {\n                            this.triggerEnd = triggerEnd;\n                        }\n                    }\n\n            }\n        }\n    }]);\n\n    return Game;\n}();\n\nvar FallingLetter = function () {\n    function FallingLetter(chr, speed, screen) {\n        _classCallCheck(this, FallingLetter);\n\n        this.decay = 800;\n        this.char = chr;\n        this.speed = speed;\n        this.screen = screen;\n        this.hitTime;\n        this.position = {\n            x: Math.random(),\n            y: 0\n        };\n        this.elm = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"<div class='letter' >\" + chr + \"</div>\");\n        this.move(0);\n        this.screen.append(this.elm);\n    }\n\n    _createClass(FallingLetter, [{\n        key: 'move',\n        value: function move(delta) {\n            if (!this.hitTime) {\n                var _position = this.position,\n                    x = _position.x,\n                    y = _position.y;\n\n                y = this.position.y = y + this.speed * delta;\n                var px = x * 100;\n                var py = y * 100;\n                this.elm.attr(\"style\", 'top:' + py + '%;left:' + px + '%');\n            }\n        }\n    }, {\n        key: 'hit',\n        value: function hit() {\n            this.elm.addClass('_hit_letter');\n            this.hitTime = new Date().getTime();\n        }\n    }, {\n        key: 'isOut',\n        value: function isOut() {\n            if (this.position.y > 0.95) {\n                this.elm.addClass('_out_letter');\n                return true;\n            }\n            return false;\n        }\n    }, {\n        key: 'isDecayed',\n        value: function isDecayed() {\n            var t = new Date().getTime();\n            if (t - this.hitTime > this.decay) {\n                this.elm.remove();\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }]);\n\n    return FallingLetter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Game;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/scripts/modules/game.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/scripts/modules/game.js?")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_scss_bootstrap_scss__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_scss_bootstrap_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_scss_bootstrap_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_main_scss__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_main_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_images_logo_svg__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_images_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_images_logo_svg__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_audio_hit_wav__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_audio_hit_wav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_audio_hit_wav__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_audio_miss_wav__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_audio_miss_wav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_audio_miss_wav__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_index__ = __webpack_require__(1);\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.onload = function () {\n\tvar app = new __WEBPACK_IMPORTED_MODULE_6__modules_index__["a" /* default */](\'#__app\');\n\tconsole.info(\'window loaded: \', app.name, __WEBPACK_IMPORTED_MODULE_3__static_images_logo_svg___default.a);\n\n\t// let DOM = document.getElementById(\'__app\')\n\t// DOM.innerHTML = "<h1>Hello World, I\'m "+app.name+"</h1>"\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/scripts/index.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/scripts/index.js?')}],[8]);