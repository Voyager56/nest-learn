import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class TestController {
  @Get(':id')
  getTest(@Param() params): string {
    return `Test ${params.id}`;
  }
}
