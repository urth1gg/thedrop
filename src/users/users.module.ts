import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { PointsService } from 'src/points/points.service';
import { Point } from 'src/points/point.entity';
import { ReferralsService } from 'src/referrals/referrals.service';
import { Referral } from 'src/referrals/referral.entity';
import { ShopifyService } from 'src/shopify/shopify.service';
import { MailerSendService } from 'src/mailersend/mailersend.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Point]), TypeOrmModule.forFeature([Referral])],
  controllers: [UsersController],
  providers: [UsersService, PointsService, ReferralsService, ShopifyService, MailerSendService],
  exports: [UsersService],
})

export class UsersModule {}