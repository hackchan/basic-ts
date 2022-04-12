import {Dog}  from './herencia'

function getValue<T>(value:T){
  const array: T[] = []
  return value
}

getValue<number>(12).toFixed()
getValue<string>("12").toLocaleLowerCase()
getValue<number[]>([1,2,3,4]).forEach
const fifi = new Dog('fifi','fabio')
getValue<Dog>(fifi)