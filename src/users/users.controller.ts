import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { PointsService } from '../points/points.service';
import { CreatePointDto } from '../points/create-points.dto';
import { ReferralsService } from '../referrals/referrals.service';
import { CreateReferralDto } from 'src/referrals/create-referral.dto';
import { MailerSendService } from 'src/mailersend/mailersend.service';
import { ShopifyService } from 'src/shopify/shopify.service';

function generateRandomNumber() {
    return Math.floor(1000000 + Math.random() * 9000000);
}

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService, private pointsService: PointsService, private referralsService: ReferralsService, private shopifyService: ShopifyService, private mailersendService: MailerSendService) { }

    @Post("/")
    async create(@Body() createUserDto: CreateUserDto) {
        let userWhoReferred = null;

        if (createUserDto.referral_code) {
            let user = await this.usersService.getUsersByReferralCode(createUserDto.referral_code);

            if (user) {
                userWhoReferred = user;
            }
        }

        createUserDto.referral_code = generateRandomNumber().toString();


        try {
            let res = await this.usersService.createUser(createUserDto);
            
            if (userWhoReferred) {
                let createPointDto = {
                    points: 50,
                    user_id: createUserDto.user_id,
                    action: 'registration_with_referral_code',
                    order_id: null
                } as CreatePointDto;

                let createPointsDtoForReferrer = {
                    points: 100,
                    user_id: userWhoReferred.user_id,
                    action: 'referred_user_registration',
                    order_id: null
                } as CreatePointDto;

                await this.pointsService.createPoint(createPointsDtoForReferrer);
                await this.pointsService.createPoint(createPointDto);

                let createReferralDto = {
                    referred_by: Number(userWhoReferred.user_id),
                    user_id: Number(createUserDto.user_id)
                } as CreateReferralDto;


                let { email, name } = await this.shopifyService.getCustomerEmailAndName(userWhoReferred.user_id);

                if(email){
                    await this.mailersendService.sendEmail(email, email, 'Congrats - you have a new referral!', `Congrats ${name}, You have a new referral! User has just registered using your referral code. You have been awarded 100 points for this referral.`);
                }
                await this.referralsService.createReferral(createReferralDto);
            }else{
                let createPointDto = {
                    points: 50,
                    user_id: createUserDto.user_id,
                    action: 'registration_without_referral_code',
                    order_id: null
                } as CreatePointDto;

                await this.pointsService.createPoint(createPointDto);
            }

            return res;
        } catch (e) {
            return e.code;
        }
    }

    @Get("/")
    async getUsers(@Query('userId') userId: number, @Query('referral_code') referralCode: string) {
        if (referralCode) {
            let user = await this.usersService.getUsersByReferralCode(referralCode);
            
            console.log(user);
            if (!user) {
                return { error: "Invalid referral code - the code should have the format XXXXXXX. Leave empty if you don't have a referral." };
            }

            return user;
        }

        if (userId) {
            return this.usersService.getUsersById(userId);
        }
    }

}