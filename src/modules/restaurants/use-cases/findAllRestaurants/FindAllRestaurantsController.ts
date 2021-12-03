import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindAllRestaurantsUseCase } from './FindAllRestaurantsUseCase'

class FindAllRestaurantsController {
  async handle(request: Request, response: Response) {
    const { search } = request.query

    const findAllRestaurantsUseCase = container.resolve(
      FindAllRestaurantsUseCase
    )

    const restaurants = await findAllRestaurantsUseCase.execute(
      search as string
    )

    const restaurantsFormatted = restaurants.map(
      ({ dishes, ...restaurant }) => ({
        ...restaurant
      })
    )

    return response.status(200).json(restaurantsFormatted)
  }
}

export { FindAllRestaurantsController }
