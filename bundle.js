module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 204);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(55)('wks')
  , uid        = __webpack_require__(41)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.ArgumentError = __webpack_require__(141);
module.exports.ForbiddenError = __webpack_require__(142);
module.exports.HookTokenError = __webpack_require__(143);
module.exports.ManagementApiError = __webpack_require__(144);
module.exports.NotFoundError = __webpack_require__(145);
module.exports.UnauthorizedError = __webpack_require__(146);
module.exports.ValidationError = __webpack_require__(147);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.ArgumentError = __webpack_require__(177);
module.exports.ForbiddenError = __webpack_require__(178);
module.exports.HookTokenError = __webpack_require__(179);
module.exports.ManagementApiError = __webpack_require__(180);
module.exports.NotFoundError = __webpack_require__(181);
module.exports.UnauthorizedError = __webpack_require__(182);
module.exports.ValidationError = __webpack_require__(183);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("bluebird@3.4.6");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash@4.8.2");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19).config();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const Webtask = __webpack_require__(67);

const errors = __webpack_require__(2);
const storage = __webpack_require__(151);

const tools = module.exports = { };

/*
 * Errors exposed by the library.
 */
tools.ArgumentError = errors.ArgumentError;
tools.ForbiddenError = errors.ForbiddenError;
tools.HookTokenError = errors.HookTokenError;
tools.ManagementApiError = errors.ManagementApiError;
tools.NotFoundError = errors.NotFoundError;
tools.UnauthorizedError = errors.UnauthorizedError;
tools.ValidationError = errors.ValidationError;

/*
 * Helper for the Management Api.
 */
tools.managementApi = __webpack_require__(137);

/*
 * Storage helpers.
 */
tools.FileStorageContext = storage.FileStorageContext;
tools.WebtaskStorageContext = storage.WebtaskStorageContext;

/*
 * Helpers that expose CRUD capablities to storage.
 */
tools.BlobRecordProvider = __webpack_require__(138);

/*
 * Helper that providers a configuration object containing one or more settings.
 */
tools.config = __webpack_require__(139);
tools.configProvider = __webpack_require__(73);

/*
 * Bootstrap function to run initialize a server (connect, express, ...).
 */
tools.createServer = __webpack_require__(140).createServer;

/*
 * Validate a token for webtask hooks.
 */
tools.validateHookToken = __webpack_require__(153);

/*
 * Session.
 */
tools.SessionManager = __webpack_require__(149);

/*
 * Bootstrap function to run initialize an Express server.
 */
tools.createExpressServer = function createExpressServer(cb) {
  return Webtask.fromExpress(tools.createServer(cb));
};

/*
 * Bootstrap function to run initialize a Hapi server.
 */
tools.createHapiServer = function createHapiServer(cb) {
  return Webtask.fromHapi(tools.createServer(cb));
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("debug@2.2.0");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express@4.12.4");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken@7.1.9");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(16)
  , createDesc = __webpack_require__(39);
module.exports = __webpack_require__(13) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(86)
  , toPrimitive    = __webpack_require__(58)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(87)
  , defined = __webpack_require__(50);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const server = __webpack_require__(164);
const urlHelpers = __webpack_require__(74);
const middlewares = __webpack_require__(157);
const routes = __webpack_require__(163);

/*
 * Bootstrap function to run initialize an Express server.
 */
module.exports.createServer = server.createServer;

/*
 * Helpers to figure out the full url and the base path based on the request
 */
module.exports.urlHelpers = urlHelpers;

/*
 * Useful middlewares
 */
module.exports.middlewares = middlewares;

/*
 * Route bundles.
 */
module.exports.routes = routes;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const Webtask = __webpack_require__(67);

const errors = __webpack_require__(3);
const storage = __webpack_require__(187);

const tools = module.exports = { };

/*
 * Errors exposed by the library.
 */
tools.ArgumentError = errors.ArgumentError;
tools.ForbiddenError = errors.ForbiddenError;
tools.HookTokenError = errors.HookTokenError;
tools.ManagementApiError = errors.ManagementApiError;
tools.NotFoundError = errors.NotFoundError;
tools.UnauthorizedError = errors.UnauthorizedError;
tools.ValidationError = errors.ValidationError;

/*
 * Helper for the Management Api.
 */
tools.managementApi = __webpack_require__(173);

/*
 * Storage helpers.
 */
tools.FileStorageContext = storage.FileStorageContext;
tools.WebtaskStorageContext = storage.WebtaskStorageContext;

/*
 * Helpers that expose CRUD capablities to storage.
 */
tools.BlobRecordProvider = __webpack_require__(174);

/*
 * Helper that providers a configuration object containing one or more settings.
 */
tools.config = __webpack_require__(175);
tools.configProvider = __webpack_require__(79);

/*
 * Bootstrap function to run initialize a server (connect, express, ...).
 */
tools.createServer = __webpack_require__(176).createServer;

/*
 * Validate a token for webtask hooks.
 */
tools.validateHookToken = __webpack_require__(189);

/*
 * Session.
 */
tools.SessionManager = __webpack_require__(185);

/*
 * Bootstrap function to run initialize an Express server.
 */
tools.createExpressServer = function createExpressServer(cb) {
  return Webtask.fromExpress(tools.createServer(cb));
};

/*
 * Bootstrap function to run initialize a Hapi server.
 */
tools.createHapiServer = function createHapiServer(cb) {
  return Webtask.fromHapi(tools.createServer(cb));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(36)
  , hide      = __webpack_require__(15)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(91)
  , enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(295);

winston.emitErrs = true;

var logger = new winston.Logger({
  transports: [new winston.transports.Console({
    timestamp: true,
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  })],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function write(message) {
    logger.info(message.replace(/\n$/, ''));
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(84);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JwksClient = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _request = __webpack_require__(280);

var _request2 = _interopRequireDefault(_request);

var _JwksError = __webpack_require__(98);

var _JwksError2 = _interopRequireDefault(_JwksError);

var _SigningKeyNotFoundError = __webpack_require__(100);

var _SigningKeyNotFoundError2 = _interopRequireDefault(_SigningKeyNotFoundError);

var _utils = __webpack_require__(276);

var _wrappers = __webpack_require__(278);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JwksClient = exports.JwksClient = function () {
  function JwksClient(options) {
    var _this = this;

    _classCallCheck(this, JwksClient);

    this.getSigningKey = function (kid, cb) {
      _this.logger('Fetching signing key for \'' + kid + '\'');

      _this.getSigningKeys(function (err, keys) {
        if (err) {
          return cb(err);
        }

        var kidDefined = kid !== undefined && kid !== null;
        if (!kidDefined && keys.length > 1) {
          _this.logger('No KID specified and JWKS endpoint returned more than 1 key');
          return cb(new _SigningKeyNotFoundError2.default('No KID specified and JWKS endpoint returned more than 1 key'));
        }

        var key = keys.find(function (k) {
          return !kidDefined || k.kid === kid;
        });
        if (key) {
          return cb(null, key);
        } else {
          _this.logger('Unable to find a signing key that matches \'' + kid + '\'');
          return cb(new _SigningKeyNotFoundError2.default('Unable to find a signing key that matches \'' + kid + '\''));
        }
      });
    };

    this.options = _extends({
      rateLimit: false,
      cache: true,
      timeout: 30000
    }, options);
    this.logger = (0, _debug2.default)('jwks');

    // Initialize wrappers.
    if (this.options.rateLimit) {
      this.getSigningKey = (0, _wrappers.rateLimitSigningKey)(this, options);
    }
    if (this.options.cache) {
      this.getSigningKey = (0, _wrappers.cacheSigningKey)(this, options);
    }
  }

  _createClass(JwksClient, [{
    key: 'getKeys',
    value: function getKeys(cb) {
      var _this2 = this;

      this.logger('Fetching keys from \'' + this.options.jwksUri + '\'');
      (0, _request2.default)({
        uri: this.options.jwksUri,
        strictSSL: this.options.strictSsl,
        headers: this.options.requestHeaders,
        agentOptions: this.options.requestAgentOptions,
        proxy: this.options.proxy,
        timeout: this.options.timeout
      }, function (err, res) {
        if (err) {
          var errorResponse = err.response;
          _this2.logger('Failure:', errorResponse && errorResponse.data || err);
          if (errorResponse) {
            return cb(new _JwksError2.default(errorResponse.data || errorResponse.statusText || 'Http Error ' + errorResponse.status));
          }
          return cb(err);
        }

        _this2.logger('Keys:', res.data.keys);
        return cb(null, res.data.keys);
      });
    }
  }, {
    key: 'getSigningKeys',
    value: function getSigningKeys(cb) {
      var _this3 = this;

      this.getKeys(function (err, keys) {
        if (err) {
          return cb(err);
        }

        if (!keys || !keys.length) {
          return cb(new _JwksError2.default('The JWKS endpoint did not contain any keys'));
        }

        var signingKeys = keys.filter(function (key) {
          if (key.kty !== 'RSA') {
            return false;
          }
          if (key.hasOwnProperty('use') && key.use !== 'sig') {
            return false;
          }
          return key.x5c && key.x5c.length || key.n && key.e;
        }).map(function (key) {
          var jwk = {
            kid: key.kid,
            nbf: key.nbf
          };
          var hasCertificateChain = key.x5c && key.x5c.length;
          if (hasCertificateChain) {
            jwk.publicKey = (0, _utils.certToPEM)(key.x5c[0]);
            jwk.getPublicKey = function () {
              return jwk.publicKey;
            };
          } else {
            jwk.rsaPublicKey = (0, _utils.rsaPublicKeyToPEM)(key.n, key.e);
            jwk.getPublicKey = function () {
              return jwk.rsaPublicKey;
            };
          }
          return jwk;
        });

        if (!signingKeys.length) {
          return cb(new _JwksError2.default('The JWKS endpoint did not contain any signing keys'));
        }

        _this3.logger('Signing Keys:', signingKeys);
        return cb(null, signingKeys);
      });
    }
  }]);

  return JwksClient;
}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigningKeyNotFoundError = exports.JwksRateLimitError = exports.JwksError = exports.ArgumentError = undefined;

var _ArgumentError2 = __webpack_require__(270);

var _ArgumentError3 = _interopRequireDefault(_ArgumentError2);

var _JwksError2 = __webpack_require__(98);

var _JwksError3 = _interopRequireDefault(_JwksError2);

var _JwksRateLimitError2 = __webpack_require__(99);

var _JwksRateLimitError3 = _interopRequireDefault(_JwksRateLimitError2);

var _SigningKeyNotFoundError2 = __webpack_require__(100);

var _SigningKeyNotFoundError3 = _interopRequireDefault(_SigningKeyNotFoundError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ArgumentError = _ArgumentError3.default;
exports.JwksError = _JwksError3.default;
exports.JwksRateLimitError = _JwksRateLimitError3.default;
exports.SigningKeyNotFoundError = _SigningKeyNotFoundError3.default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("lru-memoizer@1.10.0");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("ms@0.7.1");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JwksClient = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _request = __webpack_require__(111);

var _request2 = _interopRequireDefault(_request);

var _ArgumentError = __webpack_require__(69);

var _ArgumentError2 = _interopRequireDefault(_ArgumentError);

var _JwksError = __webpack_require__(70);

var _JwksError2 = _interopRequireDefault(_JwksError);

var _SigningKeyNotFoundError = __webpack_require__(72);

var _SigningKeyNotFoundError2 = _interopRequireDefault(_SigningKeyNotFoundError);

var _utils = __webpack_require__(133);

var _wrappers = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JwksClient = exports.JwksClient = function () {
  function JwksClient(options) {
    var _this = this;

    _classCallCheck(this, JwksClient);

    this.getSigningKey = function (kid, cb) {
      _this.logger('Fetching signing key for \'' + kid + '\'');

      _this.getSigningKeys(function (err, keys) {
        if (err) {
          return cb(err);
        }

        var key = keys.find(function (k) {
          return k.kid === kid;
        });
        if (key) {
          return cb(null, key);
        } else {
          _this.logger('Unable to find a signing key that matches \'' + kid + '\'');
          return cb(new _SigningKeyNotFoundError2.default('Unable to find a signing key that matches \'' + kid + '\''));
        }
      });
    };

    this.options = _extends({ rateLimit: false, cache: false, strictSsl: true }, options);
    this.logger = (0, _debug2.default)('jwks');

    // Initialize wrappers.
    if (this.options.rateLimit) {
      this.getSigningKey = (0, _wrappers.rateLimitSigningKey)(this, options);
    }
    if (this.options.cache) {
      this.getSigningKey = (0, _wrappers.cacheSigningKey)(this, options);
    }
  }

  _createClass(JwksClient, [{
    key: 'getKeys',
    value: function getKeys(cb) {
      var _this2 = this;

      this.logger('Fetching keys from \'' + this.options.jwksUri + '\'');
      (0, _request2.default)({ json: true, uri: this.options.jwksUri, strictSSL: this.options.strictSsl }, function (err, res) {
        if (err || res.statusCode < 200 || res.statusCode >= 300) {
          _this2.logger('Failure:', res && res.body || err);
          if (res) {
            return cb(new _JwksError2.default(res.body && (res.body.message || res.body) || res.statusMessage || 'Http Error ' + res.statusCode));
          }
          return cb(err);
        }

        _this2.logger('Keys:', res.body.keys);
        return cb(null, res.body.keys);
      });
    }
  }, {
    key: 'getSigningKeys',
    value: function getSigningKeys(cb) {
      var _this3 = this;

      this.getKeys(function (err, keys) {
        if (err) {
          return cb(err);
        }

        if (!keys || !keys.length) {
          return cb(new _JwksError2.default('The JWKS endpoint did not contain any keys'));
        }

        var signingKeys = keys.filter(function (key) {
          return key.use === 'sig' && key.kty === 'RSA' && key.kid && (key.x5c && key.x5c.length || key.n && key.e);
        }).map(function (key) {
          if (key.x5c && key.x5c.length) {
            return { kid: key.kid, nbf: key.nbf, publicKey: (0, _utils.certToPEM)(key.x5c[0]) };
          } else {
            return { kid: key.kid, nbf: key.nbf, rsaPublicKey: (0, _utils.rsaPublicKeyToPEM)(key.n, key.e) };
          }
        });

        if (!signingKeys.length) {
          return cb(new _JwksError2.default('The JWKS endpoint did not contain any signing keys'));
        }

        _this3.logger('Signing Keys:', signingKeys);
        return cb(null, signingKeys);
      });
    }
  }]);

  return JwksClient;
}();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigningKeyNotFoundError = exports.JwksRateLimitError = exports.JwksError = exports.ArgumentError = undefined;

var _ArgumentError2 = __webpack_require__(69);

var _ArgumentError3 = _interopRequireDefault(_ArgumentError2);

var _JwksError2 = __webpack_require__(70);

var _JwksError3 = _interopRequireDefault(_JwksError2);

var _JwksRateLimitError2 = __webpack_require__(71);

var _JwksRateLimitError3 = _interopRequireDefault(_JwksRateLimitError2);

var _SigningKeyNotFoundError2 = __webpack_require__(72);

var _SigningKeyNotFoundError3 = _interopRequireDefault(_SigningKeyNotFoundError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ArgumentError = _ArgumentError3.default;
exports.JwksError = _JwksError3.default;
exports.JwksRateLimitError = _JwksRateLimitError3.default;
exports.SigningKeyNotFoundError = _SigningKeyNotFoundError3.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JwksClient = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _request = __webpack_require__(111);

var _request2 = _interopRequireDefault(_request);

var _ArgumentError = __webpack_require__(75);

var _ArgumentError2 = _interopRequireDefault(_ArgumentError);

var _JwksError = __webpack_require__(76);

var _JwksError2 = _interopRequireDefault(_JwksError);

var _SigningKeyNotFoundError = __webpack_require__(78);

var _SigningKeyNotFoundError2 = _interopRequireDefault(_SigningKeyNotFoundError);

var _utils = __webpack_require__(169);

var _wrappers = __webpack_require__(171);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JwksClient = exports.JwksClient = function () {
  function JwksClient(options) {
    var _this = this;

    _classCallCheck(this, JwksClient);

    this.getSigningKey = function (kid, cb) {
      _this.logger('Fetching signing key for \'' + kid + '\'');

      _this.getSigningKeys(function (err, keys) {
        if (err) {
          return cb(err);
        }

        var key = keys.find(function (k) {
          return k.kid === kid;
        });
        if (key) {
          return cb(null, key);
        } else {
          _this.logger('Unable to find a signing key that matches \'' + kid + '\'');
          return cb(new _SigningKeyNotFoundError2.default('Unable to find a signing key that matches \'' + kid + '\''));
        }
      });
    };

    this.options = _extends({ rateLimit: false, cache: false, strictSsl: true }, options);
    this.logger = (0, _debug2.default)('jwks');

    // Initialize wrappers.
    if (this.options.rateLimit) {
      this.getSigningKey = (0, _wrappers.rateLimitSigningKey)(this, options);
    }
    if (this.options.cache) {
      this.getSigningKey = (0, _wrappers.cacheSigningKey)(this, options);
    }
  }

  _createClass(JwksClient, [{
    key: 'getKeys',
    value: function getKeys(cb) {
      var _this2 = this;

      this.logger('Fetching keys from \'' + this.options.jwksUri + '\'');
      (0, _request2.default)({ json: true, uri: this.options.jwksUri, strictSSL: this.options.strictSsl }, function (err, res) {
        if (err || res.statusCode < 200 || res.statusCode >= 300) {
          _this2.logger('Failure:', res && res.body || err);
          if (res) {
            return cb(new _JwksError2.default(res.body && (res.body.message || res.body) || res.statusMessage || 'Http Error ' + res.statusCode));
          }
          return cb(err);
        }

        _this2.logger('Keys:', res.body.keys);
        return cb(null, res.body.keys);
      });
    }
  }, {
    key: 'getSigningKeys',
    value: function getSigningKeys(cb) {
      var _this3 = this;

      this.getKeys(function (err, keys) {
        if (err) {
          return cb(err);
        }

        if (!keys || !keys.length) {
          return cb(new _JwksError2.default('The JWKS endpoint did not contain any keys'));
        }

        var signingKeys = keys.filter(function (key) {
          return key.use === 'sig' && key.kty === 'RSA' && key.kid && (key.x5c && key.x5c.length || key.n && key.e);
        }).map(function (key) {
          if (key.x5c && key.x5c.length) {
            return { kid: key.kid, nbf: key.nbf, publicKey: (0, _utils.certToPEM)(key.x5c[0]) };
          } else {
            return { kid: key.kid, nbf: key.nbf, rsaPublicKey: (0, _utils.rsaPublicKeyToPEM)(key.n, key.e) };
          }
        });

        if (!signingKeys.length) {
          return cb(new _JwksError2.default('The JWKS endpoint did not contain any signing keys'));
        }

        _this3.logger('Signing Keys:', signingKeys);
        return cb(null, signingKeys);
      });
    }
  }]);

  return JwksClient;
}();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigningKeyNotFoundError = exports.JwksRateLimitError = exports.JwksError = exports.ArgumentError = undefined;

var _ArgumentError2 = __webpack_require__(75);

var _ArgumentError3 = _interopRequireDefault(_ArgumentError2);

var _JwksError2 = __webpack_require__(76);

var _JwksError3 = _interopRequireDefault(_JwksError2);

var _JwksRateLimitError2 = __webpack_require__(77);

var _JwksRateLimitError3 = _interopRequireDefault(_JwksRateLimitError2);

var _SigningKeyNotFoundError2 = __webpack_require__(78);

var _SigningKeyNotFoundError3 = _interopRequireDefault(_SigningKeyNotFoundError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ArgumentError = _ArgumentError3.default;
exports.JwksError = _JwksError3.default;
exports.JwksRateLimitError = _JwksRateLimitError3.default;
exports.SigningKeyNotFoundError = _SigningKeyNotFoundError3.default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f
  , has = __webpack_require__(14)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(252)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(88)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(256);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(15)
  , Iterators     = __webpack_require__(23)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = exports.getChanges = exports.hasChanges = undefined;

var _stringify = __webpack_require__(83);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(208);

var _keys2 = _interopRequireDefault(_keys);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _path = __webpack_require__(45);

var _path2 = _interopRequireDefault(_path);

var _bluebird = __webpack_require__(4);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _rest = __webpack_require__(128);

var _auth0SourceControlExtensionTools = __webpack_require__(63);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(25);

var _logger2 = _interopRequireDefault(_logger);

var _utils = __webpack_require__(195);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Get a flat list of changes and files that need to be added/updated/removed.
 */
var hasChanges = exports.hasChanges = function hasChanges(commits) {
  return _lodash2.default.chain(commits).map(function (commit) {
    return _lodash2.default.union(commit.added, commit.modified, commit.removed);
  }).flattenDeep().uniq().filter(_utils2.default.validFilesOnly).value().length > 0;
};

/*
 * Get tree.
 */
var getTree = function getTree(github, repository, branch, sha) {
  return new _bluebird2.default(function (resolve, reject) {
    try {
      _logger2.default.log('Repository: ', repository);
      _logger2.default.log('Branch: ', branch);
      _logger2.default.log('Sha: ', sha);

      var _utils$parseRepo = _utils2.default.parseRepo(repository),
          user = _utils$parseRepo.user,
          repo = _utils$parseRepo.repo;

      github.git.getTree({ owner: user, repo: repo, tree_sha: sha || branch, recursive: true }).then(function (_ref) {
        var data = _ref.data;

        try {
          var files = data.tree.filter(function (f) {
            return f.type === 'blob';
          }).filter(function (f) {
            return _utils2.default.validFilesOnly(f.path);
          });
          return resolve(files);
        } catch (mappingError) {
          return reject(mappingError);
        }
      }).catch(function (err) {
        return reject(err);
      });
    } catch (e) {
      _logger2.default.error(e);
      reject(e);
    }
  });
};

/*
 * Download a single file.
 */
var downloadFile = function downloadFile(github, repository, branch, file) {
  var _utils$parseRepo2 = _utils2.default.parseRepo(repository),
      user = _utils$parseRepo2.user,
      repo = _utils$parseRepo2.repo;

  return github.git.getBlob({
    owner: user,
    file_sha: file.sha,
    repo: repo
  }).then(function (_ref2) {
    var data = _ref2.data;
    return {
      fileName: file.path,
      contents: Buffer.from(data.content, data.encoding).toString('utf8')
    };
  }).catch(function (err) {
    _logger2.default.error('Error downloading \'' + file.sha + '\'');
    _logger2.default.error(err);
    throw err;
  });
};

/*
 * Download a single rule with its metadata.
 */
var downloadRule = function downloadRule(github, repository, branch, ruleName, rule) {
  var currentRule = {
    script: false,
    metadata: false,
    name: ruleName
  };

  var downloads = [];

  if (rule.script) {
    downloads.push(downloadFile(github, repository, branch, rule.scriptFile).then(function (file) {
      currentRule.script = true;
      currentRule.scriptFile = file.contents;
    }));
  }

  if (rule.metadata) {
    downloads.push(downloadFile(github, repository, branch, rule.metadataFile).then(function (file) {
      currentRule.metadata = true;
      currentRule.metadataFile = file.contents;
    }));
  }

  return _bluebird2.default.all(downloads).then(function () {
    return currentRule;
  });
};

/*
 * Determine if we have the script, the metadata or both.
 */
var getHooksOrRules = function getHooksOrRules(github, repository, branch, files, dir) {
  var rules = _utils2.default.getHooksOrRulesFiles(files, dir);

  // Download all rules.
  return _bluebird2.default.map((0, _keys2.default)(rules), function (ruleName) {
    return downloadRule(github, repository, branch, ruleName, rules[ruleName]);
  }, { concurrency: 2 });
};

/*
 * Download a single database script.
 */
var downloadDatabaseScript = function downloadDatabaseScript(github, repository, branch, databaseName, scripts) {
  var database = {
    name: databaseName,
    scripts: []
  };

  var downloads = [];
  scripts.forEach(function (script) {
    downloads.push(downloadFile(github, repository, branch, script).then(function (file) {
      if (script.name === 'settings') {
        database.settings = file.contents;
      } else {
        database.scripts.push({
          name: script.name,
          scriptFile: file.contents
        });
      }
    }));
  });

  return _bluebird2.default.all(downloads).then(function () {
    return database;
  });
};

/*
 * Get all database scripts.
 */
var getDatabaseData = function getDatabaseData(github, repository, branch, files) {
  var databases = _utils2.default.getDatabaseFiles(files);

  return _bluebird2.default.map((0, _keys2.default)(databases), function (databaseName) {
    return downloadDatabaseScript(github, repository, branch, databaseName, databases[databaseName]);
  }, { concurrency: 2 });
};

/*
 * Download a single page or email script.
 */
var downloadTemplate = function downloadTemplate(github, repository, branch, tplName, template, shaToken) {
  var downloads = [];
  var currentPage = {
    metadata: false,
    name: tplName
  };

  if (template.file) {
    downloads.push(downloadFile(github, repository, branch, template.file, shaToken).then(function (file) {
      currentPage.htmlFile = file.contents;
    }));
  }

  if (template.meta_file) {
    downloads.push(downloadFile(github, repository, branch, template.meta_file, shaToken).then(function (file) {
      currentPage.metadata = true;
      currentPage.metadataFile = file.contents;
    }));
  }

  return _bluebird2.default.all(downloads).then(function () {
    return currentPage;
  });
};

/*
 * Download a single configurable file.
 */
var downloadConfigurable = function downloadConfigurable(github, repository, branch, itemName, item) {
  var downloads = [];
  var currentItem = {
    metadata: false,
    name: itemName
  };

  if (item.configFile) {
    downloads.push(downloadFile(github, repository, branch, item.configFile).then(function (file) {
      currentItem.configFile = file.contents;
    }));
  }

  if (item.metadataFile) {
    downloads.push(downloadFile(github, repository, branch, item.metadataFile).then(function (file) {
      currentItem.metadata = true;
      currentItem.metadataFile = file.contents;
    }));
  }

  return _bluebird2.default.all(downloads).then(function () {
    return currentItem;
  });
};

/*
 * Get all html templates - emails/pages.
 */
var getHtmlTemplates = function getHtmlTemplates(github, repository, branch, files, dir, allowedNames) {
  var templates = _utils2.default.getTplFiles(files, dir, allowedNames);

  return _bluebird2.default.map((0, _keys2.default)(templates), function (tplName) {
    return downloadTemplate(github, repository, branch, tplName, templates[tplName]);
  }, { concurrency: 2 });
};

/*
 * Downloads a configurable by exact path.
 */
var getConfigurableByPath = function getConfigurableByPath(github, repository, branch, files, name, filePath) {
  var file = { configFile: _utils2.default.findFileByPath(files, filePath) };
  return downloadConfigurable(github, repository, branch, name, file);
};

/*
 * Get all configurables (resource servers / clients).
 */
var getConfigurables = function getConfigurables(github, repository, branch, files, directory) {
  var configurables = _utils2.default.getConfigurablesFiles(files, directory);

  return _bluebird2.default.map((0, _keys2.default)(configurables), function (key) {
    return downloadConfigurable(github, repository, branch, key, configurables[key]);
  }, { concurrency: 2 });
};

/*
 * Get a list of all changes that need to be applied to rules and database scripts.
 */
var getChanges = exports.getChanges = function getChanges(_ref3) {
  var repository = _ref3.repository,
      branch = _ref3.branch,
      sha = _ref3.sha,
      mappings = _ref3.mappings;

  var github = new _rest.Octokit({
    auth: (0, _config2.default)('TOKEN'),
    userAgent: 'Auth0 Github Deploy Extension',
    baseUrl: (0, _config2.default)('BASE_URL')
  });
  return getTree(github, repository, branch, sha).then(function (files) {
    _logger2.default.debug('Files in tree: ' + (0, _stringify2.default)(files.map(function (file) {
      return {
        path: file.path,
        sha: file.sha
      };
    }), null, 2));

    var promises = {
      rules: getHooksOrRules(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.RULES_DIRECTORY),
      hooks: getHooksOrRules(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.HOOKS_DIRECTORY),
      tenant: getConfigurableByPath(github, repository, branch, files, 'tenant', 'tenant.json'),
      databases: getDatabaseData(github, repository, branch, files),
      emailProvider: getConfigurableByPath(github, repository, branch, files, 'emailProvider', _path2.default.join(_auth0SourceControlExtensionTools.constants.EMAIL_TEMPLATES_DIRECTORY, 'provider.json')),
      emailTemplates: getHtmlTemplates(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.EMAIL_TEMPLATES_DIRECTORY, _auth0SourceControlExtensionTools.constants.EMAIL_TEMPLATES_NAMES),
      guardianFactors: getConfigurables(github, repository, branch, files, _path2.default.join(_auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY, _auth0SourceControlExtensionTools.constants.GUARDIAN_FACTORS_DIRECTORY)),
      guardianFactorTemplates: getConfigurables(github, repository, branch, files, _path2.default.join(_auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY, _auth0SourceControlExtensionTools.constants.GUARDIAN_TEMPLATES_DIRECTORY)),
      guardianFactorProviders: getConfigurables(github, repository, branch, files, _path2.default.join(_auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY, _auth0SourceControlExtensionTools.constants.GUARDIAN_PROVIDERS_DIRECTORY)),
      guardianPhoneFactorMessageTypes: getConfigurableByPath(github, repository, branch, files, 'guardianPhoneFactorMessageTypes', _path2.default.join(_auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY, 'phoneFactorMessageTypes.json')),
      guardianPhoneFactorSelectedProvider: getConfigurableByPath(github, repository, branch, files, 'guardianPhoneFactorSelectedProvider', _path2.default.join(_auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY, 'phoneFactorSelectedProvider.json')),
      guardianPolicies: getConfigurableByPath(github, repository, branch, files, 'guardianPolicies', _path2.default.join(_auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY, 'policies.json')),
      pages: getHtmlTemplates(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.PAGES_DIRECTORY, _auth0SourceControlExtensionTools.constants.PAGE_NAMES),
      roles: getConfigurables(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.ROLES_DIRECTORY),
      clients: getConfigurables(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.CLIENTS_DIRECTORY),
      clientGrants: getConfigurables(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.CLIENTS_GRANTS_DIRECTORY),
      connections: getConfigurables(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.CONNECTIONS_DIRECTORY),
      rulesConfigs: getConfigurables(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.RULES_CONFIGS_DIRECTORY),
      resourceServers: getConfigurables(github, repository, branch, files, _auth0SourceControlExtensionTools.constants.RESOURCE_SERVERS_DIRECTORY)
    };

    return _bluebird2.default.props(promises).then(function (result) {
      return _utils2.default.unifyData(result, mappings);
    });
  });
};

var getOptions = exports.getOptions = _utils2.default.getOptions;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(224), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(27)
  , TAG = __webpack_require__(1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys')
  , uid    = __webpack_require__(41);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(50);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(22);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(37)
  , wksExt         = __webpack_require__(60)
  , defineProperty = __webpack_require__(16).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


exports.RateLimiter = __webpack_require__(284);
exports.TokenBucket = __webpack_require__(102);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserAgent; });
function getUserAgent() {
    try {
        return navigator.userAgent;
    }
    catch (e) {
        return "<environment undetectable>";
    }
}


//# sourceMappingURL=index.js.map


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("auth0-source-control-extension-tools@4.1.12");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("axios@0.18.0");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("webtask-tools");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__octokit_endpoint__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_user_agent__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_plain_object__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_fetch__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octokit_request_error__ = __webpack_require__(124);






const VERSION = "5.3.4";

function getBufferResponse(response) {
    return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_is_plain_object__["a" /* default */])(requestOptions.body) ||
        Array.isArray(requestOptions.body)) {
        requestOptions.body = JSON.stringify(requestOptions.body);
    }
    let headers = {};
    let status;
    let url;
    const fetch = (requestOptions.request && requestOptions.request.fetch) || __WEBPACK_IMPORTED_MODULE_3_node_fetch__["a" /* default */];
    return fetch(requestOptions.url, Object.assign({
        method: requestOptions.method,
        body: requestOptions.body,
        headers: requestOptions.headers,
        redirect: requestOptions.redirect,
    }, requestOptions.request))
        .then((response) => {
        url = response.url;
        status = response.status;
        for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1];
        }
        if (status === 204 || status === 205) {
            return;
        }
        // GitHub API returns 200 for HEAD requests
        if (requestOptions.method === "HEAD") {
            if (status < 400) {
                return;
            }
            throw new __WEBPACK_IMPORTED_MODULE_4__octokit_request_error__["a" /* RequestError */](response.statusText, status, {
                headers,
                request: requestOptions,
            });
        }
        if (status === 304) {
            throw new __WEBPACK_IMPORTED_MODULE_4__octokit_request_error__["a" /* RequestError */]("Not modified", status, {
                headers,
                request: requestOptions,
            });
        }
        if (status >= 400) {
            return response
                .text()
                .then((message) => {
                const error = new __WEBPACK_IMPORTED_MODULE_4__octokit_request_error__["a" /* RequestError */](message, status, {
                    headers,
                    request: requestOptions,
                });
                try {
                    let responseBody = JSON.parse(error.message);
                    Object.assign(error, responseBody);
                    let errors = responseBody.errors;
                    // Assumption `errors` would always be in Array format
                    error.message =
                        error.message + ": " + errors.map(JSON.stringify).join(", ");
                }
                catch (e) {
                    // ignore, see octokit/rest.js#684
                }
                throw error;
            });
        }
        const contentType = response.headers.get("content-type");
        if (/application\/json/.test(contentType)) {
            return response.json();
        }
        if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
            return response.text();
        }
        return getBufferResponse(response);
    })
        .then((data) => {
        return {
            status,
            url,
            headers,
            data,
        };
    })
        .catch((error) => {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__octokit_request_error__["a" /* RequestError */]) {
            throw error;
        }
        throw new __WEBPACK_IMPORTED_MODULE_4__octokit_request_error__["a" /* RequestError */](error.message, 500, {
            headers,
            request: requestOptions,
        });
    });
}

