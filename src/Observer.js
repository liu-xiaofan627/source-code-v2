import defineReactive from "./defineReactive.js"
import { def } from "./utils,.js"

export default class Observer {
    constructor(value) {
        // 构造函数中this指向实例对象，实例添加__ob__属性
        def(value, '__ob__', this, false)
        this.walk(value)
    }


    // 遍历
    walk(value) {
        for (let key in value) {
            defineReactive(value, key)
        }
    }
} 