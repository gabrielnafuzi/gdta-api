import { inject, injectable } from 'tsyringe'

import { ICreateDishDTO } from '@/modules/dishes/dtos'
import { IDishesRepository } from '@/modules/dishes/repositories/IDishesRepository'

@injectable()
class CreateDishUseCase {
  constructor(
    @inject('DishesRepository')
    private readonly dishesRepository: IDishesRepository
  ) {}

  public async execute(data: ICreateDishDTO): Promise<void> {
    this.dishesRepository.create(data)
  }
}

export { CreateDishUseCase }
