import {Product,Sizes} from './product.model'

const addProduct = ({title='sin definir', size}:Product):void =>{
console.log(title)
console.log(size)
}


addProduct({title:'madMax', size:'M'})
