import { PartialType } from '@nestjs/swagger';
import { CreateUserAddressTwoDto } from './create-user-address-two.dto';

export class UpdateUserAddressTwoDto extends PartialType(CreateUserAddressTwoDto) {}
