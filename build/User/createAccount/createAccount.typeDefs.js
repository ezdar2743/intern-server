"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

var _default = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type CreateResult {\n    ok: Boolean!\n    error: String\n  }\n\n  type Mutation {\n    createAccount(\n      loginId: String!\n      email: String!\n      name: String!\n      password: String!\n    ): CreateResult\n  }\n"])));

exports["default"] = _default;