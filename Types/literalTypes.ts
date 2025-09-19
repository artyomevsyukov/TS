// function fetchWithAuth(url: string, method: "post" | "get") {}

// fetchWithAuth("/", "get")
// fetchWithAuth("/", "post")

// export {}

type User = {
  name: string
  age: number
}

type Role = {
  name: string
  id: number
}

type UserWithRole = User & Role

const user: UserWithRole = {
  name: "sdfsdf",
  age: 22,
  id: 12,
}

const user1: User & Role = {
  name: "sdfsdf",
  age: 22,
  id: 12,
}

type Result =
  | { type: "success"; data: string }
  | { type: "error"; message: string }