function withDefaults(oldEndpoint, newDefaults) {
    const endpoint = oldEndpoint.defaults(newDefaults);
    const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters);
        if (!endpointOptions.request || !endpointOptions.request.hook) {
            return fetchWrapper(endpoint.parse(endpointOptions));
        }
        const request = (route, parameters) => {
            return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
        };
        Object.assign(request, {
            endpoint,
            defaults: withDefaults.bind(null, endpoint),
        });
        return endpointOptions.request.hook(request, endpointOptions);
    };
    return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint),
    });
}

const request = withDefaults(__WEBPACK_IMPORTED_MODULE_0__octokit_endpoint__["a" /* endpoint */], {
    headers: {
        "user-agent": `octokit-request.js/${VERSION} ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_universal_user_agent__["a" /* getUserAgent */])()}`,
    },
});


//# sourceMappingURL=index.js.map


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ArgumentError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'ArgumentError';
  this.message = message;
}

ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;
module.exports = ArgumentError;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function JwksError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'JwksError';
  this.message = message;
}

JwksError.prototype = Object.create(Error.prototype);
JwksError.prototype.constructor = JwksError;
module.exports = JwksError;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function JwksRateLimitError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'JwksRateLimitError';
  this.message = message;
}

JwksRateLimitError.prototype = Object.create(Error.prototype);
JwksRateLimitError.prototype.constructor = JwksRateLimitError;
module.exports = JwksRateLimitError;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SigningKeyNotFoundError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'SigningKeyNotFoundError';
  this.message = message;
}

SigningKeyNotFoundError.prototype = Object.create(Error.prototype);
SigningKeyNotFoundError.prototype.constructor = SigningKeyNotFoundError;
module.exports = SigningKeyNotFoundError;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(5);
const ArgumentError = __webpack_require__(2).ArgumentError;

module.exports.fromWebtaskContext = function(webtaskContext) {
  if (webtaskContext === null || webtaskContext === undefined) {
    throw new ArgumentError('Must provide a webtask context');
  }

  const defaultConfig = {
    AUTH0_RTA: 'auth0.auth0.com'
  };

  const settings = _.assign(defaultConfig, __webpack_require__.i({"A0EXT_CLIENT_VERSION":{"default":"2.0.0"},"NODE_ENV":"production","CLIENT_VERSION":"3.7.2","A0EXT_PROVIDER":"github"}), webtaskContext.params, webtaskContext.secrets, {
    NODE_ENV: 'production',
    HOSTING_ENV: 'webtask'
  });

  return function getSettings(key) {
    return settings[key];
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

const url = __webpack_require__(66);

const USE_WILDCARD_DOMAIN = 3;
const USE_CUSTOM_DOMAIN = 2;
const USE_SHARED_DOMAIN = 1;
const SANITIZE_RX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g; // eslint-disable-line no-useless-escape

const getBasePath = function(originalUrl, path) {
  var basePath = url.parse(originalUrl).pathname || '';
  basePath = basePath.replace(path, '')
    .replace(/^\/|\/$/g, '');
  if (!basePath.startsWith('/')) {
    basePath = '/' + basePath;
  }
  if (!basePath.endsWith('/')) {
    basePath += '/';
  }
  return basePath;
};

module.exports.getBasePath = function(req) {
  return getBasePath(req.originalUrl || '', req.path);
};

module.exports.getBaseUrl = function(req, protocol) {
  var urlProtocol = protocol;
  if (!urlProtocol && "production" === 'development') {
    urlProtocol = 'http';
  }

  const originalUrl = url.parse(req.originalUrl || '').pathname || '';
  return url.format({
    protocol: urlProtocol || 'https',
    host: req.headers.host,
    pathname: originalUrl.replace(req.path, '').replace(/\/$/g, '')
  });
};

function createRouteNormalizationRx(claims) {
  if (!claims.container) {
    return null;
  }

  const container = claims.container.replace(SANITIZE_RX, '\\$&');
  const name = claims.jtn
      ? claims.jtn.replace(SANITIZE_RX, '\\$&')
      : '';

  if (claims.url_format === USE_SHARED_DOMAIN) {
    return new RegExp('^/api/run/' + container + '/(?:' + name + '/?)?');
  } else if (claims.url_format === USE_CUSTOM_DOMAIN) {
    return new RegExp('^/' + container + '/(?:' + name + '/?)?');
  } else if (claims.url_format === USE_WILDCARD_DOMAIN) {
    return new RegExp('^/(?:' + name + '/?)?');
  }

  throw new Error('Unsupported webtask URL format.');
}

function getWTRegionalUrl(wtUrl, container) {
  if (!wtUrl) {
    return null;
  }

  const nodeVersion = (wtUrl.indexOf('sandbox8') >= 0) ? '8' : '';
  const firstPart = wtUrl.split('.it.auth0.com')[0];
  const region = firstPart.split('-')[1] || 'us';

  return 'https://' + container + '.' + region + nodeVersion + '.webtask.io/';
}

module.exports.getWebtaskUrl = function(req) {
  const normalizeRouteRx = createRouteNormalizationRx(req.x_wt);
  const requestOriginalUrl = req.url;
  const requestUrl = req.url.replace(normalizeRouteRx, '/');
  const requestPath = url.parse(requestUrl || '').pathname;
  const isIsolatedDomain = (req.x_wt && req.x_wt.ectx && req.x_wt.ectx.ISOLATED_DOMAIN) || false;
  const originalUrl = url.parse(requestOriginalUrl || '').pathname || '';

  var webtaskUrl;
  if (!isIsolatedDomain) {
    webtaskUrl = originalUrl;
  } else {
    webtaskUrl = url.format({
      protocol: 'https',
      host: req.headers.host,
      pathname: originalUrl.replace(requestPath, '').replace(/\/$/g, '')
    });

    const trigger = '.it.auth0.com/api/run/' + req.x_wt.container + '/';
    const regionalUrl = getWTRegionalUrl(webtaskUrl, req.x_wt.container);

    if (webtaskUrl.indexOf(trigger) >= 0) {
      webtaskUrl = webtaskUrl.replace('https://' + req.headers.host + '/api/run/' + req.x_wt.container + '/', regionalUrl);
    }
  }

  return webtaskUrl;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ArgumentError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'ArgumentError';
  this.message = message;
}

ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;
module.exports = ArgumentError;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function JwksError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'JwksError';
  this.message = message;
}

JwksError.prototype = Object.create(Error.prototype);
JwksError.prototype.constructor = JwksError;
module.exports = JwksError;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function JwksRateLimitError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'JwksRateLimitError';
  this.message = message;
}

JwksRateLimitError.prototype = Object.create(Error.prototype);
JwksRateLimitError.prototype.constructor = JwksRateLimitError;
module.exports = JwksRateLimitError;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SigningKeyNotFoundError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'SigningKeyNotFoundError';
  this.message = message;
}

SigningKeyNotFoundError.prototype = Object.create(Error.prototype);
SigningKeyNotFoundError.prototype.constructor = SigningKeyNotFoundError;
module.exports = SigningKeyNotFoundError;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(5);
const ArgumentError = __webpack_require__(3).ArgumentError;

module.exports.fromWebtaskContext = function(webtaskContext) {
  if (webtaskContext === null || webtaskContext === undefined) {
    throw new ArgumentError('Must provide a webtask context');
  }

  const defaultConfig = {
    AUTH0_RTA: 'auth0.auth0.com'
  };

  const settings = _.assign(defaultConfig, __webpack_require__.i({"A0EXT_CLIENT_VERSION":{"default":"2.0.0"},"NODE_ENV":"production","CLIENT_VERSION":"3.7.2","A0EXT_PROVIDER":"github"}), webtaskContext.params, webtaskContext.secrets, {
    NODE_ENV: 'production',
    HOSTING_ENV: 'webtask'
  });

  return function getSettings(key) {
    return settings[key];
  };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var once = __webpack_require__(103);

/**
 * Returns a middleware that can be used to conditionally execute another
 * middleware, or alternatively bypass it.
 *
 * @param {(boolean|function)} condition
 *   If true, the middleware will be executed, else the next middleware will be
 *   executed. If the conddition is a function it will be executed with the req,
 *   res, and next arguments. The return of the function will be used as the
 *   conditional.
 * @param {function} success
 *   The middleware to conditionally execute if condition is true.
 * @param {function} fail
 *   The middleware to conditionally execute if condition is false.
 *
 * @return {function}
 *   A middleware wraper to conditionally execute another middleware.
 *
 * @example
 *   // Will enable middleware for requests that use the application/json accept
 *   // header.
 *   app.use(require('express-conditional')(
 *     function (req, res, next) {
 *       return req.get('accept') === 'application/json';
 *     },
 *     function (req, res, next) {
 *       next();
 *     }
 *  ));
 */
module.exports = function (condition, success, fail) {
  return function (req, res, next) {
    var nextOnce = once(next);
    if (condition === true || typeof condition === 'function' && condition(req, res, nextOnce)) {
      return success(req, res, nextOnce);
    }
    if (fail) {
      return fail(req, res, nextOnce);
    }

    return nextOnce();
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(84);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

var _auth0SourceControlExtensionTools = __webpack_require__(63);

var _reporter = __webpack_require__(192);

var _reporter2 = _interopRequireDefault(_reporter);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(46),
    getChanges = _require.getChanges;

var repo = void 0;

exports.default = function (storage, client, options) {
  var run = function run(opts, mappings, exclude) {
    var id = opts.id,
        sha = opts.sha,
        user = opts.user,
        branch = opts.branch,
        repository = opts.repository;

    repo = {
      id: id,
      sha: sha,
      user: user,
      branch: branch,
      repository: repository
    };

    opts.version = id === 'manual' ? sha : branch;

    return getChanges((0, _extends3.default)({}, opts, { mappings: mappings })).then(function (assets) {
      assets.exclude = exclude;
      repo.assets = assets;
      return assets;
    }).then(function (assets) {
      return (0, _auth0SourceControlExtensionTools.deploy)(assets, client, _config2.default);
    }).then(function (progress) {
      return (0, _reporter2.default)(storage, { repo: repo, progress: progress });
    });
  };

  return storage.getData().then(function (_ref) {
    var mappings = _ref.mappings,
        exclude = _ref.exclude,
        lastSuccess = _ref.lastSuccess;
    return run(options, mappings, exclude).catch(function (err) {
      return (0, _reporter2.default)(storage, { repo: repo, error: err.message }).then(function () {
        var reDeployEnabled = (0, _config2.default)('AUTO_REDEPLOY') === 'true' || (0, _config2.default)('AUTO_REDEPLOY') === true;
        var isValidationError = err.message.startsWith('Schema validation failed');

        if (repo.id !== 'manual' && reDeployEnabled && !isValidationError) {
          var lastSuccessOptions = (0, _assign2.default)({}, options, lastSuccess);

          return run(lastSuccessOptions, mappings, exclude).catch(function (redeployErr) {
            return (0, _reporter2.default)(storage, { repo: repo, error: redeployErr.message }).then(function () {
              return _promise2.default.reject(redeployErr);
            });
          });
        }

        return _promise2.default.reject(err);
      });
    });
  });
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = multipartRequest;

var _lodash = __webpack_require__(5);

var _bluebird = __webpack_require__(4);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _auth0ExtensionTools = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function multipartRequest(client, entity) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var concurrency = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

  if (client === null || client === undefined) {
    throw new _auth0ExtensionTools.ArgumentError('Must provide a auth0 client object.');
  }

  if (!entity && !client[entity]) {
    throw new _auth0ExtensionTools.ArgumentError('Must provide a valid entity for auth0 client.');
  }

  var getter = client[entity].getAll;
  var options = (0, _extends3.default)({}, opts, { per_page: perPage });
  var result = [];
  var total = 0;
  var pageCount = 0;

  var getTotals = function getTotals() {
    return getter((0, _extends3.default)({}, options, { include_totals: true, page: 0 })).then(function (response) {
      total = response.total || 0;
      pageCount = Math.ceil(total / perPage);
      var data = response[entity] || response[(0, _lodash.snakeCase)(entity)] || response || [];
      data.forEach(function (item) {
        return result.push(item);
      });
      return null;
    });
  };

  var getPage = function getPage(page) {
    return getter((0, _extends3.default)({}, options, { page: page })).then(function (data) {
      data.forEach(function (item) {
        return result.push(item);
      });
      return null;
    });
  };

  var getAll = function getAll() {
    return getTotals().then(function () {
      if (total === 0 || result.length >= total) {
        return result;
      }

      var pages = [];
      for (var i = 1; i <= pageCount; i++) {
        pages.push(i);
      }

      return _bluebird2.default.map(pages, getPage, { concurrency: concurrency });
    });
  };

  return getAll().then(function () {
    return result;
  });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(220), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(222), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(21)(function(){
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(37)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(92)
  , hide           = __webpack_require__(15)
  , has            = __webpack_require__(14)
  , Iterators      = __webpack_require__(23)
  , $iterCreate    = __webpack_require__(237)
  , setToStringTag = __webpack_require__(40)
  , getPrototypeOf = __webpack_require__(247)
  , ITERATOR       = __webpack_require__(1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(11)
  , dPs         = __webpack_require__(244)
  , enumBugKeys = __webpack_require__(52)
  , IE_PROTO    = __webpack_require__(54)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(51)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(85).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(91)
  , hiddenKeys = __webpack_require__(52).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(14)
  , toIObject    = __webpack_require__(17)
  , arrayIndexOf = __webpack_require__(229)(false)
  , IE_PROTO     = __webpack_require__(54)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(36)
  , invoke             = __webpack_require__(232)
  , html               = __webpack_require__(85)
  , cel                = __webpack_require__(51)
  , global             = __webpack_require__(6)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(27)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(56)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(49)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(23);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {



/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {
	"name": "auth0-deploy-extensions",
	"version": "3.7.2",
	"description": "Auth0 Deployment Extensions",
	"engines": {
		"node": "5.9.0"
	},
	"main": "server.js",
	"scripts": {
		"build": "npm run clean && npm run client:build && npm run extension:build",
		"clean": "rimraf dist",
		"client:build": "npm run clean && cross-env NODE_ENV=production webpack --config ./build/webpack/config.prod.js --colors -p",
		"extension:build": "node build.js",
		"lint:js": "eslint --ignore-path .gitignore --ignore-pattern build --ignore-pattern webpack .",
		"serve:dev": "cross-env NODE_ENV=development gulp run --gulpfile ./build/gulpfile.js",
		"serve:prod": "cross-env NODE_ENV=production node index.js",
		"tag": "git tag $npm_package_version && git push --tags",
		"test:clean": "rimraf ./coverage && rimraf ./.nyc_output",
		"test:pre": "npm run test:clean",
		"test:watch": "npm run test:pre && cross-env NODE_ENV=test mocha tests/mocha.js ./tests/**/*.tests.js --watch",
		"test": "npm run test:pre && cross-env NODE_ENV=test cross-env A0EXT_PROVIDER=github nyc mocha tests/mocha.js './tests/**/*.tests.js'"
	},
	"keywords": [
		"auth0",
		"extensions",
		"deploy"
	],
	"author": "Auth0",
	"license": "MIT",
	"auth0-extension": {
		"externals": [
			"@octokit/rest@17.1.4",
			"auth0@2.27.0",
			"async@2.1.2",
			"auth0-source-control-extension-tools@4.1.12",
			"axios@0.18.0",
			"bluebird@3.4.6",
			"compression@1.4.4",
			"delegates@0.1.0",
			"depd@1.0.1",
			"destroy@1.0.3",
			"ejs@2.3.1",
			"express@4.12.4",
			"express-jwt@3.1.0",
			"gitlab@3.4.2",
			"iconv-lite@0.4.10",
			"lodash@4.8.2",
			"lru-cache@2.6.4",
			"mime-db@1.10.0",
			"moment@2.10.3",
			"morgan@1.5.3",
			"ms@0.7.1",
			"qs@3.1.0",
			"raw-body@2.1.0",
			"read-all-stream@2.1.2",
			"request@2.56.0",
			"superagent@3.8.3",
			"type-check@0.3.1",
			"vso-node-api@6.5.0",
			"winston@1.0.0",
			"xml2js@0.4.8",
			"lru-memoizer@1.10.0",
			"node-uuid@1.4.3",
			"jade@1.10.0",
			"jsonwebtoken@7.1.9",
			"debug@2.2.0",
			"body-parser@1.12.4",
			"mime-types@2.0.12",
			"webtask-tools"
		],
		"excluded": [
			"express-conditional-middleware"
		],
		"settings": {
			"A0EXT_CLIENT_VERSION": {
				"default": "2.0.0"
			}
		}
	},
	"dependencies": {
		"@octokit/rest": "^17.1.4",
		"async": "2.1.2",
		"auth0": "^2.27.0",
		"auth0-extension-express-tools": "^2.1.0",
		"auth0-extension-tools": "1.4.5",
		"auth0-extension-ui": "^1.0.1",
		"auth0-oauth2-express": "^1.1.8",
		"auth0-source-control-extension-tools": "^4.1.12",
		"axios": "^0.18.0",
		"babel": "^6.5.2",
		"babel-core": "^6.9.1",
		"babel-plugin-transform-runtime": "^6.9.0",
		"babel-polyfill": "^6.9.1",
		"babel-preset-es2015": "^6.9.0",
		"babel-preset-es2015-loose": "^8.0.0",
		"babel-preset-stage-0": "^6.5.0",
		"babel-register": "^6.9.0",
		"babel-runtime": "^6.9.2",
		"bluebird": "^3.4.1",
		"body-parser": "^1.15.2",
		"ejs": "^2.4.2",
		"expect": "^1.20.2",
		"express": "^4.17.0",
		"express-jwt": "^3.4.0",
		"gitlab": "3.4.2",
		"glob": "^7.0.5",
		"immutable": "^3.8.1",
		"jsonwebtoken": "^7.1.9",
		"jwt-decode": "^2.1.0",
		"lodash": "^4.8.2",
		"lru-memoizer": "^1.6.0",
		"moment": "^2.13.0",
		"morgan": "^1.7.0",
		"nconf": "^0.8.4",
		"qs": "^6.3.0",
		"react": "^15.4.2",
		"react-dom": "^15.4.0",
		"react-redux": "^4.4.6",
		"react-router": "2.8.1",
		"redux": "^3.6.0",
		"redux-logger": "^2.6.1",
		"redux-promise-middleware": "^4.1.0",
		"redux-thunk": "^2.1.0",
		"semver": "^5.1.0",
		"url-join": "^1.1.0",
		"vso-node-api": "6.5.0",
		"webtask-tools": "^3.0.0",
		"winston": "^2.2.0"
	},
	"devDependencies": {
		"auth0-extensions-cli": "~1.0.9",
		"autoprefixer": "6.7.7",
		"babel-eslint": "7.2.1",
		"babel-loader": "6.4.1",
		"babel-preset-react": "^6.5.0",
		"babel-preset-react-hmre": "^1.1.1",
		"chai": "^3.5.0",
		"classnames": "^2.2.5",
		"cross-env": "3.2.4",
		"css-loader": "0.27.3",
		"eslint": "^3.3.1",
		"eslint-config-auth0": "^6.0.1",
		"eslint-plugin-babel": "^3.3.0",
		"eslint-plugin-import": "^2.0.1",
		"eslint-plugin-jsx-a11y": "^2.1.0",
		"eslint-plugin-react": "^6.1.2",
		"exports-loader": "^0.6.3",
		"extract-text-webpack-plugin": "^1.0.1",
		"file-loader": "^0.9.0",
		"gulp": "^3.9.1",
		"gulp-nodemon": "^2.2.1",
		"gulp-util": "^3.0.8",
		"history": "^3.0.0",
		"imports-loader": "^0.6.5",
		"json-loader": "^0.5.4",
		"mocha": "^3.1.2",
		"ngrok": "^3.2.7",
		"nock": "^9.6.1",
		"nodemon": "^1.9.2",
		"npm-run": "^5.0.1",
		"nyc": "10.2.0",
		"open": "^0.0.5",
		"postcss-focus": "^1.0.0",
		"postcss-loader": "1.3.3",
		"postcss-reporter": "2.0.0",
		"postcss-simple-vars": "^3.0.0",
		"raw-loader": "^0.5.1",
		"react-bootstrap": "0.30.8",
		"react-copy-to-clipboard": "^5.0.1",
		"react-loader-advanced": "^1.4.0",
		"react-s-alert": "^1.1.4",
		"react-transform-hmr": "^1.0.4",
		"redux-devtools": "^3.3.1",
		"redux-devtools-dock-monitor": "^1.1.1",
		"redux-devtools-log-monitor": "^1.0.11",
		"redux-form": "^5.2.5",
		"redux-simple-router": "^2.0.4",
		"redux-static": "^1.0.0",
		"rimraf": "^2.5.2",
		"sinon": "^7.3.2",
		"style-loader": "0.16.0",
		"url-loader": "^0.5.7",
		"webpack": "1.13.3",
		"webpack-dev-middleware": "^1.6.1",
		"webpack-dev-server": "^1.14.1",
		"webpack-hot-middleware": "2.13.2",
		"webpack-sources": "0.2.3",
		"webpack-stats-plugin": "0.1.4",
		"webtask-bundle": "^2.1.1",
		"yargs": "^12.0.5"
	}
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function JwksError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'JwksError';
  this.message = message;
}

JwksError.prototype = Object.create(Error.prototype);
JwksError.prototype.constructor = JwksError;
module.exports = JwksError;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function JwksRateLimitError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'JwksRateLimitError';
  this.message = message;
}

JwksRateLimitError.prototype = Object.create(Error.prototype);
JwksRateLimitError.prototype.constructor = JwksRateLimitError;
module.exports = JwksRateLimitError;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SigningKeyNotFoundError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'SigningKeyNotFoundError';
  this.message = message;
}

SigningKeyNotFoundError.prototype = Object.create(Error.prototype);
SigningKeyNotFoundError.prototype.constructor = SigningKeyNotFoundError;
module.exports = SigningKeyNotFoundError;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(282);

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new Error('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  return JSON.parse(base64_url_decode(token.split('.')[pos]));
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {


/**
 * A hierarchical token bucket for rate limiting. See
 * http://en.wikipedia.org/wiki/Token_bucket for more information.
 * @author John Hurliman <jhurliman@cull.tv>
 *
 * @param {Number} bucketSize Maximum number of tokens to hold in the bucket.
 *  Also known as the burst rate.
 * @param {Number} tokensPerInterval Number of tokens to drip into the bucket
 *  over the course of one interval.
 * @param {String|Number} interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param {TokenBucket} parentBucket Optional. A token bucket that will act as
 *  the parent of this bucket.
 */
var TokenBucket = function(bucketSize, tokensPerInterval, interval, parentBucket) {
  this.bucketSize = bucketSize;
  this.tokensPerInterval = tokensPerInterval;

  if (typeof interval === 'string') {
    switch (interval) {
      case 'sec': case 'second':
        this.interval = 1000; break;
      case 'min': case 'minute':
        this.interval = 1000 * 60; break;
      case 'hr': case 'hour':
        this.interval = 1000 * 60 * 60; break;
      case 'day':
        this.interval = 1000 * 60 * 60 * 24; break;
      default:
        throw new Error('Invaid interval ' + interval);
    }
  } else {
    this.interval = interval;
  }

  this.parentBucket = parentBucket;
  this.content = 0;
  this.lastDrip = +new Date();
};

TokenBucket.prototype = {
  bucketSize: 1,
  tokensPerInterval: 1,
  interval: 1000,
  parentBucket: null,
  content: 0,
  lastDrip: 0,

  /**
   * Remove the requested number of tokens and fire the given callback. If the
   * bucket (and any parent buckets) contains enough tokens this will happen
   * immediately. Otherwise, the removal and callback will happen when enough
   * tokens become available.
   * @param {Number} count The number of tokens to remove.
   * @param {Function} callback(err, remainingTokens)
   * @returns {Boolean} True if the callback was fired immediately, otherwise
   *  false.
   */
  removeTokens: function(count, callback) {
    var self = this;

    // Is this an infinite size bucket?
    if (!this.bucketSize) {
      process.nextTick(callback.bind(null, null, count, Number.POSITIVE_INFINITY));
      return true;
    }

    // Make sure the bucket can hold the requested number of tokens
    if (count > this.bucketSize) {
      process.nextTick(callback.bind(null, 'Requested tokens ' + count + ' exceeds bucket size ' +
        this.bucketSize, null));
      return false;
    }

    // Drip new tokens into this bucket
    this.drip();

    // If we don't have enough tokens in this bucket, come back later
    if (count > this.content)
      return comeBackLater();

    if (this.parentBucket) {
      // Remove the requested from the parent bucket first
      return this.parentBucket.removeTokens(count, function(err, remainingTokens) {
        if (err) return callback(err, null);

        // Check that we still have enough tokens in this bucket
        if (count > self.content)
          return comeBackLater();

        // Tokens were removed from the parent bucket, now remove them from
        // this bucket and fire the callback. Note that we look at the current
        // bucket and parent bucket's remaining tokens and return the smaller
        // of the two values
        self.content -= count;
        callback(null, Math.min(remainingTokens, self.content));
      });
    } else {
      // Remove the requested tokens from this bucket and fire the callback
      this.content -= count;
      process.nextTick(callback.bind(null, null, this.content));
      return true;
    }

    function comeBackLater() {
      // How long do we need to wait to make up the difference in tokens?
      var waitInterval = Math.ceil(
        (count - self.content) * (self.interval / self.tokensPerInterval));
      setTimeout(function() { self.removeTokens(count, callback); }, waitInterval);
      return false;
    }
  },

  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens this will
   * return true, otherwise false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens: function(count) {
    // Is this an infinite size bucket?
    if (!this.bucketSize)
      return true;

    // Make sure the bucket can hold the requested number of tokens
    if (count > this.bucketSize)
      return false;

    // Drip new tokens into this bucket
    this.drip();

    // If we don't have enough tokens in this bucket, return false
    if (count > this.content)
      return false;

    // Try to remove the requested tokens from the parent bucket
    if (this.parentBucket && !this.parentBucket.tryRemoveTokens(count))
      return false;

    // Remove the requested tokens from this bucket and return
    this.content -= count;
    return true;
  },

  /**
   * Add any new tokens to the bucket since the last drip.
   * @returns {Boolean} True if new tokens were added, otherwise false.
   */
  drip: function() {
    if (!this.tokensPerInterval) {
      this.content = this.bucketSize;
      return;
    }

    var now = +new Date();
    var deltaMS = Math.max(now - this.lastDrip, 0);
    this.lastDrip = now;

    var dripAmount = deltaMS * (this.tokensPerInterval / this.interval);
    this.content = Math.min(this.content + dripAmount, this.bucketSize);
  }
};

module.exports = TokenBucket;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(296)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var errcode = __webpack_require__(268);
var retry = __webpack_require__(285);

var hasOwn = Object.prototype.hasOwnProperty;

function isRetryError(err) {
    return err && err.code === 'EPROMISERETRY' && hasOwn.call(err, 'retried');
}

function promiseRetry(fn, options) {
    var temp;
    var operation;

    if (typeof fn === 'object' && typeof options === 'function') {
        // Swap options and fn when using alternate signature (options, fn)
        temp = options;
        options = fn;
        fn = temp;
    }

    operation = retry.operation(options);

    return new Promise(function (resolve, reject) {
        operation.attempt(function (number) {
            Promise.resolve()
            .then(function () {
                return fn(function (err) {
                    if (isRetryError(err)) {
                        err = err.retried;
                    }

                    throw errcode('Retrying', 'EPROMISERETRY', { retried: err });
                }, number);
            })
            .then(resolve, function (err) {
                if (isRetryError(err)) {
                    err = err.retried;

                    if (operation.retry(err || new Error())) {
                        return;
                    }
                }

                reject(err);
            });
        });
    });
}

module.exports = promiseRetry;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("async@2.1.2");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("auth0@2.27.0");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("express-jwt@3.1.0");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("node-uuid@1.4.3");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("request@2.56.0");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("superagent@3.8.3");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _urlJoin = __webpack_require__(288);

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _path = __webpack_require__(45);

var _path2 = _interopRequireDefault(_path);

var _morgan = __webpack_require__(293);

var _morgan2 = _interopRequireDefault(_morgan);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(289);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _auth0ExtensionTools = __webpack_require__(19);

var _auth0ExtensionTools2 = _interopRequireDefault(_auth0ExtensionTools);

var _auth0ExtensionExpressTools = __webpack_require__(18);

var _routes = __webpack_require__(200);

var _routes2 = _interopRequireDefault(_routes);

var _logger = __webpack_require__(25);

var _logger2 = _interopRequireDefault(_logger);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _storage = __webpack_require__(194);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (configProvider, storageProvider) {
  _config2.default.setProvider(configProvider);

  var storageContext = storageProvider ? new _auth0ExtensionTools2.default.WebtaskStorageContext(storageProvider, { force: 1 }) : new _auth0ExtensionTools2.default.FileStorageContext(_path2.default.join(__dirname, './data.json'), { mergeWrites: true });

  var storage = new _storage2.default(storageContext);

  var app = new _express2.default();
  app.use((0, _morgan2.default)(':method :url :status :response-time ms - :res[content-length]', {
    stream: _logger2.default.stream
  }));
  app.use(_bodyParser2.default.json({
    verify: function verify(req, res, buf, encoding) {
      if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8'); // eslint-disable-line no-param-reassign
      }
    }
  }));
  app.use(_bodyParser2.default.urlencoded({ extended: false }));

  // Configure authentication.
  app.get('/login', function (req, res) {
    res.redirect((0, _urlJoin2.default)((0, _config2.default)('PUBLIC_WT_URL'), '/admins/login'));
  });
  app.use(_auth0ExtensionExpressTools.routes.dashboardAdmins({
    secret: (0, _config2.default)('EXTENSION_SECRET'),
    audience: 'urn:' + "github" + '-deploy',
    rta: (0, _config2.default)('AUTH0_RTA').replace('https://', ''),
    domain: (0, _config2.default)('AUTH0_DOMAIN'),
    baseUrl: (0, _config2.default)('PUBLIC_WT_URL'),
    clientName: "github" + ' Deploy Extension',
    urlPrefix: '/admins',
    sessionStorageKey: "github" + '-deploy:apiToken',
    scopes: ['read:client_grants', 'create:client_grants', 'delete:client_grants', 'update:client_grants', 'read:roles', 'update:roles', 'delete:roles', 'create:roles', 'read:clients', 'update:clients', 'delete:clients', 'create:clients', 'read:client_keys', 'update:client_keys', 'delete:client_keys', 'create:client_keys', 'read:connections', 'update:connections', 'delete:connections', 'create:connections', 'read:resource_servers', 'update:resource_servers', 'delete:resource_servers', 'create:resource_servers', 'read:rules', 'update:rules', 'delete:rules', 'create:rules', 'read:rules_configs', 'update:rules_configs', 'delete:rules_configs', 'read:email_provider', 'update:email_provider', 'delete:email_provider', 'create:email_provider', 'read:tenant_settings', 'update:tenant_settings', 'read:grants', 'delete:grants', 'read:guardian_factors', 'update:guardian_factors', 'read:email_templates', 'create:email_templates', 'update:email_templates', 'read:hooks', 'update:hooks', 'delete:hooks', 'create:hooks', 'read:mfa_policies', 'update:mfa_policies'].join(' ')
  }));

  // Configure routes.
  app.use('/app', _express2.default.static(_path2.default.join(__dirname, '../dist')));
  app.use('/', (0, _routes2.default)(storage));

  // Generic error handler.
  app.use(_auth0ExtensionExpressTools.middlewares.errorHandler(_logger2.default.error.bind(_logger2.default)));
  return app;
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTokenAuth; });
async function auth(token) {
    const tokenType = token.split(/\./).length === 3
        ? "app"
        : /^v\d+\./.test(token)
            ? "installation"
            : "oauth";
    return {
        type: "token",
        token: token,
        tokenType
    };
}

/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */
function withAuthorizationPrefix(token) {
    if (token.split(/\./).length === 3) {
        return `bearer ${token}`;
    }
    return `token ${token}`;
}

async function hook(token, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = withAuthorizationPrefix(token);
    return request(endpoint);
}

const createTokenAuth = function createTokenAuth(token) {
    if (!token) {
        throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    }
    if (typeof token !== "string") {
        throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    }
    token = token.replace(/^(token|bearer) +/i, "");
    return Object.assign(auth.bind(null, token), {
        hook: hook.bind(null, token)
    });
};


//# sourceMappingURL=index.js.map


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Octokit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_user_agent__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_before_after_hook__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_before_after_hook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_before_after_hook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__octokit_request__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octokit_graphql__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octokit_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__octokit_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octokit_auth_token__ = __webpack_require__(114);






const VERSION = "2.4.3";

class Octokit {
    constructor(options = {}) {
        const hook = new __WEBPACK_IMPORTED_MODULE_1_before_after_hook__["Collection"]();
        const requestDefaults = {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__octokit_request__["request"].endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, options.request, {
                hook: hook.bind(null, "request"),
            }),
            mediaType: {
                previews: [],
                format: "",
            },
        };
        // prepend default user agent with `options.userAgent` if set
        requestDefaults.headers["user-agent"] = [
            options.userAgent,
            `octokit-core.js/${VERSION} ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_universal_user_agent__["a" /* getUserAgent */])()}`,
        ]
            .filter(Boolean)
            .join(" ");
        if (options.baseUrl) {
            requestDefaults.baseUrl = options.baseUrl;
        }
        if (options.previews) {
            requestDefaults.mediaType.previews = options.previews;
        }
        if (options.timeZone) {
            requestDefaults.headers["time-zone"] = options.timeZone;
        }
        this.request = __WEBPACK_IMPORTED_MODULE_2__octokit_request__["request"].defaults(requestDefaults);
        this.graphql = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__octokit_graphql__["withCustomRequest"])(this.request).defaults(requestDefaults);
        this.log = Object.assign({
            debug: () => { },
            info: () => { },
            warn: console.warn.bind(console),
            error: console.error.bind(console),
        }, options.log);
        this.hook = hook;
        // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
        //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registred.
        // (2) If only `options.auth` is set, use the default token authentication strategy.
        // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
        // TODO: type `options.auth` based on `options.authStrategy`.
        if (!options.authStrategy) {
            if (!options.auth) {
                // (1)
                this.auth = async () => ({
                    type: "unauthenticated",
                });
            }
            else {
                // (2)
                const auth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__octokit_auth_token__["a" /* createTokenAuth */])(options.auth);
                // @ts-ignore  ¯\_(ツ)_/¯
                hook.wrap("request", auth.hook);
                this.auth = auth;
            }
        }
        else {
            const auth = options.authStrategy(Object.assign({
                request: this.request,
            }, options.auth));
            // @ts-ignore  ¯\_(ツ)_/¯
            hook.wrap("request", auth.hook);
            this.auth = auth;
        }
        // apply plugins
        // https://stackoverflow.com/a/16345172
        const classConstructor = this.constructor;
        classConstructor.plugins.forEach((plugin) => {
            Object.assign(this, plugin(this, options));
        });
    }
    static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
            constructor(...args) {
                const options = args[0] || {};
                super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent
                    ? {
                        userAgent: `${options.userAgent} ${defaults.userAgent}`,
                    }
                    : null));
            }
        };
        return OctokitWithDefaults;
    }
    /**
     * Attach a plugin (or many) to your Octokit instance.
     *
     * @example
     * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
     */
    static plugin(p1, ...p2) {
        var _a;
        if (p1 instanceof Array) {
            console.warn([
                "Passing an array of plugins to Octokit.plugin() has been deprecated.",
                "Instead of:",
                "  Octokit.plugin([plugin1, plugin2, ...])",
                "Use:",
                "  Octokit.plugin(plugin1, plugin2, ...)",
            ].join("\n"));
        }
        const currentPlugins = this.plugins;
        let newPlugins = [
            ...(p1 instanceof Array
                ? p1
                : [p1]),
            ...p2,
        ];
        const NewOctokit = (_a = class extends this {
            },
            _a.plugins = currentPlugins.concat(newPlugins.filter((plugin) => !currentPlugins.includes(plugin))),
            _a);
        return NewOctokit;
    }
}
Octokit.VERSION = VERSION;
Octokit.plugins = [];


