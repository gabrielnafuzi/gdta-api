import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const PORT = 3333

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
