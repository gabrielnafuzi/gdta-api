import { Router } from 'express'

import { ensureAuthenticated } from '@/middleware'
import { CreateCategoryController } from '@/modules/categories/use-cases/createCategory/CreateCategoryController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', ensureAuthenticated, createCategoryController.handle)

export { categoriesRoutes }
