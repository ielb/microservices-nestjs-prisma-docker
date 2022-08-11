import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject("USER_SERVICE") private readonly service: ClientProxy) { }
  create(CreateUserDto: CreateUserDto): Observable<User[]> {
    return this.service.send<User[], CreateUserDto>('get-User', CreateUserDto);
  }

  findAll(): Observable<User> {
    return this.service.send<User, string>('create-User', '');
  }

  hello() {
    return this.service.send<string, string>('hello', '');
  }
}
