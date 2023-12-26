import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { OtpService } from './otp.service';
import { ResendOtpDto, VerifyOtpDto } from './dto/create-otp.dto';
import { ApiTags } from '@nestjs/swagger';
import { generateOTP } from '../helper/utils/exception-utils';

@ApiTags('otp')
@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('/verify')
  async create(@Body() verifyOtpDto: VerifyOtpDto) {
    const isOtpValid = await this.otpService.findOne(verifyOtpDto);
    if (!isOtpValid) {
      throw new BadRequestException('Invalid otp');
    }
    await this.otpService.updateUserVerified(isOtpValid.phoneNumber);
    return await this.otpService.update(isOtpValid);
  }

  @Post('/resend')
  async resendOtp(@Body() resendOtpDto: ResendOtpDto) {
    const otp = generateOTP();
    const otpObject = {
      phoneNumber: resendOtpDto.phoneNumber,
      otp,
      otpFor: 'resend',
    };
    await this.otpService.create(otpObject);
    return 'Otp resend successfully';
  }
}
