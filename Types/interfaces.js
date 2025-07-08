"use strict";
// interface User {
//   name: string
//   age: number
//   skills: string[]
// }
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function sendPaymentRequest({ sum, from, to, }) {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
        const successResponse = {
            status: PaymentStatus.Success,
            data: {
                sum,
                from,
                to,
                datasetId: Date.now(),
            },
        };
        return successResponse;
    }
    else {
        const failedResponse = {
            status: PaymentStatus.Failed,
            data: {
                errorMessage: "Недостаточно средств",
                errorCode: 403,
            },
        };
        return failedResponse;
    }
}
console.log(sendPaymentRequest({ sum: 1000, from: 112312314, to: 5353465346 }));
