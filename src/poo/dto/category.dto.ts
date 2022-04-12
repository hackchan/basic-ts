import {IsNotEmpty, IsUrl, Length,IsEnum, IsOptional, validateOrReject} from 'class-validator'
import { AccesType, Category } from "../models/category.model";
export interface ICreateCategoryDto extends Omit<Category, 'id'>{}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4,140)
  name!:string;
  @IsUrl()
  @IsNotEmpty()
  image!:string;
  @IsOptional()
  @IsEnum(AccesType)
  access?: AccesType | undefined
}

(async()=>{
  try{
     const dto = new CreateCategoryDto()
     dto.name = 'a'
     await validateOrReject(dto)
  }catch(err){
    console.log(err)
  }

})()