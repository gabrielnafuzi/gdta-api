import { Router } from 'express'

import { adressesRoutes } from './adresses.routes'
import { authenticateRoutes } from './authenticate.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use('/adresses', adressesRoutes)
router.use('/users', usersRoutes)
router.use(authenticateRoutes)

export { router }
