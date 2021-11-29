import { container } from 'tsyringe'

import { IUsersRepository } from '@/modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '@/modules/accounts/repositories/implementations/UsersRepository'
import { IAdressesRepository } from '@/modules/adresses/repositories/IAdressesRepository'
import { AdressesRepository } from '@/modules/adresses/repositories/implementations/AddressRepository'
import { ICategoriesRepository } from '@/modules/categories/repositories/ICategoriesRepository'
import { CategoriesRepository } from '@/modules/categories/repositories/implementations/CategoriesRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository
)

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)
