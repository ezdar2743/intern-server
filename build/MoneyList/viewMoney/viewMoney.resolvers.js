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
  Query: {
    viewMoney: function () {
      var _viewMoney = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var year, month, loggedInUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                year = _ref.year, month = _ref.month;
                loggedInUser = _ref2.loggedInUser;
                _context.next = 4;
                return _client["default"].moneyList.findMany({
                  where: {
                    userId: loggedInUser.id,
                    year: year,
                    month: month
                  }
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function viewMoney(_x, _x2, _x3) {
        return _viewMoney.apply(this, arguments);
      }

      return viewMoney;
    }()
  }
};
exports["default"] = _default;