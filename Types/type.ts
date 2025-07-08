type httpMethod = "post" | "get"

function fetchWithAuth(url: string, method: httpMethod) {}

fetchWithAuth("/", "get")
fetchWithAuth("/", "post")

// !!!!
type ID = string | number

type User = {
  name: string
  age: number
  skills: string[]
}

const user: User = {
  name: "Alex",
  age: 22,
  skills: ["1"],
}

type Role = {
  name: string
  id: number
}

type UserWithRole = User & Role

const user2: UserWithRole = {
  name: "Alex",
  age: 22,
  skills: ["1"],
  id: 123,
}

const user3: User & Role = {
  name: "Alex",
  age: 22,
  skills: ["1"],
  id: 123,
}

type UserWithRole2 = {
  user: User
  role: Role
}

const user4: UserWithRole2 = {
  user: {
    name: "Alex",
    age: 22,
    skills: ["1"],
  },
  role: {
    name: "Admin",
    id: 123,
  },
}

type UserDic = {
  [index: number]: User
}

type ud = Record<number, User>

export {}
