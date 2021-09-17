"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
var express_1 = require("express");
var health_service_1 = require("../services/health.service");
var healthController = (0, express_1.Router)();
exports.HealthController = healthController;
var healthService = new health_service_1.HealthService();
healthController.get("/", function (req, res) {
    res.send(healthService.health());
});
