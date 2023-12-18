import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryAttributeDto {
  @ApiProperty({ required: true })
  @IsArray()
  @IsNotEmpty()
  attributeId: string[];

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
