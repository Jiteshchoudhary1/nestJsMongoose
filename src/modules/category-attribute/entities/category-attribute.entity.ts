import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';

@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class CategoryAttribute extends Document {
  @Prop({
    required: false,
    default: null,
    // type: [MongooseSchema.ObjectId],
    type: MongooseSchema.Types.ObjectId,
    ref: 'Attribute',
  })
  attributeId: MongooseSchema.Types.ObjectId;

  @Prop({
    required: false,
    default: null,
    type: MongooseSchema.Types.ObjectId,
    ref: 'Category',
  })
  categoryId: MongooseSchema.Types.ObjectId;
}

export const CategoryAttributeSchema =
  SchemaFactory.createForClass(CategoryAttribute);
