import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(newUser);
    }

    async getUsersById(userId: number): Promise<User> {
        return this.usersRepository.findOne({ where: { user_id: userId } });
    }

    async getUsersByReferralCode(referralCode: string): Promise<User> {
        return this.usersRepository.findOne({ where: { referral_code: referralCode } });
    }

}