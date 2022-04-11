import axios from 'axios'
import {Product} from './models/product.model'
(async ()=>{
   function delay(time: number) {
     const promise = new Promise<boolean>((resolve)=>{
       setTimeout(()=>{
         resolve(true)
       },time)
     })
     return promise
   }

   async function getProductsForce(){
     const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
     const data = rta.data as Product[]
     return data
   }

   async function getProducts(){
     const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
     return data
   }

  //  const rta = await delay(3000)
  //  console.log('---'.repeat(10))
  //  console.log(rta)

  const productos= await getProducts()
  console.log(productos)

})()