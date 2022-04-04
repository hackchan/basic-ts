/*
never funciones que nunca terminan
*/


const withoutThen = () => {
  while(true){
    console.log('nunca parar de aprender')
  }
}

const fail = (message: string) =>{
  throw new Error(message)
}

const example = (input: unknown) => {
  if(typeof input === 'string'){
    return 'es un string'
  }else if(Array.isArray(input)){
    return 'is un Array'
  }
  return fail('not match')
}

console.log(example('hola'))
console.log(example([1,2,4,5,6]))
console.log(example(10))
console.log(example('hola despues del fail'))
