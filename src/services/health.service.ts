import { injectable } from "inversify";

@injectable()
export class HealthService {
    public health(): string {
        return "OverlayAPI Healthy!";
    }
}