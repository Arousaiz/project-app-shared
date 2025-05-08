import { Order, MenuItem } from './';
export declare class OrderItem {
    id: string;
    menuItemId: string;
    price: number;
    count: number;
    order: Order;
    menuItem: MenuItem;
}
