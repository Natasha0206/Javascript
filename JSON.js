// JSON - JAVASCRIPT OBJECT NOTATION
const users = '{"name": "NATASHA", "age": 24, "gender": "male"}'
console.log(users["0"])
//  JSON.parse
// JSON.stringify

const user = JSON.parse(users)
console.log(user["gender"]);
