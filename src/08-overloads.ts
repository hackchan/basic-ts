


function parseString(input: string | string[]):string | string[] {
  if(Array.isArray(input)){
    return input.join('')
  } else{
    return input.split('')
  }

}

const rtaArray = parseString('fabio')
console.log('rtaArray: fabio =>', rtaArray)

const rtaString = parseString(['f','a','b','i','o'])
console.log("rtaStr:['f','a','b','i','o'] =>",rtaString)