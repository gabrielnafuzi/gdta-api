import { v4 as uuidV4 } from 'uuid'

import { createConnection } from '..'

import seedItems from './restaurants.json'

interface CreateDishPayload {
  name: string
  description: string
  price: number
  image: string
  restaurant_id: string
}

interface CreateAddressPayload {
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  zipcode: string
}

interface CreateRestaurantPayload {
  name: string
  rate: number
  rate_amount: number
  delivery_time: string
  image_url: string
  address_id: string
}

const create = async () => {
  const connection = await createConnection('localhost')

  const createAddress = async ({
    city,
    complement,
    neighborhood,
    number,
    state,
    street,
    zipcode
  }: CreateAddressPayload) => {
    const addressId = uuidV4()

    await connection.query(`
      INSERT into adresses(id, city, complement, neighborhood, number, state, street, zipcode)
      values ('${addressId}', '${city}', '${complement}', '${neighborhood}', '${number}', '${state}', '${street}', '${zipcode}')`)

    return addressId
  }

  const createRestaurant = async ({
    name,
    rate,
    rate_amount,
    delivery_time,
    image_url,
    address_id
  }: CreateRestaurantPayload) => {
    const restaurantId = uuidV4()

    await connection.query(`INSERT into restaurants(id, name, rate, rate_amount, delivery_time, image_url, address_id)
    values ('${restaurantId}', '${name}', ${rate}, ${rate_amount}, '${delivery_time}', '${image_url}', '${address_id}')
  `)

    return restaurantId
  }

  const createDish = async ({
    description,
    image,
    name,
    price,
    restaurant_id
  }: CreateDishPayload) => {
    const dishId = uuidV4()

    await connection.query(`
      INSERT into dishes(id, name, description, price, image, restaurant_id)
      values ('${dishId}', '${name}', '${description}', ${price}, '${image}', '${restaurant_id}')`)
  }

  await Promise.all(
    seedItems.map(async (item) => {
      const addressId = await createAddress(item.address)

      const restaurantId = await createRestaurant({
        address_id: addressId,
        delivery_time: item.restaurant.delivery_time,
        image_url: item.restaurant.image_url,
        name: item.restaurant.name,
        rate: item.restaurant.rate,
        rate_amount: item.restaurant.rate_amount
      })

      await Promise.all(
        item.dishes.map(async (dish) => {
          await createDish({
            description: dish.description,
            image: dish.image,
            name: dish.name,
            price: dish.price,
            restaurant_id: restaurantId
          })
        })
      )

      console.log(`Restaurant ${item.restaurant.name} created`)
    })
  )

  await connection.close()
}

create().then(() => console.log('Restaurants seeded!'))
