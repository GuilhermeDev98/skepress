const express = require("express");
const route = express.Router();

const JwtCheck = require("./middlewares/JwtCheck");
const Acl = require("./middlewares/Acl");

const AuthControllers = require("./controllers/AuthControllers");
const UserControllers = require("./controllers/UserControllers");
const RoleControllers = require("./controllers/RoleControllers");

route.post("/auth/register", [Acl], AuthControllers.register);
route.post("/auth/login", AuthControllers.login);
route.get("/user/me", [JwtCheck, Acl], UserControllers.me);

route.post("/roles/", [JwtCheck, Acl], RoleControllers.store);

module.exports = route;
