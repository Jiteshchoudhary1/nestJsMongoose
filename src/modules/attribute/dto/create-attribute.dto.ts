import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
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
  @ApiProperty({ isArray: true, type: CreateAttributeDto })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => CreateAttributeDto)
  attributeBulk: CreateAttributeDto[];
}
