import {CreateProductDto,UpdateProductDto,FindProduct} from './product.dto'
import {Product} from './product.model'
import faker from '@faker-js/faker'
import { Id } from '../base.model'

export const productos: Product[] = []

export const addProduct = (data: CreateProductDto):Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category:{
      id:data.categoryId,
      nombre: faker.commerce.department()
    }
  }
  productos.push(newProduct)

  return newProduct
}

export const updateProduct = (id:Product['id'], changes: UpdateProductDto) : Product =>{
  const index = productos.findIndex(item => item.id === id)
  const prevData = productos[index]
  productos[index] = {
    ...prevData,
    ...changes
  }
  return productos[index]
}

export const findProducts = (dto: FindProduct): Product[] =>{
  //code
  //dto.tags = []
  //dto.tags?.pop()
  return productos
}