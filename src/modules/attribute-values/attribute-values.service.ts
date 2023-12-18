import { Injectable } from '@nestjs/common';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AttributeValue } from './entities/attribute-value.entity';
import { Model } from 'mongoose';

@Injectable()
export class AttributeValuesService {
  constructor(
    @InjectModel(AttributeValue.name)
    private readonly attributeValueRepository: Model<AttributeValue>,
  ) {}
  async create(createAttributeValueDto: CreateAttributeValueDto) {
    console.log('payload we have here@@', createAttributeValueDto);
    return await this.attributeValueRepository.create(createAttributeValueDto);
  }

  async findAll() {
    return await this.attributeValueRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeValue`;
  }

  update(id: number, updateAttributeValueDto: UpdateAttributeValueDto) {
    return `This action updates a #${id} attributeValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeValue`;
  }
}
