interface IUserService {
  users: number
  getUserInDatabase(): number
}

class UserService implements IUserService {
  users: number = 1000

  getUserInDatabase(): number {
    return this.users
  }
}

function nullUser(obj: IUserService) {
  obj.users = 0
  return obj
}

function logUser(obj: IUserService) {
  console.log("User " + obj.users)

  return obj
}

const user = new UserService()

console.log(nullUser(user))
console.log(user.getUserInDatabase())
console.log(nullUser(user).getUserInDatabase())
console.log("=============================")

console.log(logUser(nullUser(user)).getUserInDatabase())
export {}
