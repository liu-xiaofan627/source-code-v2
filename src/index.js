
import { observe } from './observe.js'

let obj = {
    a: {
        m: {
            n: ''
        }
    }
}

observe(obj)
console.log(obj)
