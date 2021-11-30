import { Router } from 'express'

import { CreateRestaurantController } from '@/modules/restaurants/use-cases/createRestaurant'
import { FindAllRestaurantsController } from '@/modules/restaurants/use-cases/findAllRestaurants'
import { FindRestaurantByIdController } from '@/modules/restaurants/use-cases/findRestaurantById'

const restaurantsRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const findRestaurantByIdController = new FindRestaurantByIdController()
const findAllRestaurantsController = new FindAllRestaurantsController()

restaurantsRoutes.post('/', createRestaurantController.handle)
restaurantsRoutes.get('/', findAllRestaurantsController.handle)
restaurantsRoutes.get('/:restaurantId', findRestaurantByIdController.handle)

export { restaurantsRoutes }
