import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('.well-known')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('live')
    getSimpleHealthCheck() {
        return this.appService.getSimpleHealthCheck();
    }
}
