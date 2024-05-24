import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { Point } from './point.entity';
import { ShopifyService } from 'src/shopify/shopify.service';

@Module({
  imports: [TypeOrmModule.forFeature([Point])],
  controllers: [PointsController],
  providers: [PointsService, ShopifyService],
  exports: [PointsService, ShopifyService],
})

export class PointsModule {}