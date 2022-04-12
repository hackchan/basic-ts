export class vehiculo{
   private _edad: number =0

   get edad(){
     return this._edad
   }
}

export class Animal {
  constructor(protected name:string) {}

  move() {
    console.log('moving along!!')
  }

  greeting(){
    return `Hello, I'm ${this.name}`
  }

  protected doSomething(){
    console.log('doing...')
  }
}

export class Dog extends Animal {
  owner: string
  constructor(name:string, owner:string){
    super(name)
    this.owner =owner

  }

  woof(times:number):void{
    for (let index = 0; index < times; index++) {
     console.log(`${this.name}`)
    }
    this.doSomething()
  }


  move() {
    console.log('moving like a dog')
    super.move()
  }
}

const fifi = new Animal('fifi')
fifi.move()
console.log(fifi.greeting())

const cheis = new Dog('cheis','fabio')
cheis.move()
console.log(cheis.greeting())
cheis.woof(3)
console.log(cheis.owner)
