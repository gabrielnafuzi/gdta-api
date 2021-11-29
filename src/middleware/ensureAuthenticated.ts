import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { AppError } from '@/errors'
import { UsersRepository } from '@/modules/accounts/repositories/implementations/UsersRepository'

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, '8f9a9379b0c6d22d9984814774d978ce')

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(userId as string)

    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    next()
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}
