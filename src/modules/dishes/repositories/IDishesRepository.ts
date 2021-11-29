import { ICreateDishDTO } from '@/modules/dishes/dtos'
import { Dish } from '@/modules/dishes/entities'

interface IDishesRepository {
  create: (data: ICreateDishDTO) => Promise<void>
  findAllDishesByRestaurantId: (restaurantId: string) => Promise<Dish[]>
}

export { IDishesRepository }
