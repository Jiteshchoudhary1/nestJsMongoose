import { Test, TestingModule } from '@nestjs/testing';
import { UserAddressTwoController } from './user-address-two.controller';
import { UserAddressTwoService } from './user-address-two.service';

describe('UserAddressTwoController', () => {
  let controller: UserAddressTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAddressTwoController],
      providers: [UserAddressTwoService],
    }).compile();

    controller = module.get<UserAddressTwoController>(UserAddressTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
