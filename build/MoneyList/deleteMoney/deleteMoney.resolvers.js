"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _default = {
  Mutation: {
    deleteMoney: function () {
      var _deleteMoney = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, loggedInUser, money;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                loggedInUser = _ref2.loggedInUser;

                if (loggedInUser) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "ログインしてください。"
                });

              case 4:
                _context.next = 6;
                return _client["default"].moneyList.findUnique({
                  where: {
                    id: id
                  }
                });

              case 6:
                money = _context.sent;

                if (money) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "削除する対象がありません。"
                });

              case 11:
                _context.next = 13;
                return _client["default"].moneyList["delete"]({
                  where: {
                    id: id
                  }
                });

              case 13:
                return _context.abrupt("return", {
                  ok: true
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function deleteMoney(_x, _x2, _x3) {
        return _deleteMoney.apply(this, arguments);
      }

      return deleteMoney;
    }()
  }
};
exports["default"] = _default;