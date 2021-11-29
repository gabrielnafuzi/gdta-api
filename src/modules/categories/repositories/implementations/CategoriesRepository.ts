import { getRepository, Repository } from 'typeorm'

import { ICreateCategoryDTO } from '@/modules/categories/dtos'
import { Category } from '@/modules/categories/entities/Category'
import { ICategoriesRepository } from '@/modules/categories/repositories/ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private readonly repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name }: ICreateCategoryDTO) {
    const category = this.repository.create({ name })

    await this.repository.save(category)
  }

  async findByName(name: string) {
    const category = await this.repository.findOne({ name })

    return category
  }
}

export { CategoriesRepository }
