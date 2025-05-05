import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { MenuItem, Favorites, Address, Order } from './';

@Entity('restaurant')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cuisine: string;

  @Column({ type: 'varchar', length: 13, nullable: false })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  operatingHours: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.restaurant)
  menuItems: MenuItem[];

  @ManyToOne(() => Address, (address) => address.restaurants)
  address: Address;

  @OneToMany(() => Favorites, (favorites) => favorites.restaurant)
  favorites: Favorites[];

  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];
}
