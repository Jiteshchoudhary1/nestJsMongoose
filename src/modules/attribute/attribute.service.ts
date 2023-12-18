import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
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
    console.log('createArrtiubesdto we have here@@', createAttributeDto);
    return await this.attributeRepository.create(createAttributeDto);
  }

  async findAll() {
    return await this.attributeRepository.find({});
  }

  async createAttributeValue(params: any) {
    return await this.attributeValueRepository.insertMany(params);
  }
  findOne(id: number) {
    return `This action returns a #${id} attribute`;
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return `This action updates a #${id} attribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
