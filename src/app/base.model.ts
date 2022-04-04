
export type Id = string | number
export interface  BaseModel {
  readonly id: Id;
  createdAt: Date;
  updatedAt: Date;
}