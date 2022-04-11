import { Product } from '../models/product.model';
import {Category} from '../models/category.model'
export interface CreateProductDto extends Omit<Product, 'id' |'category'>{
  categoryId: Category['id'];
}

//type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;