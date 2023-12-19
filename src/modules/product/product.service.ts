import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
  async create(createProductDto: any) {
    return await this.productRepository.create(createProductDto);
    // return 'This action adds a new product';
  }
  async findAll() {
    return await this.productRepository
      .find({})
      .populate('attributes.attributeId')
      .populate('attributes.attributeValueId')
      .populate('categoryId');
    return `This action returns all product`;
  }

  async findOne(id: any) {
    return await this.productRepository
      .findOne({ _id: id })
      .populate('attributes.attributeId')
      .populate('attributes.attributeValueId')
      .populate('categoryId');
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
