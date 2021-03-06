"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var health_controller_1 = require("./controllers/health.controller");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/health', health_controller_1.HealthController);
