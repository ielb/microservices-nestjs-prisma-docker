import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {


  constructor(private readonly prisma: PrismaService) { }

  getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  createProduct(data: any): Promise<Product> {
    return this.prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        createdAt: true,
        updatedAt: true
      }

    });
  }

}
