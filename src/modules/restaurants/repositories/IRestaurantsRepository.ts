import { ICreateRestaurantDTO } from '@/modules/restaurants/dtos'
import { Restaurant } from '@/modules/restaurants/entities'

interface IRestaurantsRepository {
  create: (data: ICreateRestaurantDTO) => Promise<Restaurant>
  findById: (id: string) => Promise<Restaurant | undefined>
  findAll: (search: string) => Promise<Restaurant[]>
  findByName: (name: string) => Promise<Restaurant | undefined>
}

export { IRestaurantsRepository }
