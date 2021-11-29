import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { UsersRepository } from '@/modules/accounts/repositories/implementations/UsersRepository'

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new Error('Token missing')
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, '8f9a9379b0c6d22d9984814774d978ce')

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(userId as string)

    if (!user) {
      throw new Error('User does not exists!')
    }

    next()
  } catch {
    throw new Error('Invalid token!')
  }
}
