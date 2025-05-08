import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Address, Order } from './';
import { DeliveryStatus } from '../enums';

@Entity('delivery_details')
export class DeliveryDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: DeliveryStatus,
  })
  deliveryStatus: DeliveryStatus;

  @Column({ type: 'timestamptz', nullable: true })
  deliveryTime: Date;

  @ManyToOne(() => Address, (address) => address.deliveryDetails, {
    cascade: true,
  })
  address: Address;

  @OneToOne(() => Order, (order) => order.deliveryDetails)
  order: Order;
}
