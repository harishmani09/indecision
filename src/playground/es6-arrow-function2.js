//argument object - no longer bound with arrow function

// const add =  (a, b) =>  {
//     console.log(arguments);
//     return a+b;
// }
// console.log(add(55,1,1001));

//this keyword - no longer bound

const user = {

    name: 'Harish',
    cities: ['Delhi', 'Mumbai', 'Jamshedpur'],
    printPlacesLived() {
        return this.cities.map( (city) => this.name + ' has lived in ' + city);
            

        // this.cities.forEach(  (city)  => {
        //     console.log(this.name + ' has lived in '  + city);
        // });
    }

};

console.log(user.printPlacesLived());


const multiplier = {

    numbers : [1,2,3,4,5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map( (num) => num*this.multiplyBy )
    }

};
console.log(multiplier.multiply());

