"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
}
