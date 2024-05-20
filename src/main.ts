import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://www.thedropldn.com' // TODO: Change this to your Shopify store URL
  });

  await app.listen(3000);
}
bootstrap();
