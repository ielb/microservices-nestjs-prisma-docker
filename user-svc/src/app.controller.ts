import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('get-users')
  getUsers(): any {
    return this.appService.getUsers();
  }
  @MessagePattern('hello')
  hello(): any {
    return "Hello World!";
  }
  @MessagePattern('create-user')
  createUser(data: any): any {
    return this.appService.createUser(data);
  }
}
