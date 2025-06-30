interface IUserService {
  users: number
  getUserInDatabase(): number
}

// @nullUser
@threeUser
class UserService implements IUserService {
  users: number = 1000

  getUserInDatabase(): number {
    return this.users
  }
}

@userDecorator(5)
class UsersQuantity implements IUserService {
  users: number = 1000

  getUserInDatabase(): number {
    return this.users
  }
}

// function nullUser(target: Function) {
//   target.prototype.users = 0
// }

function threeUser<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3
  }
}

function userDecorator(value: number) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      users = value
    }
  }
}

console.log(new UserService().getUserInDatabase())
console.log(new UsersQuantity().getUserInDatabase())

export {}