//# sourceMappingURL=index.js.map


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_user_agent__ = __webpack_require__(62);



function lowercaseKeys(object) {
    if (!object) {
        return {};
    }
    return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}

function mergeDeep(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach((key) => {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* default */])(options[key])) {
            if (!(key in defaults))
                Object.assign(result, { [key]: options[key] });
            else
                result[key] = mergeDeep(defaults[key], options[key]);
        }
        else {
            Object.assign(result, { [key]: options[key] });
        }
    });
    return result;
}

function merge(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? { method, url } : { url: method }, options);
    }
    else {
        options = Object.assign({}, route);
    }
    // lowercase header names before merging with defaults to avoid duplicates
    options.headers = lowercaseKeys(options.headers);
    const mergedOptions = mergeDeep(defaults || {}, options);
    // mediaType.previews arrays are merged, instead of overwritten
    if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
            .filter((preview) => !mergedOptions.mediaType.previews.includes(preview))
            .concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
    return mergedOptions;
}

function addQueryParameters(url, parameters) {
    const separator = /\?/.test(url) ? "&" : "?";
    const names = Object.keys(parameters);
    if (names.length === 0) {
        return url;
    }
    return (url +
        separator +
        names
            .map((name) => {
            if (name === "q") {
                return ("q=" + parameters.q.split("+").map(encodeURIComponent).join("+"));
            }
            return `${name}=${encodeURIComponent(parameters[name])}`;
        })
            .join("&"));
}

const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
    const matches = url.match(urlVariableRegex);
    if (!matches) {
        return [];
    }
    return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
    return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
        obj[key] = object[key];
        return obj;
    }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* istanbul ignore file */
function encodeReserved(str) {
    return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
        return part;
    })
        .join("");
}
function encodeUnreserved(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
function encodeValue(operator, value, key) {
    value =
        operator === "+" || operator === "#"
            ? encodeReserved(value)
            : encodeUnreserved(value);
    if (key) {
        return encodeUnreserved(key) + "=" + value;
    }
    else {
        return value;
    }
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isKeyOperator(operator) {
    return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
    var value = context[key], result = [];
    if (isDefined(value) && value !== "") {
        if (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean") {
            value = value.toString();
            if (modifier && modifier !== "*") {
                value = value.substring(0, parseInt(modifier, 10));
            }
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
        }
        else {
            if (modifier === "*") {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            }
            else {
                const tmp = [];
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeUnreserved(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }
                if (isKeyOperator(operator)) {
                    result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                }
                else if (tmp.length !== 0) {
                    result.push(tmp.join(","));
                }
            }
        }
    }
    else {
        if (operator === ";") {
            if (isDefined(value)) {
                result.push(encodeUnreserved(key));
            }
        }
        else if (value === "" && (operator === "&" || operator === "?")) {
            result.push(encodeUnreserved(key) + "=");
        }
        else if (value === "") {
            result.push("");
        }
    }
    return result;
}
function parseUrl(template) {
    return {
        expand: expand.bind(null, template),
    };
}
function expand(template, context) {
    var operators = ["+", "#", ".", "/", ";", "?", "&"];
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
        if (expression) {
            let operator = "";
            const values = [];
            if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0);
                expression = expression.substr(1);
            }
            expression.split(/,/g).forEach(function (variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });
            if (operator && operator !== "+") {
                var separator = ",";
                if (operator === "?") {
                    separator = "&";
                }
                else if (operator !== "#") {
                    separator = operator;
                }
                return (values.length !== 0 ? operator : "") + values.join(separator);
            }
            else {
                return values.join(",");
            }
        }
        else {
            return encodeReserved(literal);
        }
    });
}

function parse(options) {
    // https://fetch.spec.whatwg.org/#methods
    let method = options.method.toUpperCase();
    // replace :varname with {varname} to make it RFC 6570 compatible
    let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{+$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = omit(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType",
    ]);
    // extract variable names from URL to calculate remaining variables later
    const urlVariableNames = extractUrlVariableNames(url);
    url = parseUrl(url).expand(parameters);
    if (!/^http/.test(url)) {
        url = options.baseUrl + url;
    }
    const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat("baseUrl");
    const remainingParameters = omit(parameters, omittedParameters);
    const isBinaryRequset = /application\/octet-stream/i.test(headers.accept);
    if (!isBinaryRequset) {
        if (options.mediaType.format) {
            // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
            headers.accept = headers.accept
                .split(/,/)
                .map((preview) => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`))
                .join(",");
        }
        if (options.mediaType.previews.length) {
            const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
            headers.accept = previewsFromAcceptHeader
                .concat(options.mediaType.previews)
                .map((preview) => {
                const format = options.mediaType.format
                    ? `.${options.mediaType.format}`
                    : "+json";
                return `application/vnd.github.${preview}-preview${format}`;
            })
                .join(",");
        }
    }
    // for GET/HEAD requests, set URL query parameters from remaining parameters
    // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
    if (["GET", "HEAD"].includes(method)) {
        url = addQueryParameters(url, remainingParameters);
    }
    else {
        if ("data" in remainingParameters) {
            body = remainingParameters.data;
        }
        else {
            if (Object.keys(remainingParameters).length) {
                body = remainingParameters;
            }
            else {
                headers["content-length"] = 0;
            }
        }
    }
    // default content-type for JSON if body is set
    if (!headers["content-type"] && typeof body !== "undefined") {
        headers["content-type"] = "application/json; charset=utf-8";
    }
    // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
    // fetch does not allow to set `content-length` header, but we can set body to an empty string
    if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
        body = "";
    }
    // Only return body/request keys if present
    return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}

function endpointWithDefaults(defaults, route, options) {
    return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
    const DEFAULTS = merge(oldDefaults, newDefaults);
    const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse,
    });
}

const VERSION = "6.0.0";

const userAgent = `octokit-endpoint.js/${VERSION} ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_universal_user_agent__["a" /* getUserAgent */])()}`;
// DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.
const DEFAULTS = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": userAgent,
    },
    mediaType: {
        format: "",
        previews: [],
    },
};

const endpoint = withDefaults(null, DEFAULTS);


//# sourceMappingURL=index.js.map


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isobject__ = __webpack_require__(118);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



function isObjectObject(o) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_isobject__["a" /* default */])(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isObject;
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var request = __webpack_require__(68);
var universalUserAgent = __webpack_require__(120);

const VERSION = "4.3.1";

class GraphqlError extends Error {
  constructor(request, response) {
    const message = response.data.errors[0].message;
    super(message);
    Object.assign(this, response.data);
    this.name = "GraphqlError";
    this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

const NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query"];
function graphql(request, query, options) {
  options = typeof query === "string" ? options = Object.assign({
    query
  }, options) : options = query;
  const requestOptions = Object.keys(options).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = options[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = options[key];
    return result;
  }, {});
  return request(requestOptions).then(response => {
    if (response.data.errors) {
      throw new GraphqlError(requestOptions, {
        data: response.data
      });
    }

    return response.data.data;
  });
}

function withDefaults(request$1, newDefaults) {
  const newRequest = request$1.defaults(newDefaults);

  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: request.request.endpoint
  });
}

const graphql$1 = withDefaults(request.request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

exports.graphql = graphql$1;
exports.withCustomRequest = withCustomRequest;
//# sourceMappingURL=index.js.map


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
function getUserAgent() {
    try {
        return navigator.userAgent;
    }
    catch (e) {
        return "<environment unknown>";
    }
}


//# sourceMappingURL=index.js.map


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return paginateRest; });
const VERSION = "2.0.2";

/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint.
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not.
 *
 * We check if a "total_count" key is present in the response data, but also make sure that
 * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
 * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
 */
function normalizePaginatedListResponse(octokit, url, response) {
    const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
    if (!responseNeedsNormalization)
        return;
    // keep the additional properties intact as there is currently no other way
    // to retrieve the same information.
    const incompleteResults = response.data.incomplete_results;
    const repositorySelection = response.data.repository_selection;
    const totalCount = response.data.total_count;
    delete response.data.incomplete_results;
    delete response.data.repository_selection;
    delete response.data.total_count;
    const namespaceKey = Object.keys(response.data)[0];
    const data = response.data[namespaceKey];
    response.data = data;
    if (typeof incompleteResults !== "undefined") {
        response.data.incomplete_results = incompleteResults;
    }
    if (typeof repositorySelection !== "undefined") {
        response.data.repository_selection = repositorySelection;
    }
    response.data.total_count = totalCount;
}

function iterator(octokit, route, parameters) {
    const options = octokit.request.endpoint(route, parameters);
    const method = options.method;
    const headers = options.headers;
    let url = options.url;
    return {
        [Symbol.asyncIterator]: () => ({
            next() {
                if (!url) {
                    return Promise.resolve({ done: true });
                }
                return octokit
                    .request({ method, url, headers })
                    .then((response) => {
                    normalizePaginatedListResponse(octokit, url, response);
                    // `response.headers.link` format:
                    // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
                    // sets `url` to undefined if "next" URL is not present or `link` header is not set
                    url = ((response.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                    return { value: response };
                });
            }
        })
    };
}

function paginate(octokit, route, parameters, mapFn) {
    if (typeof parameters === "function") {
        mapFn = parameters;
        parameters = undefined;
    }
    return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}
function gather(octokit, results, iterator, mapFn) {
    return iterator.next().then(result => {
        if (result.done) {
            return results;
        }
        let earlyExit = false;
        function done() {
            earlyExit = true;
        }
        results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);
        if (earlyExit) {
            return results;
        }
        return gather(octokit, results, iterator, mapFn);
    });
}

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */
function paginateRest(octokit) {
    return {
        paginate: Object.assign(paginate.bind(null, octokit), {
            iterator: iterator.bind(null, octokit)
        })
    };
}
paginateRest.VERSION = VERSION;


//# sourceMappingURL=index.js.map


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestLog; });
const VERSION = "1.0.0";

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */
function requestLog(octokit) {
    octokit.hook.wrap("request", (request, options) => {
        octokit.log.debug("request", options);
        const start = Date.now();
        const requestOptions = octokit.request.endpoint.parse(options);
        const path = requestOptions.url.replace(options.baseUrl, "");
        return request(options)
            .then(response => {
            octokit.log.info(`${requestOptions.method} ${path} - ${response.status} in ${Date.now() - start}ms`);
            return response;
        })
            .catch(error => {
            octokit.log.info(`${requestOptions.method} ${path} - ${error.status} in ${Date.now() -
                start}ms`);
            throw error;
        });
    });
}
requestLog.VERSION = VERSION;


//# sourceMappingURL=index.js.map


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restEndpointMethods; });
const Endpoints = {
    actions: {
        cancelWorkflowRun: [
            "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
        ],
        createOrUpdateSecretForRepo: [
            "PUT /repos/{owner}/{repo}/actions/secrets/{name}",
        ],
        createRegistrationToken: [
            "POST /repos/{owner}/{repo}/actions/runners/registration-token",
        ],
        createRemoveToken: [
            "POST /repos/{owner}/{repo}/actions/runners/remove-token",
        ],
        deleteArtifact: [
            "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
        ],
        deleteSecretFromRepo: [
            "DELETE /repos/{owner}/{repo}/actions/secrets/{name}",
        ],
        downloadArtifact: [
            "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
        ],
        getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
        getPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
        getSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{name}"],
        getSelfHostedRunner: [
            "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
        ],
        getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
        getWorkflowJob: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
        getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
        listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
        listDownloadsForSelfHostedRunnerApplication: [
            "GET /repos/{owner}/{repo}/actions/runners/downloads",
        ],
        listJobsForWorkflowRun: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
        ],
        listRepoWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/runs"],
        listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
        listSecretsForRepo: ["GET /repos/{owner}/{repo}/actions/secrets"],
        listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
        listWorkflowJobLogs: [
            "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
        ],
        listWorkflowRunArtifacts: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
        ],
        listWorkflowRunLogs: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
        ],
        listWorkflowRuns: [
            "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
        ],
        reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
        removeSelfHostedRunner: [
            "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
        ],
    },
    activity: {
        checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
        checkStarringRepo: [
            "GET /user/starred/{owner}/{repo}",
            {},
            { renamed: ["activity", "checkRepoIsStarredByAuthenticatedUser"] },
        ],
        deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
        deleteThreadSubscription: [
            "DELETE /notifications/threads/{thread_id}/subscription",
        ],
        getFeeds: ["GET /feeds"],
        getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
        getThread: ["GET /notifications/threads/{thread_id}"],
        getThreadSubscription: [
            "PUT /notifications",
            {},
            { renamed: ["activity", "getThreadSubscriptionForAuthenticatedUser"] },
        ],
        getThreadSubscriptionForAuthenticatedUser: [
            "GET /notifications/threads/{thread_id}/subscription",
        ],
        listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
        listEventsForOrg: [
            "GET /users/{username}/events/orgs/{org}",
            {},
            { renamed: ["activity", "listOrgEventsForAuthenticatedUser"] },
        ],
        listEventsForUser: [
            "GET /users/{username}/events",
            {},
            { renamed: ["activity", "listEventsForAuthenticatedUser"] },
        ],
        listFeeds: ["GET /feeds", {}, { renamed: ["activity", "getFeeds"] }],
        listNotifications: [
            "GET /notifications",
            {},
            { renamed: ["activity", "listNotificationsForAuthenticatedUser"] },
        ],
        listNotificationsForAuthenticatedUser: ["GET /notifications"],
        listNotificationsForRepo: [
            "GET /repos/{owner}/{repo}/notifications",
            {},
            { renamed: ["activity", "listRepoNotificationsForAuthenticatedUser"] },
        ],
        listOrgEventsForAuthenticatedUser: [
            "GET /users/{username}/events/orgs/{org}",
        ],
        listPublicEvents: ["GET /events"],
        listPublicEventsForOrg: [
            "GET /orgs/{org}/events",
            {},
            { renamed: ["activity", "listPublicOrgEvents"] },
        ],
        listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
        listPublicEventsForUser: ["GET /users/{username}/events/public"],
        listPublicOrgEvents: ["GET /orgs/{org}/events"],
        listReceivedEventsForUser: ["GET /users/{username}/received_events"],
        listReceivedPublicEventsForUser: [
            "GET /users/{username}/received_events/public",
        ],
        listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
        listRepoNotificationsForAuthenticatedUser: [
            "GET /repos/{owner}/{repo}/notifications",
        ],
        listReposStarredByAuthenticatedUser: ["GET /user/starred"],
        listReposStarredByUser: ["GET /users/{username}/starred"],
        listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
        listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
        listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
        listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
        markAsRead: [
            "PUT /notifications",
            {},
            { renamed: ["activity", "markNotificationsAsRead"] },
        ],
        markNotificationsAsRead: ["PUT /notifications"],
        markNotificationsAsReadForRepo: [
            "PUT /repos/{owner}/{repo}/notifications",
            {},
            { renamed: ["activity", "markRepoNotificationsAsRead"] },
        ],
        markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
        markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
        setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
        setThreadSubscription: [
            "PUT /notifications/threads/{thread_id}/subscription",
        ],
        starRepo: [
            "PUT /user/starred/{owner}/{repo}",
            {},
            { renamed: ["activity", "starRepoForAuthenticatedUser"] },
        ],
        starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
        unstarRepo: [
            "DELETE /user/starred/{owner}/{repo}",
            {},
            { renamed: ["activity", "unstarRepoForAuthenticatedUser"] },
        ],
        unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
    },
    apps: {
        addRepoToInstallation: [
            "PUT /user/installations/{installation_id}/repositories/{repository_id}",
            { mediaType: { previews: ["machine-man"] } },
        ],
        checkAccountIsAssociatedWithAny: [
            "GET /marketplace_listing/accounts/{account_id}",
            {},
            { renamed: ["apps", "getSubscriptionPlanForAccount"] },
        ],
        checkAccountIsAssociatedWithAnyStubbed: [
            "GET /marketplace_listing/stubbed/accounts/{account_id}",
            {},
            { renamed: ["apps", "getSubscriptionPlanForAccountStubbed"] },
        ],
        checkToken: ["POST /applications/{client_id}/token"],
        createContentAttachment: [
            "POST /content_references/{content_reference_id}/attachments",
            { mediaType: { previews: ["corsair"] } },
        ],
        createFromManifest: ["POST /app-manifests/{code}/conversions"],
        createInstallationToken: [
            "POST /app/installations/{installation_id}/access_tokens",
            { mediaType: { previews: ["machine-man"] } },
        ],
        deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
        deleteInstallation: [
            "DELETE /app/installations/{installation_id}",
            { mediaType: { previews: ["gambit", "machine-man"] } },
        ],
        deleteToken: ["DELETE /applications/{client_id}/token"],
        getAuthenticated: [
            "GET /app",
            { mediaType: { previews: ["machine-man"] } },
        ],
        getBySlug: [
            "GET /apps/{app_slug}",
            { mediaType: { previews: ["machine-man"] } },
        ],
        getInstallation: [
            "GET /app/installations/{installation_id}",
            { mediaType: { previews: ["machine-man"] } },
        ],
        getOrgInstallation: [
            "GET /orgs/{org}/installation",
            { mediaType: { previews: ["machine-man"] } },
        ],
        getRepoInstallation: [
            "GET /repos/{owner}/{repo}/installation",
            { mediaType: { previews: ["machine-man"] } },
        ],
        getSubscriptionPlanForAccount: [
            "GET /marketplace_listing/accounts/{account_id}",
        ],
        getSubscriptionPlanForAccountStubbed: [
            "GET /marketplace_listing/stubbed/accounts/{account_id}",
        ],
        getUserInstallation: [
            "GET /users/{username}/installation",
            { mediaType: { previews: ["machine-man"] } },
        ],
        listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
        listAccountsForPlanStubbed: [
            "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
        ],
        listAccountsUserOrOrgOnPlan: [
            "GET /marketplace_listing/plans/{plan_id}/accounts",
            {},
            { renamed: ["apps", "listAccountsForPlan"] },
        ],
        listAccountsUserOrOrgOnPlanStubbed: [
            "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
            {},
            { renamed: ["apps", "listAccountsForPlanStubbed"] },
        ],
        listInstallationReposForAuthenticatedUser: [
            "GET /user/installations/{installation_id}/repositories",
            { mediaType: { previews: ["machine-man"] } },
        ],
        listInstallations: [
            "GET /app/installations",
            { mediaType: { previews: ["machine-man"] } },
        ],
        listInstallationsForAuthenticatedUser: [
            "GET /user/installations",
            { mediaType: { previews: ["machine-man"] } },
        ],
        listMarketplacePurchasesForAuthenticatedUser: [
            "GET /user/marketplace_purchases",
            {},
            { renamed: ["apps", "listSubscriptionsForAuthenticatedUser"] },
        ],
        listMarketplacePurchasesForAuthenticatedUserStubbed: [
            "GET /user/marketplace_purchases/stubbed",
            {},
            { renamed: ["apps", "listSubscriptionsForAuthenticatedUserStubbed"] },
        ],
        listPlans: ["GET /marketplace_listing/plans"],
        listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
        listRepos: [
            "GET /installation/repositories",
            { mediaType: { previews: ["machine-man"] } },
        ],
        listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
        listSubscriptionsForAuthenticatedUserStubbed: [
            "GET /user/marketplace_purchases/stubbed",
        ],
        removeRepoFromInstallation: [
            "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
            { mediaType: { previews: ["machine-man"] } },
        ],
        resetToken: ["PATCH /applications/{client_id}/token"],
        revokeInstallationToken: [
            "DELETE /installation/token",
            { mediaType: { previews: ["gambit"] } },
        ],
    },
    checks: {
        create: [
            "POST /repos/{owner}/{repo}/check-runs",
            { mediaType: { previews: ["antiope"] } },
        ],
        createSuite: [
            "POST /repos/{owner}/{repo}/check-suites",
            { mediaType: { previews: ["antiope"] } },
        ],
        get: [
            "GET /repos/{owner}/{repo}/check-runs/{check_run_id}",
            { mediaType: { previews: ["antiope"] } },
        ],
        getSuite: [
            "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}",
            { mediaType: { previews: ["antiope"] } },
        ],
        listAnnotations: [
            "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
            { mediaType: { previews: ["antiope"] } },
        ],
        listForRef: [
            "GET /repos/{owner}/{repo}/commits/{ref}/check-runs",
            { mediaType: { previews: ["antiope"] } },
        ],
        listForSuite: [
            "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
            { mediaType: { previews: ["antiope"] } },
        ],
        listSuitesForRef: [
            "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
            { mediaType: { previews: ["antiope"] } },
        ],
        rerequestSuite: [
            "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
            { mediaType: { previews: ["antiope"] } },
        ],
        setSuitesPreferences: [
            "PATCH /repos/{owner}/{repo}/check-suites/preferences",
            { mediaType: { previews: ["antiope"] } },
        ],
        update: [
            "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}",
            { mediaType: { previews: ["antiope"] } },
        ],
    },
    codesOfConduct: {
        getAllCodesOfConduct: [
            "GET /codes_of_conduct",
            { mediaType: { previews: ["scarlet-witch"] } },
        ],
        getConductCode: [
            "GET /codes_of_conduct/{key}",
            { mediaType: { previews: ["scarlet-witch"] } },
        ],
        getForRepo: [
            "GET /repos/{owner}/{repo}/community/code_of_conduct",
            { mediaType: { previews: ["scarlet-witch"] } },
        ],
        listConductCodes: [
            "GET /codes_of_conduct",
            { mediaType: { previews: ["scarlet-witch"] } },
            { renamed: ["codesOfConduct", "getAllCodesOfConduct"] },
        ],
    },
    emojis: { get: ["GET /emojis"] },
    gists: {
        checkIsStarred: ["GET /gists/{gist_id}/star"],
        create: ["POST /gists"],
        createComment: ["POST /gists/{gist_id}/comments"],
        delete: ["DELETE /gists/{gist_id}"],
        deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
        fork: ["POST /gists/{gist_id}/forks"],
        get: ["GET /gists/{gist_id}"],
        getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
        getRevision: ["GET /gists/{gist_id}/{sha}"],
        list: ["GET /gists"],
        listComments: ["GET /gists/{gist_id}/comments"],
        listCommits: ["GET /gists/{gist_id}/commits"],
        listForUser: ["GET /users/{username}/gists"],
        listForks: ["GET /gists/{gist_id}/forks"],
        listPublic: ["GET /gists/public"],
        listPublicForUser: [
            "GET /users/{username}/gists",
            {},
            { renamed: ["gists", "listForUser"] },
        ],
        listStarred: ["GET /gists/starred"],
        star: ["PUT /gists/{gist_id}/star"],
        unstar: ["DELETE /gists/{gist_id}/star"],
        update: ["PATCH /gists/{gist_id}"],
        updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
    },
    git: {
        createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
        createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
        createRef: ["POST /repos/{owner}/{repo}/git/refs"],
        createTag: ["POST /repos/{owner}/{repo}/git/tags"],
        createTree: ["POST /repos/{owner}/{repo}/git/trees"],
        deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
        getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
        getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
        getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
        getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
        getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
        listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
        updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
    },
    gitignore: {
        getTemplate: ["GET /gitignore/templates/{name}"],
        listTemplates: ["GET /gitignore/templates"],
    },
    interactions: {
        addOrUpdateRestrictionsForOrg: [
            "PUT /orgs/{org}/interaction-limits",
            { mediaType: { previews: ["sombra"] } },
        ],
        addOrUpdateRestrictionsForRepo: [
            "PUT /repos/{owner}/{repo}/interaction-limits",
            { mediaType: { previews: ["sombra"] } },
        ],
        getRestrictionsForOrg: [
            "GET /orgs/{org}/interaction-limits",
            { mediaType: { previews: ["sombra"] } },
        ],
        getRestrictionsForRepo: [
            "GET /repos/{owner}/{repo}/interaction-limits",
            { mediaType: { previews: ["sombra"] } },
        ],
        removeRestrictionsForOrg: [
            "DELETE /orgs/{org}/interaction-limits",
            { mediaType: { previews: ["sombra"] } },
        ],
        removeRestrictionsForRepo: [
            "DELETE /repos/{owner}/{repo}/interaction-limits",
            { mediaType: { previews: ["sombra"] } },
        ],
    },
    issues: {
        addAssignees: [
            "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
        ],
        addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
        checkAssignee: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
        create: ["POST /repos/{owner}/{repo}/issues"],
        createComment: [
            "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
        ],
        createLabel: ["POST /repos/{owner}/{repo}/labels"],
        createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
        deleteComment: [
            "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
        ],
        deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
        deleteMilestone: [
            "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
        get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
        getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
        getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
        getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
        getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
        list: ["GET /issues"],
        listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
        listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
        listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
        listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
        listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
        listEventsForTimeline: [
            "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
            { mediaType: { previews: ["mockingbird"] } },
        ],
        listForAuthenticatedUser: ["GET /user/issues"],
        listForOrg: ["GET /orgs/{org}/issues"],
        listForRepo: ["GET /repos/{owner}/{repo}/issues"],
        listLabelsForMilestone: [
            "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
        ],
        listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
        listLabelsOnIssue: [
            "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        listMilestonesForRepo: ["GET /repos/{owner}/{repo}/milestones"],
        lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
        removeAllLabels: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        removeAssignees: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
        ],
        removeLabel: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
        ],
        removeLabels: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
            {},
            { renamed: ["issues", "removeAllLabels"] },
        ],
        replaceAllLabels: [
            "PUT /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        replaceLabels: [
            "PUT /repos/{owner}/{repo}/issues/{issue_number}/labels",
            {},
            { renamed: ["issues", "replaceAllLabels"] },
        ],
        unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
        update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
        updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
        updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
        updateMilestone: [
            "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
    },
    licenses: {
        get: ["GET /licenses/{license}"],
        getForRepo: ["GET /repos/{owner}/{repo}/license"],
        listCommonlyUsed: ["GET /licenses"],
    },
    markdown: {
        render: ["POST /markdown"],
        renderRaw: [
            "POST /markdown/raw",
            { headers: { "content-type": "text/plain; charset=utf-8" } },
        ],
    },
    meta: { get: ["GET /meta"] },
    migrations: {
        cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
        deleteArchiveForAuthenticatedUser: [
            "DELETE /user/migrations/{migration_id}/archive",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        deleteArchiveForOrg: [
            "DELETE /orgs/{org}/migrations/{migration_id}/archive",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        downloadArchiveForOrg: [
            "GET /orgs/{org}/migrations/{migration_id}/archive",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        getArchiveForAuthenticatedUser: [
            "GET /user/migrations/{migration_id}/archive",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
        getImportProgress: ["GET /repos/{owner}/{repo}/import"],
        getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
        getStatusForAuthenticatedUser: [
            "GET /user/migrations/{migration_id}",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        getStatusForOrg: [
            "GET /orgs/{org}/migrations/{migration_id}",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        listForAuthenticatedUser: [
            "GET /user/migrations",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        listForOrg: [
            "GET /orgs/{org}/migrations",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        listReposForOrg: [
            "GET /orgs/{org}/migrations/{migration_id}/repositories",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        listReposForUser: [
            "GET /user/{migration_id}/repositories",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
        setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
        startForAuthenticatedUser: ["POST /user/migrations"],
        startForOrg: ["POST /orgs/{org}/migrations"],
        startImport: ["PUT /repos/{owner}/{repo}/import"],
        unlockRepoForAuthenticatedUser: [
            "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        unlockRepoForOrg: [
            "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
            { mediaType: { previews: ["wyandotte"] } },
        ],
        updateImport: ["PATCH /repos/{owner}/{repo}/import"],
    },
    orgs: {
        addOrUpdateMembership: ["PUT /orgs/{org}/memberships/{username}"],
        blockUser: ["PUT /orgs/{org}/blocks/{username}"],
        checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
        checkMembership: ["GET /orgs/{org}/members/{username}"],
        checkPublicMembership: ["GET /orgs/{org}/public_members/{username}"],
        concealMembership: ["DELETE /orgs/{org}/public_members/{username}"],
        convertMemberToOutsideCollaborator: [
            "PUT /orgs/{org}/outside_collaborators/{username}",
        ],
        createHook: ["POST /orgs/{org}/hooks"],
        createInvitation: ["POST /orgs/{org}/invitations"],
        deleteHook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
        get: ["GET /orgs/{org}"],
        getHook: ["GET /orgs/{org}/hooks/{hook_id}"],
        getMembership: ["GET /orgs/{org}/memberships/{username}"],
        getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
        list: ["GET /organizations"],
        listBlockedUsers: ["GET /orgs/{org}/blocks"],
        listForAuthenticatedUser: ["GET /user/orgs"],
        listForUser: ["GET /users/{username}/orgs"],
        listHooks: ["GET /orgs/{org}/hooks"],
        listInstallations: [
            "GET /orgs/{org}/installations",
            { mediaType: { previews: ["machine-man"] } },
        ],
        listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
        listMembers: ["GET /orgs/{org}/members"],
        listMemberships: ["GET /user/memberships/orgs"],
        listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
        listPendingInvitations: ["GET /orgs/{org}/invitations"],
        listPublicMembers: ["GET /orgs/{org}/public_members"],
        pingHook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
        publicizeMembership: ["PUT /orgs/{org}/public_members/{username}"],
        removeMember: ["DELETE /orgs/{org}/members/{username}"],
        removeMembership: ["DELETE /orgs/{org}/memberships/{username}"],
        removeOutsideCollaborator: [
            "DELETE /orgs/{org}/outside_collaborators/{username}",
        ],
        unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
        update: ["PATCH /orgs/{org}"],
        updateHook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
        updateMembership: ["PATCH /user/memberships/orgs/{org}"],
    },
    projects: {
        addCollaborator: [
            "PUT /projects/{project_id}/collaborators/{username}",
            { mediaType: { previews: ["inertia"] } },
        ],
        createCard: [
            "POST /projects/columns/{column_id}/cards",
            { mediaType: { previews: ["inertia"] } },
        ],
        createColumn: [
            "POST /projects/{project_id}/columns",
            { mediaType: { previews: ["inertia"] } },
        ],
        createForAuthenticatedUser: [
            "POST /user/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        createForOrg: [
            "POST /orgs/{org}/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        createForRepo: [
            "POST /repos/{owner}/{repo}/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        delete: [
            "DELETE /projects/{project_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        deleteCard: [
            "DELETE /projects/columns/cards/{card_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        deleteColumn: [
            "DELETE /projects/columns/{column_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        get: [
            "GET /projects/{project_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        getCard: [
            "GET /projects/columns/cards/{card_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        getColumn: [
            "GET /projects/columns/{column_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        listCards: [
            "GET /projects/columns/{column_id}/cards",
            { mediaType: { previews: ["inertia"] } },
        ],
        listCollaborators: [
            "GET /projects/{project_id}/collaborators",
            { mediaType: { previews: ["inertia"] } },
        ],
        listColumns: [
            "GET /projects/{project_id}/columns",
            { mediaType: { previews: ["inertia"] } },
        ],
        listForOrg: [
            "GET /orgs/{org}/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        listForRepo: [
            "GET /repos/{owner}/{repo}/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        listForUser: [
            "GET /users/{username}/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        moveCard: [
            "POST /projects/columns/cards/{card_id}/moves",
            { mediaType: { previews: ["inertia"] } },
        ],
        moveColumn: [
            "POST /projects/columns/{column_id}/moves",
            { mediaType: { previews: ["inertia"] } },
        ],
        removeCollaborator: [
            "DELETE /projects/{project_id}/collaborators/{username}",
            { mediaType: { previews: ["inertia"] } },
        ],
        reviewUserPermissionLevel: [
            "GET /projects/{project_id}/collaborators/{username}/permission",
            { mediaType: { previews: ["inertia"] } },
        ],
        update: [
            "PATCH /projects/{project_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        updateCard: [
            "PATCH /projects/columns/cards/{card_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        updateColumn: [
            "PATCH /projects/columns/{column_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
    },
    pulls: {
        checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
        create: ["POST /repos/{owner}/{repo}/pulls"],
        createComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
        createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
        createReviewCommentReply: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
        ],
        createReviewRequest: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        deleteComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
        deletePendingReview: [
            "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        deleteReviewRequest: [
            "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        dismissReview: [
            "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
        ],
        get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
        getComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
        getCommentsForReview: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
        ],
        getReview: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        list: ["GET /repos/{owner}/{repo}/pulls"],
        listComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
        listCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
        listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
        listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
        listReviewRequests: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
        merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
        submitReview: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
        ],
        update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
        updateBranch: [
            "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
            { mediaType: { previews: ["lydian"] } },
        ],
        updateComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
        updateReview: [
            "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
    },
    rateLimit: { get: ["GET /rate_limit"] },
    reactions: {
        createForCommitComment: [
            "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        createForIssue: [
            "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        createForIssueComment: [
            "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        createForPullRequestReviewComment: [
            "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        createForTeamDiscussionCommentInOrg: [
            "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        createForTeamDiscussionInOrg: [
            "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        delete: [
            "DELETE /reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
            { renamed: ["reactions", "deleteLegacy"] },
        ],
        deleteForCommitComment: [
            "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        deleteForIssue: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        deleteForIssueComment: [
            "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        deleteForPullRequestComment: [
            "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        deleteForTeamDiscussion: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        deleteForTeamDiscussionComment: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        deleteLegacy: [
            "DELETE /reactions/{reaction_id}",
            { mediaType: { previews: ["squirrel-girl"] } },
            {
                deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy",
            },
        ],
        listForCommitComment: [
            "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        listForIssue: [
            "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        listForIssueComment: [
            "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        listForPullRequestReviewComment: [
            "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        listForTeamDiscussionCommentInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
        listForTeamDiscussionInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
            { mediaType: { previews: ["squirrel-girl"] } },
        ],
    },
    repos: {
        acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
        addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
        addDeployKey: ["POST /repos/{owner}/{repo}/keys"],
        addProtectedBranchAdminEnforcement: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        addProtectedBranchAppRestrictions: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            {},
            { mapToData: "apps" },
        ],
        addProtectedBranchRequiredSignatures: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
            { mediaType: { previews: ["zzzax"] } },
        ],
        addProtectedBranchRequiredStatusChecksContexts: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            {},
            { mapToData: "contexts" },
        ],
        addProtectedBranchTeamRestrictions: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            {},
            { mapToData: "teams" },
        ],
        addProtectedBranchUserRestrictions: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            {},
            { mapToData: "users" },
        ],
        checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
        checkVulnerabilityAlerts: [
            "GET /repos/{owner}/{repo}/vulnerability-alerts",
            { mediaType: { previews: ["dorian"] } },
        ],
        compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
        createCommitComment: [
            "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
        ],
        createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
        createDeploymentStatus: [
            "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
        ],
        createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
        createForAuthenticatedUser: ["POST /user/repos"],
        createFork: ["POST /repos/{owner}/{repo}/forks"],
        createHook: ["POST /repos/{owner}/{repo}/hooks"],
        createInOrg: ["POST /orgs/{org}/repos"],
        createOrUpdateFile: ["PUT /repos/{owner}/{repo}/contents/{path}"],
        createRelease: ["POST /repos/{owner}/{repo}/releases"],
        createStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
        createUsingTemplate: [
            "POST /repos/{template_owner}/{template_repo}/generate",
            { mediaType: { previews: ["baptiste"] } },
        ],
        declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
        delete: ["DELETE /repos/{owner}/{repo}"],
        deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
        deleteDeployment: [
            "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
        ],
        deleteDownload: ["DELETE /repos/{owner}/{repo}/downloads/{download_id}"],
        deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
        deleteHook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
        deleteInvitation: [
            "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
        ],
        deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
        deleteReleaseAsset: [
            "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        disableAutomatedSecurityFixes: [
            "DELETE /repos/{owner}/{repo}/automated-security-fixes",
            { mediaType: { previews: ["london"] } },
        ],
        disablePagesSite: [
            "DELETE /repos/{owner}/{repo}/pages",
            { mediaType: { previews: ["switcheroo"] } },
        ],
        disableVulnerabilityAlerts: [
            "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
            { mediaType: { previews: ["dorian"] } },
        ],
        enableAutomatedSecurityFixes: [
            "PUT /repos/{owner}/{repo}/automated-security-fixes",
            { mediaType: { previews: ["london"] } },
        ],
        enablePagesSite: [
            "POST /repos/{owner}/{repo}/pages",
            { mediaType: { previews: ["switcheroo"] } },
        ],
        enableVulnerabilityAlerts: [
            "PUT /repos/{owner}/{repo}/vulnerability-alerts",
            { mediaType: { previews: ["dorian"] } },
        ],
        get: ["GET /repos/{owner}/{repo}"],
        getAllTopics: [
            "GET /repos/{owner}/{repo}/topics",
            { mediaType: { previews: ["mercy"] } },
        ],
        getAppsWithAccessToProtectedBranch: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
        ],
        getArchiveLink: ["GET /repos/{owner}/{repo}/{archive_format}/{ref}"],
        getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
        getBranchProtection: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
        getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
        getCollaboratorPermissionLevel: [
            "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
        ],
        getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
        getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
        getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
        getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
        getContents: ["GET /repos/{owner}/{repo}/contents/{path}"],
        getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
        getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
        getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
        getDeploymentStatus: [
            "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
        ],
        getDownload: ["GET /repos/{owner}/{repo}/downloads/{download_id}"],
        getHook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
        getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
        getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
        getPages: ["GET /repos/{owner}/{repo}/pages"],
        getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
        getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
        getProtectedBranchAdminEnforcement: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        getProtectedBranchPullRequestReviewEnforcement: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        getProtectedBranchRequiredSignatures: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
            { mediaType: { previews: ["zzzax"] } },
        ],
        getProtectedBranchRequiredStatusChecks: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        getProtectedBranchRestrictions: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
        ],
        getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
        getReadme: ["GET /repos/{owner}/{repo}/readme"],
        getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
        getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
        getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
        getTeamsWithAccessToProtectedBranch: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
        ],
        getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
        getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
        getUsersWithAccessToProtectedBranch: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
        ],
        getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
        list: [
            "GET /user/repos",
            {},
            { renamed: ["repos", "listForAuthenticatedUser"] },
        ],
        listAssetsForRelease: [
            "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
        ],
        listBranches: ["GET /repos/{owner}/{repo}/branches"],
        listBranchesForHeadCommit: [
            "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
            { mediaType: { previews: ["groot"] } },
        ],
        listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
        listCommentsForCommit: [
            "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
        ],
        listCommitComments: ["GET /repos/{owner}/{repo}/comments"],
        listCommits: ["GET /repos/{owner}/{repo}/commits"],
        listContributors: ["GET /repos/{owner}/{repo}/contributors"],
        listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
        listDeploymentStatuses: [
            "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
        ],
        listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
        listDownloads: ["GET /repos/{owner}/{repo}/downloads"],
        listForAuthenticatedUser: ["GET /user/repos"],
        listForOrg: ["GET /orgs/{org}/repos"],
        listForUser: ["GET /users/{username}/repos"],
        listForks: ["GET /repos/{owner}/{repo}/forks"],
        listHooks: ["GET /repos/{owner}/{repo}/hooks"],
        listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
        listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
        listLanguages: ["GET /repos/{owner}/{repo}/languages"],
        listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
        listProtectedBranchRequiredStatusChecksContexts: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
        ],
        listPublic: ["GET /repositories"],
        listPullRequestsAssociatedWithCommit: [
            "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
            { mediaType: { previews: ["groot"] } },
        ],
        listReleases: ["GET /repos/{owner}/{repo}/releases"],
        listStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
        listTags: ["GET /repos/{owner}/{repo}/tags"],
        listTeams: ["GET /repos/{owner}/{repo}/teams"],
        listTopics: [
            "GET /repos/{owner}/{repo}/topics",
            { mediaType: { previews: ["mercy"] } },
            { renamed: ["repos", "getAllTopics"] },
        ],
        merge: ["POST /repos/{owner}/{repo}/merges"],
        pingHook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
        removeBranchProtection: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        removeCollaborator: [
            "DELETE /repos/{owner}/{repo}/collaborators/{username}",
        ],
        removeDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
        removeProtectedBranchAdminEnforcement: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        removeProtectedBranchAppRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            {},
            { mapToData: "apps" },
        ],
        removeProtectedBranchPullRequestReviewEnforcement: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        removeProtectedBranchRequiredSignatures: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
            { mediaType: { previews: ["zzzax"] } },
        ],
        removeProtectedBranchRequiredStatusChecks: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        removeProtectedBranchRequiredStatusChecksContexts: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            {},
            { mapToData: "contexts" },
        ],
        removeProtectedBranchRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
        ],
        removeProtectedBranchTeamRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            {},
            { mapToData: "teams" },
        ],
        removeProtectedBranchUserRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            {},
            { mapToData: "users" },
        ],
        replaceAllTopics: [
            "PUT /repos/{owner}/{repo}/topics",
            { mediaType: { previews: ["mercy"] } },
        ],
        replaceProtectedBranchAppRestrictions: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            {},
            { mapToData: "apps" },
        ],
        replaceProtectedBranchRequiredStatusChecksContexts: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            {},
            { mapToData: "contexts" },
        ],
        replaceProtectedBranchTeamRestrictions: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            {},
            { mapToData: "teams" },
        ],
        replaceProtectedBranchUserRestrictions: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            {},
            { mapToData: "users" },
        ],
        replaceTopics: [
            "PUT /repos/{owner}/{repo}/topics",
            { mediaType: { previews: ["mercy"] } },
            { renamed: ["repos", "replaceAllTopics"] },
        ],
        requestPageBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
        retrieveCommunityProfileMetrics: [
            "GET /repos/{owner}/{repo}/community/profile",
        ],
        testPushHook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
        transfer: ["POST /repos/{owner}/{repo}/transfer"],
        update: ["PATCH /repos/{owner}/{repo}"],
        updateBranchProtection: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
        updateHook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
        updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
        updateInvitation: [
            "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
        ],
        updateProtectedBranchPullRequestReviewEnforcement: [
            "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        updateProtectedBranchRequiredStatusChecks: [
            "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
        updateReleaseAsset: [
            "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        uploadReleaseAsset: [
            "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
            { baseUrl: "https://uploads.github.com" },
        ],
    },
    search: {
        code: ["GET /search/code"],
        commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
        issuesAndPullRequests: ["GET /search/issues"],
        labels: ["GET /search/labels"],
        repos: ["GET /search/repositories"],
        topics: ["GET /search/topics"],
        users: ["GET /search/users"],
    },
    teams: {
        addOrUpdateMembershipInOrg: [
            "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        addOrUpdateProjectInOrg: [
            "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        addOrUpdateRepoInOrg: [
            "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        checkManagesRepoInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        create: ["POST /orgs/{org}/teams"],
        createDiscussionCommentInOrg: [
            "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
        ],
        createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
        deleteDiscussionCommentInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        deleteDiscussionInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
        getByName: ["GET /orgs/{org}/teams/{team_slug}"],
        getDiscussionCommentInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        getDiscussionInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        getMembershipInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        list: ["GET /orgs/{org}/teams"],
        listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
        listDiscussionCommentsInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
        ],
        listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
        listForAuthenticatedUser: ["GET /user/teams"],
        listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
        listPendingInvitationsInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/invitations",
        ],
        listProjectsInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/projects",
            { mediaType: { previews: ["inertia"] } },
        ],
        listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
        removeMembershipInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        removeProjectInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        removeRepoInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        reviewProjectInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
            { mediaType: { previews: ["inertia"] } },
        ],
        updateDiscussionCommentInOrg: [
            "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        updateDiscussionInOrg: [
            "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
    },
    users: {
        addEmails: ["POST /user/emails"],
        block: ["PUT /user/blocks/{username}"],
        checkBlocked: ["GET /user/blocks/{username}"],
        checkFollowing: ["GET /user/following/{username}"],
        checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
        createGpgKey: ["POST /user/gpg_keys"],
        createPublicKey: ["POST /user/keys"],
        deleteEmails: ["DELETE /user/emails"],
        deleteGpgKey: ["DELETE /user/gpg_keys/{gpg_key_id}"],
        deletePublicKey: ["DELETE /user/keys/{key_id}"],
        follow: ["PUT /user/following/{username}"],
        getAuthenticated: ["GET /user"],
        getByUsername: ["GET /users/{username}"],
        getContextForUser: ["GET /users/{username}/hovercard"],
        getGpgKey: ["GET /user/gpg_keys/{gpg_key_id}"],
        getPublicKey: ["GET /user/keys/{key_id}"],
        list: ["GET /users"],
        listBlocked: ["GET /user/blocks"],
        listEmails: ["GET /user/emails"],
        listFollowedByAuthenticated: ["GET /user/following"],
        listFollowersForAuthenticatedUser: ["GET /user/followers"],
        listFollowersForUser: ["GET /users/{username}/followers"],
        listFollowingForAuthenticatedUser: [
            "GET /user/following",
            {},
            { renamed: ["users", "listFollowedByAuthenticated"] },
        ],
        listFollowingForUser: ["GET /users/{username}/following"],
        listGpgKeys: ["GET /user/gpg_keys"],
        listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
        listPublicEmails: ["GET /user/public_emails"],
        listPublicKeys: ["GET /user/keys"],
        listPublicKeysForUser: ["GET /users/{username}/keys"],
        togglePrimaryEmailVisibility: ["PATCH /user/email/visibility"],
        unblock: ["DELETE /user/blocks/{username}"],
        unfollow: ["DELETE /user/following/{username}"],
        updateAuthenticated: ["PATCH /user"],
    },
};

const VERSION = "3.4.0";

function endpointsToMethods(octokit, endpointsMap) {
    const newMethods = {};
    for (const [scope, endpoints] of Object.entries(endpointsMap)) {
        for (const [methodName, endpoint] of Object.entries(endpoints)) {
            const [route, defaults, decorations] = endpoint;
            const [method, url] = route.split(/ /);
            const endpointDefaults = Object.assign({ method, url }, defaults);
            if (!newMethods[scope]) {
                newMethods[scope] = {};
            }
            const scopeMethods = newMethods[scope];
            if (decorations) {
                scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
                continue;
            }
            scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
        }
    }
    return newMethods;
}
function decorate(octokit, scope, methodName, defaults, decorations) {
    const requestWithDefaults = octokit.request.defaults(defaults);
    function withDecorations(...args) {
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        let options = requestWithDefaults.endpoint.merge(...args);
        // There are currently no other decorations than `.mapToData`
        if (decorations.mapToData) {
            options = Object.assign({}, options, {
                data: options[decorations.mapToData],
                [decorations.mapToData]: undefined,
            });
            return requestWithDefaults(options);
        }
        // NOTE: there are currently no deprecations. But we keep the code
        //       below for future reference
        if (decorations.renamed) {
            const [newScope, newMethodName] = decorations.renamed;
            octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
        }
        if (decorations.deprecated) {
            octokit.log.warn(decorations.deprecated);
        }
        // There currently are no renamed parameters
        // if (decorations.renamedParameters) {
        //   // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        //   const options = requestWithDefaults.endpoint.merge(...args);
        //   for (const [name, alias] of Object.entries(
        //     decorations.renamedParameters
        //   )) {
        //     if (name in options) {
        //       octokit.log.warn(
        //         `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
        //       );
        //       if (!(alias in options)) {
        //         options[alias] = options[name];
        //       }
        //       delete options[name];
        //     }
        //   }
        //   return requestWithDefaults(options);
        // }
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        return requestWithDefaults(...args);
    }
    return Object.assign(withDecorations, requestWithDefaults);
}

