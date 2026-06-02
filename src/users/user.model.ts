import { ApiProperty } from '@nestjs/swagger';

class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

class CreateUserDto {
  @ApiProperty()
  name: string;
}

class UpdateUserDto {
  @ApiProperty()
  name: string;
}

export { User, CreateUserDto, UpdateUserDto };
