import { Container } from "inversify";
import { HealthService } from "./services/health.service";

var container = new Container();
container.bind(HealthService).toSelf();

export default container;