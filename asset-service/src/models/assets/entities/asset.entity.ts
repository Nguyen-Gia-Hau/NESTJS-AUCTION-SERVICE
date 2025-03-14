
import { Image } from 'src/models/images/entities/image.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  assetID: number;

  @Column()
  userID: number; // must check at api-gateway

  @Column()
  assetName: string;

  @Column()
  mainImage: string;

  @Column('text')
  assetDescription: string;

  @Column()
  assetPrice: number;

  @Column()
  address: string;

  @Column()
  inspectorID: number; // must check at api-gateway

  @Column()
  assetTypeID: number;

  @Column()
  assetStatusID: number;

  @Column({ default: false })
  delflag: boolean;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column('timestamp', { nullable: true })
  deleted_at: Date;

  @OneToMany(() => Image, image => image.asset, { cascade: true })
  images: Image[];
}

