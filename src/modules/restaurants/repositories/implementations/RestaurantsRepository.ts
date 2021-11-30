import { inject, injectable } from 'tsyringe'
import { getRepository, Repository } from 'typeorm'

import { IAdressesRepository } from '@/modules/adresses/repositories/IAdressesRepository'
import { ICreateRestaurantDTO } from '@/modules/restaurants/dtos'
import { Restaurant } from '@/modules/restaurants/entities'
import { IRestaurantsRepository } from '@/modules/restaurants/repositories'

@injectable()
class RestaurantsRepository implements IRestaurantsRepository {
  private readonly repository: Repository<Restaurant>

  constructor(
    @inject('AdressesRepository')
    private readonly adressesRepository: IAdressesRepository
  ) {
    this.repository = getRepository(Restaurant)
  }

  async create({ address: addressData, ...data }: ICreateRestaurantDTO) {
    const address = await this.adressesRepository.create(addressData)

    const restaurant = this.repository.create({
      ...data,
      address_id: address.id
    })

    await this.repository.save(restaurant)

    return restaurant
  }

  async findById(id: string) {
    const restaurant = await this.repository.findOne(id, {
      relations: ['address', 'dishes']
    })

    return restaurant
  }

  findByNameOrDishesInfo: (search: string) => Promise<Restaurant[]>

  async findByName(name: string) {
    const restaurant = await this.repository.findOne({ name })

    return restaurant
  }
}

export { RestaurantsRepository }
