import { inject, injectable } from 'tsyringe'

import { AppError } from '@/errors'
import { ICreateRestaurantDTO } from '@/modules/restaurants/dtos'
import { IRestaurantsRepository } from '@/modules/restaurants/repositories'

@injectable()
class CreateRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private readonly restaurantsRepository: IRestaurantsRepository
  ) {}

  public async execute(data: ICreateRestaurantDTO) {
    const restaurantAlreadyExists = await this.restaurantsRepository.findByName(
      data.name
    )

    if (restaurantAlreadyExists) {
      throw new AppError('Restaurant already exists')
    }

    const restaurant = await this.restaurantsRepository.create(data)

    return restaurant
  }
}

export { CreateRestaurantUseCase }
