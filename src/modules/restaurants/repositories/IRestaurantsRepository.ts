import { ICreateRestaurantDTO } from '@/modules/restaurants/dtos'
import { Restaurant } from '@/modules/restaurants/entities'

interface IRestaurantsRepository {
  create: (data: ICreateRestaurantDTO) => Promise<Restaurant>
  findById: (id: string) => Promise<Restaurant | undefined>
  findByNameOrDishesInfo: (search: string) => Promise<Restaurant[]>
}

export { IRestaurantsRepository }
