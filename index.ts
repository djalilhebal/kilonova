require('reflect-metadata');
const { NestFactory } = require('@nestjs/core');
const { Module, Controller, Get } = require('@nestjs/common');

// Define a simple module and controller to serve as a placeholder
@Controller()
class AppController {
  @Get()
  getHello() {
    return 'Hello from Kilonova!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

// Bootstrap the NestJS application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Kilonova is observing brilliance on http://localhost:3000');
}

bootstrap();
