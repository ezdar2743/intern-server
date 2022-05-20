"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _default = {
  Mutation: {
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var loginId, email, name, password, isUserExist, hashPassword;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loginId = _ref.loginId, email = _ref.email, name = _ref.name, password = _ref.password;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].user.findFirst({
                  where: {
                    OR: [{
                      loginId: loginId
                    }, {
                      email: email
                    }]
                  }
                });

              case 4:
                isUserExist = _context.sent;

                if (!isUserExist) {
                  _context.next = 7;
                  break;
                }

                throw Error("存在しているLogin ID/emailです。");

              case 7:
                _context.next = 9;
                return _bcrypt["default"].hash(password, 10);

              case 9:
                hashPassword = _context.sent;
                _context.next = 12;
                return _client["default"].user.create({
                  data: {
                    loginId: loginId,
                    email: email,
                    name: name,
                    password: hashPassword
                  }
                });

              case 12:
                return _context.abrupt("return", {
                  ok: true
                });

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", _context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;