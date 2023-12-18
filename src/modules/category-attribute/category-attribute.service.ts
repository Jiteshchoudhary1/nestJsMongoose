import { Injectable } from '@nestjs/common';
import { CreateCategoryAttributeDto } from './dto/create-category-attribute.dto';
import { UpdateCategoryAttributeDto } from './dto/update-category-attribute.dto';
import { CategoryAttribute } from './entities/category-attribute.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryAttributeCopy } from './entities/category-attribute.entity copy';

@Injectable()
export class CategoryAttributeService {
  constructor(
    @InjectModel(CategoryAttribute.name)
    private readonly categoryRepository: Model<CategoryAttribute>,
    @InjectModel(CategoryAttributeCopy.name)
    private readonly categoryCopyRepository: Model<CategoryAttributeCopy>,
  ) {}
  async create(createCategoryAttributeDto: CreateCategoryAttributeDto) {
    const obj = {
      attributeId: createCategoryAttributeDto.attributeId,
      categoryId: createCategoryAttributeDto.categoryId,
    };
    let data = await this.categoryRepository.create({
      categoryId: obj.categoryId,
      attributeId: obj.attributeId,
    });
    // await this.categoryCopyRepository.create({
    //   categoryId: '657bf937328edf0b8ff10116',
    //   attributeId: '657c2b0958c42be76d7f7857',
    // });
    await this.categoryCopyRepository.create(createCategoryAttributeDto);
    console.log('dddata we have here###@@@', data);
    return data;
  }

  async findAll() {
    return await this.categoryCopyRepository
      .find({})
      .populate('categoryId')
      .populate('attributeId');
  }

  async getAttributesValue(categoryId: string) {
    // return await this.categoryCopyRepository.aggregate([
    //   {
    //     $match: {},
    //   },
    //   {
    //     $lookup: {
    //       localField: '_id',
    //       foreignField: 'attributeId',
    //       from: 'attributes',
    //       as: 'Attribute',
    //     },
    //   },
    // ]);
    return await this.categoryCopyRepository.findOne({ categoryId }).populate({
      path: 'attributeId',
      populate: {
        path: 'attributeValue',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryAttribute`;
  }

  update(id: number, updateCategoryAttributeDto: UpdateCategoryAttributeDto) {
    return `This action updates a #${id} categoryAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryAttribute`;
  }
}
