//ARROW FUNCTIONS VIDEO NUM ONE//
 console.log('Hello World!');

// const square = function (x){
//     return x * x;
// };


//Writing arrow functions
// const squareArrow = (x) => {
//     return x * x;
// };
// const squareArrow = (x) => x * x;
// console.log(squareArrow(6) );

// const fullName = "Sydney Haggard";

// const nameSplit = (fullName) => {
//         return fullName.split(' ')[1];
// };

// console.log(nameSplit("Sydney Haggard"));

// const splitName = (fullName) => fullName.split(' ')[0];

//ARROW FUNCTIONS VIDEO NUM TWO//

//argument object - no longer bound with arrow functiuons
//same with the 'this' keyword

//es5 function
// const add = (a, b)=> {
//     return a + b;
// }

// console.log(add(3, 7));

// const user = {
//     name: 'Sydney',
//     cities: ['Indianapolis', 'Plainfield', 'Martinsville'],
//     printPlacesLived(){
//         const cityMessages = this.cities.map((city) => {
//             return this.name + " has lived in " + city;
//         });
        
//         return cityMessages;
//     }
// }

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 2,
    multiply () {
         const newArray = this.numbers.map((num) => {
            return num * this.multiplyBy;
         });
         return newArray;
    }
};

console.log(multiplier.multiply());