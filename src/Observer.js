import { arrayMethods } from "./Array.js"
import defineReactive from "./defineReactive.js"
import { observe } from "./observe.js"
import { def } from "./utils.js"


export default class Observer {
    constructor(value) {
        // 构造函数中this指向实例对象，实例添加__ob__属性
        def(value, '__ob__', this, false)

        // 判断value类型
        if (Array.isArray) {
            Object.setPrototypeOf(value, arrayMethods)
            // 遍历数组
            this.observeArray(value)
        }

        this.walk(value)
    }


    // 遍历
    walk(obj) {
        for (let key in obj) {
            defineReactive(obj, key)
        }
    }

    //
    observeArray(arr) {
        for (let i = 0, len = arr.length; i < len; i++) {
            observe(arr[i])
        }
    }
} 