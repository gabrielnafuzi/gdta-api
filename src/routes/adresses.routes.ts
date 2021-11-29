import { Router } from 'express'

import { CreateAddressController } from '@/modules/adresses/use-cases/createAddress/CreateAddressController'

const adressesRoutes = Router()

const createAddressController = new CreateAddressController()

adressesRoutes.post('/', createAddressController.handle)

export { adressesRoutes }
