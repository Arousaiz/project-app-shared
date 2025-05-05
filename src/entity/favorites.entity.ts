import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User, MenuItem, Restaurant } from './';
@Entity('favorites')
export class Favorites {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.favorites)
  user: User;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.favorites)
  menuItem: MenuItem;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.favorites)
  restaurant: Restaurant;
}
