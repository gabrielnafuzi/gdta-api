import { Router } from 'express'

import { ensureAuthenticated } from '@/middleware'
import { CreateDishController } from '@/modules/dishes/use-cases/createDish/CreateDishController'

const dishesRoutes = Router()

const createDishController = new CreateDishController()

dishesRoutes.post('/', ensureAuthenticated, createDishController.handle)

export { dishesRoutes }
