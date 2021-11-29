import { ICreateCategoryDTO } from '@/modules/categories/dtos'
import { Category } from '@/modules/categories/entities/Category'

interface ICategoriesRepository {
  create: ({ name }: ICreateCategoryDTO) => Promise<void>
  findByName: (name: string) => Promise<Category | undefined>
}

export { ICategoriesRepository }
