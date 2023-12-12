import { Module } from '@nestjs/common';
import { UserAddressTwoService } from './user-address-two.service';
import { UserAddressTwoController } from './user-address-two.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserAddressTwo,
  UserAddressTwoSchema,
} from './entities/user-address-two.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserAddressTwo.name, schema: UserAddressTwoSchema },
    ]),
  ],
  controllers: [UserAddressTwoController],
  providers: [UserAddressTwoService],
})
export class UserAddressTwoModule {}
