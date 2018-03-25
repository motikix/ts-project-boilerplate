import { add, sub, multi, div } from './calc'
import { Dog, Cat } from './Animal'

console.log(add(1, 10))
console.log(sub(100, 50))
console.log(multi(100, 100))
console.log(div(100, 5))
console.log(div(10, 0))

console.log(new Dog().bark())
console.log(new Cat().bark())
