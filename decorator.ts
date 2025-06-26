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
