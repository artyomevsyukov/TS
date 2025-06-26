"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @nullUser
let UserService = class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
};
UserService = __decorate([
    threeUser
], UserService);
let UsersQuantity = class UsersQuantity {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
};
UsersQuantity = __decorate([
    userDecorator(5)
], UsersQuantity);
// function nullUser(target: Function) {
//   target.prototype.users = 0
// }
function threeUser(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
function userDecorator(value) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = value;
            }
        };
    };
}
console.log(new UserService().getUserInDatabase());
console.log(new UsersQuantity().getUserInDatabase());
