import { Injectable } from '@nestjs/common';
const Shopify = require('shopify-api-node');

@Injectable()
export class ShopifyService {
    private shopify: typeof Shopify;

    constructor() {
        this.shopify = new Shopify({
            shopName: 'a719bf-ad',
            accessToken: process.env.SHOPIFY_ACCESS_TOKEN ?? ''
        });
    }

    getCustomerLevel(points: number): string {
        if (points >= 1000) {
            return 'L5-Discount-Tag';
        } else if (points >= 500) {
            return 'L4-Discount-Tag';
        } else if (points >= 250) {
            return 'L3-Discount-Tag';
        } else if (points >= 100) {
            return 'L2-Discount-Tag';
        } else if (points >= 50){
            return 'L1-Discount-Tag';
        }else{
            return 'L0-Discount-Tag';
        }
    }

    async getCustomerTags(customerId: number): Promise<string[]> {
        return this.shopify.customer.get(customerId)
    }

    async addTagToCustomer(customerId, points: number): Promise<any> {
        const customer = await this.shopify.customer.get(customerId);

        if(!customer) {
            return null;
        }

        const existingTags = customer.tags.split(', ');


        let tag = this.getCustomerLevel(points);

        if (!existingTags.includes(tag)) {

            let newTags = existingTags.filter((tag: string) => !tag.includes('Discount-Tag'));

            newTags.push(tag);
            const updatedCustomer = await this.shopify.customer.update(customerId, {
                tags: newTags.join(', ')
            });
            return updatedCustomer;
        }

        return customer;
    }
}