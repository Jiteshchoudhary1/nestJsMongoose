import { Module } from '@nestjs/common';
import { CategoryAttributeService } from './category-attribute.service';
import { CategoryAttributeController } from './category-attribute.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryAttribute,
  CategoryAttributeSchema,
} from './entities/category-attribute.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryAttribute.name, schema: CategoryAttributeSchema },
    ]),
  ],
  controllers: [CategoryAttributeController],
  providers: [CategoryAttributeService],
})
export class CategoryAttributeModule {}
