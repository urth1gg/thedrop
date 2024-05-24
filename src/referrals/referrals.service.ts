import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Referral } from './referral.entity';
import { CreateReferralDto } from './create-referral.dto';

@Injectable()
export class ReferralsService {
    constructor(
        @InjectRepository(Referral)
        private referralsRepository: Repository<Referral>,
    ) { }

    async createReferral(createReferralDto: CreateReferralDto): Promise<Referral> {
        const newReferral = this.referralsRepository.create(createReferralDto);
        let res = await this.referralsRepository.save(newReferral);
        console.log(res);
        return res;
    }
}