/**
 * This plugin is a 1:1 copy of internal @octokit/rest plugins. The primary
 * goal is to rebuild @octokit/rest on top of @octokit/core. Once that is
 * done, we will remove the registerEndpoints methods and return the methods
 * directly as with the other plugins. At that point we will also remove the
 * legacy workarounds and deprecations.
 *
 * See the plan at
 * https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/1
 */
function restEndpointMethods(octokit) {
    return endpointsToMethods(octokit, Endpoints);
}
restEndpointMethods.VERSION = VERSION;


//# sourceMappingURL=index.js.map


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_deprecation__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_once__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_once___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_once__);



const logOnce = __WEBPACK_IMPORTED_MODULE_1_once___default()((deprecation) => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */
class RequestError extends Error {
    constructor(message, statusCode, options) {
        super(message);
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "HttpError";
        this.status = statusCode;
        Object.defineProperty(this, "code", {
            get() {
                logOnce(new __WEBPACK_IMPORTED_MODULE_0_deprecation__["a" /* Deprecation */]("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return statusCode;
            },
        });
        this.headers = options.headers || {};
        // redact request credentials without mutating original request options
        const requestCopy = Object.assign({}, options.request);
        if (options.request.headers.authorization) {
            requestCopy.headers = Object.assign({}, options.request.headers, {
                authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]"),
            });
        }
        requestCopy.url = requestCopy.url
            // client_id & client_secret can be passed as URL query parameters to increase rate limit
            // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
            .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
            // OAuth tokens can be passed as URL query parameters, although it is not recommended
            // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
            .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
        this.request = requestCopy;
    }
}


//# sourceMappingURL=index.js.map


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isobject__ = __webpack_require__(126);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



function isObjectObject(o) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_isobject__["a" /* default */])(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isObject;
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Headers */
/* unused harmony export Request */
/* unused harmony export Response */
/* unused harmony export FetchError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stream__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_https__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_https__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zlib__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zlib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_zlib__);






// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = __WEBPACK_IMPORTED_MODULE_0_stream___default.a.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __webpack_require__(266).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = __WEBPACK_IMPORTED_MODULE_0_stream___default.a.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = __WEBPACK_IMPORTED_MODULE_1_http___default.a.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = __WEBPACK_IMPORTED_MODULE_2_url___default.a.parse;
const format_url = __WEBPACK_IMPORTED_MODULE_2_url___default.a.format;

const streamDestructionSupported = 'destroy' in __WEBPACK_IMPORTED_MODULE_0_stream___default.a.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = __WEBPACK_IMPORTED_MODULE_0_stream___default.a.PassThrough;
const resolve_url = __WEBPACK_IMPORTED_MODULE_2_url___default.a.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? __WEBPACK_IMPORTED_MODULE_3_https___default.a : __WEBPACK_IMPORTED_MODULE_1_http___default.a).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof __WEBPACK_IMPORTED_MODULE_0_stream___default.a.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: __WEBPACK_IMPORTED_MODULE_4_zlib___default.a.Z_SYNC_FLUSH,
				finishFlush: __WEBPACK_IMPORTED_MODULE_4_zlib___default.a.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(__WEBPACK_IMPORTED_MODULE_4_zlib___default.a.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(__WEBPACK_IMPORTED_MODULE_4_zlib___default.a.createInflate());
					} else {
						body = body.pipe(__WEBPACK_IMPORTED_MODULE_4_zlib___default.a.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof __WEBPACK_IMPORTED_MODULE_4_zlib___default.a.createBrotliDecompress === 'function') {
				body = body.pipe(__WEBPACK_IMPORTED_MODULE_4_zlib___default.a.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["a"] = (fetch);



/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Octokit", function() { return Octokit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__octokit_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__octokit_plugin_request_log__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__octokit_plugin_paginate_rest__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octokit_plugin_rest_endpoint_methods__ = __webpack_require__(123);





const VERSION = "17.1.4";

const Octokit = __WEBPACK_IMPORTED_MODULE_0__octokit_core__["a" /* Octokit */].plugin(__WEBPACK_IMPORTED_MODULE_1__octokit_plugin_request_log__["a" /* requestLog */], __WEBPACK_IMPORTED_MODULE_3__octokit_plugin_rest_endpoint_methods__["a" /* restEndpointMethods */], __WEBPACK_IMPORTED_MODULE_2__octokit_plugin_paginate_rest__["a" /* paginateRest */]).defaults({
    userAgent: `octokit-rest.js/${VERSION}`
});


//# sourceMappingURL=index.js.map


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _JwksClient = __webpack_require__(32);

var _errors = __webpack_require__(33);

var errors = _interopRequireWildcard(_errors);

var _hapi = __webpack_require__(131);

var _express = __webpack_require__(130);

var _koa = __webpack_require__(132);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (options) {
  return new _JwksClient.JwksClient(options);
};

module.exports.ArgumentError = errors.ArgumentError;
module.exports.JwksError = errors.JwksError;
module.exports.JwksRateLimitError = errors.JwksRateLimitError;
module.exports.SigningKeyNotFoundError = errors.SigningKeyNotFoundError;

module.exports.expressJwtSecret = _express.expressJwtSecret;
module.exports.hapiJwt2Key = _hapi.hapiJwt2Key;
module.exports.koaJwtSecret = _koa.koaJwtSecret;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(33);

var _JwksClient = __webpack_require__(32);

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err);
  }
};

module.exports.expressJwtSecret = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing expressJwtSecret');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(req, header, payload, cb) {
    // Only RS256 is supported.
    if (!header || header.alg !== 'RS256') {
      return cb(null, null);
    }

    client.getSigningKey(header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey);
    });
  };
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(33);

var _JwksClient = __webpack_require__(32);

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null, null, null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err, null, null);
  }
};

module.exports.hapiJwt2Key = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing expressJwtSecret');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(decoded, cb) {
    // We cannot find a signing certificate if there is no header (no kid).
    if (!decoded || !decoded.header) {
      return cb(null, null, null);
    }

    // Only RS256 is supported.
    if (decoded.header.alg !== 'RS256') {
      return cb(null, null, null);
    }

    client.getSigningKey(decoded.header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey, key);
    });
  };
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(33);

var _JwksClient = __webpack_require__(32);

module.exports.koaJwtSecret = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  if (!options.jwksUri) {
    throw new _errors.ArgumentError('No JWKS URI provided');
  }

  var client = new _JwksClient.JwksClient(options);

  return function secretProvider() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        alg = _ref.alg,
        kid = _ref.kid;

    return new Promise(function (resolve, reject) {

      // Only RS256 is supported.
      if (alg !== 'RS256') {
        return reject(new Error('Missing / invalid token algorithm'));
      }

      client.getSigningKey(kid, function (err, key) {
        if (err) {

          if (options.handleSigningKeyError) {
            return options.handleSigningKeyError(err).then(reject);
          }

          return reject(err);
        }

        // Provide the key.
        resolve(key.publicKey || key.rsaPublicKey);
      });
    });
  };
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.certToPEM = certToPEM;
exports.rsaPublicKeyToPEM = rsaPublicKeyToPEM;
function certToPEM(cert) {
  cert = cert.match(/.{1,64}/g).join('\n');
  cert = '-----BEGIN CERTIFICATE-----\n' + cert + '\n-----END CERTIFICATE-----\n';
  return cert;
};

function prepadSigned(hexStr) {
  var msb = hexStr[0];
  if (msb < '0' || msb > '7') {
    return '00' + hexStr;
  }
  return hexStr;
}

function toHex(number) {
  var nstr = number.toString(16);
  if (nstr.length % 2) {
    return '0' + nstr;
  }
  return nstr;
}

function encodeLengthHex(n) {
  if (n <= 127) {
    return toHex(n);
  }
  var nHex = toHex(n);
  var lengthOfLengthByte = 128 + nHex.length / 2;
  return toHex(lengthOfLengthByte) + nHex;
}

/*
 * Source: http://stackoverflow.com/questions/18835132/xml-to-pem-in-node-js
 */
function rsaPublicKeyToPEM(modulusB64, exponentB64) {
  var modulus = new Buffer(modulusB64, 'base64');
  var exponent = new Buffer(exponentB64, 'base64');
  var modulusHex = prepadSigned(modulus.toString('hex'));
  var exponentHex = prepadSigned(exponent.toString('hex'));
  var modlen = modulusHex.length / 2;
  var explen = exponentHex.length / 2;

  var encodedModlen = encodeLengthHex(modlen);
  var encodedExplen = encodeLengthHex(explen);
  var encodedPubkey = '30' + encodeLengthHex(modlen + explen + encodedModlen.length / 2 + encodedExplen.length / 2 + 2) + '02' + encodedModlen + modulusHex + '02' + encodedExplen + exponentHex;

  var der = new Buffer(encodedPubkey, 'hex').toString('base64');

  var pem = '-----BEGIN RSA PUBLIC KEY-----\n';
  pem += '' + der.match(/.{1,64}/g).join('\n');
  pem += '\n-----END RSA PUBLIC KEY-----\n';
  return pem;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (client) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options,
      _ref$cacheMaxEntries = _ref.cacheMaxEntries,
      cacheMaxEntries = _ref$cacheMaxEntries === undefined ? 5 : _ref$cacheMaxEntries,
      _ref$cacheMaxAge = _ref.cacheMaxAge,
      cacheMaxAge = _ref$cacheMaxAge === undefined ? (0, _ms2.default)('10h') : _ref$cacheMaxAge;

  var logger = (0, _debug2.default)('jwks');
  var getSigningKey = client.getSigningKey;

  logger('Configured caching of singing keys. Max: ' + cacheMaxEntries + ' / Age: ' + cacheMaxAge);
  return (0, _lruMemoizer2.default)({
    load: function load(kid, callback) {
      getSigningKey(kid, function (err, key) {
        if (err) {
          return callback(err);
        }

        logger('Caching signing key for \'' + kid + '\':', key);
        return callback(null, key);
      });
    },
    hash: function hash(kid) {
      return kid;
    },
    maxAge: cacheMaxAge,
    max: cacheMaxEntries
  });
};

var _ms = __webpack_require__(31);

var _ms2 = _interopRequireDefault(_ms);

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _lruMemoizer = __webpack_require__(30);

var _lruMemoizer2 = _interopRequireDefault(_lruMemoizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rateLimitSigningKey = exports.cacheSigningKey = undefined;

var _cache = __webpack_require__(134);

var _cache2 = _interopRequireDefault(_cache);

var _rateLimit = __webpack_require__(136);

var _rateLimit2 = _interopRequireDefault(_rateLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.cacheSigningKey = _cache2.default;
exports.rateLimitSigningKey = _rateLimit2.default;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (client) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options,
      _ref$jwksRequestsPerM = _ref.jwksRequestsPerMinute,
      jwksRequestsPerMinute = _ref$jwksRequestsPerM === undefined ? 10 : _ref$jwksRequestsPerM;

  var logger = (0, _debug2.default)('jwks');
  var getSigningKey = client.getSigningKey;

  var limiter = new _limiter.RateLimiter(jwksRequestsPerMinute, 'minute', true);
  logger('Configured rate limiting to JWKS endpoint at ' + jwksRequestsPerMinute + '/minute');

  return function (kid, cb) {
    limiter.removeTokens(1, function (err, remaining) {
      if (err) {
        return cb(err);
      }

      logger('Requests to the JWKS endpoint available for the next minute:', remaining);
      if (remaining < 0) {
        logger('Too many requests to the JWKS endpoint');
        return cb(new _JwksRateLimitError2.default('Too many requests to the JWKS endpoint'));
      } else {
        return getSigningKey(kid, cb);
      }
    });
  };
};

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _limiter = __webpack_require__(61);

var _JwksRateLimitError = __webpack_require__(71);

var _JwksRateLimitError2 = _interopRequireDefault(_JwksRateLimitError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

const ms = __webpack_require__(31);
const jwt = __webpack_require__(12);
const auth0 = __webpack_require__(106);
const Promise = __webpack_require__(4);
const memoizer = __webpack_require__(30);
const request = __webpack_require__(112);

const ArgumentError = __webpack_require__(2).ArgumentError;
const ManagementApiError = __webpack_require__(2).ManagementApiError;

const getAccessToken = function(domain, clientId, clientSecret) {
  return new Promise(function(resolve, reject) {
    request
      .post('https://' + domain + '/oauth/token')
      .send({
        audience: 'https://' + domain + '/api/v2/',
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials'
      })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err && err.status === 401) {
          return reject(new ManagementApiError('unauthorized', 'Invalid credentials for ' + clientId, err.status));
        } else if (err && res && res.body && res.body.error) {
          return reject(new ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
        } else if (err) {
          return reject(err);
        }

        if (!res.ok || !res.body.access_token) {
          return reject(new ManagementApiError('unknown_error', 'Unknown error from Management Api or no access token was provided: ' + (res.text || res.status)));
        }

        return resolve(res.body.access_token);
      });
  });
};

