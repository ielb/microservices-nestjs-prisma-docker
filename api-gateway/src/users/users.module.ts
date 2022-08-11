import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: new ConfigService().get('USER_HOST'),
          port: new ConfigService().get('USER_PORT'),
        },
      },

    ]),
  ],
  controllers: [

    UsersController],
  providers: [UsersService]
})
export class UsersModule { }
