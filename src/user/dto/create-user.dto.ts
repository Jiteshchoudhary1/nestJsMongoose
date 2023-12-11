import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  age: number;
}
