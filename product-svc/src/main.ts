import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {

      transport: Transport.TCP,
      options: {
        host: new ConfigService().get('HOST'),
        port: new ConfigService().get('PORT'),
      },
    },
  );
  await app.listen();
}
bootstrap();
