import { ICreateAddressDTO } from '@/modules/adresses/dtos'

interface ICreateRestaurantDTO {
  name: string
  rate: number
  rate_amount: number
  delivery_time: string
  address: ICreateAddressDTO
  address_id?: string
  image_url?: string
}

export { ICreateRestaurantDTO }
