import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserAddress } from './entities/user-address.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectModel(UserAddress.name)
    private readonly userModel: Model<UserAddress>,
  ) {}
  async create(createUserAddressDto: CreateUserAddressDto) {
    return await this.userModel.create(createUserAddressDto);
  }

  async findAll() {
    return await this.userModel.find({}).populate({
      path: 'userId',
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} userAddress`;
  }

  update(id: number, updateUserAddressDto: UpdateUserAddressDto) {
    return `This action updates a #${id} userAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAddress`;
  }
}
