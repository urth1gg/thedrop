type OrderDto = {
    id: number;
    admin_graphql_api_id: string;
    app_id: number;
    browser_ip: string;
    buyer_accepts_marketing: boolean;
    cancel_reason: null;
    cancelled_at: null;
    cart_token: string;
    checkout_id: number;
    checkout_token: string;
    client_details: {
        accept_language: string;
        browser_height: null;
        browser_ip: string;
        browser_width: null;
        session_hash: null;
        user_agent: string;
    };
    closed_at: null;
    company: null;
    confirmation_number: string;
    confirmed: boolean;
    contact_email: string;
    created_at: string;
    currency: string;
    current_subtotal_price: string;
    current_subtotal_price_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    current_total_additional_fees_set: null;
    current_total_discounts: string;
    current_total_discounts_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    current_total_duties_set: null;
    current_total_price: string;
    current_total_price_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    current_total_tax: string;
    current_total_tax_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    customer_locale: string;
    device_id: null;
    discount_codes: [];
    email: string;
    estimated_taxes: boolean;
    financial_status: string;
    fulfillment_status: null;
    landing_site: string;
    landing_site_ref: null;
    location_id: null;
    merchant_of_record_app_id: null;
    name: string;
    note: null;
    note_attributes: [];
    number: number;
    order_number: number;
    order_status_url: string;
    original_total_additional_fees_set: null;
    original_total_duties_set: null;
    payment_gateway_names: string[];
    phone: null;
    po_number: null;
    presentment_currency: string;
    processed_at: string;
    reference: string;
    referring_site: string;
    source_identifier: string;
    source_name: string;
    source_url: null;
    subtotal_price: string;
    subtotal_price_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    tags: string;
    tax_exempt: boolean;
    tax_lines: [
        {
            price: string;
            rate: number;
            title: string;
            price_set: object;
            channel_liable: boolean;
        }
    ];
    taxes_included: boolean;
    test: boolean;
    token: string;
    total_discounts: string;
    total_discounts_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    total_line_items_price: string;
    total_line_items_price_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    total_outstanding: string;
    total_price: string;
    total_price_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    total_shipping_price_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    total_tax: string;
    total_tax_set: {
        shop_money: { amount: string; currency_code: string };
        presentment_money: { amount: string; currency_code: string };
    };
    total_tip_received: string;
    total_weight: number;
    updated_at: string;
    user_id: null;
    billing_address: {
        first_name: string;
        address1: string;
        phone: null;
        city: string;
        zip: string;
        province: null;
        country: string;
        last_name: string;
        address2: string;
        company: null;
        latitude: null;
        longitude: null;
        name: string;
        country_code: string;
        province_code: null;
    };
    customer: {
        id: number;
        email: string;
        created_at: string;
        updated_at: string;
        first_name: string;
        last_name: string;
        state: string;
        note: null;
        verified_email: boolean;
        multipass_identifier: null;
        tax_exempt: boolean;
        phone: null;
        email_marketing_consent: {
            state: string;
            opt_in_level: string;
            consent_updated_at: null;
        };
        sms_marketing_consent: null;
        tags: string;
        currency: string;
        tax_exemptions: [];
        admin_graphql_api_id: string;
        default_address: {
            id: number;
            customer_id: number;
            first_name: string;
            last_name: string;
            company: null;
            address1: string;
            address2: string;
            city: string;
            province: null;
            country: string;
            zip: string;
            phone: null;
            name: string;
            province_code: null;
            country_code: string;
            country_name: string;
            default: boolean;
        };
    };
    discount_applications: [];
    fulfillments: [];
    line_items: [
        {
            id: number;
            admin_graphql_api_id: string;
            attributed_staffs: [];
            current_quantity: number;
            fulfillable_quantity: number;
            fulfillment_service: string;
            fulfillment_status: null;
            gift_card: boolean;
            grams: number;
            name: string;
            price: string;
            price_set: object;
            product_exists: boolean;
            product_id: number;
            properties: [];
            quantity: number;
            requires_shipping: boolean;
            sku: string;
            taxable: boolean;
            title: string;
            total_discount: string;
            total_discount_set: object;
            variant_id: number;
            variant_inventory_management: string;
            variant_title: string;
            vendor: string;
            tax_lines: Array<any>;
            duties: [];
            discount_allocations: [];
        }
    ];
    payment_terms: null;
    refunds: [];
    shipping_address: {
        first_name: string;
        address1: string;
        phone: null;
        city: string;
        zip: string;
        province: null;
        country: string;
        last_name: string;
        address2: string;
        company: null;
        latitude: number;
        longitude: number;
        name: string;
        country_code: string;
        province_code: null;
    };
    shipping_lines: [
        {
            id: number;
            carrier_identifier: string;
            code: string;
            discounted_price: string;
            discounted_price_set: object;
            is_removed: boolean;
            phone: null;
            price: string;
            price_set: object;
            requested_fulfillment_service_id: null;
            source: string;
            title: string;
            tax_lines: [];
            discount_allocations: [];
        }
    ];
}

export { OrderDto }