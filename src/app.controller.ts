import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('pages/home')
  index() {
    return {
      msg: 'QUAK DUCK AND WIGGLY FUCK!'
    }
  }

  @Get('/contact')
  @Render('pages/contact')
  contact() {
    return {
      msg: 'CONTACT IS PRESENT!'
    }
  }
}
