import { getRepository, Repository } from 'typeorm'

import { ICreateAddressDTO } from '@/modules/adresses/dtos'
import { Address } from '@/modules/adresses/entities/Address'
import { IAdressesRepository } from '@/modules/adresses/repositories/IAdressesRepository'

class AdressesRepository implements IAdressesRepository {
  private readonly repository: Repository<Address>

  constructor() {
    this.repository = getRepository(Address)
  }

  async create(data: ICreateAddressDTO) {
    const address = this.repository.create(data)

    await this.repository.save(address)

    return address
  }
}

export { AdressesRepository }
