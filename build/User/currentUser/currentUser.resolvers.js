"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../../client"));

var _default = {
  Query: {
    currentUser: function currentUser(_, __, _ref) {
      var loggedInUser = _ref.loggedInUser;
      return _client["default"].user.findUnique({
        where: {
          id: loggedInUser.id
        }
      });
    }
  }
};
exports["default"] = _default;