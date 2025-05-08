import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { DeliveryDetails, OrderItem, Restaurant, User } from './';
import { OrderStatus, PaymentMethod } from '../enums';

@Entity('Order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'float', nullable: true })
  discount: number;

  @Column({ type: 'enum', enum: PaymentMethod, nullable: false })
  paymentMethod: PaymentMethod;

  @Column({ type: 'enum', enum: OrderStatus, nullable: false })
  orderStatus: OrderStatus;

  @CreateDateColumn()
  orderTime: Date;

  @OneToOne(() => DeliveryDetails, (deliveryDetails) => deliveryDetails.order, {
    cascade: true,
  })
  deliveryDetails: DeliveryDetails;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    cascade: true,
  })
  orderItems: OrderItem[];

  @OneToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  restaurant: Restaurant;
}
