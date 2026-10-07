import { Body, Controller, Get, Post } from '@nestjs/common'

class CreateUserDto {
  username: string
  fullName: string
  age: number
}

@Controller('users')
export class UsersController {
  private users: CreateUserDto[] = []

  @Post()
  create(@Body() body: CreateUserDto) {
    this.users.push(body)
    return { ok: true, saved: body }
  }

  @Get()
  findAll() {
    return this.users
  }
}