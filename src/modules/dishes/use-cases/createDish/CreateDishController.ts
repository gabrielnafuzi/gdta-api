import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AppError } from '@/errors'

import { CreateDishUseCase } from './CreateDishUseCase'

class CreateDishController {
  async handle(request: Request, response: Response) {
    const { description, image, name, price, restaurantId } = request.body

    const createdishUseCase = container.resolve(CreateDishUseCase)

    try {
      const dish = await createdishUseCase.execute({
        description,
        image,
        name,
        price,
        restaurant_id: restaurantId
      })

      return response.status(201).json(dish)
    } catch (err) {
      throw new AppError('Unexpected error while creating new dish.')
    }
  }
}

export { CreateDishController }
