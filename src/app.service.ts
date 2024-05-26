import { Injectable } from '@nestjs/common';
import { ShopifyService } from './shopify/shopify.service';
import { MailerSendService } from './mailersend/mailersend.service';

@Injectable()
export class AppService {
  constructor(private shopifyService: ShopifyService, private mailersendService: MailerSendService) {}

  async getHello() {
      // return this.shopifyService.getCustomerTags(8068052025676);
      // return this.shopifyService.addTagToCustomer(8068052025676, 251);
      // let res = this.mailersendService.sendEmail('jevremovicdjordje97@gmail.com', 'Djordje', 'Test', 'Test');

      // console.log(res);
      // return res;
      // let res = await this.shopifyService.verifyEmail(8068052025676);
      // let res = await this.shopifyService.getCustomerEmail(8082024792396);
      // console.log(res);
      // let res = await this.shopifyService.getCustomerTags(8082024792396);
      // return res;
  }
}
