import { Product } from '@prisma/client';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('get-products')
  getProducts(): Promise<Product[]> {
    return this.appService.getProducts();
  }

  @MessagePattern('create-product')
  createProduct(data: any): Promise<Product> {
    return this.appService.createProduct(data);
  }
}
