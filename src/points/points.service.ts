import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePointDto } from './create-points.dto';
import { Point } from './point.entity';
import { ShopifyService } from 'src/shopify/shopify.service';

@Injectable()
export class PointsService {
    constructor(
        @InjectRepository(Point)
        private pointsRepository: Repository<Point>,
        private shopifyService: ShopifyService,
    ) { }

    async createPoint(createPointDto: CreatePointDto): Promise<Point> {
        const newPoint = this.pointsRepository.create(createPointDto);
        
        // Add points to Shopify customer   

        let points = await this.findAll(createPointDto.user_id);

        if(points.length > 0) {
            let totalPoints = 0;
            points.forEach(point => {
                totalPoints += point.points;
            });

            await this.shopifyService.addTagToCustomer(createPointDto.user_id, totalPoints);
        }

        return this.pointsRepository.save(newPoint);
    }

    async findAll(customerId: number): Promise<Point[]> {
        return this.pointsRepository.find({ where: { user_id: customerId } });
    }

    async getPointsByAction(action: string, customerId: number): Promise<Point[]> {
        return this.pointsRepository.find({ where: { action: action, user_id: customerId } });
    }
}