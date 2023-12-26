import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Attribute } from 'src/modules/attribute/entities/attribute.entity';

@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class AttributeValue extends Document {
  @Prop({ required: false })
  value: string;

  @Prop({
    required: false,
    default: null,
    type: MongooseSchema.ObjectId,
    ref: 'Attribute',
  })
  attributeId: Attribute;
}
export const AttributeValueSchema =
  SchemaFactory.createForClass(AttributeValue);
