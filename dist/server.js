"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server() {
        this.express = (0, express_1.default)();
        this._configureEnvironment();
        this._configureMiddlewares();
        this._configureRoutes();
        this._start();
    }
    Server.prototype._configureEnvironment = function () {
        dotenv_1.default.config();
    };
    Server.prototype._configureMiddlewares = function () {
        this.express.use(express_1.default.json());
    };
    Server.prototype._configureRoutes = function () {
        this.express.use(routes_1.routes);
    };
    Server.prototype._start = function () {
        this.express.listen(process.env.PORT, function () {
            console.info("Express running on http://localhost:" + process.env.PORT);
        });
    };
    return Server;
}());
exports.Server = Server;
new Server();
