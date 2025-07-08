// interface User {
//   name: string
//   age: number
//   skills: string[]
// }

// const user: User = {
//   name: "Alex",
//   age: 22,
//   skills: ["1"],
// }

// interface Role {
//   id: number
// }

// interface UserWithRole extends User, Role {
//   createdAt: Date
// }

// const user2: UserWithRole = {
//   name: "Alex",
//   age: 22,
//   skills: ["1"],
//   id: 3,
//   createdAt: new Date(),
// }

// interface UserDic {
//   [index: number]: User
// }

interface IPayment {
  sum: number
  from: number
  to: number
}

interface IPaymentRequest extends IPayment {}

interface IPaymentResponse extends IPayment {
  datasetId: number
}

interface IPaymentSuccess {
  status: PaymentStatus.Success
  data: IPaymentResponse
}
interface IPaymentFailed {
  status: PaymentStatus.Failed
  data: { errorMessage: string; errorCode: number }
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

function sendPaymentRequest({
  sum,
  from,
  to,
}: IPaymentRequest): IPaymentSuccess | IPaymentFailed {
  const isSuccess = Math.random() > 0.5

  if (isSuccess) {
    const successResponse: IPaymentSuccess = {
      status: PaymentStatus.Success,
      data: {
        sum,
        from,
        to,
        datasetId: Date.now(),
      },
    }
    return successResponse
  } else {
    const failedResponse: IPaymentFailed = {
      status: PaymentStatus.Failed,
      data: {
        errorMessage: "Недостаточно средств",
        errorCode: 403,
      },
    }
    return failedResponse
  }
}

console.log(sendPaymentRequest({ sum: 1000, from: 112312314, to: 5353465346 }))

export {}
