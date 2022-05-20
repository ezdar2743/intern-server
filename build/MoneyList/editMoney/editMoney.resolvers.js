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
    editMoney: function () {
      var _editMoney = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, title, amount, date, year, month, loggedInUser, money;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, title = _ref.title, amount = _ref.amount, date = _ref.date, year = _ref.year, month = _ref.month;
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
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "編集する対象がありません。"
                });

              case 9:
                _context.next = 11;
                return _client["default"].moneyList.update({
                  where: {
                    id: id
                  },
                  data: {
                    title: title,
                    amount: amount,
                    date: date,
                    year: year,
                    month: month
                  }
                });

              case 11:
                return _context.abrupt("return", {
                  ok: true
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editMoney(_x, _x2, _x3) {
        return _editMoney.apply(this, arguments);
      }

      return editMoney;
    }()
  }
};
exports["default"] = _default;