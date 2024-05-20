import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { PointsService } from '../points/points.service';
import { CreatePointDto } from '../points/create-points.dto';
function generateRandomNumber() {
    return Math.floor(1000000 + Math.random() * 9000000);
}

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService, private pointsService: PointsService) { }

    @Post("/")
    async create(@Body() createUserDto: CreateUserDto) {
        createUserDto.referral_code = generateRandomNumber().toString();

        let createPointDto = {
            points: 100,
            user_id: createUserDto.user_id,
            action: 'registration',
            order_id: null
        };

        try{
            let res = await this.usersService.createUser(createUserDto);
            await this.pointsService.createPoint(createPointDto);
            return res;
        }catch(e){
            return e.code;
        }
    }

}