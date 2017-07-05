'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\babel-polyfill');

var _classAutobind = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _PersonModel = require('C:\\Users\\jamesroncy\\koa_test\\core\\Model\\PersonModel');

var _PersonModel2 = _interopRequireDefault(_PersonModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var test = "none";

var Controller = function () {
	function Controller() {
		_classCallCheck(this, Controller);

		this.code = this.userDetails();
		(0, _classAutobind2.default)(this);
	}

	_createClass(Controller, [{
		key: 'userDetails',
		value: function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _PersonModel2.default.getData();

							case 2:
								return _context.abrupt('return', _context.sent);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function userDetails() {
				return _ref.apply(this, arguments);
			}

			return userDetails;
		}()
	}]);

	return Controller;
}();

module.exports = Controller;