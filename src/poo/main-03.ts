import { Product } from '../poo/models/product.model'
import { UpdateProductDto } from './dto/product.dto'
import { Category } from './models/category.model'
import {BaseHttpService} from './service/base.https.service'

(async ()=>{

 const url = 'https://api.escuelajs.co/api/v1/products'
 const productService = new BaseHttpService<Product>(url)

 const rta = await productService.getAll();
 console.log('products:', rta.length)
 productService.update<Product['id'],UpdateProductDto>(1,{
 title:'sasasa'
})

const url2 = 'https://api.escuelajs.co/api/v1/categories'
const categoryService = new BaseHttpService<Category>(url2)
const rta1 = await categoryService.getAll()
console.log('categories', rta1.length)

})()
