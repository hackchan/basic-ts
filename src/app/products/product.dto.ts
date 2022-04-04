import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
 categoryId: string
}


type example = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> {

}

type exampl2 = Required<Product>

export interface FindProduct extends Readonly<Partial<Omit<Product,'tags'>>> {
  readonly tags: ReadonlyArray<string>
}