const getAccessTokenCached = Promise.promisify(
  memoizer({
    load: function(domain, clientId, clientSecret, callback) {
      getAccessToken(domain, clientId, clientSecret)
        .then(function(accessToken) {
          return callback(null, accessToken);
        })
        .catch(function(err) {
          return callback(err);
        });
    },
    hash: function(domain, clientId, clientSecret) {
      return domain + '-' + clientId + '-' + clientSecret;
    },
    itemMaxAge: function(domain, clientId, clientSecret, accessToken) {
      try {
        const decodedToken = jwt.decode(accessToken);
        const expiresIn = new Date(0);
        expiresIn.setUTCSeconds(decodedToken.exp);
        const now = new Date().valueOf();
        return (expiresIn.valueOf() - now) - 10000;
      } catch (e) {
        return 1000;
      }
    },
    max: 100,
    maxAge: ms('1h')
  }
));

module.exports.getAccessToken = getAccessToken;
module.exports.getAccessTokenCached = getAccessTokenCached;
module.exports.getClient = function(options) {
  if (options === null || options === undefined) {
    throw new ArgumentError('An options object must be provided');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new ArgumentError('An options object must contain the domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.accessToken) {
    if (typeof options.accessToken !== 'string' || options.accessToken.length === 0) {
      throw new ArgumentError('The provided accessToken is invalid');
    }

    return Promise.resolve(new auth0.ManagementClient({ domain: options.domain, token: options.accessToken, headers: options.headers }));
  }

  if (options.clientId === null || options.clientId === undefined) {
    throw new ArgumentError('An options object must contain the clientId');
  }

  if (typeof options.clientId !== 'string' || options.clientId.length === 0) {
    throw new ArgumentError('The provided clientId is invalid: ' + options.clientId);
  }

  if (options.clientSecret === null || options.clientSecret === undefined) {
    throw new ArgumentError('An options object must contain the clientSecret');
  }

  if (typeof options.clientSecret !== 'string' || options.clientSecret.length === 0) {
    throw new ArgumentError('The provided clientSecret is invalid');
  }

  return getAccessTokenCached(options.domain, options.clientId, options.clientSecret)
    .then(function(token) {
      return new auth0.ManagementClient({ domain: options.domain, token: token, headers: options.headers });
    });
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(5);
const uuid = __webpack_require__(110);
const promiseRetry = __webpack_require__(104);

const seriesQueue = __webpack_require__(148);
const ArgumentError = __webpack_require__(2).ArgumentError;
const NotFoundError = __webpack_require__(2).NotFoundError;
const ValidationError = __webpack_require__(2).ValidationError;

const getDataForCollection = function(storageContext, collectionName) {
  return storageContext.read(collectionName)
    .then(function(data) {
      data[collectionName] = data[collectionName] || [];
      return data;
    });
};

const withRetry = function(storageContext, action) {
  const retryOptions = {
    retries: 10,
    factor: 2,
    minTimeout: 100,
    maxTimeout: Infinity,
    randomize: false
  };

  return function() {
    return promiseRetry(function(retry) {
      return action()
        .catch(function(err) {
          const writeRetryCondition =
            storageContext.writeRetryCondition ||
            function() { return false; };
          if (writeRetryCondition(err)) {
            return retry(err);
          }

          throw err;
        });
    }, retryOptions);
  };
};

/**
 * Create a new BlobRecordProvider.
 * @param {Object} storageContext The storage context.
 * @constructor
 */
function BlobRecordProvider(storageContext, options) {
  if (storageContext === null || storageContext === undefined) {
    throw new ArgumentError('Must provide a storage context');
  }

  this.storageContext = storageContext;
  this.queue = seriesQueue();
  this.options = options || {
    concurrentWrites: true
  };
}

/**
 * Write to the underlying storage layer
 * @param {string} action Action to execute.
 */
BlobRecordProvider.prototype.write = function(storageContext, action) {
  const actionWithRetry = withRetry(storageContext, action);

  // Concurrent writes are allowed.
  if (this.options.concurrentWrites) {
    return actionWithRetry();
  }

  // Concurrent writes are not allowed, process them sequantially.
  const queue = this.queue;
  return new Promise(function(resolve, reject) {
    queue(actionWithRetry, function(err, res) {
      if (err) {
        return reject(err);
      }

      return resolve(res);
    });
  });
};

/**
 * Get all records for a collection.
 * @param {string} collectionName The name of the collection.
 * @return {Array} The records.
 */
BlobRecordProvider.prototype.getAll = function(collectionName) {
  return getDataForCollection(this.storageContext, collectionName)
    .then(function(data) {
      return data[collectionName];
    });
};

/**
 * Get a single record from a collection.
 * @param {string} collectionName The name of the collection.
 * @param {string} identifier The identifier of the record.
 * @return {Object} The record.
 */
BlobRecordProvider.prototype.get = function(collectionName, identifier) {
  return this.getAll(collectionName)
    .then(function(records) {
      const record = _.find(records, function(r) { return r._id === identifier; });
      if (!record) {
        return Promise.reject(
          new NotFoundError('The record ' + identifier + ' in ' + collectionName + ' does not exist.')
        );
      }

      return record;
    });
};

/**
 * Create a record in a collection.
 * @param {string} collectionName The name of the collection.
 * @param {Object} record The record.
 * @return {Object} The record.
 */
BlobRecordProvider.prototype.create = function(collectionName, record) {
  const storageContext = this.storageContext;
  return this.write(storageContext, function() {
    return getDataForCollection(storageContext, collectionName)
      .then(function(data) {
        if (!record._id) {
          record._id = uuid.v4();
        }

        const index = _.findIndex(data[collectionName], function(r) { return r._id === record._id; });
        if (index > -1) {
          return Promise.reject(
            new ValidationError('The record ' + record._id + ' in ' + collectionName + ' already exists.')
          );
        }

        // Add to dataset.
        data[collectionName].push(record);

        // Save.
        return storageContext.write(data)
          .then(function() {
            return record;
          });
      });
  });
};

/**
 * Update a record in a collection.
 * @param {string} collectionName The name of the collection.
 * @param {string} identifier The identifier of the record to update.
 * @param {Object} record The record.
 * @param {boolean} upsert Flag allowing to upsert if the record does not exist.
 * @return {Object} The record.
 */
BlobRecordProvider.prototype.update = function(collectionName, identifier, record, upsert) {
  const storageContext = this.storageContext;
  return this.write(storageContext, function() {
    return getDataForCollection(storageContext, collectionName)
      .then(function(data) {
        const index = _.findIndex(data[collectionName], function(r) { return r._id === identifier; });
        if (index < 0 && !upsert) {
          throw new NotFoundError('The record ' + identifier + ' in ' + collectionName + ' does not exist.');
        }

        // Update record.
        const updatedRecord = _.extend({ _id: identifier }, index < 0 ? { } : data[collectionName][index], record);
        if (index < 0) {
          data[collectionName].push(updatedRecord);
        } else {
          data[collectionName][index] = updatedRecord;
        }

        // Save.
        return storageContext.write(data)
          .then(function() {
            return updatedRecord;
          });
      });
  });
};

/**
 * Delete a record in a collection.
 * @param {string} collectionName The name of the collection.
 * @param {string} identifier The identifier of the record to update.
 */
BlobRecordProvider.prototype.delete = function(collectionName, identifier) {
  const storageContext = this.storageContext;
  return this.write(storageContext, function() {
    return getDataForCollection(storageContext, collectionName)
      .then(function(data) {
        const index = _.findIndex(data[collectionName], function(r) { return r._id === identifier; });
        if (index < 0) {
          return false;
        }

        // Remove the record.
        data[collectionName].splice(index, 1);

        // Save.
        return storageContext.write(data)
          .then(function() {
            return true;
          });
      });
  });
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = BlobRecordProvider;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = function() {
  const settings = { };
  var currentProvider = null;

  const config = function getConfig(key) {
    if (settings && settings[key]) {
      return settings[key];
    }

    if (!currentProvider) {
      throw new Error('A configuration provider has not been set');
    }

    return currentProvider(key);
  };

  config.setProvider = function setProvider(providerFunction) {
    currentProvider = providerFunction;
  };

  config.setValue = function setValue(key, value) {
    settings[key] = value;
  };

  return config;
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

const configProvider = __webpack_require__(73);

module.exports.createServer = function(cb) {
  var server = null;

  return function serverFactory(webtaskContext) {
    if (!server) {
      const config = configProvider.fromWebtaskContext(webtaskContext);
      server = cb(config, webtaskContext.storage);
    }

    return server;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

function ArgumentError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ArgumentError';
  this.message = message;
  this.status = 400;
}

ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;
module.exports = ArgumentError;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

function ForbiddenError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ForbiddenError';
  this.message = message;
  this.status = 403;
}

ForbiddenError.prototype = Object.create(Error.prototype);
ForbiddenError.prototype.constructor = ForbiddenError;
module.exports = ForbiddenError;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

function HookTokenError(message, innerError) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'HookTokenError';
  this.message = message;
  this.status = 401;
  this.innerError = innerError;
}

HookTokenError.prototype = Object.create(Error.prototype);
HookTokenError.prototype.constructor = HookTokenError;
module.exports = HookTokenError;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

function ManagementApiError(code, message, status) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ManagementApiError';
  this.code = code;
  this.message = message;
  this.status = status || 400;
}

ManagementApiError.prototype = Object.create(Error.prototype);
ManagementApiError.prototype.constructor = ManagementApiError;
module.exports = ManagementApiError;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

function NotFoundError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'NotFoundError';
  this.message = message;
  this.status = 404;
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;
module.exports = NotFoundError;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

function UnauthorizedError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'UnauthorizedError';
  this.message = message;
  this.status = 401;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;
module.exports = UnauthorizedError;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

function ValidationError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ValidationError';
  this.message = message;
  this.status = 400;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
module.exports = ValidationError;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

const async = __webpack_require__(105);

module.exports = function() {
  const queue = async.queue(function(task, callback) {
    task()
      .then(function(res) {
        callback(null, res);
      })
      .catch(function(err) {
        callback(err);
      });
  }, 1);
  return queue.push.bind(queue);
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(12);
const Promise = __webpack_require__(4);
const jwksClient = __webpack_require__(129);
const crypto = __webpack_require__(44);

const ArgumentError = __webpack_require__(2).ArgumentError;
const UnauthorizedError = __webpack_require__(2).UnauthorizedError;
const ValidationError = __webpack_require__(2).ValidationError;

function SessionManager(rta, domain, clientId) {
  if (rta === null || rta === undefined) {
    throw new ArgumentError('Must provide a valid domain');
  }

  if (typeof rta !== 'string' || rta.length === 0) {
    throw new ArgumentError('The provided rta is invalid: ' + rta);
  }

  if (rta.indexOf('https://') === 0) {
    rta = rta.replace('https://', '');
  }

  if (domain === null || domain === undefined) {
    throw new ArgumentError('Must provide a valid domain');
  }

  if (typeof domain !== 'string' || domain.length === 0) {
    throw new ArgumentError('The provided domain is invalid: ' + domain);
  }

  if (clientId === null || clientId === undefined) {
    throw new ArgumentError('Must provide a valid clientId');
  }

  if (typeof clientId !== 'string' || clientId.length === 0) {
    throw new ArgumentError('The provided clientId is invalid: ' + clientId);
  }

  this.options = {
    rta: rta,
    domain: domain,
    clientId: clientId
  };

  this.jwksClient = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://' + rta + '/.well-known/jwks.json'
  });
  this.managementApiAudience = 'https://' + domain + '/api/v2/';
}

SessionManager.prototype.createAuthorizeUrl = function(options) {
  if (options === null || options === undefined) {
    throw new ArgumentError('Must provide the options');
  }

  if (options.redirectUri === null || options.redirectUri === undefined) {
    throw new ArgumentError('Must provide the redirectUri');
  }

  if (options.nonce === null || options.nonce === undefined) {
    // TODO: throw new ArgumentError('Must provide the nonce');
    options.nonce = crypto.randomBytes(16).toString('hex');
  } else if (typeof options.nonce !== 'string' || options.nonce.length === 0) {
    throw new ArgumentError('The provided nonce is invalid: ' + options.nonce);
  }

  if (typeof options.redirectUri !== 'string' || options.redirectUri.length === 0) {
    throw new ArgumentError('The provided redirectUri is invalid: ' + options.redirectUri);
  }

  if (options.state !== undefined && (typeof options.state !== 'string' || options.state.length === 0)) {
    throw new ArgumentError('The provided state is invalid: ' + options.state);
  }

  var scopes = 'openid name email';
  if (options.scopes && options.scopes.length) {
    scopes += ' ' + options.scopes;
  }

  var urlOptions = [
    'https://' + this.options.rta + '/authorize',
    '?client_id=' + encodeURIComponent(this.options.clientId),
    '&response_type=token id_token',
    '&response_mode=form_post',
    '&scope=' + encodeURIComponent(scopes),
    '&expiration=' + (options.expiration || 36000),
    '&redirect_uri=' + encodeURIComponent(options.redirectUri),
    '&audience=' + encodeURIComponent(this.managementApiAudience),
    '&nonce=' + encodeURIComponent(options.nonce)
  ];
  if (options.state) urlOptions.push('&state=' + encodeURIComponent(options.state));
  return urlOptions.join('');
};

SessionManager.prototype.validateToken = function(client, audience, token) {
  const self = this;
  return new Promise(function(resolve, reject) {
    const decoded = jwt.decode(token, { complete: true });
    if (decoded == null) {
      return reject(new ValidationError('Unable to decoded the token.'));
    }

    return self.jwksClient.getSigningKey(decoded.header.kid, function(signingKeyError, key) {
      if (signingKeyError) {
        return reject(signingKeyError);
      }

      const signingKey = key.publicKey || key.rsaPublicKey;
      return jwt.verify(token, signingKey, { algorithms: ['RS256'] }, function(err, payload) {
        if (err) {
          return reject(err);
        }

        if (payload.iss !== 'https://' + self.options.rta + '/') {
          return reject(new UnauthorizedError('Invalid issuer: ' + payload.iss));
        }

        if (!(payload && (payload.aud === audience
            || (Array.isArray(payload.aud) && payload.aud.indexOf(audience) > -1)))) {
          return reject(new UnauthorizedError('Audience mismatch for: ' + audience));
        }

        return resolve(payload);
      });
    });
  });
};

/**
 * Create a new session.
 */
SessionManager.prototype.create = function(idToken, accessToken, options) {
  if (idToken === null || idToken === undefined) {
    return Promise.reject(new ArgumentError('Must provide an id_token'));
  }

  if (typeof idToken !== 'string' || idToken.length === 0) {
    return Promise.reject(new ArgumentError('The provided id_token is invalid: ' + idToken));
  }

  if (accessToken === null || accessToken === undefined) {
    return Promise.reject(new ArgumentError('Must provide an access_token'));
  }

  if (typeof accessToken !== 'string' || accessToken.length === 0) {
    return Promise.reject(new ArgumentError('The provided access_token is invalid: ' + accessToken));
  }

  if (options === null || options === undefined) {
    return Promise.reject(new ArgumentError('Must provide the options'));
  }

  if (options.secret === null || options.secret === undefined) {
    return Promise.reject(new ArgumentError('Must provide the secret'));
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    return Promise.reject(new ArgumentError('The provided secret is invalid: ' + options.secret));
  }

  if (options.audience === null || options.audience === undefined) {
    return Promise.reject(new ArgumentError('Must provide the audience'));
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    return Promise.reject(new ArgumentError('The provided audience is invalid: ' + options.audience));
  }

  if (options.issuer === null || options.issuer === undefined) {
    return Promise.reject(new ArgumentError('Must provide the issuer'));
  }

  if (typeof options.issuer !== 'string' || options.issuer.length === 0) {
    return Promise.reject(new ArgumentError('The provided issuer is invalid: ' + options.issuer));
  }

  const self = this;
  return Promise.all([
    self.validateToken(self.options.clientId, self.options.clientId, idToken),
    self.validateToken(self.options.clientId, self.managementApiAudience, accessToken)
  ])
    .then(function(tokens) {
      if (tokens[1].azp !== self.options.clientId) {
        return Promise.reject(new UnauthorizedError('The access_token\'s azp does not match the id_token'));
      }

      if (tokens[0].sub !== tokens[1].sub) {
        return Promise.reject(new UnauthorizedError('Subjects don\'t match'));
      }

      const payload = {
        sub: tokens[0].sub,
        email: tokens[0].email,
        exp: tokens[0].exp
      };

      if (!options.noAccessToken) {
        payload.access_token = accessToken;
      }

      return jwt.sign(payload, options.secret, {
        algorithm: 'HS256',
        issuer: options.issuer,
        audience: options.audience
      });
    });
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = SessionManager;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(5);
const fs = __webpack_require__(65);
const Promise = __webpack_require__(4);

const ArgumentError = __webpack_require__(2).ArgumentError;

/**
 * Create a new FileStorageContext.
 * @param {string} path The full path to the file.
 * @param {Object} options The options object.
 * @param {boolean} options.mergeWrites Merge the data from the local file with the new payload when writing a file.
 *     (defaults to `true` if options is not defined).
 * @param {Object} options.defaultData The default data to use when the file does not exist or is empty.
 * @constructor
 */
function FileStorageContext(path, options) {
  if (path === null || path === undefined) {
    throw new ArgumentError('Must provide the path to the file');
  }

  if (typeof path !== 'string' || path.length === 0) {
    throw new ArgumentError('The provided path is invalid: ' + path);
  }

  options = options || { mergeWrites: true };

  this.path = path;
  this.mergeWrites = options.mergeWrites;
  this.defaultData = options.defaultData || {};
}

/**
 * Read payload from the file.
 * @return {object} The object parsed from the file.
 */
FileStorageContext.prototype.read = function() {
  const ctx = this;
  return new Promise(function readFileStorageContext(resolve, reject) {
    fs.readFile(ctx.path, 'utf8', function(err, data) {
      if (err) {
        if (err.code === 'ENOENT') {
          return resolve(ctx.defaultData);
        }

        return reject(err);
      }
      try {
        if (data && data.length) {
          return resolve(JSON.parse(data));
        }

        return resolve(ctx.defaultData);
      } catch (e) {
        return reject(e);
      }
    });
  });
};

/**
 * Write payload to the file.
 * @param {object} payload The object to write.
 */
FileStorageContext.prototype.write = function(payload) {
  const ctx = this;
  var writePromise = Promise.resolve(payload);

  if (ctx.mergeWrites) {
    writePromise = writePromise.then(function(data) {
      return ctx.read()
        .then(function(originalData) {
          return _.extend({ }, originalData, data);
        });
    });
  }

  return writePromise.then(function(data) {
    return new Promise(function(resolve, reject) {
      try {
        return fs.writeFile(ctx.path, JSON.stringify(data, null, 2), 'utf8', function(err) {
          if (err) {
            return reject(err);
          }

          return resolve();
        });
      } catch (e) {
        return reject(e);
      }
    });
  });
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = FileStorageContext;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.FileStorageContext = __webpack_require__(150);
module.exports.WebtaskStorageContext = __webpack_require__(152);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

const Promise = __webpack_require__(4);

const ArgumentError = __webpack_require__(2).ArgumentError;

/**
 * Create a new WebtaskStorageContext.
 * @param {Object} storage The Webtask storage object.
 * @param {Object} options The options object.
 * @param {int} options.force Disregard the possibility of a conflict.
 * @param {Object} options.defaultData The default data to use when the file does not exist or is empty.
 * @constructor
 */
function WebtaskStorageContext(storage, options) {
  if (storage === null || storage === undefined) {
    throw new ArgumentError('Must provide the Webtask storage object');
  }

  options = options || { force: 1 };

  this.storage = storage;
  this.options = options;
  this.defaultData = options.defaultData || {};
}

/**
 * Read payload from Webtask storage.
 * @return {object} The object parsed from Webtask storage.
 */
WebtaskStorageContext.prototype.read = function() {
  const ctx = this;
  return new Promise(function readWebtaskStorageContext(resolve, reject) {
    ctx.storage.get(function(err, data) {
      if (err) {
        return reject(err);
      }

      return resolve(data || ctx.defaultData);
    });
  });
};

/**
 * Write data to Webtask storage.
 * @param {object} data The object to write.
 */
WebtaskStorageContext.prototype.write = function(data) {
  const ctx = this;
  return new Promise(function(resolve, reject) {
    ctx.storage.set(data, ctx.options, function(err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
};

/**
 * Perform retries on write if a webtask storage conflict is detected.
 * @param {object} err The write error to examine.
 */
WebtaskStorageContext.prototype.writeRetryCondition = function(err) {
  return err.code === 409;
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = WebtaskStorageContext;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(12);
const HookTokenError = __webpack_require__(2).HookTokenError;

module.exports = function validateHookToken(domain, webtaskUrl, hookPath, extensionSecret, hookToken) {
  if (!hookToken) {
    throw new HookTokenError('Hook token missing');
  }

  try {
    jwt.verify(hookToken, extensionSecret, {
      audience: webtaskUrl + hookPath,
      issuer: 'https://' + domain
    });
    return true;
  } catch (e) {
    throw new HookTokenError('Invalid hook token', e);
  }
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

const decode = __webpack_require__(101);
const expressJwt = __webpack_require__(107);
const tools = __webpack_require__(8);
const conditional = __webpack_require__(80);

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.secret === null || options.secret === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    throw new tools.ArgumentError('The provided secret is invalid: ' + options.secret);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new tools.ArgumentError('Must provide a valid base URL');
  }

  if (typeof options.baseUrl !== 'string' || options.baseUrl.length === 0) {
    throw new tools.ArgumentError('The provided base URL is invalid: ' + options.baseUrl);
  }

  const validateToken = expressJwt({
    audience: options.audience,
    issuer: options.baseUrl,
    secret: options.secret,
    algorithms: [ 'HS256' ],
    credentialsRequired: options.credentialsRequired || true
  });

  return function(req, res, next) {
    validateToken(req, res, function(err) {
      if (err) {
        return next(err);
      }

      if (options.onLoginSuccess) {
        return options.onLoginSuccess(req, res, next);
      }

      return next();
    });
  };
};

module.exports.optional = function(options) {
  const mw = module.exports(options);
  return conditional(
    function(req) {
      if (req && req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        try {
          const decodedToken = decode(req.headers.authorization.split(' ')[1]);
          return decodedToken && decodedToken.iss === options.baseUrl;
        } catch (ex) {
          return false;
        }
      }

      return false;
    },
    mw
  );
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

const decode = __webpack_require__(101);
const jwt = __webpack_require__(107);
const jwksRsa = __webpack_require__(271);
const tools = __webpack_require__(8);
const conditional = __webpack_require__(80);
const UnauthorizedError = __webpack_require__(8).UnauthorizedError;

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid audience');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  const validateToken = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://' + options.domain + '/.well-known/jwks.json',
      handleSigningKeyError: function(err, cb) {
        if (err instanceof jwksRsa.SigningKeyNotFoundError) {
          return cb(new UnauthorizedError('A token was provided with an invalid kid'));
        }

        return cb(err);
      }
    }),

    // Validate the audience and the issuer.
    audience: options.audience,
    issuer: 'https://' + options.domain + '/',
    algorithms: [ 'RS256' ],

    // Optionally require authentication
    credentialsRequired: (options && options.credentialsRequired) || true
  });

  return function(req, res, next) {
    validateToken(req, res, function(err) {
      if (err) {
        return next(err);
      }

      if (options.onLoginSuccess) {
        return options.onLoginSuccess(req, res, next);
      }

      return next();
    });
  };
};

module.exports.optional = function(options) {
  const mw = module.exports(options);
  return conditional(
    function(req) {
      if (req && req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        try {
          const decodedToken = decode(req.headers.authorization.split(' ')[1]);
          return decodedToken && decodedToken.iss === 'https://' + options.domain + '/';
        } catch (ex) {
          return false;
        }
      }

      return false;
    },
    mw
  );
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(errorLogger) {
  return function(err, req, res, next) { // eslint-disable-line no-unused-vars
    if (errorLogger) {
      errorLogger(err);
    }

    if (err && err.status) {
      res.status(err.status);
      return res.json({
        error: err.code || err.name,
        message: err.message || err.name
      });
    }

    res.status(err.status || 500);
    if (true) {
      return res.json({
        error: 'InternalServerError',
        message: err.message || err.name
      });
    }

    return res.json({
      error: 'InternalServerError',
      message: err.message || err.name,
      details: {
        message: err.message,
        status: err.status,
        stack: err.stack
      }
    });
  };
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.authenticateAdmins = __webpack_require__(154);
module.exports.authenticateUsers = __webpack_require__(155);
module.exports.requireAuthentication = __webpack_require__(159);
module.exports.errorHandler = __webpack_require__(156);
module.exports.managementApiClient = __webpack_require__(158);
module.exports.validateHookToken = __webpack_require__(160);
module.exports.webtaskConfig = __webpack_require__(161);


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(8);

module.exports = function(handlerOptions) {
  return function(req, res, next) {
    const request = req;
    const isAdministrator = req.user && req.user.access_token && req.user.access_token.length;
    const options = !isAdministrator ? handlerOptions : {
      domain: handlerOptions.domain,
      accessToken: req.user.access_token,
      headers: handlerOptions.headers
    };

    tools.managementApi.getClient(options)
      .then(function(auth0) {
        request.auth0 = auth0;
        next();
        return null;
      })
      .catch(function(err) {
        next(err);
      });
  };
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

const UnauthorizedError = __webpack_require__(8).UnauthorizedError;

module.exports = function(req, res, next) {
  if (!req.user) {
    return next(new UnauthorizedError('Authentication required for this endpoint.'));
  }

  return next();
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(8);

module.exports = function(domain, webtaskUrl, extensionSecret) {
  if (domain === null || domain === undefined) {
    throw new tools.ArgumentError('Must provide the domain');
  }

  if (typeof domain !== 'string' || domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + domain);
  }

  if (webtaskUrl === null || webtaskUrl === undefined) {
    throw new tools.ArgumentError('Must provide the webtaskUrl');
  }

  if (typeof webtaskUrl !== 'string' || webtaskUrl.length === 0) {
    throw new tools.ArgumentError('The provided webtaskUrl is invalid: ' + webtaskUrl);
  }

  if (extensionSecret === null || extensionSecret === undefined) {
    throw new tools.ArgumentError('Must provide the extensionSecret');
  }

  if (typeof extensionSecret !== 'string' || extensionSecret.length === 0) {
    throw new tools.ArgumentError('The provided extensionSecret is invalid: ' + extensionSecret);
  }

  return function(hookPath) {
    if (hookPath === null || hookPath === undefined) {
      throw new tools.ArgumentError('Must provide the hookPath');
    }

    if (typeof hookPath !== 'string' || hookPath.length === 0) {
      throw new tools.ArgumentError('The provided hookPath is invalid: ' + hookPath);
    }

    return function(req, res, next) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        const token = req.headers.authorization.split(' ')[1];

        try {
          if (tools.validateHookToken(domain, webtaskUrl, hookPath, extensionSecret, token)) {
            return next();
          }
        } catch (e) {
          return next(e);
        }
      }

      return next(new tools.HookTokenError('Hook token missing for the call to: ' + hookPath));
    };
  };
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(8);

module.exports = function(config) {
  return function(req, res, next) {
    if (req.webtaskContext) {
      config.setProvider(tools.configProvider.fromWebtaskContext(req.webtaskContext));
    }

    return next();
  };
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(10);
const crypto = __webpack_require__(44);
const cookieParser = __webpack_require__(290);
const jwt = __webpack_require__(12);
const tools = __webpack_require__(8);

const urlHelpers = __webpack_require__(74);

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.secret === null || options.secret === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    throw new tools.ArgumentError('The provided secret is invalid: ' + options.secret);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid audience');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  if (options.rta === null || options.rta === undefined) {
    throw new tools.ArgumentError('Must provide a valid rta');
  }

  if (typeof options.rta !== 'string' || options.rta.length === 0) {
    throw new tools.ArgumentError('The provided rta is invalid: ' + options.rta);
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new tools.ArgumentError('Must provide a valid base URL');
  }

  if (typeof options.baseUrl !== 'string' || options.baseUrl.length === 0) {
    throw new tools.ArgumentError('The provided base URL is invalid: ' + options.baseUrl);
  }

  if (options.clientName === null || options.clientName === undefined) {
    throw new tools.ArgumentError('Must provide a valid client name');
  }

  if (typeof options.clientName !== 'string' || options.clientName.length === 0) {
    throw new tools.ArgumentError('The provided client name is invalid: ' + options.clientName);
  }

  if (typeof options.storageType !== 'undefined' && options.storageType !== 'sessionStorage' && options.storageType !== 'localStorage') {
    throw new tools.ArgumentError('The storageType must be either "sessionStorage" or "localStorage". Incorrect storageType: ' + options.storageType);
  }

  const stateKey = options.stateKey || 'state';
  const nonceKey = options.nonceKey || 'nonce';
  const urlPrefix = options.urlPrefix || '';
  const storageType = options.storageType || 'sessionStorage';
  const storageKey = options.storageKey || options.sessionStorageKey || 'apiToken';
  const sessionManager = new tools.SessionManager(options.rta, options.domain, options.baseUrl);

  const router = express.Router();
  router.get(urlPrefix + '/login', function(req, res) {
    const basePath = urlHelpers.getBasePath(req);
    const state = crypto.randomBytes(16).toString('hex');
    const nonce = crypto.randomBytes(16).toString('hex');  
    const basicAttr = {
      httpOnly: true,
      path: basePath
    };

    res.cookie(stateKey, state, Object.assign({}, basicAttr, { sameSite: 'None', secure: true }));
    res.cookie(nonceKey, nonce, Object.assign({}, basicAttr, { sameSite: 'None', secure: true }));

    // create legacy cookie
    res.cookie(stateKey + '_compat', state, basicAttr);
    res.cookie(nonceKey + '_compat', nonce, basicAttr);
    
    const redirectTo = sessionManager.createAuthorizeUrl({
      redirectUri: urlHelpers.getBaseUrl(req) + urlPrefix + '/login/callback',
      scopes: options.scopes,
      expiration: options.expiration,
      nonce: nonce,
      state: state
    });
    res.redirect(redirectTo);
  });

  router.post(urlPrefix + '/login/callback', cookieParser(), function(req, res, next) {
    var decoded;

    try {
      decoded = jwt.decode(req.body.id_token);
    } catch (e) {
      decoded = null;
    }

    if (!decoded) {
      return next(new tools.ValidationError('Login failed. Invalid token.'));
    }

    if ((req.cookies && req.cookies[nonceKey] && req.cookies[nonceKey] !== decoded.nonce) || (req.cookies && req.cookies[nonceKey + '_compat'] && req.cookies[nonceKey + '_compat'] !== decoded.nonce)) {
      return next(new tools.ValidationError('Login failed. Nonce mismatch.'));
    }
    if ((req.cookies && req.cookies[stateKey] && req.cookies[stateKey] !== req.body.state) || (req.cookies && req.cookies[stateKey + '_compat'] && req.cookies[stateKey + '_compat'] !== req.body.state)) {
      return next(new tools.ValidationError('Login failed. State mismatch.'));
    }

    const basePath = urlHelpers.getBasePath(req);
    const session = sessionManager.create(req.body.id_token, req.body.access_token, {
      secret: options.secret,
      issuer: options.baseUrl,
      audience: options.audience,
      noAccessToken: options.noAccessToken
    });

    return session
      .then(function(token) {
        res.clearCookie(stateKey, { path: basePath });
        res.clearCookie(nonceKey, { path: basePath });
        res.clearCookie(stateKey + '_compat', { path: basePath });
        res.clearCookie(nonceKey + '_compat', { path: basePath });
        res.header('Content-Type', 'text/html');
        res.status(200).send('<html>' +
          '<head>' +
          '<script type="text/javascript">' +
          storageType + '.setItem("' + storageKey + '", "' + token + '");' +
          'window.location.href = "' + urlHelpers.getBaseUrl(req) + '";' +
          '</script>' +
          '</head>' +
          '</html>');
      })
      .catch(function(err) {
        next(err);
      });
  });

  router.get(urlPrefix + '/logout', function(req, res) {
    const basePath = urlHelpers.getBasePath(req);
    const encodedBaseUrl = encodeURIComponent(urlHelpers.getBaseUrl(req));
    res.clearCookie(stateKey, { path: basePath });
    res.clearCookie(nonceKey, { path: basePath });
    res.clearCookie(stateKey + '_compat', { path: basePath });
    res.clearCookie(nonceKey + '_compat', { path: basePath });
    res.header('Content-Type', 'text/html');
    res.status(200).send(
      '<html>' +
      '<head>' +
      '<script type="text/javascript">' +
      storageType + '.removeItem("' + storageKey + '");' +
      'window.location.href = "https://' + options.rta + '/v2/logout/?returnTo=' + encodedBaseUrl + '&client_id=' + encodedBaseUrl + '";' +
      '</script>' +
      '</head>' +
      '</html>'
    );
  });

  router.get('/.well-known/oauth2-client-configuration', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.status(200).send({
      redirect_uris: [ urlHelpers.getBaseUrl(req) + urlPrefix + '/login/callback' ],
      client_name: options.clientName,
      post_logout_redirect_uris: [ urlHelpers.getBaseUrl(req) ]
    });
  });

  return router;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.dashboardAdmins = __webpack_require__(162);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(8);
const Webtask = __webpack_require__(67);

module.exports.createServer = function(cb) {
  const serverFn = tools.createServer(cb);
  var dispatchFn = null;

  return Webtask.fromExpress(function requestHandler(req, res) {
    if (!dispatchFn) {
      dispatchFn = serverFn(req.webtaskContext);
    }

    return dispatchFn(req, res);
  });
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _JwksClient = __webpack_require__(34);

var _errors = __webpack_require__(35);

var errors = _interopRequireWildcard(_errors);

var _hapi = __webpack_require__(167);

var _express = __webpack_require__(166);

var _koa = __webpack_require__(168);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (options) {
  return new _JwksClient.JwksClient(options);
};

module.exports.ArgumentError = errors.ArgumentError;
module.exports.JwksError = errors.JwksError;
module.exports.JwksRateLimitError = errors.JwksRateLimitError;
module.exports.SigningKeyNotFoundError = errors.SigningKeyNotFoundError;

module.exports.expressJwtSecret = _express.expressJwtSecret;
module.exports.hapiJwt2Key = _hapi.hapiJwt2Key;
module.exports.koaJwtSecret = _koa.koaJwtSecret;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(35);

var _JwksClient = __webpack_require__(34);

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err);
  }
};

module.exports.expressJwtSecret = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing expressJwtSecret');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(req, header, payload, cb) {
    // Only RS256 is supported.
    if (!header || header.alg !== 'RS256') {
      return cb(null, null);
    }

    client.getSigningKey(header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey);
    });
  };
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(35);

