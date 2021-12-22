import { Router } from 'express'
import Product from '../models/productModels'
import expressAsyncHandler from 'express-async-handler'


const productRouter = Router()

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const searchKeyword = req.query.searchKeyword
      ? {
          category: {
            $regex: req.query.searchKeyword,
            $options: 'i',
          },
        }
      : {}

    const products = await Product.find({ ...searchKeyword })
    res.send(products)
  })
)

productRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const product = await req.body
    try {
      await Product.create(product)
      res.status(201).send({ message: 'Produto Cadastrado', product })
    } catch (error) {
      es.status(500).send({ message: error })
    }
  })
)

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Produto Não Encontrado!' })
  }
})

export default productRouter