import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @Column({type: 'bigint', nullable: false, primary: true})
  user_id: number;
  
  @Column({ type: 'varchar', length: 255 })
  referral_code: string;
}