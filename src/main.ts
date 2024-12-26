import { NestFactory } from '@nestjs/core';
import { AppModule } from './model/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3001',
      'http://100.115.75.21:3001',
      'http://100.125.200.127:5173',
      'http://93.157.244.52:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Market')
    .setDescription('The Market API description')
    .setVersion('1.0')
    .addTag('Market')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
