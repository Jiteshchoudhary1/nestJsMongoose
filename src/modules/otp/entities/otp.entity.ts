import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class Otp extends Document {
  @Prop({ required: true })
  phoneNumber: number;

  @Prop({ required: true })
  otp: number;

  @Prop({ required: false })
  otpFor: string; //login forgotPassword register delivery order confirmation etc like that okay

  @Prop({ required: false, default: false })
  isUsed: boolean;

  @Prop({ required: false, type: MongooseSchema.ObjectId, ref: 'User' })
  userId: string;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
