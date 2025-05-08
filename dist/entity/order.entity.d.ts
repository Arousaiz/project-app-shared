import { DeliveryDetails, OrderItem, Restaurant, User } from './';
import { OrderStatus, PaymentMethod } from '../enums';
export declare class Order {
    id: string;
    price: number;
    discount: number;
    paymentMethod: PaymentMethod;
    orderStatus: OrderStatus;
    orderTime: Date;
    deliveryDetails: DeliveryDetails;
    orderItems: OrderItem[];
    user: User;
    restaurant: Restaurant;
}
