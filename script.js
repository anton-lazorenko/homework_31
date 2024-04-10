 // Task1
 class Wheater {
    constructor(monday, tuesday, wednesday, thursday, friday, saturday, sunday){
      this.monday = monday;
      this.tuesday = tuesday;
      this.wednesday = wednesday;
      this.thursday = thursday;
      this.friday = friday;
      this.saturday = saturday;
      this.sunday = sunday;
    }
    getValues(){ return Object.values(this).filter(item => typeof item === "number") }
    getMaxTemp() {
      const temp = this.getValues()
      return Math.max(...temp)
    }  
    getMinTemp() {
      const temp = this.getValues()
      return Math.min(...temp)
    }
    getMidTemp() {
      const temp = this.getValues()
      return Math.floor(temp.reduce((a,b) => (a+b))/temp.length)
    }
    print() {
      const arr = this.getValues()
      
    }
  }
  
  const wheater = new Wheater(12, 8, 6, 7, 10, 9, 5);
  console.log(wheater.getMaxTemp())
  console.log(wheater.getMinTemp())
  console.log(wheater.getMidTemp())
  wheater.print()
  
  // Task2
  
  class Vehicle {
    start() {
      console.log('Start')
    }
    stop() {
      console.log('Stop')
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, year) {
      super()
      this.brand = brand
      this.year = year
    }
  
    onLight() {
      console.log('light on')
    }
    offLight() {
      console.log('light off')
    }
  }
  
  class Bike extends Vehicle {
    constructor(brand, year) {
      super();
      this.brand = brand
      this.year = year
    }
    openFuelTap() {
      console.log('open fuel tap')
    }
    turnOnEnergy() {
      console.log('turn on energy')
    }
  }
  
  class Hatchback extends Car {
    constructor(brand, year) { 
      super()
      this.brand = brand
      this.year = year
    }
  
    start() {
      console.log("start")
    }
  }
  
  class Sedan extends Bike {
    constructor(brand, year) {
      super()
      this.brand = brand
      this.year = year
    }
    onEnergy() {
      console.log('Energy is low')
      this.status = 'Energy is low'
    }
  }
  
  const bmw = new Car('bmw', 2012)
  const mercedes = new Hatchback('mercedes', 2015)
  const audi = new Sedan('audi', 2020)
  
  
  
  let order1 = {
   table: 1,
   dishes: [
    { name: "Кава", price: 30 },
    { name: "Чізкейк", price: 50 }
   ],
   status: "в обробці"
  }
  
  let order2 = {
   table: 2,
   dishes: [
    { name: "Лате", price: 40 },
    { name: "Тірамісу", price: 60 }
   ],
   status: "готується"
  }
  
  
  class System {
    constructor() {
      this.orders = [];
      this.tables = [];
    }
  
    addTable() {
      this.tables.push(table);
    }
    addOrder() {
      this.orders.push(order);
    }
  
    
  }
  
  class Table {
    constructor(number) {
      this.number = number;
    }
    
  }
  
  class Order {
    constructor( table, id, dishes) {
      this.table = table
      this.id = id
      this.dishes = dishes
      this.status = 'в оброботке';
      
    }
  
    changeOrderStatus(newStatus) {
      this.status = newStatus;
    }
  
    getTotalAmountTable(orders, tableNumber) {
      let totalPrice = 0;
      for (let order of orders) {
        if (order.table === tableNumber) {
          order.dishes.map((dsh) => totalPrice += dsh.price)
        }
      }
      return totalPrice;
    }
    getTotalAmountOrder(id) {
      let totalPrice = 0;
      if(order.id === id) {
        order.dishes.map((dsh) => totalPrice += dsh.price)
      }
      return totalPrice;
    }
    cancelOrder(id) {
      for (let i = order.length; i--; ) {
        if (order[i].id === id) {
          order.splice(i, 1);
        }
      }
    }
  }
  
  
  
  const sys = new System()
  const table = new Table(11)
  const order = new Order( 11, 5, [{ name: "Лате", price: 40 }, { name: "Тірамісу", price: 60 }])
  const order2 = new Order( 12, 6, [{ name: "Лате", price: 40 }, { name: "Тірамісу", price: 60 }])
  
  
  sys.addTable()
  sys.addOrder()
  
  
  console.log(table)
  console.log(order)
  console.log(order2)
  
  
  console.log(order.getTotalAmountTable(sys.orders, 11))
  console.log(order.getTotalAmountOrder(5))
  
  order.cancelOrder(5)
  console.log(sys)