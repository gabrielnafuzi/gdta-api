import { container } from 'tsyringe'

import { IUsersRepository } from '@/modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '@/modules/accounts/repositories/implementations/UsersRepository'
import { IAdressesRepository } from '@/modules/adresses/repositories/IAdressesRepository'
import { AdressesRepository } from '@/modules/adresses/repositories/implementations/AddressRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository
)
