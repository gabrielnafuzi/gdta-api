import { inject, injectable } from 'tsyringe'

import { ICreateAddressDTO } from '@/modules/adresses/dtos'
import { IAdressesRepository } from '@/modules/adresses/repositories/IAdressesRepository'

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AdressesRepository')
    private readonly adressesRepository: IAdressesRepository
  ) {}

  public async execute(data: ICreateAddressDTO) {
    const address = await this.adressesRepository.create(data)

    return address
  }
}

export { CreateAddressUseCase }
