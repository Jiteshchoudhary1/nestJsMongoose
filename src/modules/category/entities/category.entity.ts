import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import * as MpathPlugin from 'mongoose-mpath';

export type MenuDocument = HydratedDocument<Category>;

@Schema()
export class Ancestors extends Document {
  @Prop({
    required: false,
    default: null,
    type: MongooseSchema.ObjectId,
    ref: 'Category',
  })
  _id: MongooseSchema.Types.ObjectId;
  @Prop({ required: false })
  name: string;
}
export const ancestorsSchema = SchemaFactory.createForClass(Ancestors);

@Schema({
  strictQuery: false,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true,
})
export class Category extends Document {
  @Prop({ required: false })
  name: string;

  @Prop({
    required: false,
    default: null,
    type: MongooseSchema.ObjectId,
    ref: 'Category',
  })
  parent: MongooseSchema.Types.ObjectId;

  @Prop({ type: [ancestorsSchema] })
  ancestors: Ancestors[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
