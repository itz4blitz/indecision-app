var nameVar = 'Justin';
var nameVar = "Peter";
console.log('nameVar', nameVar)

let nameLet = 'Tyler';
nameLet = 'Andrew';
console.log('nameLet', nameLet)

const nameConst = "Brandon";
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Justin Scroggins';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);