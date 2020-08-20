var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('namevar', nameVar);


let nameLet =  'Jen';
// var nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Moon';

console.log('nameConst', nameConst);


// block scoping

const fullName = 'Harish Mani';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}
console.log(firstName);
