import { DeliveryDetails, Restaurant, User } from './';
export declare class Address {
    id: string;
    city: string;
    street: string;
    house: number;
    deliveryDetails: DeliveryDetails[];
    restaurants: Restaurant[];
    users: User[];
}
