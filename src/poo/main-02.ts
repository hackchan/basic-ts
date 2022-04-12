import {ProductHttpsService} from './service/productHttps.service'

(async ()=>{

  const productService = new ProductHttpsService()
  console.log('--'.repeat(10))
  const products = await productService.getAll()
  console.log(products.length)
  console.log(products.map(item => item.price))

  const productId = products[0].id
  await productService.update(productId,{price:10000, title:'hacker news', description:'googog'})
  const product = await productService.findOne(productId)
  console.log(product)
})()
