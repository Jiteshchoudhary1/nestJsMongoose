import { Injectable } from '@nestjs/common';
import { CreateUserAddressTwoDto } from './dto/create-user-address-two.dto';
import { UpdateUserAddressTwoDto } from './dto/update-user-address-two.dto';
import { UserAddressTwo } from './entities/user-address-two.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserAddressTwoService {
  constructor(
    @InjectModel(UserAddressTwo.name)
    private readonly userModel: Model<UserAddressTwo>,
  ) {}
  async create(createUserAddressDto: CreateUserAddressTwoDto) {
    return await this.userModel.create(createUserAddressDto);
  }

  async findAll() {
    return await this.userModel.find({}).populate({
      path: 'addressId',
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} userAddressTwo`;
  }

  update(id: number, updateUserAddressTwoDto: UpdateUserAddressTwoDto) {
    return `This action updates a #${id} userAddressTwo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAddressTwo`;
  }
}
