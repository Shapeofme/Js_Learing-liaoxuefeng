//输出函数
"use strict";
//对于多个变量的输出
function ptr(...rest) {
    rest.forEach((ele) => console.log(ele));
}

//针对名称空间的遍历输出
function ptr2(obj) {
    if (obj === null) throw new Error("不可为null");
    if (typeof obj === "undefined") throw new Error("不可为undefined");
    if (Array.isArray(obj)) throw new Error("不可为Array");
    if (typeof obj === "function") throw new Error("不可为function");
    if (typeof obj === "number") throw new Error("不可为number");
    if (typeof obj === "boolean") throw new Error("不可为boolean");
    if (typeof obj === "string") throw new Error("不可为string");

    let list = [];
    for (let pro in obj) {
        if (obj.hasOwnProperty(pro)) {
            console.log(obj[pro]);
        }
    }
}