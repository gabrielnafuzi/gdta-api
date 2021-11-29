import { ICreateAddressDTO } from '@/modules/adresses/dtos'

interface IAdressesRepository {
  create: (data: ICreateAddressDTO) => Promise<void>
}

export { IAdressesRepository }
