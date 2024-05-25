import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointsModule } from './points/points.module';
import { UsersModule } from './users/users.module';
import { ShopifyService } from './shopify/shopify.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER_THEDROP,
      password: process.env.DB_PASS_THEDROP,
      database: process.env.DB_NAME_THEDROP,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      connectorPackage: 'mysql2'
    }),
    PointsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ShopifyService],
})
export class AppModule {}