var _JwksClient = __webpack_require__(34);

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null, null, null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err, null, null);
  }
};

module.exports.hapiJwt2Key = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing expressJwtSecret');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(decoded, cb) {
    // We cannot find a signing certificate if there is no header (no kid).
    if (!decoded || !decoded.header) {
      return cb(null, null, null);
    }

    // Only RS256 is supported.
    if (decoded.header.alg !== 'RS256') {
      return cb(null, null, null);
    }

    client.getSigningKey(decoded.header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey, key);
    });
  };
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(35);

var _JwksClient = __webpack_require__(34);

module.exports.koaJwtSecret = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  if (!options.jwksUri) {
    throw new _errors.ArgumentError('No JWKS URI provided');
  }

  var client = new _JwksClient.JwksClient(options);

  return function secretProvider() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        alg = _ref.alg,
        kid = _ref.kid;

    return new Promise(function (resolve, reject) {

      // Only RS256 is supported.
      if (alg !== 'RS256') {
        return reject(new Error('Missing / invalid token algorithm'));
      }

      client.getSigningKey(kid, function (err, key) {
        if (err) {

          if (options.handleSigningKeyError) {
            return options.handleSigningKeyError(err).then(reject);
          }

          return reject(err);
        }

        // Provide the key.
        resolve(key.publicKey || key.rsaPublicKey);
      });
    });
  };
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.certToPEM = certToPEM;
exports.rsaPublicKeyToPEM = rsaPublicKeyToPEM;
function certToPEM(cert) {
  cert = cert.match(/.{1,64}/g).join('\n');
  cert = '-----BEGIN CERTIFICATE-----\n' + cert + '\n-----END CERTIFICATE-----\n';
  return cert;
};

function prepadSigned(hexStr) {
  var msb = hexStr[0];
  if (msb < '0' || msb > '7') {
    return '00' + hexStr;
  }
  return hexStr;
}

function toHex(number) {
  var nstr = number.toString(16);
  if (nstr.length % 2) {
    return '0' + nstr;
  }
  return nstr;
}

function encodeLengthHex(n) {
  if (n <= 127) {
    return toHex(n);
  }
  var nHex = toHex(n);
  var lengthOfLengthByte = 128 + nHex.length / 2;
  return toHex(lengthOfLengthByte) + nHex;
}

/*
 * Source: http://stackoverflow.com/questions/18835132/xml-to-pem-in-node-js
 */
function rsaPublicKeyToPEM(modulusB64, exponentB64) {
  var modulus = new Buffer(modulusB64, 'base64');
  var exponent = new Buffer(exponentB64, 'base64');
  var modulusHex = prepadSigned(modulus.toString('hex'));
  var exponentHex = prepadSigned(exponent.toString('hex'));
  var modlen = modulusHex.length / 2;
  var explen = exponentHex.length / 2;

  var encodedModlen = encodeLengthHex(modlen);
  var encodedExplen = encodeLengthHex(explen);
  var encodedPubkey = '30' + encodeLengthHex(modlen + explen + encodedModlen.length / 2 + encodedExplen.length / 2 + 2) + '02' + encodedModlen + modulusHex + '02' + encodedExplen + exponentHex;

  var der = new Buffer(encodedPubkey, 'hex').toString('base64');

  var pem = '-----BEGIN RSA PUBLIC KEY-----\n';
  pem += '' + der.match(/.{1,64}/g).join('\n');
  pem += '\n-----END RSA PUBLIC KEY-----\n';
  return pem;
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (client) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options,
      _ref$cacheMaxEntries = _ref.cacheMaxEntries,
      cacheMaxEntries = _ref$cacheMaxEntries === undefined ? 5 : _ref$cacheMaxEntries,
      _ref$cacheMaxAge = _ref.cacheMaxAge,
      cacheMaxAge = _ref$cacheMaxAge === undefined ? (0, _ms2.default)('10h') : _ref$cacheMaxAge;

  var logger = (0, _debug2.default)('jwks');
  var getSigningKey = client.getSigningKey;

  logger('Configured caching of singing keys. Max: ' + cacheMaxEntries + ' / Age: ' + cacheMaxAge);
  return (0, _lruMemoizer2.default)({
    load: function load(kid, callback) {
      getSigningKey(kid, function (err, key) {
        if (err) {
          return callback(err);
        }

        logger('Caching signing key for \'' + kid + '\':', key);
        return callback(null, key);
      });
    },
    hash: function hash(kid) {
      return kid;
    },
    maxAge: cacheMaxAge,
    max: cacheMaxEntries
  });
};

var _ms = __webpack_require__(31);

var _ms2 = _interopRequireDefault(_ms);

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _lruMemoizer = __webpack_require__(30);

var _lruMemoizer2 = _interopRequireDefault(_lruMemoizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rateLimitSigningKey = exports.cacheSigningKey = undefined;

var _cache = __webpack_require__(170);

var _cache2 = _interopRequireDefault(_cache);

var _rateLimit = __webpack_require__(172);

var _rateLimit2 = _interopRequireDefault(_rateLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.cacheSigningKey = _cache2.default;
exports.rateLimitSigningKey = _rateLimit2.default;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (client) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options,
      _ref$jwksRequestsPerM = _ref.jwksRequestsPerMinute,
      jwksRequestsPerMinute = _ref$jwksRequestsPerM === undefined ? 10 : _ref$jwksRequestsPerM;

  var logger = (0, _debug2.default)('jwks');
  var getSigningKey = client.getSigningKey;

  var limiter = new _limiter.RateLimiter(jwksRequestsPerMinute, 'minute', true);
  logger('Configured rate limiting to JWKS endpoint at ' + jwksRequestsPerMinute + '/minute');

  return function (kid, cb) {
    limiter.removeTokens(1, function (err, remaining) {
      if (err) {
        return cb(err);
      }

      logger('Requests to the JWKS endpoint available for the next minute:', remaining);
      if (remaining < 0) {
        logger('Too many requests to the JWKS endpoint');
        return cb(new _JwksRateLimitError2.default('Too many requests to the JWKS endpoint'));
      } else {
        return getSigningKey(kid, cb);
      }
    });
  };
};

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _limiter = __webpack_require__(61);

var _JwksRateLimitError = __webpack_require__(77);

var _JwksRateLimitError2 = _interopRequireDefault(_JwksRateLimitError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

const ms = __webpack_require__(31);
const jwt = __webpack_require__(12);
const auth0 = __webpack_require__(106);
const Promise = __webpack_require__(4);
const memoizer = __webpack_require__(30);
const request = __webpack_require__(112);

const ArgumentError = __webpack_require__(3).ArgumentError;
const ManagementApiError = __webpack_require__(3).ManagementApiError;

const getAccessToken = function(domain, clientId, clientSecret) {
  return new Promise(function(resolve, reject) {
    request
      .post('https://' + domain + '/oauth/token')
      .send({
        audience: 'https://' + domain + '/api/v2/',
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials'
      })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err && err.status === 401) {
          return reject(new ManagementApiError('unauthorized', 'Invalid credentials for ' + clientId, err.status));
        } else if (err && res && res.body && res.body.error) {
          return reject(new ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
        } else if (err) {
          return reject(err);
        }

        if (!res.ok || !res.body.access_token) {
          return reject(new ManagementApiError('unknown_error', 'Unknown error from Management Api or no access token was provided: ' + (res.text || res.status)));
        }

        return resolve(res.body.access_token);
      });
  });
};

const getAccessTokenCached = Promise.promisify(
  memoizer({
    load: function(domain, clientId, clientSecret, callback) {
      getAccessToken(domain, clientId, clientSecret)
        .then(function(accessToken) {
          return callback(null, accessToken);
        })
        .catch(function(err) {
          return callback(err);
        });
    },
    hash: function(domain, clientId, clientSecret) {
      return domain + '-' + clientId + '-' + clientSecret;
    },
    itemMaxAge: function(domain, clientId, clientSecret, accessToken) {
      try {
        const decodedToken = jwt.decode(accessToken);
        const expiresIn = new Date(0);
        expiresIn.setUTCSeconds(decodedToken.exp);
        const now = new Date().valueOf();
        return (expiresIn.valueOf() - now) - 10000;
      } catch (e) {
        return 1000;
      }
    },
    max: 100,
    maxAge: ms('1h')
  }
));

