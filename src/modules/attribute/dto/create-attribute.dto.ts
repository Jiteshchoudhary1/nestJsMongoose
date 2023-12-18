import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  Validate,
} from 'class-validator';
export class CreateAttributeDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsArray()
  @IsNotEmpty()
  value: string[];
}

export class CreateAttributeBulkDto {
  @IsNotEmpty()
  @IsArray()
  @Validate(CreateAttributeDto, {
    message: 'Enter valid value .',
  })
  attributeBulk: CreateAttributeDto[];
}
