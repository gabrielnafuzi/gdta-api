import { getRepository, Repository } from 'typeorm'

import { ICreateUserDTO } from '@/modules/accounts/dtos'
import { User } from '@/modules/accounts/entities/User'
import { IUsersRepository } from '@/modules/accounts/repositories/IUsersRepository'

class UsersRepository implements IUsersRepository {
  private readonly repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ email, password }: ICreateUserDTO) {
    const user = this.repository.create({ email, password })

    await this.repository.save(user)
  }

  async findByEmail(email: string) {
    const user = await this.repository.findOne({ email })

    return user
  }
}

export { UsersRepository }
