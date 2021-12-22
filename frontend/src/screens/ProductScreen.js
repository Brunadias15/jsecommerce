
import { getProduct } from '../api'
import Rating from '../components/Rating'
import { parseRequestUrl } from '../utils'
const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl()
    document.getElementById('add-button').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`
    })
  },
  render: async () => {
    const request = parseRequestUrl()
    const product = await getProduct(request.id)
    if (product.error) {
      return `<div class="content">Erro: ${product.error}</div>`
    }
    return `
      <div class='content'>
        <div class="back-to-result">
          <a href="/#/">Voltar para o resultado</a>
        </div>
        <div class='details'>
          <div class="details-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="details-info">
            <div>
              <h1>${product.name}</h1>
            </div>
            <div>
              <span>${Rating.render({
                value: product.rating,
                text: `${product.numReviews} reviews`,
              })}</span>
            </div>
            <div>
              <span>Valor: <strong>R$${product.price}</strong></span>
            </div>
            <div>
              <span>Descrição:</span>
              <div>${product.description}</div>
            </div>
          </div>
        <div class="details-action">
          <div>
            <span>Valor: ${product.price}</span>
          </div>
          <div>
            <span>Status: ${
              product.countInStock > 0
                ? `<span class="success">Em estoque</span>`
                : `<span class="error">Indiponível</span>`
            }</span>
          </div>
          <div>
            <button id="add-button" class="fw primary">Adicionar ao carrinho</button>
          </div>
        </div>
        </div>
      </div>
    `
  },
}

export default ProductScreen