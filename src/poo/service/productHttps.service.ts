import { UpdateProductDto, CreateProductDto } from "../dto/product.dto";
import { Product } from "../models/product.model";
import { productServiceInterface } from "../models/ProductServicesInterface";
import axios from 'axios'
export class ProductHttpsService implements productServiceInterface{
  private url = 'https://api.escuelajs.co/api/v1/products'
  async getAll(): Promise<Product[]> {
    const {data} = await axios.get(this.url)
    return data
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const {data} = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
  async create(dto: CreateProductDto) {
     const {data} = await axios.post(`${this.url}`, dto)
     return data
  }
  async findOne(id: number) {
     const {data} = await axios.get(`${this.url}/${id}`)
    return data
  }


}