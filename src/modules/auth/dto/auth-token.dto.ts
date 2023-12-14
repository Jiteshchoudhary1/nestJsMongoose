import { IsNotEmpty, IsString } from 'class-validator';

export class AuthTokenDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  _id: string;
}
