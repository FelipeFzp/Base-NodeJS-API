"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var health_service_1 = require("./services/health.service");
var container = new inversify_1.Container();
container.bind(health_service_1.HealthService).toSelf();
exports.default = container;
