function logId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id.toLowerCase())
  } else if (typeof id === "number") {
    console.log(id.toFixed(0))
  } else {
    console.log(id)
  }
}

logId(1)
logId("sdfsdf")
logId(false)

function logError(arr: string | string[]) {
  if (Array.isArray(arr)) {
    console.log(arr)
  } else {
    console.log(arr)
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}

export {}
