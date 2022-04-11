export class Myservice {
  static instance: Myservice | null = null
  private constructor(private name:string){

  }

  getName(){
    return this.name
  }
  static create(name: string) {
    if(Myservice.instance === null){
      Myservice.instance = new Myservice(name)
    }

    return Myservice.instance
  }

}

const miservice = Myservice.create('servicio1')
const miservice2 = Myservice.create('servicio2')
console.log(miservice.getName())
console.log(miservice2.getName())