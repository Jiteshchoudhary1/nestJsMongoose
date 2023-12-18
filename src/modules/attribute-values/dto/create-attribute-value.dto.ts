import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateAttributeValueDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  value: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  attributeId: string;
}
