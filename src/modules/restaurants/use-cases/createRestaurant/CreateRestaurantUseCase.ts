import { inject, injectable } from 'tsyringe'

import { ICreateRestaurantDTO } from '@/modules/restaurants/dtos'
import { IRestaurantsRepository } from '@/modules/restaurants/repositories'

@injectable()
class CreateRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private readonly restaurantsRepository: IRestaurantsRepository
  ) {}

  public async execute(data: ICreateRestaurantDTO) {
    const restaurant = await this.restaurantsRepository.create(data)

    return restaurant
  }
}

export { CreateRestaurantUseCase }
