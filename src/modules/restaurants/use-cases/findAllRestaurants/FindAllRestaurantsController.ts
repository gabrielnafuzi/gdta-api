import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindAllRestaurantsUseCase } from './FindAllRestaurantsUseCase'

class FindAllRestaurantsController {
  async handle(request: Request, response: Response) {
    const { search } = request.body

    const findAllRestaurantsUseCase = container.resolve(
      FindAllRestaurantsUseCase
    )

    const restaurant = await findAllRestaurantsUseCase.execute(search)

    return response.status(200).json(restaurant)
  }
}

export { FindAllRestaurantsController }
