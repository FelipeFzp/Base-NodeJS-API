import { Router } from "express";
import ServiceCollection from "../providers";
import { HealthService } from "../services/health.service";

const healthController = Router();
const healthService = ServiceCollection.resolve(HealthService);

healthController.get("/", (req, res) => {
    res.send(healthService.health());
})

export { healthController as HealthController };