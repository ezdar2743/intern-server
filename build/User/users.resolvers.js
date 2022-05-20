"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../client"));

var _default = {
  User: {
    moneyLists: function moneyLists(_ref) {
      var id = _ref.id;
      return _client["default"].user.findUnique({
        where: {
          id: id
        }
      }).moneyLists();
    }
  }
};
exports["default"] = _default;