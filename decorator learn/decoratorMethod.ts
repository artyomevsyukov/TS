interface IUserService {
  users: number
  getUserInDatabase(): number
}

class UserService implements IUserService {
  users: number = 1000

  //   @Catch()
  //   @Catch(true)
  @Catch({ rethrow: true })
  getUserInDatabase(): number {
    throw new Error("Ошибка")
  }
}

// function Catch(rethrow: boolean = false) {
function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value
    descriptor.value = async (...args: any[]) => {
      try {
        return await method?.apply(target, args)
        // Если вернем просто промис, то try catch его не поймает
        // В типах не покажет что это промис. Декоратор не влияет на типы
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
          if (rethrow) {
            throw error
          }
        }
      }
    }
  }
}

console.log(new UserService().getUserInDatabase())

export {}
