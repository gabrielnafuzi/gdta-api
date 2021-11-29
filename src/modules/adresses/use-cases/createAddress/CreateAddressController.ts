import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateAddressUseCase } from './CreateAddressUseCase'

class CreateAddressController {
  async handle(request: Request, response: Response) {
    const { street, number, neighborhood, complement, zipcode, city, state } =
      request.body

    const createAddressUseCase = container.resolve(CreateAddressUseCase)

    const address = await createAddressUseCase.execute({
      street,
      number,
      neighborhood,
      complement,
      zipcode,
      city,
      state
    })

    return response.status(201).json(address)
  }
}

export { CreateAddressController }
