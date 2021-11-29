import { Router } from 'express'

import { CreateDishController } from '@/modules/dishes/use-cases/createDish/CreateDishController'

const dishesRoutes = Router()

const createDishController = new CreateDishController()

dishesRoutes.post('/', createDishController.handle)

export { dishesRoutes }
