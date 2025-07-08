"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode[statusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    statusCode[statusCode["FAILED"] = 3] = "FAILED";
})(statusCode || (statusCode = {}));
const result = {
    message: "Payment success",
    statusCode: statusCode.SUCCESS,
};
if (result.statusCode === statusCode.FAILED) {
}
function action(status) {
    console.log(status);
}
function setId(id) {
    return id;
}
action(1);
action(statusCode.SUCCESS);
// Обычный enum это функция
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = setId(statusCode.FAILED)] = "ADMIN";
    Roles[Roles["USER"] = Roles.ADMIN * 2] = "USER";
})(Roles || (Roles = {}));
function test(x) { }
test(Roles);
const res2 = 1 /* Roles2.ADMIN */;
// ====================================
var statusValues;
(function (statusValues) {
    statusValues["PUBLISHED"] = "published";
    statusValues["DRAFT"] = "draft";
    statusValues["DELETED"] = "deleted";
})(statusValues || (statusValues = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("/faqs", {
            method: "POST",
            body: JSON.stringify(req),
        });
        const data = yield res.json();
        return data;
    });
}
