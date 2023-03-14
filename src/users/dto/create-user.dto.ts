import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Dummie' })
  username: string;

  @ApiProperty({ example: 'Dummie' })
  password: string;
}
