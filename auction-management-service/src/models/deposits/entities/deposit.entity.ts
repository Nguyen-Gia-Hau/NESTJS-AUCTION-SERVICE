import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Deposit {
  @PrimaryGeneratedColumn()
  depositId: number;

  @Column()
  auctionSessionId: number;

  @Column()
  userId: number;

  @Column()
  depositAmount: number

  @Column({ default: false })
  delflag: boolean;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column('timestamp', { nullable: true })
  deleted_at: Date;
}