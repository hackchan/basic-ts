export class MyDate {
  // private year:number
  // private month:number
  // private day:number

  constructor(public year: number=1993, public _month: number=7, private _day:number=10){
    this.year = year
    this._month = _month
    this._day = _day
  }

  private addPadding(value: number){
    if(value < 10){
      return `0${value}`
    }
    return `${value}`
  }

  printFormat():string{
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this.year}`
  }

  public add(amount: number, type: 'days'|'month'|'years'){
    if(type === 'days'){
      this._day += amount
    }else if(type === 'month'){
      this._month += amount
    }
    else{
      this.year += amount
    }
  }

  get day(){
    return this._day
  }

  get month(){
    return this._month
  }

  set month(newValue: number){
    if(newValue >= 1 && newValue <=12){
      this._month = newValue
    }else{
      throw new Error('month invalid')
    }
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true
    if(this.year % 100 === 0) return false
    return this.year % 4 === 0
  }
}


const myDate = new MyDate(1993)
// myDate.add(3,'days')
// myDate.add(1,'month')
console.log(myDate.day)
console.log(myDate.isLeapYear)
myDate.month =18
console.log(myDate.month)

//console.log(myDate.day)