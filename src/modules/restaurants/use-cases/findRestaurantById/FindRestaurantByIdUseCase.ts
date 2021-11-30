import { inject, injectable } from 'tsyringe'

import { AppError } from '@/errors'
import { IRestaurantsRepository } from '@/modules/restaurants/repositories'

@injectable()
class FindRestaurantByIdUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private readonly restaurantsRepository: IRestaurantsRepository
  ) {}

  public async execute(id: string) {
    const restaurant = await this.restaurantsRepository.findById(id)

    if (!restaurant) {
      throw new AppError('Restaurant not found', 404)
    }

    return restaurant
  }
}

export { FindRestaurantByIdUseCase }
