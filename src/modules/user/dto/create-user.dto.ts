import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ type: 'string' })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;
}

export class UserLoginDto {
  @ApiProperty({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;

  @ApiProperty({ type: 'string' })
  @ValidateIf((dto) => !dto.password || (dto.otp && dto.phoneNumber))
  @IsString()
  password?: string;

  @ApiProperty({ type: 'number' })
  @ValidateIf((dto) => !dto.otp || (dto.password && dto.phoneNumber))
  @IsNumber()
  otp?: number;
}
