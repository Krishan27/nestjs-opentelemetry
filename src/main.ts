import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { otelSDK } from './tracing';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await otelSDK.start();
  await app.listen(3000);
}
bootstrap();
