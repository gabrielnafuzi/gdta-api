import { createConnection, getConnectionOptions } from 'typeorm'

type Options = {
  host: string
}

getConnectionOptions().then((options) => {
  const newOptions = options as Options
  newOptions.host = 'database'
  createConnection({
    ...options
  })
})
