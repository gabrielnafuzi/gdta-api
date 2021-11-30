import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindRestaurantByIdUseCase } from './FindRestaurantByIdUseCase'

class FindRestaurantByIdController {
  async handle(request: Request, response: Response) {
    const { restaurantId } = request.params

    const findRestaurantByIdUseCase = container.resolve(
      FindRestaurantByIdUseCase
    )

    const restaurant = await findRestaurantByIdUseCase.execute(restaurantId)

    return response.status(201).json(restaurant)
  }
}

export { FindRestaurantByIdController }
