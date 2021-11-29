import { getRepository, Repository } from 'typeorm'

import { ICreateDishDTO } from '@/modules/dishes/dtos'
import { Dish } from '@/modules/dishes/entities'
import { IDishesRepository } from '@/modules/dishes/repositories/IDishesRepository'

class DishesRepository implements IDishesRepository {
  private readonly repository: Repository<Dish>

  constructor() {
    this.repository = getRepository(Dish)
  }

  async create(data: ICreateDishDTO) {
    const dish = this.repository.create(data)

    await this.repository.save(dish)
  }

  async findAllDishesByRestaurantId(restaurantId: string) {
    const dishes = await this.repository.find({
      where: { restaurant_id: restaurantId }
    })

    return dishes
  }
}

export { DishesRepository }
