import { createProduct } from '../api'

const CreateProductScreen = {
  after_render: () => {
    document
      .getElementById('product-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault()
        const values = {
          name: document.getElementById('name').value,
          description: document.getElementById('description').value,
          category: document.getElementById('category').value,
          brand: document.getElementById('brand').value,
          price: document.getElementById('price').value,
          countInStock: document.getElementById('countInStock').value,
          image: document.getElementById('image').value,
        }
        const data = await createProduct(values)
        if (data.erro) {
          console.log(data.error)
        } else {
          document.location.hash = '/'
        }
      })
  },
  render: () => {
    return `
      <form id="product-form" class="form-container">
        <div class="form-itens">
        <h1 class="title-form">Cadastro de Produto</h1>
          <div class="input-container">
            <label for="name">Nome</label>
            <input type="text" name="name" value='teste' id="name" />
          </div>
          <div class="input-container">
            <label for="category">Categoria</label>
            <input type="text" name="category" value='teste' id="category" />
          </div>
          <div class="input-container">
            <label for="image">Imagem</label>
            <input type="text" name="image" value='/images/product-1.jpg' id="image" />
          </div>
          <div class="input-container">
            <label for="price">Valor</label>
            <input type="text" name="price" value='3400' id="price" />
          </div>
          <div class="input-container">
            <label for="brand">Marca</label>
            <input type="text" name="brand" value='teste' id="brand" />
          </div>
          <div class="input-container">
            <label for="countInStock">Estoque</label>
            <input type="number" name="countInStock" value='3' id="countInStock" />
          </div>
          <div class="input-container">
            <label for="description">Descrição</label>
            <input type="text" name="description" value='teste' id="description" />
          </div>
          <div class="input-container">
            <button type="submit" class="primary">Adicionar</button>
          </div>
        </div>
      </form>
    `
  },
}

export default CreateProductScreen