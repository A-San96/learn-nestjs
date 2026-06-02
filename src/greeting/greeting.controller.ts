import { Controller, Get } from '@nestjs/common';

@Controller('greetings')
export class GreetingController {
  @Get('english')
  getGreeting() {
    return 'English greeting: Hello, World!';
  }

  @Get('spanish')
  getSpanishGreeting() {
    return 'Spanish greeting: ¡Hola, Mundo!';
  }

  @Get('french')
  getFrenchGreeting() {
    return 'French greeting: Bonjour, le Monde!';
  }
}
