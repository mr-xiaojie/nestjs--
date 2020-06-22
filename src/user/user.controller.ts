import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户模块')
export class UserController {
  @Get()
  @ApiOperation({ summary: '获取用户信息' })
  getHello(): string {
    return '123123123';
  }
}
