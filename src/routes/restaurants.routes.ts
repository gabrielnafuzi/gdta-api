import { Router } from 'express'

import { CreateRestaurantController } from '@/modules/restaurants/use-cases/createRestaurant'
import { FindRestaurantByIdController } from '@/modules/restaurants/use-cases/findRestaurantById'

const restaurantsRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const findRestaurantByIdController = new FindRestaurantByIdController()

restaurantsRoutes.post('/', createRestaurantController.handle)
restaurantsRoutes.get('/:restaurantId', findRestaurantByIdController.handle)

export { restaurantsRoutes }
