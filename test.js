const _ = require('underscore');

var a = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 55, 6, 6,];
// var unique = a.filter((val, i, arr) => {
//   return arr.indexOf(val) === i
// });
let unique = [...new Set(a)]

let findIndex = _.findIndex(unique, { i: 4 })
console.log("🚀 ~ file: test.js ~ line 8 ~ findIndex", findIndex)

// console.log(unique);


var exemples = [
  {
    'name': 'd',
    'index': 3
  },
  {
    'name': 'c',
    'index': 2
  },
  {
    'name': 'a',
    'index': 0
  },
  {
    'name': 'b',
    'index': 1
  }
];

const list = exemples.sort((a, b) => a.index - b.index).map((exemple, index, array) => exemple.name)

console.log(list)