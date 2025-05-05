import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category, Restaurant, Review, Favorites, OrderItem } from './';

@Entity('menu_item')
export class MenuItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @ManyToOne(() => Category, (category) => category.menuItems)
  category: Category;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menuItems)
  restaurant: Restaurant;

  @OneToMany(() => Review, (review) => review.menuItem)
  reviews: Review[];

  @OneToMany(() => Favorites, (favorites) => favorites.menuItem)
  favorites: Favorites[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.menuItem)
  orderItems: OrderItem[];
}
