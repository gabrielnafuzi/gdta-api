import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateRestaurantUseCase } from './CreateRestaurantUseCase'

class CreateRestaurantController {
  async handle(request: Request, response: Response) {
    const { name, rate, rate_amount, address, delivery_time } = request.body

    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase)

    const restaurant = await createRestaurantUseCase.execute({
      name,
      rate,
      rate_amount,
      address,
      delivery_time
    })

    return response.status(201).json(restaurant)
  }
}

export { CreateRestaurantController }
