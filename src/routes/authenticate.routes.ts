import { Router } from 'express'

import { AuthenticateUserController } from '@/modules/accounts/use-cases/authenticateUser/AuthenticateUserController'

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/sign-in', authenticateUserController.handle)

export { authenticateRoutes }
