interface User {
  name: string
  age: number
  skills: string[]
}

const user: User = {
  name: "Alex",
  age: 22,
  skills: ["1"],
}

interface Role {
  id: number
}

interface UserWithRole extends User, Role {
  createdAt: Date
}

const user2: UserWithRole = {
  name: "Alex",
  age: 22,
  skills: ["1"],
  id: 3,
  createdAt: new Date(),
}

interface UserDic {
  [index: number]: User
}

export {}
