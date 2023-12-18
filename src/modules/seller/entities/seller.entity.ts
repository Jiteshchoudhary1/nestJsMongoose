import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class Seller extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: true, unique: true })
  phoneNumber: number;

  @Prop({ required: false, default: false })
  isEmailVerified: boolean;

  @Prop({ required: false, default: false })
  isPhoneNumberVerified: boolean;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false, default: false })
  isPasswordSet: boolean;

  @Prop({ required: false })
  profileImage: string;

  @Prop({ required: false, default: '' })
  resetPasswordToken: string;

  @Prop({ required: false, default: false })
  isSellerApproved: boolean; //its up
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
// UserSchema.virtual('address', {
//   ref: 'UserAddress',
//   localField: '_id',
//   foreignField: 'userId',
// });
