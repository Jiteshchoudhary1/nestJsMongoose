import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryRepository: Model<Category>,
  ) {}
  async create(createUserDto: CreateCategoryDto) {
    createUserDto.parent = createUserDto.parent ? createUserDto.parent : null;
    const data = await this.categoryRepository.create(createUserDto);
    await this.buildAncestors(data._id, createUserDto.parent);
    return data;
  }
  async findAll() {
    return await this.categoryRepository.find({}, { 'ancestors._id': 0 });
  }

  async buildAncestors(id: any, parent_id: any) {
    try {
      const parent_category = await this.categoryRepository
        .findOne({ _id: parent_id }, { name: 1, slug: 1, ancestors: 1 })
        .exec();
      if (parent_category) {
        const { _id, name } = parent_category;
        const ancest: any = [...parent_category.ancestors];
        ancest.unshift({ _id, name });
        // ancest.unshift({ _id, name });
        console.log('ancest we have here', ancest);
        await this.categoryRepository.findByIdAndUpdate(id, {
          $set: { ancestors: ancest },
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async buildHierarchyAncestors(category_id, parent_id) {
    if (category_id && parent_id) this.buildAncestors(category_id, parent_id);
    const result = await this.categoryRepository
      .find({ parent: category_id })
      .exec();
    if (result)
      result.forEach(async (doc) => {
        await this.buildHierarchyAncestors(doc._id, category_id);
      });
  }
}
