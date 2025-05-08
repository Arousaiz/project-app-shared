import { MenuItem, User } from './';
export declare class Review {
    id: string;
    text: string;
    rating: number;
    menuItem: MenuItem;
    user: User;
    createdAt: Date;
}
