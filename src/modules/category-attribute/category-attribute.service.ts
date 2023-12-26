import { Injectable } from '@nestjs/common';
import { CreateCategoryAttributeDto } from './dto/create-category-attribute.dto';
import { CategoryAttribute } from './entities/category-attribute.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryAttributeService {
  constructor(
    @InjectModel(CategoryAttribute.name)
    private readonly categoryAttributeRepository: Model<CategoryAttribute>,
  ) {}
  async create(createCategoryAttributeDto: CreateCategoryAttributeDto) {
    return await this.categoryAttributeRepository.create(
      createCategoryAttributeDto,
    );
  }

  async findAll() {
    return await this.categoryAttributeRepository.find({});
    // .populate('categoryId')
    // .populate({
    //   path: 'attributeId',
    //   populate: {
    //     path: 'attributeValue',
    //   },
    // });
  }

  async getAttributesValue(categoryId: string) {
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
    return await this.categoryAttributeRepository
      .findOne({ categoryId })
      .populate({
        path: 'attributeId',
        populate: {
          path: 'attributeValue',
        },
      });
  }
}
