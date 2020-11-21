import { Injectable } from '@nestjs/common';

export enum HealthStatus {
    UP = 'UP',
    DOWN = 'DOWN',
}

@Injectable()
export class AppService {
    getSimpleHealthCheck(): HealthStatus {
        return HealthStatus.UP;
    }
}
