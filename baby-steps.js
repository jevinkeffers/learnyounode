// 'use strict'

// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i])
// }

// console.log(result)

/*Class walkthrough*/

let total = 0; /* Starting with numbers */

for (let i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total)