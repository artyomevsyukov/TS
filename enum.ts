enum statusCode {
  SUCCESS = 1,
  IN_PROCESS = 2,
  FAILED = 3,
}

const result = {
  message: "Payment success",
  statusCode: statusCode.SUCCESS,
}

if (result.statusCode === statusCode.FAILED) {
}

function action(status: statusCode) {
  console.log(status)
}

function setId(id: statusCode) {
  return id
}

action(1)
action(statusCode.SUCCESS)

// Обычный enum это функция
enum Roles {
  ADMIN = setId(statusCode.FAILED),
  USER = ADMIN * 2,
}

function test(x: { ADMIN: number }) {}
test(Roles)

// Это константа которая подставится
const enum Roles2 {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles2.ADMIN

// ====================================

enum statusValues {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

async function getFaqs(req: {
  topicId: number
  status?: statusValues
}): Promise<
  {
    question: string
    answer: string
    tags: string[]
    likes: number
    status: statusValues
  }[]
> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  })
  const data = await res.json()
  return data
}
