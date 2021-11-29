import { hash } from 'bcrypt'
import { v4 as uuidV4 } from 'uuid'

import { createConnection } from '..'

const create = async () => {
  const connection = await createConnection('localhost')

  const id = uuidV4()
  const password = await hash('123Fred', 8)

  await connection.query(
    `INSERT INTO USERS(id, email, password, created_at)
      values('${id}', 'fred@graodireto.com.br', '${password}', 'now()')
    `
  )

  await connection.close()
}

create().then(() => console.log('User created!'))
