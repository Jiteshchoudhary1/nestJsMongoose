import mongoose from 'mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OtpModule } from './modules/otp/otp.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { SellerModule } from './modules/seller/seller.module';
import { CategoryModule } from './modules/category/category.module';
import { AttributeModule } from './modules/attribute/attribute.module';
import { AttributeValuesModule } from './modules/attribute-values/attribute-values.module';
import { CategoryAttributeModule } from './modules/category-attribute/category-attribute.module';
mongoose.set('debug', true);
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest', {
      connectionFactory: (connection) => {
        // console.log('cccc', connection);
        // connection.plugin(require('mongoose-mpath'));
        return connection;
      },
    }),
    UserModule,
    OtpModule,
    AuthModule,
    SellerModule,
    CategoryModule,
    AttributeModule,
    AttributeValuesModule,
    CategoryAttributeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
