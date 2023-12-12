import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserAddressTwoService } from './user-address-two.service';
import { CreateUserAddressTwoDto } from './dto/create-user-address-two.dto';
import { UpdateUserAddressTwoDto } from './dto/update-user-address-two.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-address-two')
@Controller('user-address-two')
export class UserAddressTwoController {
  constructor(private readonly userAddressTwoService: UserAddressTwoService) {}

  @Post()
  create(@Body() createUserAddressTwoDto: CreateUserAddressTwoDto) {
    return this.userAddressTwoService.create(createUserAddressTwoDto);
  }

  @Get()
  findAll() {
    return this.userAddressTwoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAddressTwoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserAddressTwoDto: UpdateUserAddressTwoDto,
  ) {
    return this.userAddressTwoService.update(+id, updateUserAddressTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAddressTwoService.remove(+id);
  }
}
