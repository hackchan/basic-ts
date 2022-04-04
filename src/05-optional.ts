//nullish coalescing

export const createProduct = (id: string | number,isNew?:boolean,stock?: number    ) =>{
    return {
      id,
      stock : stock ?? 10,
      isNew : isNew ?? true
    }
}


  const p1 = createProduct(1,false, 0)
  console.log(p1)

  /**
   * 0 === false
   * '' === false
   * false === false
   */