import { Router } from 'express'

import { CreateCategoryController } from '@/modules/categories/use-cases/createCategory/CreateCategoryController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', createCategoryController.handle)

export { categoriesRoutes }
