import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { PointsService } from 'src/points/points.service';
import { Point } from 'src/points/point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Point])],
  controllers: [UsersController],
  providers: [UsersService, PointsService],
  exports: [UsersService],
})

export class UsersModule {}