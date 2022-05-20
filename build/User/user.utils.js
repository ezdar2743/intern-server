"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _client = _interopRequireDefault(require("../client"));

var getUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(authorization) {
    var _yield$jwt$verify, id, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (authorization) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", null);

          case 3:
            _context.next = 5;
            return _jsonwebtoken["default"].verify(authorization, process.env.SECRET_KEY);

          case 5:
            _yield$jwt$verify = _context.sent;
            id = _yield$jwt$verify.id;
            _context.next = 9;
            return _client["default"].user.findUnique({
              where: {
                id: id
              }
            });

          case 9:
            user = _context.sent;
            return _context.abrupt("return", user || null);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUser = getUser;