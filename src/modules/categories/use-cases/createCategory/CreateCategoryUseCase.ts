import { inject, injectable } from 'tsyringe'

import { AppError } from '@/errors'
import { ICreateCategoryDTO } from '@/modules/categories/dtos'
import { ICategoriesRepository } from '@/modules/categories/repositories/ICategoriesRepository'

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name }: ICreateCategoryDTO) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    )

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists')
    }

    await this.categoriesRepository.create({ name })
  }
}

export { CreateCategoryUseCase }
