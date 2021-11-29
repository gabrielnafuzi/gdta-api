import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@/errors'
import { ICreateUserDTO } from '@/modules/accounts/dtos'
import { IUsersRepository } from '@/modules/accounts/repositories/IUsersRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('User already exists')
    }

    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({ email, password: passwordHash })
  }
}

export { CreateUserUseCase }
