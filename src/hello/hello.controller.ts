import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: string) {
    console.log(typeof num);
    return num + 10;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    console.log(query.age);
    console.log(query.name);
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
