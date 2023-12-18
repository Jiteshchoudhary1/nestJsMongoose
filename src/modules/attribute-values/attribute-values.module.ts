import { Module } from '@nestjs/common';
import { AttributeValuesService } from './attribute-values.service';
import { AttributeValuesController } from './attribute-values.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AttributeValue } from './entities/attribute-value.entity';
import { AttributeSchema } from '../attribute/entities/attribute.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AttributeValue.name, schema: AttributeSchema },
    ]),
  ],
  controllers: [AttributeValuesController],
  providers: [AttributeValuesService],
})
export class AttributeValuesModule {}
