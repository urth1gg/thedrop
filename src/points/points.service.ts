import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePointDto } from './create-points.dto';
import { Point } from './point.entity';

@Injectable()
export class PointsService {
    constructor(
        @InjectRepository(Point)
        private pointsRepository: Repository<Point>,
    ) { }

    async createPoint(createPointDto: CreatePointDto): Promise<Point> {
        const newPoint = this.pointsRepository.create(createPointDto);
        return this.pointsRepository.save(newPoint);
    }

    async findAll(customerId: number): Promise<Point[]> {
        return this.pointsRepository.find({ where: { user_id: customerId } });
    }
}