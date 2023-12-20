import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { CreateAttributeBulkDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('attribute')
@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

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

  @Get()
  findAll() {
    return this.attributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttributeDto: UpdateAttributeDto,
  ) {
    return this.attributeService.update(+id, updateAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributeService.remove(+id);
  }
}
