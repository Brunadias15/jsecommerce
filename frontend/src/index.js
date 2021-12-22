import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import Error404Screen from './screens/Error404Screen.js'

import { parseRequestUrl } from './utils.js'
import CreateProductScreen from './screens/CreateProductScreen.js'

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  '/createproduct': CreateProductScreen,
}

const router = async () => {
  const request = parseRequestUrl()
  const parseUrl = 
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.action ? `/${request.action}` : '')

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen
  const main = document.getElementById('main-container')
  main.innerHTML = await screen.render()
}

window.addEventListener("load", router)
window.addEventListener("hashchange", router)