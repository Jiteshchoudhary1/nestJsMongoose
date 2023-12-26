import { Injectable } from '@nestjs/common';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
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
    return await this.attributeValueRepository.create(createAttributeValueDto);
  }

  async findAll() {
    return await this.attributeValueRepository.find({}).populate('attributeId');
  }
}
