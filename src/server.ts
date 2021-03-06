import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'

import '@/shared/container'
import { createConnection } from '@/database'
import { AppError } from '@/errors'
import { router } from '@/routes'
import swaggerDocument from '@/swagger.json'

createConnection()

const PORT = 3333
const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    })
  }
)

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(PORT, () => console.log('Server is running'))
