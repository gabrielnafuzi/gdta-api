import 'reflect-metadata'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import '@/shared/container'
import { router } from '@/routes'
import swaggerDocument from '@/swagger.json'

import '@/database'

const PORT = 3333
const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(router)

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(PORT, () => console.log('Server is running'))
