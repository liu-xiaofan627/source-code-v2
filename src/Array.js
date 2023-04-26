import { def } from "./utils.js"

const arrayPropertype = Array.prototype

export const arrayMethods = Object.create(arrayPropertype)

const methodsNeedChange = ['push', 'pop', 'unshift', 'shift', 'sort', 'splice', 'reverse']

methodsNeedChange.forEach(methodName => {
    // 备份原有方法
    const original = arrayPropertype[methodName]
    // 定义新方法
    def(arrayMethods, methodName, function () {
        // 获取ob属性
        const ob = this.__ob__

        // arguments为类数组，解构
        const args = [...arguments]

        let inserted = []

        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }

        // 判断是否有插入新项，将插入新项进行oberve
        if (inserted) {
            ob.observeArray(inserted)
        }
        // 恢复原有方法
        const result = original.apply(this, arguments)
        return result
    }, false)
})