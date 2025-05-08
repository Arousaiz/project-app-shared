import { UserRole } from '../enums';
import { Address, Favorites, Order, Review } from './';
export declare class User {
    id: string;
    addressId: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    username: string;
    hashedPassword: string;
    role: UserRole;
    address: Address;
    favorites: Favorites[];
    reviews: Review[];
    orders: Order[];
}
