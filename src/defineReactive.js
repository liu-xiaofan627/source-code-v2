import { observe } from "./observe.js"

export default function defineReactive(obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key]
    }

    // 子元素进行observe
    let childOb = observe(val)

    Object.defineProperty(obj, key, {
        // 可配置
        configurable: true,
        // 可枚举
        enumerable: true,
        // getter
        get() {
            console.log(` ======= 访问obj的${key}属性 ======= `)
            return val
        },
        // setter
        set(newValue) {
            console.log(` ******** 设置obj的${key}属性 *******`)
            if (newValue === val) {
                return
            }
            val = newValuedd
            // 设置新值也要observe
            childOb = observe(newValue)
        }
    })
}