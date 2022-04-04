function parseString2(input: string): string[]
function parseString2(input: string[]): string
function parseString2(input: number): boolean

function parseString2(input: unknown):unknown {
  if(Array.isArray(input)){
    return input.join('')
  } else if(typeof input === 'string'){
    return input.split('')
  }else if( typeof input === 'number'){
    return true
  }

}

const rtaArray2 = parseString2('fabio')

console.log('rtaArray: fabio =>', rtaArray2)

const rtaString2 = parseString2(['f','a','b','i','o'])
console.log("rtaStr:['f','a','b','i','o'] =>",rtaString2)

const rtaboolean = parseString2(10)
console.log(rtaboolean)