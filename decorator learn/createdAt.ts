// interface ICreate {
//   userName: string
//   age: number
// }

// @CreateAt
// class Create implements ICreate {
//   userName
//   age

//   constructor(userName: string, age: number) {
//     this.userName = userName
//     this.age = age
//   }
// }

// function CreateAt<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     createdAt = new Date().toLocaleDateString()
//   }
// }

// type CreateAt = {
//   createdAt: Date
// }

// console.log((new Create("Alex", 33) as ICreate & CreateAt).createdAt)

// ============================================================

interface IUserService {
  users: number
  getUserInDatabase(): number
}

class UserService implements IUserService {
  users: number = 1000

  @Log
  getUserInDatabase(): number {
    throw new Error("Ошибка")
  }
}

function Log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
  //   return {enumerable: true}
  descriptor.value = () => {
    console.log("no Error")
  }
  //   const oldValue = descriptor.value
  //   descriptor.value = () => {
  //     console.log("no Error")
  //     oldValue()
  //   }
}

console.log(new UserService().getUserInDatabase())

export {}
