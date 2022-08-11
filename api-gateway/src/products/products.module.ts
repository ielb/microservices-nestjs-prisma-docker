import { Module, } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE', transport: Transport.TCP, options: {
          host: new ConfigService().get('PRODUCT_HOST'),
          port: new ConfigService().get('PRODUCT_PORT'),
        }
      },

    ]),
  ],

  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
