import { Test, TestingModule } from '@nestjs/testing';
import { UserAddressTwoService } from './user-address-two.service';

describe('UserAddressTwoService', () => {
  let service: UserAddressTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAddressTwoService],
    }).compile();

    service = module.get<UserAddressTwoService>(UserAddressTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
