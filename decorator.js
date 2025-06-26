"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUser(obj) {
    console.log("User " + obj.users);
    return obj;
}
const user = new UserService();
console.log(nullUser(user));
console.log(user.getUserInDatabase());
console.log(nullUser(user).getUserInDatabase());
console.log("=============================");
console.log(logUser(nullUser(user)).getUserInDatabase());
