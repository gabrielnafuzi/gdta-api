import {
  createConnection as typeormCreateConnection,
  getConnectionOptions
} from 'typeorm'

export const createConnection = async (host = 'database') => {
  const defaultOptions = await getConnectionOptions()

  return await typeormCreateConnection(
    Object.assign(defaultOptions, {
      host
    })
  )
}
