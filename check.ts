// enum StatusCode {
//   SUCCESS = "s",
//   IN_PROCESS = "p",
//   FAILED = "f",
//   // SUCCESS = 1,
//   // IN_PROCESS = 2,
//   // FAILED = 3,
// }

// function action(status: StatusCode) {}

// action(StatusCode.IN_PROCESS)
// action(1)
// action("p")

// interface Animal {
//   name: string
// }
// interface Bird {
//   fly(): void
// }

// interface Fish {
//   swim(): void
// }

// function move(animal: Bird | Fish) {
//   if ("fly" in animal) {
//     animal.fly() // ✅ animal — Bird
//   } else {
//     animal.swim() // ✅ animal — Fish
//   }
// }

// const Dog: Bird & Animal = {
//   name: "Maya",
//   fly() {
//     console.log(this.name)
//   },
// }

// move(Dog)

// const user = {
//   name: "Alex",
// }

// type keyOfUser = keyof typeof user

// const n: keyOfUser = "name"
// console.log(n)

// interface DiscountStrategy {
//   getDiscount(): number
// }

// class VIPDiscount implements DiscountStrategy {
//   getDiscount() {
//     return 20
//   }
// }

// class PremiumDiscount implements DiscountStrategy {
//   getDiscount() {
//     return 30
//   }
// }

// class Discount {
//   constructor(private strategy: DiscountStrategy) {}

//   giveDiscount() {
//     return this.strategy.getDiscount()
//   }
// }

// const userVip = new Discount(new VIPDiscount())
// console.log(userVip.giveDiscount())
// const userPremium = new Discount(new PremiumDiscount())
// console.log(userPremium.giveDiscount())
// class Animal {
//   constructor(public name: string) {}

//   makeSound(): void {
//     console.log("Some generic sound")
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Гав-гав!")
//   }

//   fetch(): void {
//     console.log(`${this.name} принес палку!`)
//   }
// }

// const dog = new Dog("Бобик")
// dog.makeSound() // "Гав-гав!"
// dog.fetch() // "Бобик принес палку!"

// export {}

// class Car {
//   public make: string
//   private damages: string[]
//   private _model: string
//   protected run: number
//   #price: number

//   set Model(m: string) {
//     this._model = m
//     this.#price = 1000
//   }

//   get model() {
//     return this._model
//   }
//   // constructor(make: string) {
//   //   this.make = make
//   // }
// }

// // const car = new Car("AUDI")
// car.make = "BMW"
// console.log(car)

// class Truck extends Car {
//   setRun(km: number) {
//     this.run = km / 0.62
//   }
// }

const data = [
  { id: 317, name: "Вика" },
  { id: 1, name: "Катя" },
  { id: 2, name: "Маша" },
  { id: 23, name: "Яна" },
  { id: 3, name: "Настя" },
]

interface ID {
  id: number
}

type SortType = "asc" | "desc"

function sortArr<T extends ID>(data: T[], type: SortType = "asc"): T[] {
  const sortedData = [...data]

  return sortedData.sort((a, b) => {
    switch (type) {
      case "asc":
        return a.id - b.id
      case "desc":
        return b.id - a.id
    }
  })
}

console.log(sortArr(data))
console.log(sortArr(data, "desc"))
// ================================================================================
