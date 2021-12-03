import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Restaurant } from '../../restaurants/entities'

@Entity('dishes')
class Dish {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  description: string

  @Column()
  image: string

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.dishes)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant

  @Column()
  restaurant_id: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Dish }
