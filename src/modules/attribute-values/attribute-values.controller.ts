import { Controller, Get, Post, Body } from '@nestjs/common';
import { AttributeValuesService } from './attribute-values.service';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('attribute-values')
@Controller('attribute-values')
export class AttributeValuesController {
  constructor(
    private readonly attributeValuesService: AttributeValuesService,
  ) {}

  @Post()
  create(@Body() createAttributeValueDto: CreateAttributeValueDto) {
    return this.attributeValuesService.create(createAttributeValueDto);
  }

  @Get()
  findAll() {
    return this.attributeValuesService.findAll();
  }
}
