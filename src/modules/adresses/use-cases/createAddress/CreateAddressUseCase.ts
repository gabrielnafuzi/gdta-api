import { inject, injectable } from 'tsyringe'

import { ICreateAddressDTO } from '@/modules/adresses/dtos'
import { IAdressesRepository } from '@/modules/adresses/repositories/IAdressesRepository'

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AdressesRepository')
    private readonly adressesRepository: IAdressesRepository
  ) {}

  public async execute(data: ICreateAddressDTO): Promise<void> {
    this.adressesRepository.create(data)
  }
}

export { CreateAddressUseCase }
