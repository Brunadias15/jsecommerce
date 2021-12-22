import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import data from './data'
import config from './config'
import productRouter from './routers/productRouter'

mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log('Connected to mongodb.')
  })
  .catch((error) => {
    console.log('ERROR: ', error.reason)
  })

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/products', productRouter)

app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500
  res.status(status).send({ message: err.message })
})

app.listen(5000, () => {
  console.log('server at http://localhost:5000')
})