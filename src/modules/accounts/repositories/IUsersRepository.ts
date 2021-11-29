import { ICreateUserDTO } from '@/modules/accounts/dtos'
import { User } from '@/modules/accounts/entities/User'

interface IUsersRepository {
  create: ({ email, password }: ICreateUserDTO) => Promise<void>
  findByEmail: (email: string) => Promise<User | undefined>
  findById: (id: string) => Promise<User | undefined>
}

export { IUsersRepository }
