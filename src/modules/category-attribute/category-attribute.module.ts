import { Module } from '@nestjs/common';
import { CategoryAttributeService } from './category-attribute.service';
import { CategoryAttributeController } from './category-attribute.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryAttribute } from './entities/category-attribute.entity';
import { CategorySchema } from '../category/entities/category.entity';
import {
  CategoryAttributeCopy,
  CategoryAttributeCopySchema,
} from './entities/category-attribute.entity copy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryAttribute.name, schema: CategorySchema },
      { name: CategoryAttributeCopy.name, schema: CategoryAttributeCopySchema },
    ]),
  ],
  controllers: [CategoryAttributeController],
  providers: [CategoryAttributeService],
})
export class CategoryAttributeModule {}
