let marks = [50, 60, 70, 80]

if (marks.includes(50)){
    console.log('found element in array')
}else{
    console.log('could not find element')
}


if (marks.includes(60,2)){//1st param is element to search, 2nd param is index from where search begin
    console.log('found element')
}else{
    console.log('element not found')
}

let user1 = {name:'apple'},
user2 = {name:'mango'},
user3={name:'banana'}
let users = [user1,user2]

console.log(users.includes(user1, 0))
console.log(users.includes(user3))