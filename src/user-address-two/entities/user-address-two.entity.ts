import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class UserAddressTwo extends Document {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true, type: MongooseSchema.ObjectId, ref: 'UserAddress' })
  addressId: string;
}

export const UserAddressTwoSchema =
  SchemaFactory.createForClass(UserAddressTwo);
