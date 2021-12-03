import { Router } from 'express'

import { ensureAuthenticated } from '@/middleware'
import { AuthenticateUserController } from '@/modules/accounts/use-cases/authenticateUser/AuthenticateUserController'

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/sign-in', authenticateUserController.handle)
authenticateRoutes.post('/validate-token', ensureAuthenticated, (req, res) => {
  return res.status(200).json({
    message: 'Token is valid'
  })
})

export { authenticateRoutes }
