import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    numReviews: {
      type: Number,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model('products', productSchema)
export default Product