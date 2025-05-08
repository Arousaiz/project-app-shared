import { Address, Order } from './';
import { DeliveryStatus } from '../enums';
export declare class DeliveryDetails {
    id: string;
    deliveryStatus: DeliveryStatus;
    deliveryTime: Date;
    address: Address;
    order: Order;
}
