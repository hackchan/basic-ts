let anyVar: unknown
anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = 'string'
anyVar = []
anyVar = {}

let isNew: boolean


if(typeof anyVar === 'string'){
  anyVar.charAt
}

let foo: unknown = null;

const parse = (str:string): unknown =>{
  return JSON.parse(str)
}

console.log(parse('{"name":"fabio"}'))
