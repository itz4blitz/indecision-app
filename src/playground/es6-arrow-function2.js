// arguments object - no longer bound with arrow functions

const add = (a, b) => 
{
    return a + b;
}


console.log(add(66, 1));

// this keyword - no longer bound

const user = {
    name: 'Andy Jones',
    cities: [
        'New York',
        'Berlin'
    ],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multipler = {
    numbers: [
        1, 2, 5, 7
    ],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multipler.multiply());