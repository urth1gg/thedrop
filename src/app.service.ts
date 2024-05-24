import { Injectable } from '@nestjs/common';
import { ShopifyService } from './shopify/shopify.service';

@Injectable()
export class AppService {
  constructor(private shopifyService: ShopifyService) {}

  async getHello() {
      // return this.shopifyService.getCustomerTags(8068052025676);
      // return this.shopifyService.addTagToCustomer(8068052025676, 251);
  }
}