module.exports.getAccessToken = getAccessToken;
module.exports.getAccessTokenCached = getAccessTokenCached;
module.exports.getClient = function(options) {
  if (options === null || options === undefined) {
    throw new ArgumentError('An options object must be provided');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new ArgumentError('An options object must contain the domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.accessToken) {
    if (typeof options.accessToken !== 'string' || options.accessToken.length === 0) {
      throw new ArgumentError('The provided accessToken is invalid');
    }

    return Promise.resolve(new auth0.ManagementClient({ domain: options.domain, token: options.accessToken }));
  }

  if (options.clientId === null || options.clientId === undefined) {
    throw new ArgumentError('An options object must contain the clientId');
  }

  if (typeof options.clientId !== 'string' || options.clientId.length === 0) {
    throw new ArgumentError('The provided clientId is invalid: ' + options.clientId);
  }

  if (options.clientSecret === null || options.clientSecret === undefined) {
    throw new ArgumentError('An options object must contain the clientSecret');
  }

  if (typeof options.clientSecret !== 'string' || options.clientSecret.length === 0) {
    throw new ArgumentError('The provided clientSecret is invalid');
  }

  return getAccessTokenCached(options.domain, options.clientId, options.clientSecret)
    .then(function(token) {
      return new auth0.ManagementClient({ domain: options.domain, token: token });
    });
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(5);
const uuid = __webpack_require__(110);
const promiseRetry = __webpack_require__(104);

const seriesQueue = __webpack_require__(184);
const ArgumentError = __webpack_require__(3).ArgumentError;
const NotFoundError = __webpack_require__(3).NotFoundError;
const ValidationError = __webpack_require__(3).ValidationError;

const getDataForCollection = function(storageContext, collectionName) {
  return storageContext.read(collectionName)
    .then(function(data) {
      data[collectionName] = data[collectionName] || [];
      return data;
    });
};

const withRetry = function(storageContext, action) {
  const retryOptions = {
    retries: 10,
    factor: 2,
    minTimeout: 100,
    maxTimeout: Infinity,
    randomize: false
  };

  return function() {
    return promiseRetry(function(retry) {
      return action()
        .catch(function(err) {
          const writeRetryCondition =
            storageContext.writeRetryCondition ||
            function() { return false; };
          if (writeRetryCondition(err)) {
            return retry(err);
          }

          throw err;
        });
    }, retryOptions);
  };
};

/**
 * Create a new BlobRecordProvider.
 * @param {Object} storageContext The storage context.
 * @constructor
 */
function BlobRecordProvider(storageContext, options) {
  if (storageContext === null || storageContext === undefined) {
    throw new ArgumentError('Must provide a storage context');
  }

  this.storageContext = storageContext;
  this.queue = seriesQueue();
  this.options = options || {
    concurrentWrites: true
  };
}

/**
 * Write to the underlying storage layer
 * @param {string} action Action to execute.
 */
BlobRecordProvider.prototype.write = function(storageContext, action) {
  const actionWithRetry = withRetry(storageContext, action);

  // Concurrent writes are allowed.
  if (this.options.concurrentWrites) {
    return actionWithRetry();
  }

  // Concurrent writes are not allowed, process them sequantially.
  const queue = this.queue;
  return new Promise(function(resolve, reject) {
    queue(actionWithRetry, function(err, res) {
      if (err) {
        return reject(err);
      }

      return resolve(res);
    });
  });
};

/**
 * Get all records for a collection.
 * @param {string} collectionName The name of the collection.
 * @return {Array} The records.
 */
BlobRecordProvider.prototype.getAll = function(collectionName) {
  return getDataForCollection(this.storageContext, collectionName)
    .then(function(data) {
      return data[collectionName];
    });
};

/**
 * Get a single record from a collection.
 * @param {string} collectionName The name of the collection.
 * @param {string} identifier The identifier of the record.
 * @return {Object} The record.
 */
BlobRecordProvider.prototype.get = function(collectionName, identifier) {
  return this.getAll(collectionName)
    .then(function(records) {
      const record = _.find(records, function(r) { return r._id === identifier; });
      if (!record) {
        return Promise.reject(
          new NotFoundError('The record ' + identifier + ' in ' + collectionName + ' does not exist.')
        );
      }

      return record;
    });
};

/**
 * Create a record in a collection.
 * @param {string} collectionName The name of the collection.
 * @param {Object} record The record.
 * @return {Object} The record.
 */
BlobRecordProvider.prototype.create = function(collectionName, record) {
  const storageContext = this.storageContext;
  return this.write(storageContext, function() {
    return getDataForCollection(storageContext, collectionName)
      .then(function(data) {
        if (!record._id) {
          record._id = uuid.v4();
        }

        const index = _.findIndex(data[collectionName], function(r) { return r._id === record._id; });
        if (index > -1) {
          return Promise.reject(
            new ValidationError('The record ' + record._id + ' in ' + collectionName + ' already exists.')
          );
        }

        // Add to dataset.
        data[collectionName].push(record);

        // Save.
        return storageContext.write(data)
          .then(function() {
            return record;
          });
      });
  });
};

/**
 * Update a record in a collection.
 * @param {string} collectionName The name of the collection.
 * @param {string} identifier The identifier of the record to update.
 * @param {Object} record The record.
 * @param {boolean} upsert Flag allowing to upsert if the record does not exist.
 * @return {Object} The record.
 */
BlobRecordProvider.prototype.update = function(collectionName, identifier, record, upsert) {
  const storageContext = this.storageContext;
  return this.write(storageContext, function() {
    return getDataForCollection(storageContext, collectionName)
      .then(function(data) {
        const index = _.findIndex(data[collectionName], function(r) { return r._id === identifier; });
        if (index < 0 && !upsert) {
          throw new NotFoundError('The record ' + identifier + ' in ' + collectionName + ' does not exist.');
        }

        // Update record.
        const updatedRecord = _.extend({ _id: identifier }, index < 0 ? { } : data[collectionName][index], record);
        if (index < 0) {
          data[collectionName].push(updatedRecord);
        } else {
          data[collectionName][index] = updatedRecord;
        }

        // Save.
        return storageContext.write(data)
          .then(function() {
            return updatedRecord;
          });
      });
  });
};

/**
 * Delete a record in a collection.
 * @param {string} collectionName The name of the collection.
 * @param {string} identifier The identifier of the record to update.
 */
BlobRecordProvider.prototype.delete = function(collectionName, identifier) {
  const storageContext = this.storageContext;
  return this.write(storageContext, function() {
    return getDataForCollection(storageContext, collectionName)
      .then(function(data) {
        const index = _.findIndex(data[collectionName], function(r) { return r._id === identifier; });
        if (index < 0) {
          return false;
        }

        // Remove the record.
        data[collectionName].splice(index, 1);

        // Save.
        return storageContext.write(data)
          .then(function() {
            return true;
          });
      });
  });
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = BlobRecordProvider;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = function() {
  const settings = { };
  var currentProvider = null;

  const config = function getConfig(key) {
    if (settings && settings[key]) {
      return settings[key];
    }

    if (!currentProvider) {
      throw new Error('A configuration provider has not been set');
    }

    return currentProvider(key);
  };

  config.setProvider = function setProvider(providerFunction) {
    currentProvider = providerFunction;
  };

  config.setValue = function setValue(key, value) {
    settings[key] = value;
  };

  return config;
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

const configProvider = __webpack_require__(79);

module.exports.createServer = function(cb) {
  var server = null;

  return function serverFactory(webtaskContext) {
    if (!server) {
      const config = configProvider.fromWebtaskContext(webtaskContext);
      server = cb(config, webtaskContext.storage);
    }

    return server;
  };
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

function ArgumentError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ArgumentError';
  this.message = message;
  this.status = 400;
}

ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;
module.exports = ArgumentError;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

function ForbiddenError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ForbiddenError';
  this.message = message;
  this.status = 403;
}

ForbiddenError.prototype = Object.create(Error.prototype);
ForbiddenError.prototype.constructor = ForbiddenError;
module.exports = ForbiddenError;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

function HookTokenError(message, innerError) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'HookTokenError';
  this.message = message;
  this.status = 401;
  this.innerError = innerError;
}

HookTokenError.prototype = Object.create(Error.prototype);
HookTokenError.prototype.constructor = HookTokenError;
module.exports = HookTokenError;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

function ManagementApiError(code, message, status) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ManagementApiError';
  this.code = code;
  this.message = message;
  this.status = status || 400;
}

ManagementApiError.prototype = Object.create(Error.prototype);
ManagementApiError.prototype.constructor = ManagementApiError;
module.exports = ManagementApiError;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

function NotFoundError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'NotFoundError';
  this.message = message;
  this.status = 404;
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;
module.exports = NotFoundError;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

function UnauthorizedError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'UnauthorizedError';
  this.message = message;
  this.status = 401;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;
module.exports = UnauthorizedError;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

function ValidationError(message) {
  Error.call(this, message);
  if (false) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'ValidationError';
  this.message = message;
  this.status = 400;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
module.exports = ValidationError;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

const async = __webpack_require__(105);

module.exports = function() {
  const queue = async.queue(function(task, callback) {
    task()
      .then(function(res) {
        callback(null, res);
      })
      .catch(function(err) {
        callback(err);
      });
  }, 1);
  return queue.push.bind(queue);
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(12);
const Promise = __webpack_require__(4);
const jwksClient = __webpack_require__(165);
const crypto = __webpack_require__(44);

const ArgumentError = __webpack_require__(3).ArgumentError;
const UnauthorizedError = __webpack_require__(3).UnauthorizedError;
const ValidationError = __webpack_require__(3).ValidationError;

function SessionManager(rta, domain, clientId) {
  if (rta === null || rta === undefined) {
    throw new ArgumentError('Must provide a valid domain');
  }

  if (typeof rta !== 'string' || rta.length === 0) {
    throw new ArgumentError('The provided rta is invalid: ' + rta);
  }

  if (rta.indexOf('https://') === 0) {
    rta = rta.replace('https://', '');
  }

  if (domain === null || domain === undefined) {
    throw new ArgumentError('Must provide a valid domain');
  }

  if (typeof domain !== 'string' || domain.length === 0) {
    throw new ArgumentError('The provided domain is invalid: ' + domain);
  }

  if (clientId === null || clientId === undefined) {
    throw new ArgumentError('Must provide a valid clientId');
  }

  if (typeof clientId !== 'string' || clientId.length === 0) {
    throw new ArgumentError('The provided clientId is invalid: ' + clientId);
  }

  this.options = {
    rta: rta,
    domain: domain,
    clientId: clientId
  };

  this.jwksClient = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://' + rta + '/.well-known/jwks.json'
  });
  this.managementApiAudience = 'https://' + domain + '/api/v2/';
}

SessionManager.prototype.createAuthorizeUrl = function(options) {
  if (options === null || options === undefined) {
    throw new ArgumentError('Must provide the options');
  }

  if (options.redirectUri === null || options.redirectUri === undefined) {
    throw new ArgumentError('Must provide the redirectUri');
  }

  if (options.nonce === null || options.nonce === undefined) {
    // TODO: throw new ArgumentError('Must provide the nonce');
    options.nonce = crypto.randomBytes(16).toString('hex');
  } else if (typeof options.nonce !== 'string' || options.nonce.length === 0) {
    throw new ArgumentError('The provided nonce is invalid: ' + options.nonce);
  }

  if (typeof options.redirectUri !== 'string' || options.redirectUri.length === 0) {
    throw new ArgumentError('The provided redirectUri is invalid: ' + options.redirectUri);
  }

  if (options.state !== undefined && (typeof options.state !== 'string' || options.state.length === 0)) {
    throw new ArgumentError('The provided state is invalid: ' + options.state);
  }

  var scopes = 'openid name email';
  if (options.scopes && options.scopes.length) {
    scopes += ' ' + options.scopes;
  }

  var urlOptions = [
    'https://' + this.options.rta + '/authorize',
    '?client_id=' + encodeURIComponent(this.options.clientId),
    '&response_type=token id_token',
    '&response_mode=form_post',
    '&scope=' + encodeURIComponent(scopes),
    '&expiration=' + (options.expiration || 36000),
    '&redirect_uri=' + encodeURIComponent(options.redirectUri),
    '&audience=' + encodeURIComponent(this.managementApiAudience),
    '&nonce=' + encodeURIComponent(options.nonce)
  ];
  if (options.state) urlOptions.push('&state=' + encodeURIComponent(options.state));
  return urlOptions.join('');
};

SessionManager.prototype.validateToken = function(client, audience, token) {
  const self = this;
  return new Promise(function(resolve, reject) {
    const decoded = jwt.decode(token, { complete: true });
    if (decoded == null) {
      return reject(new ValidationError('Unable to decoded the token.'));
    }

    return self.jwksClient.getSigningKey(decoded.header.kid, function(signingKeyError, key) {
      if (signingKeyError) {
        return reject(signingKeyError);
      }

      const signingKey = key.publicKey || key.rsaPublicKey;
      return jwt.verify(token, signingKey, { algorithms: ['RS256'] }, function(err, payload) {
        if (err) {
          return reject(err);
        }

        if (payload.iss !== 'https://' + self.options.rta + '/') {
          return reject(new UnauthorizedError('Invalid issuer: ' + payload.iss));
        }

        if (!(payload && (payload.aud === audience
            || (Array.isArray(payload.aud) && payload.aud.indexOf(audience) > -1)))) {
          return reject(new UnauthorizedError('Audience mismatch for: ' + audience));
        }

        return resolve(payload);
      });
    });
  });
};

/**
 * Create a new session.
 */
SessionManager.prototype.create = function(idToken, accessToken, options) {
  if (idToken === null || idToken === undefined) {
    return Promise.reject(new ArgumentError('Must provide an id_token'));
  }

  if (typeof idToken !== 'string' || idToken.length === 0) {
    return Promise.reject(new ArgumentError('The provided id_token is invalid: ' + idToken));
  }

  if (accessToken === null || accessToken === undefined) {
    return Promise.reject(new ArgumentError('Must provide an access_token'));
  }

  if (typeof accessToken !== 'string' || accessToken.length === 0) {
    return Promise.reject(new ArgumentError('The provided access_token is invalid: ' + accessToken));
  }

  if (options === null || options === undefined) {
    return Promise.reject(new ArgumentError('Must provide the options'));
  }

  if (options.secret === null || options.secret === undefined) {
    return Promise.reject(new ArgumentError('Must provide the secret'));
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    return Promise.reject(new ArgumentError('The provided secret is invalid: ' + options.secret));
  }

  if (options.audience === null || options.audience === undefined) {
    return Promise.reject(new ArgumentError('Must provide the audience'));
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    return Promise.reject(new ArgumentError('The provided audience is invalid: ' + options.audience));
  }

  if (options.issuer === null || options.issuer === undefined) {
    return Promise.reject(new ArgumentError('Must provide the issuer'));
  }

  if (typeof options.issuer !== 'string' || options.issuer.length === 0) {
    return Promise.reject(new ArgumentError('The provided issuer is invalid: ' + options.issuer));
  }

  const self = this;
  return Promise.all([
    self.validateToken(self.options.clientId, self.options.clientId, idToken),
    self.validateToken(self.options.clientId, self.managementApiAudience, accessToken)
  ])
    .then(function(tokens) {
      if (tokens[1].azp !== self.options.clientId) {
        return Promise.reject(new UnauthorizedError('The access_token\'s azp does not match the id_token'));
      }

      if (tokens[0].sub !== tokens[1].sub) {
        return Promise.reject(new UnauthorizedError('Subjects don\'t match'));
      }

      const payload = {
        sub: tokens[0].sub,
        email: tokens[0].email,
        exp: tokens[0].exp
      };

      if (!options.noAccessToken) {
        payload.access_token = accessToken;
      }

      return jwt.sign(payload, options.secret, {
        algorithm: 'HS256',
        issuer: options.issuer,
        audience: options.audience
      });
    });
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = SessionManager;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(5);
const fs = __webpack_require__(65);
const Promise = __webpack_require__(4);

const ArgumentError = __webpack_require__(3).ArgumentError;

/**
 * Create a new FileStorageContext.
 * @param {string} path The full path to the file.
 * @param {Object} options The options object.
 * @param {boolean} options.mergeWrites Merge the data from the local file with the new payload when writing a file.
 *     (defaults to `true` if options is not defined).
 * @param {Object} options.defaultData The default data to use when the file does not exist or is empty.
 * @constructor
 */
function FileStorageContext(path, options) {
  if (path === null || path === undefined) {
    throw new ArgumentError('Must provide the path to the file');
  }

  if (typeof path !== 'string' || path.length === 0) {
    throw new ArgumentError('The provided path is invalid: ' + path);
  }

  options = options || { mergeWrites: true };

  this.path = path;
  this.mergeWrites = options.mergeWrites;
  this.defaultData = options.defaultData || {};
}

/**
 * Read payload from the file.
 * @return {object} The object parsed from the file.
 */
FileStorageContext.prototype.read = function() {
  const ctx = this;
  return new Promise(function readFileStorageContext(resolve, reject) {
    fs.readFile(ctx.path, 'utf8', function(err, data) {
      if (err) {
        if (err.code === 'ENOENT') {
          return resolve(ctx.defaultData);
        }

        return reject(err);
      }
      try {
        if (data && data.length) {
          return resolve(JSON.parse(data));
        }

        return resolve(ctx.defaultData);
      } catch (e) {
        return reject(e);
      }
    });
  });
};

/**
 * Write payload to the file.
 * @param {object} payload The object to write.
 */
FileStorageContext.prototype.write = function(payload) {
  const ctx = this;
  var writePromise = Promise.resolve(payload);

  if (ctx.mergeWrites) {
    writePromise = writePromise.then(function(data) {
      return ctx.read()
        .then(function(originalData) {
          return _.extend({ }, originalData, data);
        });
    });
  }

  return writePromise.then(function(data) {
    return new Promise(function(resolve, reject) {
      try {
        return fs.writeFile(ctx.path, JSON.stringify(data, null, 2), 'utf8', function(err) {
          if (err) {
            return reject(err);
          }

          return resolve();
        });
      } catch (e) {
        return reject(e);
      }
    });
  });
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = FileStorageContext;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.FileStorageContext = __webpack_require__(186);
module.exports.WebtaskStorageContext = __webpack_require__(188);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

const Promise = __webpack_require__(4);

const ArgumentError = __webpack_require__(3).ArgumentError;

/**
 * Create a new WebtaskStorageContext.
 * @param {Object} storage The Webtask storage object.
 * @param {Object} options The options object.
 * @param {int} options.force Disregard the possibility of a conflict.
 * @param {Object} options.defaultData The default data to use when the file does not exist or is empty.
 * @constructor
 */
function WebtaskStorageContext(storage, options) {
  if (storage === null || storage === undefined) {
    throw new ArgumentError('Must provide the Webtask storage object');
  }

  options = options || { force: 1 };

  this.storage = storage;
  this.options = options;
  this.defaultData = options.defaultData || {};
}

/**
 * Read payload from Webtask storage.
 * @return {object} The object parsed from Webtask storage.
 */
WebtaskStorageContext.prototype.read = function() {
  const ctx = this;
  return new Promise(function readWebtaskStorageContext(resolve, reject) {
    ctx.storage.get(function(err, data) {
      if (err) {
        return reject(err);
      }

      return resolve(data || ctx.defaultData);
    });
  });
};

/**
 * Write data to Webtask storage.
 * @param {object} data The object to write.
 */
WebtaskStorageContext.prototype.write = function(data) {
  const ctx = this;
  return new Promise(function(resolve, reject) {
    ctx.storage.set(data, ctx.options, function(err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
};

/**
 * Perform retries on write if a webtask storage conflict is detected.
 * @param {object} err The write error to examine.
 */
WebtaskStorageContext.prototype.writeRetryCondition = function(err) {
  return err.code === 409;
};

/**
 * Module exports.
 * @type {function}
 */
module.exports = WebtaskStorageContext;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(12);
const HookTokenError = __webpack_require__(3).HookTokenError;

module.exports = function validateHookToken(domain, webtaskUrl, hookPath, extensionSecret, hookToken) {
  if (!hookToken) {
    throw new HookTokenError('Hook token missing');
  }

  try {
    jwt.verify(hookToken, extensionSecret, {
      audience: webtaskUrl + hookPath,
      issuer: 'https://' + domain
    });
    return true;
  } catch (e) {
    throw new HookTokenError('Invalid hook token', e);
  }
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (report, hook) {
  if (!hook) {
    return _promise2.default.resolve();
  }

  return _axios2.default.post(hook, report);
};

var _axios = __webpack_require__(64);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _crypto = __webpack_require__(44);

var _crypto2 = _interopRequireDefault(_crypto);

var _auth0ExtensionTools = __webpack_require__(19);

var _github = __webpack_require__(46);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculateSignature = function calculateSignature(key, blob) {
  return 'sha1=' + _crypto2.default.createHmac('sha1', key).update(new Buffer(blob, 'utf-8')).digest('hex');
};

var parse = function parse(headers, _ref) {
  var _ref$ref = _ref.ref,
      ref = _ref$ref === undefined ? '' : _ref$ref,
      _ref$commits = _ref.commits,
      commits = _ref$commits === undefined ? [] : _ref$commits,
      _ref$head_commit = _ref.head_commit,
      head_commit = _ref$head_commit === undefined ? {} : _ref$head_commit,
      _ref$repository = _ref.repository,
      repository = _ref$repository === undefined ? {} : _ref$repository,
      _ref$sender = _ref.sender,
      sender = _ref$sender === undefined ? {} : _ref$sender;
  // eslint-disable-line camelcase
  // If the ref starts with "refs/heads/", strip it
  var branch = ref.replace(/^refs\/heads\//i, '');

  return {
    id: headers['x-github-delivery'],
    event: headers['x-github-event'],
    branch: branch,
    commits: commits,
    repository: repository.full_name,
    user: sender.login,
    sha: head_commit.id
  };
};

module.exports = function () {
  return function (req, res, next) {
    if (!req.headers['x-github-delivery']) {
      return next(new _auth0ExtensionTools.ArgumentError('The GitHub delivery identifier is missing.'));
    }

    if (!req.headers['x-github-event']) {
      return next(new _auth0ExtensionTools.ArgumentError('The GitHub event name is missing.'));
    }

    var signature = calculateSignature((0, _config2.default)('EXTENSION_SECRET'), req.rawBody);
    if (signature !== req.headers['x-hub-signature']) {
      return next(new _auth0ExtensionTools.UnauthorizedError('The GitHub webhook signature is incorrect.'));
    }

    var result = parse(req.headers, req.body);

    if (result.event !== 'push') {
      return res.status(202).json({ message: 'Request ignored, the \'' + result.event + '\' event is not supported.' });
    }

    // Only for the active branch.
    if (result.branch !== (0, _config2.default)('BRANCH')) {
      return res.status(202).json({ message: 'Request ignored, \'' + result.branch + '\' is not the active branch.' });
    }

    // Only run if there really are changes.
    if (!(0, _github.hasChanges)(result.commits)) {
      return res.status(202).json({ message: 'Request ignored, none of the Rules or Database Connection scripts were changed.' });
    }

    req.webhook = result; // eslint-disable-line no-param-reassign

    return next();
  };
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (storage, info) {
  var report = (0, _extends3.default)({}, info.repo, {
    error: info.error,
    warnings: [],
    logs: clearEmpty(info.progress),
    date: new Date()
  });

  return _bluebird2.default.all([(0, _slack2.default)(report, (0, _config2.default)('WT_URL') + '/login', (0, _config2.default)('SLACK_INCOMING_WEBHOOK_URL')).catch(function (err) {
    report.warnings.push({ title: 'Error sending report to Slack', message: err });
    return _bluebird2.default.resolve();
  }), (0, _hook2.default)(report, (0, _config2.default)('REPORT_WEBHOOK')).catch(function (err) {
    report.warnings.push({ title: 'Error sending report to ' + (0, _config2.default)('REPORT_WEBHOOK'), message: err });
    return _bluebird2.default.resolve();
  })]).then(function () {
    return storage.saveReport(report);
  });
};

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = __webpack_require__(4);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _slack = __webpack_require__(193);

var _slack2 = _interopRequireDefault(_slack);

var _hook = __webpack_require__(190);

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearEmpty = function clearEmpty(data) {
  if (!data) {
    return null;
  }
  return _lodash2.default.pickBy(data, function (entity) {
    return entity.deleted + entity.created + entity.updated > 0;
  });
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (report, extensionUrl, hook) {
  if (!hook) {
    return _promise2.default.resolve();
  }

  var msg = createPayload(report, extensionUrl);

  return _axios2.default.post(hook, msg);
};

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _axios = __webpack_require__(64);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPayload = function createPayload(report, extensionUrl) {
  var msg = {
    username: 'auth0-deployments',
    icon_emoji: ':rocket:',
    attachments: []
  };

  var providerName = _lodash2.default.capitalize("github");

  var template = {
    fallback: providerName + ' to Auth0 Deployment',
    text: providerName + ' to Auth0 Deployment',
    fields: [{ title: 'Repository', value: report.repository, short: true }, { title: 'Branch', value: report.branch, short: true }, { title: 'ID', value: report.id, short: true }, { title: 'Commit', value: report.sha, short: true }],
    error_field: { title: 'Error', value: report.error || null, short: false }
  };

  var details = '(<' + extensionUrl + '|Details>)';
  var fields = template.fields;

  if (report.error) {
    fields.push(template.error_field);
    msg.attachments.push({
      color: '#F35A00',
      fallback: template.fallback + ' failed: ' + (report.error.message || report.error),
      text: template.text + ' failed: ' + details,
      fields: template.fields
    });
  } else {
    if (report.logs) {
      _lodash2.default.forEach(report.logs, function (item, name) {
        _lodash2.default.forEach(item, function (count, type) {
          if (count) {
            fields.push({ title: name + ' ' + type, value: count, short: true });
          }
        });
      });
    }

    msg.attachments.push({
      color: '#7CD197',
      fallback: template.fallback,
      text: template.fallback + ' ' + details,
      fields: fields
    });
  }

  return msg;
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(211);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Storage = function Storage(storageContext) {
  (0, _classCallCheck3.default)(this, Storage);

  this.storage = storageContext;
};

exports.default = Storage;


Storage.prototype.saveReport = function (report) {
  var _this = this;

  return this.storage.read().then(function (data) {
    var maxLogs = 20;

    report.assets = null;
    delete report.assets;

    data.deployments = data.deployments || [];
    data.deployments.push(report);
    data.deployments = data.deployments.splice(-maxLogs, maxLogs);

    if (!report.error) {
      data.lastSuccess = _lodash2.default.omit(report, ['error', 'warnings', 'logs']);
    }

    return _this.storage.write(data).then(function () {
      return report;
    });
  });
};

Storage.prototype.getReports = function () {
  return this.storage.read().then(function (data) {
    return _lodash2.default.orderBy(data.deployments || [], ['date'], ['desc']);
  });
};

Storage.prototype.getData = function () {
  return this.storage.read();
};

Storage.prototype.saveMappings = function (mappings) {
  var _this2 = this;

  return this.storage.read().then(function (data) {
    return _this2.storage.write((0, _extends3.default)({}, data, { mappings: mappings }));
  });
};

Storage.prototype.saveExclude = function (excludes, type) {
  var _this3 = this;

  return this.storage.read().then(function (data) {
    data.exclude = data.exclude || {};
    data.exclude[type] = excludes;
    return data;
  }).then(function (data) {
    return _this3.storage.write(data);
  });
};

Storage.prototype.getNotified = function () {
  return this.storage.read().then(function (data) {
    return data.isNotified;
  });
};

Storage.prototype.setNotified = function () {
  var _this4 = this;

  return this.storage.read().then(function (data) {
    data.isNotified = true;
    return data;
  }).then(function (data) {
    return _this4.storage.write(data);
  });
};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray2 = __webpack_require__(212);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _isInteger = __webpack_require__(207);

var _isInteger2 = _interopRequireDefault(_isInteger);

var _stringify = __webpack_require__(83);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(213);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _path = __webpack_require__(45);

var _path2 = _interopRequireDefault(_path);

var _bluebird = __webpack_require__(4);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _auth0ExtensionTools = __webpack_require__(19);

var _auth0SourceControlExtensionTools = __webpack_require__(63);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(25);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBaseDir = function getBaseDir() {
  var baseDir = (0, _config2.default)('BASE_DIR') || '';
  if (baseDir.startsWith('/')) baseDir = baseDir.slice(1);
  if (baseDir !== '' && !baseDir.endsWith('/')) baseDir += '/';
  return baseDir;
};

var getPrefix = function getPrefix() {
  return (0, _config2.default)('TYPE') === 'tfvc' ? (0, _config2.default)('PROJECT_PATH') : getBaseDir();
};

/*
 * Returns the entry in `files` corresponding to `filePath`
 */
var findFileByPath = function findFileByPath(files, filePath) {
  return _lodash2.default.find(files, function (file) {
    return file.path === _path2.default.join(getPrefix(), filePath);
  });
};

/*
 * Check if a file is part of the rules folder.
 */
var isHookOrRule = function isHookOrRule(file, dir) {
  return file.indexOf(_path2.default.join(getPrefix(), dir) + '/') === 0;
};

/*
 * Check if a file is part of the database folder.
 */
var isDatabaseConnection = function isDatabaseConnection(file) {
  return file.indexOf(_path2.default.join(getPrefix(), _auth0SourceControlExtensionTools.constants.DATABASE_CONNECTIONS_DIRECTORY) + '/') === 0;
};

/*
 * Check if a file is part of the templates folder - emails or pages.
 */
var isTemplate = function isTemplate(file, dir, allowedNames) {
  return file.indexOf(_path2.default.join(getPrefix(), dir) + '/') === 0 && allowedNames.indexOf(file.split('/').pop()) >= 0;
};

/*
 * Check if a file is the tenant settings file.
 */
var isTenantFile = function isTenantFile(file) {
  return file === _path2.default.join(getPrefix(), 'tenant.json');
};

/*
 * Check if a file is the email provider file.
 */
var isEmailProvider = function isEmailProvider(file) {
  return file === _path2.default.join(getPrefix(), _auth0SourceControlExtensionTools.constants.EMAIL_TEMPLATES_DIRECTORY, 'provider.json');
};

/*
 * Check if a file is the guardian file.
 */
var isGuardianFile = function isGuardianFile(file) {
  var fileName = _path2.default.basename(file);
  if (!fileName.endsWith('.json')) {
    return false;
  }
  var dirname = _path2.default.dirname(file);
  var guardianDir = _path2.default.join(getPrefix(), _auth0SourceControlExtensionTools.constants.GUARDIAN_DIRECTORY);
  var validDirectories = [guardianDir, _path2.default.join(guardianDir, _auth0SourceControlExtensionTools.constants.GUARDIAN_FACTORS_DIRECTORY), _path2.default.join(guardianDir, _auth0SourceControlExtensionTools.constants.GUARDIAN_PROVIDERS_DIRECTORY), _path2.default.join(guardianDir, _auth0SourceControlExtensionTools.constants.GUARDIAN_TEMPLATES_DIRECTORY)];

  return validDirectories.includes(dirname);
};

/*
 * Check if a file is part of configurable folder.
 */
var isConfigurable = function isConfigurable(file, directory) {
  return file.indexOf(_path2.default.join(getPrefix(), directory) + '/') === 0;
};

/*
 * Get the details of a database file script.
 */
var getDatabaseScriptDetails = function getDatabaseScriptDetails(filename) {
  if ((0, _config2.default)('TYPE') === 'tfvc') {
    filename = filename.replace((0, _config2.default)('PROJECT_PATH') + '/', '');
  }

  var parts = filename.split('/');
  var length = parts.length;
  if (length >= 3 && /\.js$/i.test(parts[length - 1])) {
    var scriptName = _path2.default.parse(parts[length - 1]).name;
    if (_auth0SourceControlExtensionTools.constants.DATABASE_SCRIPTS.indexOf(scriptName) > -1) {
      return {
        database: parts[length - 2],
        name: scriptName
      };
    }
  }

  return null;
};

var getDatabaseSettingsDetails = function getDatabaseSettingsDetails(filename) {
  var supportedDbConfigFiles = ['database.json', 'settings.json'];

  if ((0, _config2.default)('TYPE') === 'tfvc') {
    filename = filename.replace((0, _config2.default)('PROJECT_PATH') + '/', '');
  }

  var parts = filename.split('/');
  var length = parts.length;
  if (length >= 3 && supportedDbConfigFiles.includes(parts[length - 1])) {
    return {
      database: parts[length - 2],
      name: 'settings'
    };
  }
  return null;
};

/*
 * Only Javascript and JSON files.
 */
var validFilesOnly = function validFilesOnly(fileName) {
  if (isTemplate(fileName, _auth0SourceControlExtensionTools.constants.PAGES_DIRECTORY, _auth0SourceControlExtensionTools.constants.PAGE_NAMES)) {
    return true;
  } else if (isTemplate(fileName, _auth0SourceControlExtensionTools.constants.EMAIL_TEMPLATES_DIRECTORY, _auth0SourceControlExtensionTools.constants.EMAIL_TEMPLATES_NAMES)) {
    return true;
  } else if (isTenantFile(fileName)) {
    return true;
  } else if (isEmailProvider(fileName)) {
    return true;
  } else if (isGuardianFile(fileName)) {
    return true;
  } else if (isHookOrRule(fileName, _auth0SourceControlExtensionTools.constants.RULES_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isHookOrRule(fileName, _auth0SourceControlExtensionTools.constants.HOOKS_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isConfigurable(fileName, _auth0SourceControlExtensionTools.constants.ROLES_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isConfigurable(fileName, _auth0SourceControlExtensionTools.constants.CLIENTS_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isConfigurable(fileName, _auth0SourceControlExtensionTools.constants.CLIENTS_GRANTS_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isConfigurable(fileName, _auth0SourceControlExtensionTools.constants.CONNECTIONS_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isConfigurable(fileName, _auth0SourceControlExtensionTools.constants.RESOURCE_SERVERS_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isConfigurable(fileName, _auth0SourceControlExtensionTools.constants.RULES_CONFIGS_DIRECTORY)) {
    return (/\.(js|json)$/i.test(fileName)
    );
  } else if (isDatabaseConnection(fileName)) {
    var script = !!getDatabaseScriptDetails(fileName);
    var settings = !!getDatabaseSettingsDetails(fileName);
    return script || settings;
  }

  return false;
};

var getDatabaseFiles = function getDatabaseFiles(files) {
  var databases = {};
  var dbFiles = files.filter(function (f) {
    return isDatabaseConnection(f.path);
  });
  var databaseJsonFiles = dbFiles.map(function (f) {
    return f.path;
  }).filter(function (f) {
    return f.endsWith('database.json');
  });

  dbFiles.forEach(function (file) {
    if (file.path.endsWith('settings.json') && databaseJsonFiles.includes(file.path.replace(/settings.json$/i, 'database.json'))) {
      // Found a database.json under the same directory, ignoring this settings.json file
      return;
    }

    var script = getDatabaseScriptDetails(file.path);
    var settings = getDatabaseSettingsDetails(file.path);

    if (script) {
      databases[script.database] = databases[script.database] || [];
      databases[script.database].push((0, _extends3.default)({}, script, {
        id: file.id,
        sha: file.sha,
        path: file.path
      }));
    }

    if (settings) {
      databases[settings.database] = databases[settings.database] || [];
      databases[settings.database].push((0, _extends3.default)({}, settings, {
        id: file.id,
        sha: file.sha,
        path: file.path
      }));
    }
  });

  return databases;
};

var getConfigurablesFiles = function getConfigurablesFiles(files, directory) {
  var configurables = {};

  _lodash2.default.filter(files, function (f) {
    return isConfigurable(f.path, directory);
  }).forEach(function (file) {
    var meta = false;
    var name = _path2.default.parse(file.path).name;
    var ext = _path2.default.parse(file.path).ext;

    if (ext === '.json') {
      if (name.endsWith('.meta')) {
        name = _path2.default.parse(name).name;
        meta = true;
      }

      configurables[name] = configurables[name] || {};

      if (meta) {
        configurables[name].metadataFile = file;
      } else {
        configurables[name].configFile = file;
      }

      configurables[name].sha = file.sha;
      configurables[name].path = file.path;
    }
  });

  return configurables;
};

var getTplFiles = function getTplFiles(files, directory, allowedNames) {
  var templates = {};

  _lodash2.default.filter(files, function (f) {
    return isTemplate(f.path, directory, allowedNames);
  }).forEach(function (file) {
    var tplName = _path2.default.parse(file.path).name;
    var ext = _path2.default.parse(file.path).ext;
    templates[tplName] = templates[tplName] || {};

    if (ext !== '.json') {
      templates[tplName].file = file;
      templates[tplName].sha = file.sha;
      templates[tplName].path = file.path;
    } else {
      templates[tplName].meta_file = file;
      templates[tplName].meta_sha = file.sha;
      templates[tplName].meta_path = file.path;
    }
  });

  return templates;
};

var getHooksOrRulesFiles = function getHooksOrRulesFiles(files, dir) {
  var rules = {};

  _lodash2.default.filter(files, function (f) {
    return isHookOrRule(f.path, dir);
  }).forEach(function (file) {
    var ruleName = _path2.default.parse(file.path).name;
    rules[ruleName] = rules[ruleName] || {};

    if (/\.js$/i.test(file.path)) {
      rules[ruleName].script = true;
      rules[ruleName].scriptFile = file;
    } else if (/\.json$/i.test(file.path)) {
      rules[ruleName].metadata = true;
      rules[ruleName].metadataFile = file;
    }
  });

  return rules;
};

var extractFileContent = function extractFileContent() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mappings = arguments[1];
  var asString = arguments[2];

  var content = (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object' ? (0, _stringify2.default)(item) : item;
  var converted = (0, _auth0SourceControlExtensionTools.keywordReplace)(content, mappings);

  if (asString) {
    return converted;
  }

  try {
    return JSON.parse(converted);
  } catch (e) {
    _logger2.default.info('Cannot extract data from:\n' + item + '\nError:' + e);
    return item;
  }
};

var checkSessionLifetime = function checkSessionLifetime(data, property) {
  var hours = data[property];
  if (hours !== undefined && !(0, _isInteger2.default)(hours)) {
    data[property + '_in_minutes'] = Math.round(hours * 60);
    delete data[property];
  }
};

var unifyItem = function unifyItem(item, type, mappings) {
  switch (type) {
    default:
    case 'rules':
      {
        var meta = extractFileContent(item.metadataFile, mappings);
        var script = extractFileContent(item.scriptFile, mappings, true);
        var _meta$order = meta.order,
            order = _meta$order === undefined ? 0 : _meta$order,
            enabled = meta.enabled,
            _meta$stage = meta.stage,
            stage = _meta$stage === undefined ? 'login_success' : _meta$stage;


        return { script: script, name: item.name, order: order, stage: stage, enabled: enabled };
      }
    case 'hooks':
      {
        var _meta = extractFileContent(item.metadataFile, mappings);
        var _script = extractFileContent(item.scriptFile, mappings, true);
        var name = _meta.name,
            _enabled = _meta.enabled,
            triggerId = _meta.triggerId,
            _meta$secrets = _meta.secrets,
            secrets = _meta$secrets === undefined ? {} : _meta$secrets,
            _meta$dependencies = _meta.dependencies,
            dependencies = _meta$dependencies === undefined ? {} : _meta$dependencies;


        return { name: name, enabled: _enabled, triggerId: triggerId, secrets: secrets, dependencies: dependencies, script: _script };
      }
    case 'pages':
      {
        var _meta2 = extractFileContent(item.metadataFile, mappings);
        var html = extractFileContent(item.htmlFile, mappings, true);
        var _enabled2 = _meta2.enabled;


        return { html: html, name: item.name, enabled: _enabled2 };
      }

    case 'emailTemplates':
      {
        if (item.name === 'provider') return null;
        var _meta3 = extractFileContent(item.metadataFile, mappings);
        var body = extractFileContent(item.htmlFile, mappings, true);

        return (0, _extends3.default)({}, _meta3, { body: body });
      }
    case 'roles':
    case 'clientGrants':
    case 'guardianFactors':
    case 'guardianFactorTemplates':
    case 'guardianFactorProviders':
    case 'guardianPhoneFactorMessageTypes':
    case 'guardianPhoneFactorSelectedProvider':
    case 'guardianPolicies':
    case 'emailProvider':
      {
        var data = extractFileContent(item.configFile, mappings);
        if (_lodash2.default.isEmpty(data)) {
          return null;
        }
        return (0, _extends3.default)({}, data);
      }

    case 'tenant':
      {
        var _data = extractFileContent(item.configFile, mappings);
        checkSessionLifetime(_data, 'session_lifetime');
        checkSessionLifetime(_data, 'idle_session_lifetime');

        return (0, _extends3.default)({}, _data);
      }

    case 'databases':
      {
        var settings = extractFileContent(item.settings, mappings);
        var customScripts = {};
        var options = settings.options || {};

        _lodash2.default.forEach(item.scripts, function (script) {
          customScripts[script.name] = extractFileContent(script.scriptFile, mappings, true);
        });

        if (item.scripts && item.scripts.length) {
          if (options.enabledDatabaseCustomization !== false) {
            options.enabledDatabaseCustomization = true;
          }
          options.customScripts = customScripts;
        }

        return (0, _extends3.default)({}, settings, { options: options, strategy: 'auth0', name: item.name });
      }

    case 'resourceServers':
    case 'connections':
    case 'clients':
      {
        var _meta4 = extractFileContent(item.metadataFile, mappings);
        var _data2 = extractFileContent(item.configFile, mappings);

        return (0, _extends3.default)({ name: item.name }, _meta4, _data2);
      }

    case 'rulesConfigs':
      {
        var _data3 = extractFileContent(item.configFile, mappings);

        return { key: item.name, value: _data3.value };
      }
  }
};

var unifyData = function unifyData(assets, mappings) {
  var result = {};

  _lodash2.default.forEach(assets, function (data, type) {
    result[type] = [];
    if (Array.isArray(data)) {
      _lodash2.default.forEach(data, function (item) {
        var unified = unifyItem(item, type, mappings);
        if (unified) result[type].push(unified);
      });
    } else {
      var unified = unifyItem(data, type, mappings);
      if (unified) {
        result[type] = unified;
      }
    }
  });

  _lodash2.default.forEach(result, function (asset, name) {
    if (Array.isArray(asset) && asset.length === 0) {
      result[name] = null;
      delete result[name];
    }
  });

  return _bluebird2.default.resolve(result);
};

/*
 * Parse the repository.
 */
var parseRepo = function parseRepo() {
  var repository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var parts = repository.split('/');
  if (parts.length === 2) {
    var _parts = (0, _slicedToArray3.default)(parts, 2),
        user = _parts[0],
        repo = _parts[1];

    return { user: user, repo: repo };
  } else if (parts.length === 5) {
    var _parts2 = (0, _slicedToArray3.default)(parts, 5),
        _user = _parts2[3],
        _repo = _parts2[4];

    return { user: _user, repo: _repo };
  }

  throw new _auth0ExtensionTools.ArgumentError('Invalid repository: ' + repository);
};

/*
 * Get default options for manual deploy
 */
var getOptions = function getOptions(req) {
  return new _bluebird2.default(function (resolve) {
    var _parseRepo = parseRepo((0, _config2.default)('REPOSITORY')),
        user = _parseRepo.user,
        repo = _parseRepo.repo;

    var repository = user + '/' + repo;

    return resolve({
      id: 'manual',
      branch: (0, _config2.default)('BRANCH'),
      sha: req.body && req.body.sha || (0, _config2.default)('BRANCH'),
      user: req.user.sub,
      repository: repository
    });
  });
};

module.exports = {
  unifyData: unifyData,
  getBaseDir: getBaseDir,
  getPrefix: getPrefix,
  findFileByPath: findFileByPath,
  isConfigurable: isConfigurable,
  getDatabaseFiles: getDatabaseFiles,
  getConfigurablesFiles: getConfigurablesFiles,
  getTplFiles: getTplFiles,
  getHooksOrRulesFiles: getHooksOrRulesFiles,
  validFilesOnly: validFilesOnly,
  getOptions: getOptions,
  parseRepo: parseRepo
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _auth0ExtensionExpressTools = __webpack_require__(18);

var _excludes = __webpack_require__(197);

var _excludes2 = _interopRequireDefault(_excludes);

var _mappings = __webpack_require__(201);

var _mappings2 = _interopRequireDefault(_mappings);

var _deploy = __webpack_require__(81);

var _deploy2 = _interopRequireDefault(_deploy);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _multipartRequest = __webpack_require__(82);

var _multipartRequest2 = _interopRequireDefault(_multipartRequest);

var _package = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(46),
    getOptions = _require.getOptions;

exports.default = function (storage) {
  var api = _express2.default.Router(); // eslint-disable-line new-cap
  api.use(_auth0ExtensionExpressTools.middlewares.authenticateAdmins({
    credentialsRequired: true,
    secret: (0, _config2.default)('EXTENSION_SECRET'),
    audience: 'urn:' + "github" + '-deploy',
    baseUrl: (0, _config2.default)('PUBLIC_WT_URL'),
    onLoginSuccess: function onLoginSuccess(req, res, next) {
      next();
    }
  }));
  api.use(_auth0ExtensionExpressTools.middlewares.managementApiClient({
    domain: (0, _config2.default)('AUTH0_DOMAIN'),
    clientId: (0, _config2.default)('AUTH0_CLIENT_ID'),
    clientSecret: (0, _config2.default)('AUTH0_CLIENT_SECRET'),
    headers: {
      'User-agent': "github" + '-deploy-ext/' + _package.version + ' (node.js/' + process.version.replace('v', '') + ')'
    }
  }));

  api.use('/excludes', (0, _excludes2.default)(storage));

  api.use('/mappings', (0, _mappings2.default)(storage));

  api.post('/notified', function (req, res, next) {
    storage.setNotified().then(function () {
      return res.status(204).send();
    }).catch(next);
  });

  api.get('/config', function (req, res, next) {
    storage.getNotified().then(function (isNotified) {
      if (isNotified) {
        return {
          showNotification: false,
          branch: (0, _config2.default)('BRANCH') || (0, _config2.default)('PROJECT_PATH'),
          secret: (0, _config2.default)('EXTENSION_SECRET'),
          repository: (0, _config2.default)('REPOSITORY'),
          prefix: (0, _config2.default)('INSTANCE')
        };
      }

      return (0, _multipartRequest2.default)(req.auth0, 'rules').then(function (existingRules) {
        var result = {
          showNotification: false,
          branch: (0, _config2.default)('BRANCH') || (0, _config2.default)('PROJECT_PATH'),
          secret: (0, _config2.default)('EXTENSION_SECRET'),
          repository: (0, _config2.default)('REPOSITORY'),
          prefix: (0, _config2.default)('INSTANCE')
        };

        if (existingRules && existingRules.length) {
          result.showNotification = true;
        } else {
          storage.setNotified();
        }

        return result;
      });
    }).then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return next(err);
    });
  });

  api.get('/deployments', function (req, res, next) {
    return storage.getReports().then(function (reports) {
      return res.json(reports);
    }).catch(next);
  });

  api.post('/deployments', function (req, res, next) {
    return getOptions(req).then(function (options) {
      return (0, _deploy2.default)(storage, req.auth0, options);
    }).then(function (stats) {
      return res.json(stats);
    }).catch(next);
  });

  return api;
};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _bluebird = __webpack_require__(4);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _multipartRequest = __webpack_require__(82);

var _multipartRequest2 = _interopRequireDefault(_multipartRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getExcludes = function getExcludes(type, client, storage) {
  var resourceType = type === 'databases' ? 'connections' : type;

  var query = {
    rules: { fields: 'name' },
    clients: { is_global: false, fields: 'name' },
    databases: { strategy: 'auth0', fields: 'name' },
    connections: { fields: 'name,strategy' },
    resourceServers: { fields: 'name,is_system' }
  };

  if (!client[resourceType] || typeof client[resourceType].getAll !== 'function') {
    return _bluebird2.default.reject(new Error('Get excluded error: wrong type ' + type));
  }

  return (0, _multipartRequest2.default)(client, resourceType, query[type]).then(function (items) {
    return storage.getData().then(function (data) {
      var result = {};
      var excludedItems = data && data.exclude && data.exclude[type];
      if (type === 'resourceServers') {
        items = _lodash2.default.filter(items, function (server) {
          return !server.is_system;
        });
      } else if (type === 'connections') {
        items = _lodash2.default.filter(items, function (connection) {
          return connection.strategy !== 'auth0';
        });
      }

      if (excludedItems) {
        _lodash2.default.forEach(items, function (item) {
          result[item.name] = excludedItems.indexOf(item.name) >= 0;
        });
      } else {
        _lodash2.default.forEach(items, function (item) {
          result[item.name] = false;
        });
      }

      return result;
    });
  });
};

exports.default = function (storage) {
  var api = _express2.default.Router(); // eslint-disable-line new-cap
  api.get('/', function (req, res, next) {
    var promises = {
      rules: getExcludes('rules', req.auth0, storage),
      clients: getExcludes('clients', req.auth0, storage),
      databases: getExcludes('databases', req.auth0, storage),
      connections: getExcludes('connections', req.auth0, storage),
      resourceServers: getExcludes('resourceServers', req.auth0, storage)
    };

    return _bluebird2.default.props(promises).then(function (result) {
      return res.json(result);
    }).catch(function (err) {
      return next(err);
    });
  });

  api.post('/', function (req, res, next) {
    var excludedItems = req.body.names || [];
    var type = req.body.type;

    storage.saveExclude(excludedItems, type).then(function () {
      return res.status(201).send();
    }).catch(next);
  });

  return api;
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _auth0ExtensionTools = __webpack_require__(19);

var _auth0ExtensionExpressTools = __webpack_require__(18);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(25);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var hooks = (0, _express.Router)();
  var hookValidator = _auth0ExtensionExpressTools.middlewares.validateHookToken((0, _config2.default)('AUTH0_DOMAIN'), (0, _config2.default)('WT_URL'), (0, _config2.default)('EXTENSION_SECRET'));

  hooks.use('/on-uninstall', hookValidator('/.extensions/on-uninstall'));

  hooks.delete('/on-uninstall', function (req, res) {
    _logger2.default.debug('Uninstall running...');
    var clientId = (0, _config2.default)('AUTH0_CLIENT_ID');
    var options = {
      domain: (0, _config2.default)('AUTH0_DOMAIN'),
      clientSecret: (0, _config2.default)('AUTH0_CLIENT_SECRET'),
      clientId: clientId
    };
    _auth0ExtensionTools.managementApi.getClient(options).then(function (auth0) {
      return auth0.clients.delete({ client_id: clientId });
    }).then(function () {
      _logger2.default.debug('Deleted client ' + (0, _config2.default)('AUTH0_CLIENT_ID'));
      res.sendStatus(204);
    }).catch(function (err) {
      _logger2.default.debug('Error deleting client: ' + (0, _config2.default)('AUTH0_CLIENT_ID'));
      _logger2.default.error(err);

      // Even if deleting fails, we need to be able to uninstall the extension.
      res.sendStatus(204);
    });
  });

  return hooks;
};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(65);

var _fs2 = _interopRequireDefault(_fs);

var _ejs = __webpack_require__(291);

var _ejs2 = _interopRequireDefault(_ejs);

var _path = __webpack_require__(45);

var _path2 = _interopRequireDefault(_path);

var _auth0ExtensionExpressTools = __webpack_require__(18);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var template = '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title>Auth0 - Deployment Extension</title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1715/css/index.min.css">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.css">\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>"><% } %>\n    <% if (assets.version) { %><link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-deploy-extensions/assets/auth0-deploy-extensions.ui.<%= assets.version %>.css"><% } %>\n  </head>\n  <body class="a0-extension">\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/js/lock-9.0.min.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1715/js/bundle.js"></script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"></script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="//localhost:3000/app/<%= assets.app %>"></script><% } %>\n    <% if (assets.version) { %>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-deploy-extensions/assets/auth0-deploy-extensions.ui.vendors.<%= assets.version %>.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-deploy-extensions/assets/auth0-deploy-extensions.ui.<%= assets.version %>.js"></script>\n    <% } %>\n  </body>\n  </html>\n  ';

  return function (req, res) {
    var provider = "github";

    var settings = {
      AUTH0_DOMAIN: (0, _config2.default)('AUTH0_DOMAIN'),
      BASE_URL: _auth0ExtensionExpressTools.urlHelpers.getBaseUrl(req),
      BASE_PATH: _auth0ExtensionExpressTools.urlHelpers.getBasePath(req),
      AUTH0_MANAGE_URL: (0, _config2.default)('AUTH0_MANAGE_URL') || 'http://manage.auth0.com',
      A0EXT_PROVIDER: "github",
      ENABLE_CIPHER: (0, _config2.default)('ENABLE_CIPHER') === true || (0, _config2.default)('ENABLE_CIPHER') === 'true'
    };

    // Render from CDN.
    var clientVersion = {"default":"2.0.0"} && ({"default":"2.0.0"}[provider] || {"default":"2.0.0"}.default);
    if (clientVersion) {
      return res.send(_ejs2.default.render(template, {
        config: settings,
        assets: { version: clientVersion }
      }));
    }

    // Render locally.
    return _fs2.default.readFile(_path2.default.join(__dirname, '../../dist/manifest.json'), 'utf8', function (err, data) {
      var locals = {
        config: settings,
        assets: {
          app: 'bundle.js'
        }
      };

      if (!err && data) {
        locals.assets = JSON.parse(data);
      }

      // Render the HTML page.
      res.send(_ejs2.default.render(template, locals));
    });
  };
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _api = __webpack_require__(196);

var _api2 = _interopRequireDefault(_api);

var _html = __webpack_require__(199);

var _html2 = _interopRequireDefault(_html);

var _meta = __webpack_require__(202);

var _meta2 = _interopRequireDefault(_meta);

var _hooks = __webpack_require__(198);

var _hooks2 = _interopRequireDefault(_hooks);

var _webhooks = __webpack_require__(203);

var _webhooks2 = _interopRequireDefault(_webhooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (storage) {
  var routes = (0, _express.Router)();
  routes.use('/.extensions', (0, _hooks2.default)());
  routes.get('/', (0, _html2.default)());
  routes.use('/meta', (0, _meta2.default)());
  routes.use('/webhooks', (0, _webhooks2.default)(storage));
  routes.use('/api', (0, _api2.default)(storage));
  return routes;
};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (storage) {
  var api = _express2.default.Router(); // eslint-disable-line new-cap
  api.get('/', function (req, res, next) {
    return storage.getData().then(function (data) {
      return res.json(data.mappings || {});
    }).catch(next);
  });

  api.post('/', function (req, res, next) {
    var mappings = void 0;
    try {
      mappings = JSON.parse(req.body.mappings);
    } catch (e) {
      return next(e);
    }

    return storage.saveMappings(mappings).then(function () {
      return res.status(200).send(mappings);
    }).catch(next);
  });

  return api;
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _webtask = __webpack_require__(269);

var _webtask2 = _interopRequireDefault(_webtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = _express2.default.Router(); // eslint-disable-line new-cap
  api.get('/', function (req, res) {
    res.status(200).send(_webtask2.default);
  });

  return api;
};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _auth0ExtensionExpressTools = __webpack_require__(18);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _deploy = __webpack_require__(81);

var _deploy2 = _interopRequireDefault(_deploy);

var _package = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = __webpack_require__(191);

exports.default = function (storage) {
  var webhooks = _express2.default.Router(); // eslint-disable-line new-cap
  webhooks.use(_auth0ExtensionExpressTools.middlewares.managementApiClient({
    domain: (0, _config2.default)('AUTH0_DOMAIN'),
    clientId: (0, _config2.default)('AUTH0_CLIENT_ID'),
    clientSecret: (0, _config2.default)('AUTH0_CLIENT_SECRET'),
    headers: {
      'User-agent': "github" + '-deploy-ext/' + _package.version + ' (node.js/' + process.version.replace('v', '') + ')'
    }
  }));

  webhooks.post('/deploy/:secret?', middleware(), function (req, res) {
    // Send response ASAP to prevent extra requests.
    res.status(202).json({ message: 'Request accepted, deployment started.' });

    // Deploy the changes.
    return (0, _deploy2.default)(storage, req.auth0, req.webhook);
  });

  return webhooks;
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(18);

var expressApp = __webpack_require__(113);
var config = __webpack_require__(7);
var logger = __webpack_require__(25);

var createServer = tools.createServer(function (cfg, storage) {
  logger.info('Starting Auth0 Deploy extension - Version:', "3.7.2");
  return expressApp(cfg, storage);
});

module.exports = function (context, req, res) {
  var publicUrl = req.x_wt && req.x_wt.ectx && req.x_wt.ectx.PUBLIC_WT_URL || false;
  if (!publicUrl) {
    config.setValue('PUBLIC_WT_URL', tools.urlHelpers.getWebtaskUrl(req));
  }

  createServer(context, req, res);
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(218), __esModule: true };

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(221), __esModule: true };

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(223), __esModule: true };

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(225), __esModule: true };

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(226), __esModule: true };

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(206);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(205);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(210);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(209);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var register = __webpack_require__(216)
var addHook = __webpack_require__(215)
var removeHook = __webpack_require__(217)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = addHook

function addHook (state, kind, name, hook) {
  var orig = hook
  if (!state.registry[name]) {
    state.registry[name] = []
  }

  if (kind === 'before') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options))
    }
  }

  if (kind === 'after') {
    hook = function (method, options) {
      var result
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_
          return orig(result, options)
        })
        .then(function () {
          return result
        })
    }
  }

  if (kind === 'error') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options)
        })
    }
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  })
}


/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = register

function register (state, name, method, options) {
  if (typeof method !== 'function') {
    throw new Error('method for before hook must be a function')
  }

  if (!options) {
    options = {}
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options)
    }, method)()
  }

  return Promise.resolve()
    .then(function () {
      if (!state.registry[name]) {
        return method(options)
      }

      return (state.registry[name]).reduce(function (method, registered) {
        return registered.hook.bind(null, method, options)
      }, method)()
    })
}


/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = removeHook

function removeHook (state, name, method) {
  if (!state.registry[name]) {
    return
  }

  var index = state.registry[name]
    .map(function (registered) { return registered.orig })
    .indexOf(method)

  if (index === -1) {
    return
  }

  state.registry[name].splice(index, 1)
}


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(42);
module.exports = __webpack_require__(254);

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(42);
module.exports = __webpack_require__(255);

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257);
module.exports = __webpack_require__(0).Number.isInteger;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(258);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(259);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(260);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(261);
__webpack_require__(96);
__webpack_require__(262);
__webpack_require__(263);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(43);
module.exports = __webpack_require__(60).f('iterator');

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17)
  , toLength  = __webpack_require__(94)
  , toIndex   = __webpack_require__(253);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(24)
  , gOPS    = __webpack_require__(53)
  , pIE     = __webpack_require__(38);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(36)
  , call        = __webpack_require__(236)
  , isArrayIter = __webpack_require__(233)
  , anObject    = __webpack_require__(11)
  , toLength    = __webpack_require__(94)
  , getIterFn   = __webpack_require__(95)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 232 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(23)
  , ITERATOR   = __webpack_require__(1)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(22)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(89)
  , descriptor     = __webpack_require__(39)
  , setToStringTag = __webpack_require__(40)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(1)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(24)
  , toIObject = __webpack_require__(17);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(41)('meta')
  , isObject = __webpack_require__(22)
  , has      = __webpack_require__(14)
  , setDesc  = __webpack_require__(16).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(21)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , macrotask = __webpack_require__(93).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(27)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(24)
  , gOPS     = __webpack_require__(53)
  , pIE      = __webpack_require__(38)
  , toObject = __webpack_require__(57)
  , IObject  = __webpack_require__(87)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(16)
  , anObject = __webpack_require__(11)
  , getKeys  = __webpack_require__(24);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(38)
  , createDesc     = __webpack_require__(39)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(58)
  , has            = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(86)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17)
  , gOPN      = __webpack_require__(90).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(14)
  , toObject    = __webpack_require__(57)
  , IE_PROTO    = __webpack_require__(54)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(20)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(21);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(6)
  , core        = __webpack_require__(0)
  , dP          = __webpack_require__(16)
  , DESCRIPTORS = __webpack_require__(13)
  , SPECIES     = __webpack_require__(1)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(11)
  , aFunction = __webpack_require__(48)
  , SPECIES   = __webpack_require__(1)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(56)
  , defined   = __webpack_require__(50);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(56)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11)
  , get      = __webpack_require__(95);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(49)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(23);
