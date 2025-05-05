import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { DeliveryDetails, Restaurant, User } from './';
@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  city: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  street: string;

  @Column({ type: 'int', width: 4, nullable: false })
  house: number;

  @OneToMany(
    () => DeliveryDetails,
    (deliveryDetails) => deliveryDetails.address,
  )
  deliveryDetails: DeliveryDetails[];

  @OneToMany(() => Restaurant, (restaurant) => restaurant.address)
  restaurants: Restaurant[];

  @OneToMany(() => User, (user) => user.address)
  users: User[];
}
