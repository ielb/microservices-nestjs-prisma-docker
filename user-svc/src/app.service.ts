import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly prisma: PrismaService) { }

  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(data: any) {

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },

    });
  }
}
