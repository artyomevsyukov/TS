interface IUserService {
  users: number
  getUserInDatabase(): number
}

class UserService implements IUserService {
  @Max(100)
  users: number

  constructor() {
    this.users = 0
  }

  getUserInDatabase(): number {
    throw new Error("Ошибка")
  }
}

function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number = 0

    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`)
      } else {
        value = newValue
      }
    }

    const getter = function (): number {
      return value
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    })
  }
}

const userService = new UserService()
userService.users = 3
console.log(userService.users)
userService.users = 3000
console.log(userService.users)

export {}
