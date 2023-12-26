import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findOne(params: any) {
    const filter = {};
    if (params.phoneNumber) {
      filter['phoneNumber'] = params.phoneNumber;
    }
    return await this.userRepository.findOne(filter);
  }
}
