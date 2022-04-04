export const createProduct = ({id,stock,isNew,material}:{id:number,stock:number,isNew:false, material:string}) =>{
    return {
      id,
      stock ,
      isNew ,
      material
    }
}


  const p1 = createProduct({id:1,stock:20,isNew:false,material:'plastic'})
  console.log(p1)