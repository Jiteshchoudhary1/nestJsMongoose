import { Injectable } from '@nestjs/common';
import { Attribute } from './entities/attribute.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttributeValue } from '../attribute-values/entities/attribute-value.entity';

@Injectable()
export class AttributeService {
  constructor(
    @InjectModel(Attribute.name)
    private readonly attributeRepository: Model<Attribute>,

    @InjectModel(AttributeValue.name)
    private readonly attributeValueRepository: Model<AttributeValue>,
  ) {}
  async create(createAttributeDto: any) {
    return await this.attributeRepository.create(createAttributeDto);
  }

  async findAll() {
    return await this.attributeRepository.find({}).populate('attributeValue');
  }

  async createAttributeValue(params: any) {
    return await this.attributeValueRepository.insertMany(params);
  }
  async attributeWithValues() {
    return await this.attributeRepository.find({});
  }
}
