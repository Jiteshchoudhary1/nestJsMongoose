import { Controller, Get, Post, Body } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { CreateAttributeBulkDto } from './dto/create-attribute.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('attribute')
@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @ApiProperty({ description: 'use for create bulk attributes with value' })
  @Post('/bulk')
  async bulkAttributeCreate(
    @Body() createAttributeDto: CreateAttributeBulkDto,
  ) {
    const bulkData = createAttributeDto.attributeBulk;
    const bulkValue = [];
    if (bulkData.length > 0) {
      for (let i = 0; i < bulkData.length; i++) {
        const element = bulkData[i];
        const attribute = await this.attributeService.create({
          name: element.name,
        });
        element.value.map((ele) => {
          bulkValue.push({
            value: ele,
            attributeId: attribute._id,
          });
          return {};
        });
      }
      await this.attributeService.createAttributeValue(bulkValue);
      return true;
    }
  }

  @ApiProperty({ description: 'use for get all attributes with values ' })
  @Get()
  findAll() {
    return this.attributeService.findAll();
  }

  @ApiProperty({ description: 'use for get all attributes with values ' })
  @Get('/-value')
  getAttributesWithValues() {
    return this.attributeService.attributeWithValues();
  }
}