module.exports = __webpack_require__(0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(227)
  , step             = __webpack_require__(239)
  , Iterators        = __webpack_require__(23)
  , toIObject        = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(88)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(20);

$export($export.S, 'Number', {isInteger: __webpack_require__(235)});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(20);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(243)});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(57)
  , $keys    = __webpack_require__(24);

__webpack_require__(248)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(37)
  , global             = __webpack_require__(6)
  , ctx                = __webpack_require__(36)
  , classof            = __webpack_require__(49)
  , $export            = __webpack_require__(20)
  , isObject           = __webpack_require__(22)
  , aFunction          = __webpack_require__(48)
  , anInstance         = __webpack_require__(228)
  , forOf              = __webpack_require__(231)
  , speciesConstructor = __webpack_require__(251)
  , task               = __webpack_require__(93).set
  , microtask          = __webpack_require__(242)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(249)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(40)($Promise, PROMISE);
__webpack_require__(250)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(238)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(14)
  , DESCRIPTORS    = __webpack_require__(13)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(92)
  , META           = __webpack_require__(241).KEY
  , $fails         = __webpack_require__(21)
  , shared         = __webpack_require__(55)
  , setToStringTag = __webpack_require__(40)
  , uid            = __webpack_require__(41)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(60)
  , wksDefine      = __webpack_require__(59)
  , keyOf          = __webpack_require__(240)
  , enumKeys       = __webpack_require__(230)
  , isArray        = __webpack_require__(234)
  , anObject       = __webpack_require__(11)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(58)
  , createDesc     = __webpack_require__(39)
  , _create        = __webpack_require__(89)
  , gOPNExt        = __webpack_require__(246)
  , $GOPD          = __webpack_require__(245)
  , $DP            = __webpack_require__(16)
  , $keys          = __webpack_require__(24)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(90).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(38).f  = $propertyIsEnumerable;
  __webpack_require__(53).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(37)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('asyncIterator');

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('observable');

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deprecation; });
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}




/***/ }),
/* 265 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 265;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconvLite = __webpack_require__(292);
// Load Iconv from an external file to be able to disable Iconv for webpack
// Add /\/iconv-loader$/ to webpack.IgnorePlugin to ignore it
var Iconv = __webpack_require__(267);

// Expose to the world
module.exports.convert = convert;

/**
 * Convert encoding of an UTF-8 string or a buffer
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @param {Boolean} useLite If set to ture, force to use iconvLite
 * @return {Buffer} Encoded string
 */
function convert(str, to, from, useLite) {
    from = checkEncoding(from || 'UTF-8');
    to = checkEncoding(to || 'UTF-8');
    str = str || '';

    var result;

    if (from !== 'UTF-8' && typeof str === 'string') {
        str = new Buffer(str, 'binary');
    }

    if (from === to) {
        if (typeof str === 'string') {
            result = new Buffer(str);
        } else {
            result = str;
        }
    } else if (Iconv && !useLite) {
        try {
            result = convertIconv(str, to, from);
        } catch (E) {
            console.error(E);
            try {
                result = convertIconvLite(str, to, from);
            } catch (E) {
                console.error(E);
                result = str;
            }
        }
    } else {
        try {
            result = convertIconvLite(str, to, from);
        } catch (E) {
            console.error(E);
            result = str;
        }
    }


    if (typeof result === 'string') {
        result = new Buffer(result, 'utf-8');
    }

    return result;
}

/**
 * Convert encoding of a string with node-iconv (if available)
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @return {Buffer} Encoded string
 */
function convertIconv(str, to, from) {
    var response, iconv;
    iconv = new Iconv(from, to + '//TRANSLIT//IGNORE');
    response = iconv.convert(str);
    return response.slice(0, response.length);
}

/**
 * Convert encoding of astring with iconv-lite
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @return {Buffer} Encoded string
 */
function convertIconvLite(str, to, from) {
    if (to === 'UTF-8') {
        return iconvLite.decode(str, from);
    } else if (from === 'UTF-8') {
        return iconvLite.encode(str, to);
    } else {
        return iconvLite.encode(iconvLite.decode(str, from), to);
    }
}

/**
 * Converts charset name if needed
 *
 * @param {String} name Character set
 * @return {String} Character set name
 */
function checkEncoding(name) {
    return (name || '').toString().trim().
    replace(/^latin[\-_]?(\d+)$/i, 'ISO-8859-$1').
    replace(/^win(?:dows)?[\-_]?(\d+)$/i, 'WINDOWS-$1').
    replace(/^utf[\-_]?(\d+)$/i, 'UTF-$1').
    replace(/^ks_c_5601\-1987$/i, 'CP949').
    replace(/^us[\-_]?ascii$/i, 'ASCII').
    toUpperCase();
}


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconv_package;
var Iconv;

try {
    // this is to fool browserify so it doesn't try (in vain) to install iconv.
    iconv_package = 'iconv';
    Iconv = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Iconv;
} catch (E) {
    // node-iconv not present
}

module.exports = Iconv;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createError(msg, code, props) {
    var err = msg instanceof Error ? msg : new Error(msg);
    var key;

    if (typeof code === 'object') {
        props = code;
    } else if (code != null) {
        err.code = code;
    }

    if (props) {
        for (key in props) {
            err[key] = props[key];
        }
    }

    return err;
}

module.exports = createError;


/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = {
	"title": "GitHub Deployments",
	"deprecated": true,
	"name": "auth0-github-deploy",
	"version": "3.7.2",
	"preVersion": "2.10.0",
	"author": "auth0",
	"description": "This extension gives Auth0 customers the possibility to deploy Pages, Rules and Custom Database Connections from GitHub.",
	"type": "application",
	"category": "source_control",
	"docsUrl": "https://auth0.com/docs/extensions/github-deploy",
	"logoUrl": "https://cdn.auth0.com/extensions/auth0-github-deploy/assets/logo.svg",
	"initialUrlPath": "/login",
	"uninstallConfirmMessage": "Do you really want to uninstall this extension? Doing so will stop any Pages, Rules and Database Connection scripts from being deployed from GitHub to Auth0",
	"repository": "https://github.com/auth0-extensions/auth0-deploy-extensions",
	"keywords": [
		"auth0",
		"extension",
		"github"
	],
	"auth0": {
		"createClient": true,
		"onUninstallPath": "/.extensions/on-uninstall",
		"scopes": "read:client_grants create:client_grants delete:client_grants update:client_grants read:clients update:clients delete:clients create:clients read:client_keys update:client_keys delete:client_keys create:client_keys read:connections update:connections delete:connections create:connections read:resource_servers update:resource_servers delete:resource_servers create:resource_servers read:rules update:rules delete:rules create:rules read:rules_configs update:rules_configs delete:rules_configs read:email_provider update:email_provider delete:email_provider create:email_provider read:tenant_settings update:tenant_settings read:grants delete:grants read:guardian_factors update:guardian_factors read:mfa_policies update:mfa_policies read:email_templates create:email_templates update:email_templates read:roles update:roles delete:roles create:roles read:hooks update:hooks delete:hooks create:hooks"
	},
	"secrets": {
		"REPOSITORY": {
			"example": "myorganization/myrepo",
			"description": "The repository from which you want to deploy rules and database scripts",
			"required": true
		},
		"BRANCH": {
			"description": "The branch we should monitor for commits",
			"default": "master",
			"required": true
		},
		"BASE_URL": {
			"description": "GitHub Enterprise base url, leave empty for github.com",
			"example": "https://github.my-company.com/api/v3"
		},
		"TOKEN": {
			"description": "Your personal access token for GitHub",
			"required": true,
			"type": "password"
		},
		"BASE_DIR": {
			"example": "settings/tenant",
			"description": "Path to your tenant settings directories"
		},
		"AUTO_REDEPLOY": {
			"description": "Automatically re-deploy last successful configuration in case of failed deploy",
			"type": "select",
			"default": "false",
			"allowMultiple": false,
			"options": [
				{
					"value": "false",
					"text": "No"
				},
				{
					"value": "true",
					"text": "Yes"
				}
			]
		},
		"AUTH0_ALLOW_DELETE": {
			"description": "Allows the extension to delete objects that does not exist within the repository.",
			"type": "select",
			"required": true,
			"default": "false",
			"allowMultiple": false,
			"options": [
				{
					"value": "false",
					"text": "No"
				},
				{
					"value": "true",
					"text": "Yes"
				}
			]
		},
		"SLACK_INCOMING_WEBHOOK_URL": {
			"example": "https://hooks.slack.com/services/...",
			"description": "Webhook URL for Slack used to notify you of successful and failed deployments",
			"required": false
		}
	}
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ArgumentError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = 'ArgumentError';
  this.message = message;
}

ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;
module.exports = ArgumentError;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _JwksClient = __webpack_require__(28);

var _errors = __webpack_require__(29);

var errors = _interopRequireWildcard(_errors);

var _hapi = __webpack_require__(273);

var _express = __webpack_require__(272);

var _koa = __webpack_require__(274);

var _passport = __webpack_require__(275);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (options) {
  return new _JwksClient.JwksClient(options);
};

module.exports.ArgumentError = errors.ArgumentError;
module.exports.JwksError = errors.JwksError;
module.exports.JwksRateLimitError = errors.JwksRateLimitError;
module.exports.SigningKeyNotFoundError = errors.SigningKeyNotFoundError;

module.exports.expressJwtSecret = _express.expressJwtSecret;
module.exports.hapiJwt2Key = _hapi.hapiJwt2Key;
module.exports.hapiJwt2KeyAsync = _hapi.hapiJwt2KeyAsync;
module.exports.koaJwtSecret = _koa.koaJwtSecret;
module.exports.passportJwtSecret = _passport.passportJwtSecret;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(29);

var _JwksClient = __webpack_require__(28);

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err);
  }
};

module.exports.expressJwtSecret = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing expressJwtSecret');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(req, header, payload, cb) {
    // Only RS256 is supported.
    if (!header || header.alg !== 'RS256') {
      return cb(null, null);
    }

    client.getSigningKey(header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey);
    });
  };
};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(29);

var _JwksClient = __webpack_require__(28);

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(err, null, null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err, null, null);
  }
};

/**
 * Call hapiJwt2Key as a Promise
 * @param {object} options 
 * @returns {Promise}
 */
module.exports.hapiJwt2KeyAsync = function (options) {
  var secretProvider = module.exports.hapiJwt2Key(options);
  return function (decoded) {
    return new Promise(function (resolve, reject) {
      var cb = function cb(err, key) {
        !key || err ? reject(err) : resolve({ key: key });
      };
      secretProvider(decoded, cb);
    });
  };
};

module.exports.hapiJwt2Key = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing hapiJwt2Key');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(decoded, cb) {
    // We cannot find a signing certificate if there is no header (no kid).
    if (!decoded || !decoded.header) {
      return cb(new Error('Cannot find a signing certificate if there is no header'), null, null);
    }

    // Only RS256 is supported.
    if (decoded.header.alg !== 'RS256') {
      return cb(new Error('Unsupported algorithm ' + decoded.header.alg + ' supplied. node-jwks-rsa supports only RS256'), null, null);
    }

    client.getSigningKey(decoded.header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey, key);
    });
  };
};

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(29);

var _JwksClient = __webpack_require__(28);

module.exports.koaJwtSecret = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  if (!options.jwksUri) {
    throw new _errors.ArgumentError('No JWKS URI provided');
  }

  var client = new _JwksClient.JwksClient(options);

  return function secretProvider() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        alg = _ref.alg,
        kid = _ref.kid;

    return new Promise(function (resolve, reject) {

      // Only RS256 is supported.
      if (alg !== 'RS256') {
        return reject(new Error('Missing / invalid token algorithm'));
      }

      client.getSigningKey(kid, function (err, key) {
        if (err) {

          if (options.handleSigningKeyError) {
            return options.handleSigningKeyError(err).then(reject);
          }

          return reject(err);
        }

        // Provide the key.
        resolve(key.publicKey || key.rsaPublicKey);
      });
    });
  };
};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsonwebtoken = __webpack_require__(12);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _errors = __webpack_require__(29);

var _JwksClient = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleSigningKeyError = function handleSigningKeyError(err, cb) {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err);
  }
};

module.exports.passportJwtSecret = function (options) {
  if (options === null || options === undefined) {
    throw new _errors.ArgumentError('An options object must be provided when initializing passportJwtSecret');
  }

  var client = new _JwksClient.JwksClient(options);
  var onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(req, rawJwtToken, cb) {
    var decoded = _jsonwebtoken2.default.decode(rawJwtToken, { complete: true });

    // Only RS256 is supported.
    if (!decoded || !decoded.header || decoded.header.alg !== 'RS256') {
      return cb(null, null);
    }

    client.getSigningKey(decoded.header.kid, function (err, key) {
      if (err) {
        return onError(err, function (newError) {
          return cb(newError, null);
        });
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey);
    });
  };
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.certToPEM = certToPEM;
exports.rsaPublicKeyToPEM = rsaPublicKeyToPEM;
function certToPEM(cert) {
  cert = cert.match(/.{1,64}/g).join('\n');
  cert = '-----BEGIN CERTIFICATE-----\n' + cert + '\n-----END CERTIFICATE-----\n';
  return cert;
};

function prepadSigned(hexStr) {
  var msb = hexStr[0];
  if (msb < '0' || msb > '7') {
    return '00' + hexStr;
  }
  return hexStr;
}

function toHex(number) {
  var nstr = number.toString(16);
  if (nstr.length % 2) {
    return '0' + nstr;
  }
  return nstr;
}

function encodeLengthHex(n) {
  if (n <= 127) {
    return toHex(n);
  }
  var nHex = toHex(n);
  var lengthOfLengthByte = 128 + nHex.length / 2;
  return toHex(lengthOfLengthByte) + nHex;
}

/*
 * Source: http://stackoverflow.com/questions/18835132/xml-to-pem-in-node-js
 */
function rsaPublicKeyToPEM(modulusB64, exponentB64) {
  var modulus = new Buffer(modulusB64, 'base64');
  var exponent = new Buffer(exponentB64, 'base64');
  var modulusHex = prepadSigned(modulus.toString('hex'));
  var exponentHex = prepadSigned(exponent.toString('hex'));
  var modlen = modulusHex.length / 2;
  var explen = exponentHex.length / 2;

  var encodedModlen = encodeLengthHex(modlen);
  var encodedExplen = encodeLengthHex(explen);
  var encodedPubkey = '30' + encodeLengthHex(modlen + explen + encodedModlen.length / 2 + encodedExplen.length / 2 + 2) + '02' + encodedModlen + modulusHex + '02' + encodedExplen + exponentHex;

  var der = new Buffer(encodedPubkey, 'hex').toString('base64');

  var pem = '-----BEGIN RSA PUBLIC KEY-----\n';
  pem += '' + der.match(/.{1,64}/g).join('\n');
  pem += '\n-----END RSA PUBLIC KEY-----\n';
  return pem;
};

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (client) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options,
      _ref$cacheMaxEntries = _ref.cacheMaxEntries,
      cacheMaxEntries = _ref$cacheMaxEntries === undefined ? 5 : _ref$cacheMaxEntries,
      _ref$cacheMaxAge = _ref.cacheMaxAge,
      cacheMaxAge = _ref$cacheMaxAge === undefined ? (0, _ms2.default)('10m') : _ref$cacheMaxAge;

  var logger = (0, _debug2.default)('jwks');
  var getSigningKey = client.getSigningKey;

  logger('Configured caching of singing keys. Max: ' + cacheMaxEntries + ' / Age: ' + cacheMaxAge);
  return (0, _lruMemoizer2.default)({
    load: function load(kid, callback) {
      getSigningKey(kid, function (err, key) {
        if (err) {
          return callback(err);
        }

        logger('Caching signing key for \'' + kid + '\':', key);
        return callback(null, key);
      });
    },
    hash: function hash(kid) {
      return kid;
    },
    maxAge: cacheMaxAge,
    max: cacheMaxEntries
  });
};

var _ms = __webpack_require__(31);

var _ms2 = _interopRequireDefault(_ms);

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _lruMemoizer = __webpack_require__(30);

var _lruMemoizer2 = _interopRequireDefault(_lruMemoizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rateLimitSigningKey = exports.cacheSigningKey = undefined;

var _cache = __webpack_require__(277);

var _cache2 = _interopRequireDefault(_cache);

var _rateLimit = __webpack_require__(279);

var _rateLimit2 = _interopRequireDefault(_rateLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.cacheSigningKey = _cache2.default;
exports.rateLimitSigningKey = _rateLimit2.default;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (client) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options,
      _ref$jwksRequestsPerM = _ref.jwksRequestsPerMinute,
      jwksRequestsPerMinute = _ref$jwksRequestsPerM === undefined ? 10 : _ref$jwksRequestsPerM;

  var logger = (0, _debug2.default)('jwks');
  var getSigningKey = client.getSigningKey;

  var limiter = new _limiter.RateLimiter(jwksRequestsPerMinute, 'minute', true);
  logger('Configured rate limiting to JWKS endpoint at ' + jwksRequestsPerMinute + '/minute');

  return function (kid, cb) {
    limiter.removeTokens(1, function (err, remaining) {
      if (err) {
        return cb(err);
      }

      logger('Requests to the JWKS endpoint available for the next minute:', remaining);
      if (remaining < 0) {
        logger('Too many requests to the JWKS endpoint');
        return cb(new _JwksRateLimitError2.default('Too many requests to the JWKS endpoint'));
      } else {
        return getSigningKey(kid, cb);
      }
    });
  };
};

var _debug = __webpack_require__(9);

var _debug2 = _interopRequireDefault(_debug);

var _limiter = __webpack_require__(61);

var _JwksRateLimitError = __webpack_require__(99);

var _JwksRateLimitError2 = _interopRequireDefault(_JwksRateLimitError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (options, cb) {
  var requestOptions = {
    baseURL: options.uri,
    headers: options.headers,
    timeout: options.timeout
  };

  if (options.proxy) {
    var proxy = _url2.default.parse(options.proxy);

    var _proxy$auth$split = proxy.auth.split(':'),
        _proxy$auth$split2 = _slicedToArray(_proxy$auth$split, 2),
        username = _proxy$auth$split2[0],
        password = _proxy$auth$split2[1];

    requestOptions.proxy = {
      host: proxy.hostname,
      port: proxy.port,
      auth: { username: username, password: password }
    };
  }

  if (options.agentOptions || options.strictSSL) {
    var agentOptions = _extends({}, options.strictSSL && { rejectUnauthorized: options.strictSSL }, options.agentOptions);
    requestOptions.httpAgent = new _http2.default.Agent(agentOptions);
    requestOptions.httpsAgent = new _https2.default.Agent(agentOptions);
  }

  (0, _axios.request)(requestOptions).then(function (response) {
    return cb(null, response);
  }).catch(function (err) {
    return cb(err);
  });
};

var _http = __webpack_require__(108);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(109);

var _https2 = _interopRequireDefault(_https);

var _url = __webpack_require__(66);

var _url2 = _interopRequireDefault(_url);

var _axios = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 281 */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(281);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 283 */
/***/ (function(module, exports) {

var getMilliseconds = function() {
  if (typeof process !== 'undefined' && process.hrtime) {
    var hrtime = process.hrtime();
    var seconds = hrtime[0];
    var nanoseconds = hrtime[1];

    return seconds * 1e3 +  Math.floor(nanoseconds / 1e6);
  }

  return new Date().getTime();
}

module.exports = getMilliseconds;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var TokenBucket = __webpack_require__(102);
var getMilliseconds = __webpack_require__(283);

/**
 * A generic rate limiter. Underneath the hood, this uses a token bucket plus
 * an additional check to limit how many tokens we can remove each interval.
 * @author John Hurliman <jhurliman@jhurliman.org>
 *
 * @param {Number} tokensPerInterval Maximum number of tokens that can be
 *  removed at any given moment and over the course of one interval.
 * @param {String|Number} interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param {Boolean} fireImmediately Optional. Whether or not the callback
 *  will fire immediately when rate limiting is in effect (default is false).
 */
var RateLimiter = function(tokensPerInterval, interval, fireImmediately) {
  this.tokenBucket = new TokenBucket(tokensPerInterval, tokensPerInterval,
    interval, null);

  // Fill the token bucket to start
  this.tokenBucket.content = tokensPerInterval;

  this.curIntervalStart = getMilliseconds();
  this.tokensThisInterval = 0;
  this.fireImmediately = fireImmediately;
};

RateLimiter.prototype = {
  tokenBucket: null,
  curIntervalStart: 0,
  tokensThisInterval: 0,
  fireImmediately: false,

  /**
   * Remove the requested number of tokens and fire the given callback. If the
   * rate limiter contains enough tokens and we haven't spent too many tokens
   * in this interval already, this will happen immediately. Otherwise, the
   * removal and callback will happen when enough tokens become available.
   * @param {Number} count The number of tokens to remove.
   * @param {Function} callback(err, remainingTokens)
   * @returns {Boolean} True if the callback was fired immediately, otherwise
   *  false.
   */
  removeTokens: function(count, callback) {
    // Make sure the request isn't for more than we can handle
    if (count > this.tokenBucket.bucketSize) {
      process.nextTick(callback.bind(null, 'Requested tokens ' + count +
        ' exceeds maximum tokens per interval ' + this.tokenBucket.bucketSize,
        null));
      return false;
    }

    var self = this;
    var now = getMilliseconds();

    // Advance the current interval and reset the current interval token count
    // if needed
    if (now < this.curIntervalStart
      || now - this.curIntervalStart >= this.tokenBucket.interval) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    }

    // If we don't have enough tokens left in this interval, wait until the
    // next interval
    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
      if (this.fireImmediately) {
        process.nextTick(callback.bind(null, null, -1));
      } else {
        var waitInterval = Math.ceil(
          this.curIntervalStart + this.tokenBucket.interval - now);

        setTimeout(function() {
          self.tokenBucket.removeTokens(count, afterTokensRemoved);
        }, waitInterval);
      }
      return false;
    }

    // Remove the requested number of tokens from the token bucket
    return this.tokenBucket.removeTokens(count, afterTokensRemoved);

    function afterTokensRemoved(err, tokensRemaining) {
      if (err) return callback(err, null);

      self.tokensThisInterval += count;
      callback(null, tokensRemaining);
    }
  },

  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens and we
   * haven't spent too many tokens in this interval already, this will return
   * true. Otherwise, false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens: function(count) {
    // Make sure the request isn't for more than we can handle
    if (count > this.tokenBucket.bucketSize)
      return false;

    var now = getMilliseconds();

    // Advance the current interval and reset the current interval token count
    // if needed
    if (now < this.curIntervalStart
      || now - this.curIntervalStart >= this.tokenBucket.interval) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    }

    // If we don't have enough tokens left in this interval, return false
    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval)
      return false;

    // Try to remove the requested number of tokens from the token bucket
    var removed = this.tokenBucket.tryRemoveTokens(count);
    if (removed) {
      this.tokensThisInterval += count;
    }
    return removed;
  },

  /**
   * Returns the number of tokens remaining in the TokenBucket.
   * @returns {Number} The number of tokens remaining.
   */
  getTokensRemaining: function () {
    this.tokenBucket.drip();
    return this.tokenBucket.content;
  }
};

module.exports = RateLimiter;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(286);

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var RetryOperation = __webpack_require__(287);

exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
      forever: options && options.forever,
      unref: options && options.unref
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper() {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    };
    obj[method].options = options;
  }
};


/***/ }),
/* 287 */
/***/ (function(module, exports) {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._timeouts = timeouts;
  this._options = options || {};
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
module.exports = RetryOperation;

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(this._errors.length - 1, this._errors.length);
      this._timeouts = this._cachedTimeouts.slice(0);
      timeout = this._timeouts.shift();
    } else {
      return false;
    }
  }

  var self = this;
  var timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (this._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else context[name] = definition();
})('urljoin', this, function () {

  function normalize (str, options) {

    // make sure protocol is followed by two slashes
    str = str.replace(/:\//g, '://');

    // remove consecutive slashes
    str = str.replace(/([^:\s])\/+/g, '$1/');

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    str = str.replace(/(\?.+)\?/g, '$1&');

    return str;
  }

  return function () {
    var input = arguments;
    var options = {};

    if (typeof arguments[0] === 'object') {
      // new syntax with array and options
      input = arguments[0];
      options = arguments[1] || {};
    }

    var joined = [].slice.call(input, 0).join('/');
    return normalize(joined, options);
  };

});


/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = require("body-parser@1.12.4");

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser@1.4.4");

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = require("ejs@2.3.1");

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite@0.4.10");

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = require("morgan@1.5.3");

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = require("winston@1.0.0");

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = require("wrappy@1.0.1");

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })
/******/ ]);