// 创建observe函数
import Observer from "./Observer.js"

export const observe = function (value) {
    // 不是对象，不做处理
    if (typeof value !== 'object') return
    // 定义ob
    let ob
    // __ob__存放Observer实例对象
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__
    } else {
        ob = new Observer(value)
    }
    return ob
}
