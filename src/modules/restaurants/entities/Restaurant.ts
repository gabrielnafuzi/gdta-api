import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Address } from '../../adresses/entities/Address'
import { Dish } from '../../dishes/entities'

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

  @Column()
  image_url: string

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address

  @Column()
  address_id: string

  @OneToMany(() => Dish, (dish) => dish.restaurant)
  dishes: Dish[]

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Restaurant }
