import { createConnection, getConnectionOptions } from 'typeorm'

interface Options {
  host: string
}

void getConnectionOptions().then((options) => {
  const newOptions = options as Options

  newOptions.host = 'database'

  void createConnection({ ...options })
})
