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
