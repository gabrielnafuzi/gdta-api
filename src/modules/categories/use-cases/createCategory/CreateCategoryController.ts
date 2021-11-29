import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    await createCategoryUseCase.execute({ name })

    return response.status(201).send()
  }
}

export { CreateCategoryController }
