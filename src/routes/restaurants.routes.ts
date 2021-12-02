import { Router } from 'express'

import { ensureAuthenticated } from '@/middleware'
import { CreateRestaurantController } from '@/modules/restaurants/use-cases/createRestaurant'
import { FindAllRestaurantsController } from '@/modules/restaurants/use-cases/findAllRestaurants'
import { FindRestaurantByIdController } from '@/modules/restaurants/use-cases/findRestaurantById'

const restaurantsRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const findRestaurantByIdController = new FindRestaurantByIdController()
const findAllRestaurantsController = new FindAllRestaurantsController()

restaurantsRoutes.post(
  '/',
  ensureAuthenticated,
  createRestaurantController.handle
)
restaurantsRoutes.get(
  '/',
  ensureAuthenticated,
  findAllRestaurantsController.handle
)
restaurantsRoutes.get(
  '/:restaurantId',
  ensureAuthenticated,
  findRestaurantByIdController.handle
)

export { restaurantsRoutes }
