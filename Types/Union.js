"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else if (typeof id === "number") {
        console.log(id.toFixed(0));
    }
    else {
        console.log(id);
    }
}
logId(1);
logId("sdfsdf");
logId(false);
function logError(arr) {
    if (Array.isArray(arr)) {
        console.log(arr);
    }
    else {
        console.log(arr);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
