"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchWithAuth(url, method) { }
fetchWithAuth("/", "get");
fetchWithAuth("/", "post");
const user = {
    name: "Alex",
    age: 22,
    skills: ["1"],
};
const user2 = {
    name: "Alex",
    age: 22,
    skills: ["1"],
    id: 123,
};
const user3 = {
    name: "Alex",
    age: 22,
    skills: ["1"],
    id: 123,
};
const user4 = {
    user: {
        name: "Alex",
        age: 22,
        skills: ["1"],
    },
    role: {
        name: "Admin",
        id: 123,
    },
};
