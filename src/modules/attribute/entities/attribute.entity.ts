import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';

@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class Attribute extends Document {
  @Prop({ required: false })
  name: string;
}
export const AttributeSchema = SchemaFactory.createForClass(Attribute);

AttributeSchema.virtual('attributeValue', {
  ref: 'AttributeValue',
  localField: '_id',
  foreignField: 'attributeId',
});
