import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeController } from './attribute.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attribute, AttributeSchema } from './entities/attribute.entity';
import {
  AttributeValue,
  AttributeValueSchema,
} from '../attribute-values/entities/attribute-value.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attribute.name, schema: AttributeSchema },
      { name: AttributeValue.name, schema: AttributeValueSchema },
    ]),
  ],
  controllers: [AttributeController],
  providers: [AttributeService],
})
export class AttributeModule {}
