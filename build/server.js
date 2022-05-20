"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

require("dotenv/config");

var _schema = _interopRequireDefault(require("./schema"));

var _user = require("./User/user.utils");

var server = new _apolloServer.ApolloServer({
  schema: _schema["default"],
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var req, res;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req, res = _ref.res;
              _context2.next = 3;
              return (0, _user.getUser)(req.headers.authorization);

            case 3:
              _context2.t0 = _context2.sent;
              return _context2.abrupt("return", {
                loggedInUser: _context2.t0
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }()
});
var PORT = process.env.PORT;
server.listen(PORT).then(function () {
  return console.log("\uD83D\uDE80Server is running on http://localhost:".concat(PORT, "/"));
});