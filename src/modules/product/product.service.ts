import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  @InjectModel(Product.name)
  private readonly productRepository: Model<Product>;
  // async create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }
  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }
  async findAll() {
    return await this.productRepository
      .find({})
      .populate('attributes.attributeId')
      .populate('attributes.attributeValueId')
      .populate('categoryId');
  }

  async findOne(id: any) {
    return await this.productRepository
      .findOne({ _id: id })
      .populate('attributes.attributeId')
      .populate('attributes.attributeValueId')
      .populate('categoryId');
  }
}
