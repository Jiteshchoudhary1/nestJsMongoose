import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class UserAddress extends Document {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true, type: MongooseSchema.ObjectId, ref: 'User' })
  userId: string;
}

export const UserAddressSchema = SchemaFactory.createForClass(UserAddress);
UserAddressSchema.virtual('addressTwo', {
  ref: 'UserAddressTwo',
  localField: '_id',
  foreignField: 'addressId',
});
