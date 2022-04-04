
import {subDays,format} from 'date-fns'
//import _ from 'lodash'

const date  = new Date(1998,1,28)
const rta = subDays(date,30)
const str = format(rta,'yyyy/MM/dd')
console.log(str)


let mixed:(number | boolean)[] = []


mixed.push(12)


const myBoolean: Boolean = true;


function test(edad:number){
  console.log(edad)
}

test(12)

type Sizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: Sizes;

let nombres:(string | null) = null
let myProductPrice = 100;
