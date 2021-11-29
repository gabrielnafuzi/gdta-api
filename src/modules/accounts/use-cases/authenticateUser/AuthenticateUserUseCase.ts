import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@/errors'
import { IUsersRepository } from '@/modules/accounts/repositories/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface UserResponse {
  id: string
  email: string
}

interface IResponse {
  user: UserResponse
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!')
    }

    const token = sign({}, '8f9a9379b0c6d22d9984814774d978ce', {
      subject: user.id,
      expiresIn: '1d'
    })

    return {
      token,
      user: { email: user.email, id: user.id }
    }
  }
}

export { AuthenticateUserUseCase }
