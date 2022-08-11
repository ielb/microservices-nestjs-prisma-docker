import { Product } from './entities/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(@Inject("PRODUCT_SERVICE") private readonly service: ClientProxy) { }
  create(createProductDto: CreateProductDto): Observable<Product[]> {
    return this.service.send<Product[], CreateProductDto>('get-product', createProductDto);
  }

  findAll(): Observable<Product> {
    return this.service.send<Product, string>('create-product', '');
  }


}
