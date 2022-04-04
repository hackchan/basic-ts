import faker from '@faker-js/faker'
import {addProduct,updateProduct,productos,findProducts} from './products/products.service'
import {Id} from './base.model'

for (let index = 0; index < 50; index++) {
  addProduct({
  description:faker.commerce.productDescription(),
  image:faker.image.imageUrl(),
  color:faker.commerce.color(),
  size: faker.random.arrayElement(['M','S','XL','L']),
  price:parseInt(faker.commerce.price()),
  isNew:faker.datatype.boolean(),
  tags:faker.random.arrayElement(),
  title:faker.commerce.productName(),
  stock: faker.datatype.number({min:10, max:100}),
  categoryId: faker.datatype.uuid()
})

}

const product = productos[0]
console.log(productos)
updateProduct(product.id,{
  title: 'new Title',
  stock: 80
})

findProducts({
  stock:10,
  color:'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['goku','vegeta']
})

const num =0
const valb = num ??  "default"
console.log(valb)