import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserLoginDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  comparePassword,
  passwordEncryption,
} from 'src/modules/helper/encryption';
import { generateOTP } from 'src/modules/helper/utils/exception-utils';
import { OtpService } from '../otp/otp.service';
import { AuthService } from '../auth/auth.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly otpService: OtpService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signup')
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await passwordEncryption(createUserDto.password);
    const isPhoneNumberExits = await this.userService.findOne({
      phoneNumber: createUserDto.phoneNumber,
    });
    if (isPhoneNumberExits) {
      if (isPhoneNumberExits.isPhoneNumberVerified) {
        throw new BadRequestException('Phone no already register');
      } else {
        const otp = generateOTP();
        const otpObject = {
          userId: isPhoneNumberExits._id,
          phoneNumber: isPhoneNumberExits.phoneNumber,
          otp,
          otpFor: 'register',
        };
        await this.otpService.create(otpObject);
        return 'User registered already otp send successfully';
      }
    } else {
      const user = await this.userService.create(createUserDto);
      const otp = generateOTP();
      const otpObject = {
        userId: user._id,
        phoneNumber: user.phoneNumber,
        otp,
        otpFor: 'register',
      };
      await this.otpService.create(otpObject);
      return 'User registered successfully otp send';
    }
  }

  @Post('/login')
  @ApiOperation({ description: 'This Api is used for user login' })
  async login(@Body() loginDto: UserLoginDto) {
    const isUserExists = await this.userService.findOne(loginDto);
    if (!isUserExists) {
      throw new BadRequestException('Phone number not registered');
    }
    if (isUserExists.isPhoneNumberVerified === false) {
      throw new BadRequestException('Phone number is not verified');
    }
    const isPasswordValid = await comparePassword(
      loginDto.password,
      isUserExists.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }
    const token = await this.authService.generateToken({
      _id: isUserExists._id,
      firstName: isUserExists.firstName,
      lastName: isUserExists.lastName,
    });
    return token;
  }
}
