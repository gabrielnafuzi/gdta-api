import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateRestaurantUseCase } from './CreateRestaurantUseCase'

class CreateRestaurantController {
  async handle(request: Request, response: Response) {
    const { name, rate, rate_amount, address, delivery_time, image_url } =
      request.body

    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase)

    const restaurant = await createRestaurantUseCase.execute({
      name,
      rate,
      rate_amount,
      address,
      delivery_time,
      image_url
    })

    return response.status(201).json(restaurant)
  }
}

export { CreateRestaurantController }
