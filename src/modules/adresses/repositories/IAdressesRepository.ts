import { ICreateAddressDTO } from '@/modules/adresses/dtos'
import { Address } from '@/modules/adresses/entities/Address'

interface IAdressesRepository {
  create: (data: ICreateAddressDTO) => Promise<Address>
}

export { IAdressesRepository }
