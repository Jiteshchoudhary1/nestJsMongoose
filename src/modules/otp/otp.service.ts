import { Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Otp } from './entities/otp.entity';
import { Model } from 'mongoose';
import { User } from '../user/entities/user.entity';

@Injectable()
export class OtpService {
  constructor(
    @InjectModel(Otp.name) private readonly otpRepository: Model<Otp>,
    @InjectModel(User.name) private readonly userRepository: Model<User>,
  ) {}
  async create(createOtpDto: CreateOtpDto) {
    return await this.otpRepository.create(createOtpDto);
  }

  async findOne(params: any) {
    const filter = { isUsed: false };
    if (params.otp) {
      filter['otp'] = params.otp;
    }
    if (params.phoneNumber) {
      filter['phoneNumber'] = params.phoneNumber;
    }
    return await this.otpRepository.findOne(filter).sort({ _id: -1 });
  }

  async update(otpObj: Otp) {
    return await otpObj.updateOne({ isUsed: true });
  }

  async updateUserVerified(phoneNumber: number) {
    return await this.userRepository.updateOne(
      { phoneNumber },
      { isPhoneNumberVerified: true },
    );
  }
}
