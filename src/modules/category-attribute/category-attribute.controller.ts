import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryAttributeService } from './category-attribute.service';
import { CreateCategoryAttributeDto } from './dto/create-category-attribute.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('category-attribute')
@Controller('category-attribute')
export class CategoryAttributeController {
  constructor(
    private readonly categoryAttributeService: CategoryAttributeService,
  ) {}

  @Post()
  create(@Body() createCategoryAttributeDto: CreateCategoryAttributeDto) {
    return this.categoryAttributeService.create(createCategoryAttributeDto);
  }

  @ApiProperty({
    description: 'This api is used to get all categoryAttribute values',
  })
  @Get()
  findAll() {
    return this.categoryAttributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryAttributeService.getAttributesValue(id);
  }
}
