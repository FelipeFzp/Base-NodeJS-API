import { Router } from "express";
import { HealthService } from "../services/health.service";

const healthController = Router();
const healthService = new HealthService();

healthController.get("/", (req, res) => {
    res.send(healthService.health());
})

export { healthController as HealthController };