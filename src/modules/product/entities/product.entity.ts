import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { AttributeValue } from 'src/modules/attribute-values/entities/attribute-value.entity';
import { Attribute } from 'src/modules/attribute/entities/attribute.entity';
import { Category } from 'src/modules/category/entities/category.entity';
import { User } from 'src/modules/user/entities/user.entity';
@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class ProductAttribute extends Document {
  @Prop({
    required: false,
    type: MongooseSchema.ObjectId,
    ref: 'Attribute',
  })
  attributeId: Attribute;

  @Prop({
    required: false,
    type: MongooseSchema.ObjectId,
    ref: 'AttributeValue',
  })
  attributeValueId: AttributeValue;
}

export const ProductAttributeSchema =
  SchemaFactory.createForClass(ProductAttribute);

@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class Product extends Document {
  @Prop({ required: false })
  name: string;
  @Prop({
    required: false,
    type: MongooseSchema.ObjectId,
    ref: 'Category',
  })
  categoryId: Category;
  @Prop({ required: false })
  price: string;
  @Prop({ required: false, type: MongooseSchema.ObjectId, ref: 'User' })
  seller: User;
  @Prop({ type: [ProductAttribute] })
  attributes: ProductAttribute[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
