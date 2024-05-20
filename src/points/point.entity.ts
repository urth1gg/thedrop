import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('points')
export class Point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'bigint'})
  user_id: number;

  @Column({ type: 'int' })
  points: number;

  @Column({ type: 'bigint', nullable: true})
  order_id: number;

  @Column({ type: 'varchar', length: 255 })
  action: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  
}