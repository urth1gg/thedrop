import { Controller, Post, Body, Get, Query, Headers } from '@nestjs/common';
import { PointsService } from './points.service';
import { CreatePointDto } from './create-points.dto';
import { OrderDto } from './order.dto';
import { ShopifyService } from 'src/shopify/shopify.service';

@Controller('points')
export class PointsController {
    constructor(private pointsService: PointsService, private shopifyService: ShopifyService) { }

    @Post('/order')
    async create(@Body() orderDto: OrderDto, @Headers() headers: any) {

        // let shopifySecret = 'b7c6a35444bfb29d1f6a1f75ee1e6cb6425b14e3caedb4ffb462891f2cf4801b'
        // let shopifyHmac = headers['x-shopify-hmac-sha256'];

        // // Verify the request is from Shopify
        // if (shopifyHmac !== shopifySecret) {
        //     return 'Invalid request';
        // }

        // Calculate points based on total order amount
        const points = Number(orderDto.total_price);

        // Extract necessary data from the Shopify payload
        const createPointDto: CreatePointDto = {
            points: points,
            order_id: orderDto.id, // assuming order_id data is available in the orderDto
            user_id: orderDto.customer.id, // assuming user_id data is available in the orderDto
            action: 'order',
        };

        return this.pointsService.createPoint(createPointDto);
    }

    @Post('/action')
    async createAction(@Body() createPointDto: CreatePointDto) {
        if(createPointDto.action === "instagram_follow") {
            createPointDto.points = 25;

            let existingPoints = await this.pointsService.getPointsByAction(createPointDto.action, createPointDto.user_id);

            if(existingPoints.length > 0) {
                return { error: 'Points already awarded for this action' };
            }
        }

        return this.pointsService.createPoint(createPointDto);
    }


    @Get()
    async findAll(@Query('customer_id') customerId: number) {

        if (!customerId) {
            return 'Customer ID is required';
        }

        const points = await this.pointsService.findAll(customerId);

        if(points.length === 0) {
            return 0;
        }

        const totalPoints = points.reduce((acc, point) => acc + point.points, 0);
        return totalPoints;
    }

    @Get('/action')
    async getPointsByAction(@Query('action') action: string, @Query('customer_id') customerId: number) {
        let points = await this.pointsService.getPointsByAction(action, customerId);

        if(points.length === 0) {
            return [];
        }

        return points;
    }
}