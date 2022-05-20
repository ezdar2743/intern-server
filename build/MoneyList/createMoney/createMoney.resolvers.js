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
    createMoney: function () {
      var _createMoney = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var title, amount, date, year, month, loggedInUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = _ref.title, amount = _ref.amount, date = _ref.date, year = _ref.year, month = _ref.month;
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
                return _client["default"].moneyList.create({
                  data: {
                    title: title,
                    amount: amount,
                    date: date,
                    year: year,
                    month: month,
                    user: {
                      connect: {
                        id: loggedInUser.id
                      }
                    }
                  }
                });

              case 6:
                return _context.abrupt("return", {
                  ok: true
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createMoney(_x, _x2, _x3) {
        return _createMoney.apply(this, arguments);
      }

      return createMoney;
    }()
  }
};
exports["default"] = _default;