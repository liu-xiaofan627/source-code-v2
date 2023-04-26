
import { observe } from './observe.js'

let obj = {
    a: {
        m: {
            n: ''
        },
        n: []
    },
    b: [11, 333]
}

observe(obj)

obj.b.push('222')
obj.b.splice(0, 1, [32222])
obj.b[0].push(789798)

console.log(obj)
