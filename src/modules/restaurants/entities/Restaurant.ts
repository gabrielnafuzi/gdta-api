import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Address } from '@/modules/adresses/entities/Address'

@Entity('restaurants')
class Restaurant {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  rate: number

  @Column()
  rate_amount: number

  @Column()
  delivery_time: string

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address

  @Column()
  address_id: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Restaurant }
