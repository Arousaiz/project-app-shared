import { Category, Restaurant, Review, Favorites, OrderItem } from './';
export declare class MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    restaurant: Restaurant;
    reviews: Review[];
    favorites: Favorites[];
    orderItems: OrderItem[];
}
