import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  otp: number;
}

export class CreateOtpDto {}

export class ResendOtpDto {
  @ApiProperty({ type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;
}
