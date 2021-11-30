import { Router } from 'express'

import { CreateRestaurantController } from '@/modules/restaurants/use-cases/createRestaurant'

const restaurantsRoutes = Router()

const createRestaurantController = new CreateRestaurantController()

restaurantsRoutes.post('/', createRestaurantController.handle)

export { restaurantsRoutes }
