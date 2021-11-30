import { inject, injectable } from 'tsyringe'

import { IRestaurantsRepository } from '@/modules/restaurants/repositories'

@injectable()
class FindAllRestaurantsUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private readonly restaurantsRepository: IRestaurantsRepository
  ) {}

  public async execute(search: string) {
    const restaurants = await this.restaurantsRepository.findAll(search)

    return restaurants
  }
}

export { FindAllRestaurantsUseCase }
