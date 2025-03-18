import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hello World!',
    });
  }

  @Get('something')
  @HttpCode(201)
  somethingNew() {
    return 'This is something new';
  }

  @Get('not-found')
  @HttpCode(404)
  notFoundPage() {
    return 'This page is not found';
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'This page is error';
  }
}
