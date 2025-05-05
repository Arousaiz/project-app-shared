import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { MenuItem, User } from './';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  text: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.reviews)
  menuItem: MenuItem;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
