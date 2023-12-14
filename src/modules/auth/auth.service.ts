import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import configuration from 'src/config/configuration';
import { AuthTokenDto } from './dto/auth-token.dto';
import { User } from '../user/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const { secret, expiresIn } = configuration.resetPasswordConfig;
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<User>,
    private jwtService: JwtService,
  ) {}

  async generateToken(payload: AuthTokenDto) {
    return await this.jwtService.signAsync(payload);
  }

  async getUserBasedOnToken(payload: any): Promise<User> {
    return await this.userRepository.findOne({
      _id: payload._id,
    });
  }

  async generateResetPasswordToken() {
    return await this.jwtService.signAsync({ secret }, { expiresIn });
  }

  async verifyResetPasswordToken(token: string) {
    return await this.jwtService.verify(token);
  }
}
