import { MenuItem, Favorites, Address, Order } from './';
export declare class Restaurant {
    id: string;
    name: string;
    cuisine: string;
    phone: string;
    operatingHours: string;
    rating: number;
    menuItems: MenuItem[];
    address: Address;
    favorites: Favorites[];
    orders: Order[];
}
