import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Attribute } from 'src/modules/attribute/entities/attribute.entity';
import { Category } from 'src/modules/category/entities/category.entity';

@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class CategoryAttribute extends Document {
  @Prop({
    required: false,
    type: [MongooseSchema.ObjectId],
    ref: 'Attribute',
  })
  attributeId: Attribute[];

  @Prop({
    required: false,
    type: MongooseSchema.ObjectId,
    ref: 'Category',
  })
  categoryId: Category;
}

export const CategoryAttributeSchema =
  SchemaFactory.createForClass(CategoryAttribute);
