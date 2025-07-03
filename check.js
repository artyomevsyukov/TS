"use strict";
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
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some generic sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Гав-гав!");
    }
    fetch() {
        console.log(`${this.name} принес палку!`);
    }
}
const dog = new Dog("Бобик");
dog.makeSound(); // "Гав-гав!"
dog.fetch(); // "Бобик принес палку!"
